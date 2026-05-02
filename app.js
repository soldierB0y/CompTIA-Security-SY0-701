// CompTIA Security+ Exam Simulator
// Application Logic

class ExamSimulator {
    constructor() {
        this.mode = null; // 'practice' or 'timed'
        this.currentQuestionIndex = 0;
        this.shuffledQuestions = [...questions]; // shuffled order for each exam session
        this.totalQuestions = questions.length;
        this.timeRemaining = 90 * 60; // 90 minutes in seconds
        this.timerInterval = null;
        this.answers = new Map(); // Map of question id to selected answer(s)
        this.reviewedQuestions = new Set();
        this.domainScores = {
            1: { correct: 0, total: 0 },
            2: { correct: 0, total: 0 },
            3: { correct: 0, total: 0 },
            4: { correct: 0, total: 0 },
            5: { correct: 0, total: 0 }
        };
        this.isExamActive = false;
    }

    // =====================
    // INITIALIZATION
    // =====================

    startExam(mode) {
        this.mode = mode;
        this.isExamActive = true;
        this.currentQuestionIndex = 0;
        this.answers.clear();
        this.reviewedQuestions.clear();
        this.resetDomainScores();

        // Shuffle question order for this exam session (Fisher-Yates)
        this.shuffledQuestions = [...questions];
        for (let i = this.shuffledQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.shuffledQuestions[i], this.shuffledQuestions[j]] =
                [this.shuffledQuestions[j], this.shuffledQuestions[i]];
        }

        // Hide start screen, show exam screen
        document.getElementById('startScreen').classList.remove('active');
        document.getElementById('examScreen').classList.add('active');

        if (mode === 'timed') {
            this.startTimer();
        }

        this.displayQuestion();
        this.updateReviewPanel();
    }

    resetDomainScores() {
        for (let domain = 1; domain <= 5; domain++) {
            this.domainScores[domain] = { correct: 0, total: 0 };
        }
    }

    // =====================
    // TIMER MANAGEMENT
    // =====================

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 0) {
                this.endExamEarly();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const timeString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        const timerDisplay = document.getElementById('timerDisplay');
        timerDisplay.textContent = timeString;

        const timerElement = timerDisplay.parentElement;
        timerElement.classList.remove('warning', 'danger');

        if (this.timeRemaining <= 300 && this.timeRemaining > 60) {
            timerElement.classList.add('warning');
        } else if (this.timeRemaining <= 60) {
            timerElement.classList.add('danger');
        }
    }

    // =====================
    // QUESTION DISPLAY
    // =====================

    displayQuestion() {
        if (this.currentQuestionIndex < 0 || this.currentQuestionIndex >= this.totalQuestions) {
            return;
        }

        const question = this.shuffledQuestions[this.currentQuestionIndex];

        // Update question info
        const qNumText = currentLanguage === 'es' ? 'Pregunta' : 'Question';
        const ofText = currentLanguage === 'es' ? 'de' : 'of';
        document.getElementById('questionNumber').textContent = 
            `${qNumText} ${this.currentQuestionIndex + 1} ${ofText} ${this.totalQuestions}`;
            
        const textToDisplay = (currentLanguage === 'es' && question.questionText_es) ? question.questionText_es : question.questionText;
        document.getElementById('questionText').textContent = textToDisplay;
        
        let typeText = '';
        if (question.type === 'multiple-choice') {
            typeText = currentLanguage === 'es' ? 'Opción Múltiple' : 'Multiple Choice';
        } else {
            typeText = currentLanguage === 'es' ? 'Selección Múltiple' : 'Multi-Select';
        }
        document.getElementById('questionType').textContent = typeText;

        // Display options
        this.displayOptions(question);

        // Restore previously selected answer if any
        this.restoreSelectedAnswer(question);

        // Update mark for review checkbox
        document.getElementById('markReview').checked = this.reviewedQuestions.has(question.id);

        // Update navigation buttons
        this.updateNavigationButtons();
    }

    displayOptions(question) {
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';

        // Shuffle options so the correct answer isn't always in the same position.
        // We track original indices so answer storage remains consistent.
        const shuffledOptions = question.options
            .map((option, index) => ({ option, originalIndex: index }))
            .sort(() => Math.random() - 0.5);

        shuffledOptions.forEach(({ option, originalIndex }) => {
            const optionElement = document.createElement('label');
            optionElement.className = 'option';

            const inputType = question.type === 'multiple-choice' ? 'radio' : 'checkbox';
            const inputName = question.type === 'multiple-choice' ? `question_${question.id}` : `question_${question.id}_${originalIndex}`;

            const input = document.createElement('input');
            input.type = inputType;
            input.name = inputName;
            input.value = originalIndex;  // always store/compare by original index
            input.dataset.correct = option.correct;

            const textSpan = document.createElement('span');
            textSpan.className = 'option-text';
            const optionTextToDisplay = (currentLanguage === 'es' && option.text_es) ? option.text_es : option.text;
            textSpan.textContent = optionTextToDisplay;

            input.addEventListener('change', () => this.handleOptionChange(question, originalIndex, input.type));

            optionElement.appendChild(input);
            optionElement.appendChild(textSpan);
            optionsContainer.appendChild(optionElement);
        });
    }

    restoreSelectedAnswer(question) {
        if (!this.answers.has(question.id)) {
            return;
        }

        const savedAnswer = this.answers.get(question.id);
        if (question.type === 'multiple-choice') {
            const radio = document.querySelector(`input[name="question_${question.id}"][value="${savedAnswer}"]`);
            if (radio) radio.checked = true;
        } else {
            const savedAnswers = Array.isArray(savedAnswer) ? savedAnswer : [savedAnswer];
            savedAnswers.forEach(answerIndex => {
                const checkbox = document.querySelector(`input[name="question_${question.id}_${answerIndex}"]`);
                if (checkbox) checkbox.checked = true;
            });
        }
    }

    // =====================
    // ANSWER HANDLING
    // =====================

    handleOptionChange(question, optionIndex, inputType) {
        if (inputType === 'radio') {
            this.answers.set(question.id, optionIndex);
        } else {
            // For multi-select, collect all checked options
            const checkboxes = document.querySelectorAll(`input[name^="question_${question.id}_"]`);
            const selectedIndices = [];
            checkboxes.forEach(cb => {
                if (cb.checked) {
                    selectedIndices.push(parseInt(cb.value));
                }
            });
            this.answers.set(question.id, selectedIndices);
        }

        // Mark option as selected visually
        const options = document.querySelectorAll('.option');
        options.forEach(opt => opt.classList.remove('selected'));
        document.querySelectorAll('.option input:checked').forEach(checked => {
            checked.parentElement.classList.add('selected');
        });

        this.updateReviewPanel();
    }

    // =====================
    // QUESTION NAVIGATION
    // =====================

    nextQuestion() {
        if (this.currentQuestionIndex < this.totalQuestions - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    goToQuestion(questionIndex) {
        this.currentQuestionIndex = questionIndex;
        this.displayQuestion();
    }

    updateNavigationButtons() {
        document.getElementById('prevBtn').disabled = this.currentQuestionIndex === 0;
        document.getElementById('nextBtn').disabled = this.currentQuestionIndex === this.totalQuestions - 1;
        document.getElementById('prevBtn').textContent = currentLanguage === 'es' ? '← Anterior' : '← Previous';
        document.getElementById('nextBtn').textContent = currentLanguage === 'es' ? 'Siguiente →' : 'Next →';
    }

    // =====================
    // REVIEW MANAGEMENT
    // =====================

    toggleMarkReview() {
        const checkbox = document.getElementById('markReview');
        const questionId = this.shuffledQuestions[this.currentQuestionIndex].id;

        if (checkbox.checked) {
            this.reviewedQuestions.add(questionId);
        } else {
            this.reviewedQuestions.delete(questionId);
        }

        this.updateReviewPanel();
    }

    updateReviewPanel() {
        const reviewContent = document.getElementById('reviewContent');
        reviewContent.innerHTML = '';

        let answeredCount = 0;
        let reviewedCount = 0;

        for (let i = 0; i < this.totalQuestions; i++) {
            const question = this.shuffledQuestions[i];
            const isAnswered = this.answers.has(question.id);
            const isReviewed = this.reviewedQuestions.has(question.id);
            const isCurrent = i === this.currentQuestionIndex;

            if (isAnswered) answeredCount++;
            if (isReviewed) reviewedCount++;

            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            
            if (isCurrent) reviewItem.classList.add('current');
            if (isAnswered) reviewItem.classList.add('answered');
            if (isReviewed) reviewItem.classList.add('marked');
            if (!isAnswered) reviewItem.classList.add('unanswered');

            reviewItem.innerHTML = `
                <span class="review-item-number">Q${question.questionNumber}</span>
                ${isReviewed ? '⭐ ' : ''}${isAnswered ? '✓' : '○'}
            `;

            reviewItem.addEventListener('click', () => this.goToQuestion(i));
            reviewContent.appendChild(reviewItem);
        }

        // Update stats
        document.getElementById('answeredCount').textContent = answeredCount;
        document.getElementById('reviewedCount').textContent = reviewedCount;
    }

    // =====================
    // EXAM COMPLETION
    // =====================

    endExamEarly() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        this.isExamActive = false;
        this.calculateResults();
        this.displayResults();
    }

    // =====================
    // SCORING & RESULTS
    // =====================

    calculateResults() {
        let correctAnswers = 0;
        let totalQuestions = 0;

        this.shuffledQuestions.forEach(question => {
            totalQuestions++;
            const domain = question.domain;
            this.domainScores[domain].total++;

            if (this.isAnswerCorrect(question)) {
                correctAnswers++;
                this.domainScores[domain].correct++;
            }
        });

        // Convert to 0-900 scale
        // Formula: (correct_answers / total_questions) * 900
        // But the exam uses 750 as passing score out of 900
        const rawScore = (correctAnswers / totalQuestions) * 900;
        const finalScore = Math.round(rawScore);

        return {
            correct: correctAnswers,
            total: totalQuestions,
            score: finalScore,
            passed: finalScore >= 750,
            percentage: ((correctAnswers / totalQuestions) * 100).toFixed(1)
        };
    }

    isAnswerCorrect(question) {
        if (!this.answers.has(question.id)) {
            return false;
        }

        const userAnswer = this.answers.get(question.id);

        if (question.type === 'multiple-choice') {
            const selectedOption = question.options[userAnswer];
            return selectedOption && selectedOption.correct;
        } else {
            // Multi-select: all selected options must be correct, no missed correct options
            const selectedIndices = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
            const correctIndices = question.options
                .map((opt, idx) => opt.correct ? idx : -1)
                .filter(idx => idx !== -1);

            if (selectedIndices.length !== correctIndices.length) {
                return false;
            }

            // Every selected index must point to a correct option
            return selectedIndices.every(idx => question.options[idx].correct);
        }
    }

    displayResults() {
        const results = this.calculateResults();

        // Update score display
        document.getElementById('finalScore').textContent = results.score;
        const passStatus = document.getElementById('passStatus');
        passStatus.textContent = results.passed ? 'PASSED ✓' : 'FAILED ✗';
        passStatus.className = 'pass-status ' + (results.passed ? 'pass' : 'fail');

        // Update summary stats
        document.getElementById('correctAnswers').textContent = results.correct;
        document.getElementById('totalQuestions').textContent = results.total;
        document.getElementById('scorePercentage').textContent = results.percentage;
        document.getElementById('passingScore').textContent = '750';

        // Update domain performance
        this.displayDomainPerformance();

        // Display detailed review
        this.displayDetailedReview();

        // Switch screens
        document.getElementById('examScreen').classList.remove('active');
        document.getElementById('resultsScreen').classList.add('active');
    }

    displayDomainPerformance() {
        const domainNames = [
            '',
            'General Security Concepts',
            'Threats, Vulnerabilities & Mitigations',
            'Security Architecture',
            'Security Operations',
            'Security Program Management & Oversight'
        ];

        const domainResults = document.getElementById('domainResults');
        domainResults.innerHTML = '';

        for (let domain = 1; domain <= 5; domain++) {
            const stats = this.domainScores[domain];
            if (stats.total === 0) continue;

            const percentage = ((stats.correct / stats.total) * 100).toFixed(1);
            const domainDiv = document.createElement('div');
            domainDiv.className = 'domain-result';
            domainDiv.innerHTML = `
                <div class="domain-name">${domainNames[domain]}</div>
                <div class="domain-score">${stats.correct}/${stats.total} correct (${percentage}%)</div>
            `;
            domainResults.appendChild(domainDiv);
        }
    }

    displayDetailedReview() {
        const reviewContainer = document.getElementById('detailedReviewContent');
        reviewContainer.innerHTML = '';

        this.shuffledQuestions.forEach(question => {
            const isCorrect = this.isAnswerCorrect(question);
            const userAnswered = this.answers.has(question.id);
            const userAnswer = userAnswered ? this.answers.get(question.id) : null;

            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review-question ' + (isCorrect ? 'correct' : 'incorrect');

            let detailsHTML = `
                <h4>${currentLanguage === 'es' ? 'Pregunta' : 'Question'} ${question.questionNumber}: ${(currentLanguage === 'es' && question.questionText_es) ? question.questionText_es : question.questionText}</h4>
            `;

            if (userAnswered) {
                let userAnswerText = '';
                if (question.type === 'multiple-choice') {
                    userAnswerText = (currentLanguage === 'es' && question.options[userAnswer].text_es) ? question.options[userAnswer].text_es : question.options[userAnswer].text;
                } else {
                    const indices = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
                    userAnswerText = indices.map(idx => (currentLanguage === 'es' && question.options[idx].text_es) ? question.options[idx].text_es : question.options[idx].text).join(', ');
                }
                detailsHTML += `<div class="review-answer"><strong>${currentLanguage === 'es' ? 'Tu Respuesta:' : 'Your Answer:'}</strong> ${userAnswerText}</div>`;
            } else {
                detailsHTML += `<div class="review-answer"><strong>${currentLanguage === 'es' ? 'Tu Respuesta:' : 'Your Answer:'}</strong> ${currentLanguage === 'es' ? 'No respondida' : 'Not answered'}</div>`;
            }

            let correctAnswerText = '';
            const correctOptions = question.options.filter(opt => opt.correct);
            correctAnswerText = correctOptions.map(opt => (currentLanguage === 'es' && opt.text_es) ? opt.text_es : opt.text).join(', ');
            detailsHTML += `<div class="review-answer"><strong>${currentLanguage === 'es' ? 'Respuesta Correcta:' : 'Correct Answer:'}</strong> ${correctAnswerText}</div>`;
            
            const expText = (currentLanguage === 'es' && question.explanation_es) ? question.explanation_es : question.explanation;
            detailsHTML += `<div class="review-answer"><strong>${currentLanguage === 'es' ? 'Explicación:' : 'Explanation:'}</strong> ${expText}</div>`;

            reviewDiv.innerHTML = detailsHTML;
            reviewContainer.appendChild(reviewDiv);
        });
    }

    // =====================
    // SCREEN MANAGEMENT
    // =====================

    returnToStart() {
        // Clear timer if still running
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        // Reset exam state
        this.isExamActive = false;
        this.mode = null;
        this.currentQuestionIndex = 0;
        this.answers.clear();
        this.reviewedQuestions.clear();
        this.resetDomainScores();

        // Switch screens
        document.getElementById('examScreen').classList.remove('active');
        document.getElementById('resultsScreen').classList.remove('active');
        document.getElementById('startScreen').classList.add('active');
    }

    retryExam() {
        const mode = this.mode;
        this.returnToStart();
        this.startExam(mode);
    }
}

// =====================
// INITIALIZATION
// =====================

let examSimulator;
let currentLanguage = 'en';

document.addEventListener('DOMContentLoaded', () => {
    examSimulator = new ExamSimulator();
    setupEventListeners();
    updateUILanguage();
});

function setupEventListeners() {
    // Mark for review checkbox
    const markReviewCheckbox = document.getElementById('markReview');
    if (markReviewCheckbox) {
        markReviewCheckbox.addEventListener('change', () => {
            examSimulator.toggleMarkReview();
        });
    }
}

// =====================
// UTILITY FUNCTIONS
// =====================

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// =====================
// GLOBAL FUNCTIONS (for HTML onclick handlers)
// =====================

function startExam(mode) {
    examSimulator.startExam(mode);
}

function nextQuestion() {
    examSimulator.nextQuestion();
}

function previousQuestion() {
    examSimulator.previousQuestion();
}

function toggleReviewPanel() {
    const reviewPanel = document.getElementById('reviewPanel');
    reviewPanel.classList.toggle('hidden');
}

function endExamEarly() {
    if (confirm('Are you sure you want to end the exam? This action cannot be undone.')) {
        examSimulator.endExamEarly();
    }
}

function returnToStart() {
    examSimulator.returnToStart();
}

function retryExam() {
    examSimulator.retryExam();
}

function setLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('langBtnEn').className = lang === 'en' ? 'btn btn-small btn-primary' : 'btn btn-small btn-secondary';
    document.getElementById('langBtnEs').className = lang === 'es' ? 'btn btn-small btn-primary' : 'btn btn-small btn-secondary';
    
    updateUILanguage();
    
    if (examSimulator && examSimulator.isExamActive) {
        examSimulator.displayQuestion();
        examSimulator.updateReviewPanel();
    }
}

function updateUILanguage() {
    const isEs = currentLanguage === 'es';
    
    // Start Screen
    document.getElementById('mainTitle').textContent = isEs ? 'CompTIA Security+ (SY0-701)' : 'CompTIA Security+ (SY0-701)';
    document.getElementById('subTitle').textContent = isEs ? 'Simulador de Examen' : 'Exam Simulator';
    document.getElementById('examInfoTitle').textContent = isEs ? '📋 Información del Examen' : '📋 Exam Information';
    document.getElementById('infoTime').innerHTML = isEs ? '<strong>Tiempo:</strong> 90 minutos' : '<strong>Time:</strong> 90 minutes';
    document.getElementById('infoQuestions').innerHTML = isEs ? '<strong>Preguntas:</strong> Hasta 90' : '<strong>Questions:</strong> Up to 90';
    document.getElementById('infoPassing').innerHTML = isEs ? '<strong>Puntuación mínima:</strong> 750 de 900' : '<strong>Passing score:</strong> 750 of 900';
    document.getElementById('infoTypes').innerHTML = isEs ? '<strong>Tipos de preguntas:</strong> Opción múltiple, Multi-select, Performance-based' : '<strong>Question types:</strong> Multiple choice, Multi-select, Performance-based';
    document.getElementById('domainsTitle').textContent = isEs ? '📚 Dominios (Ponderación)' : '📚 Domains (Weighting)';
    document.getElementById('instructionsTitle').textContent = isEs ? '⚠️ Instrucciones Importantes' : '⚠️ Important Instructions';
    document.getElementById('instr1').textContent = isEs ? 'Lee cada pregunta cuidadosamente' : 'Read each question carefully';
    document.getElementById('instr2').textContent = isEs ? 'Puedes marcar preguntas para revisión posterior' : 'You can mark questions for later review';
    document.getElementById('instr3').textContent = isEs ? 'Administra bien tu tiempo de 90 minutos' : 'Manage your 90 minutes effectively';
    document.getElementById('instr4').textContent = isEs ? 'Selecciona la mejor respuesta para tu situación' : 'Select the best answer for the scenario';
    document.getElementById('instr5').textContent = isEs ? 'No hay penalización por respuestas incorrectas' : 'There is no penalty for incorrect answers';
    document.getElementById('selectModeTitle').textContent = isEs ? 'Selecciona el Modo de Examen' : 'Select Exam Mode';
    document.getElementById('practiceModeBtn').textContent = isEs ? '📝 Modo Práctica' : '📝 Practice Mode';
    document.getElementById('timedModeBtn').textContent = isEs ? '⏱️ Modo Cronometrado (90 min)' : '⏱️ Timed Mode (90 min)';
    
    // Exam Screen
    document.getElementById('examLangToggle').textContent = isEs ? '🇬🇧 Switch to English' : '🇪🇸 Cambiar a Español';
    document.getElementById('timeRemainingText').textContent = isEs ? 'Tiempo restante' : 'Time remaining';
    document.getElementById('reviewBtnText').textContent = isEs ? '📋 Revisar' : '📋 Review';
    document.getElementById('endExamBtnText').textContent = isEs ? '🛑 Terminar' : '🛑 End Exam';
    
    // Mark for review
    const markLabel = document.querySelector('.checkbox-label');
    if (markLabel) {
        markLabel.childNodes[2].textContent = isEs ? ' Marcar para revisión' : ' Mark for review';
    }
    
    // Results Screen
    document.getElementById('resultsTitle').textContent = isEs ? 'Resultados del Examen' : 'Exam Results';
    document.getElementById('statsTitle').textContent = isEs ? '📊 Estadísticas' : '📊 Statistics';
    document.getElementById('correctLabel').textContent = isEs ? 'Respuestas Correctas:' : 'Correct Answers:';
    document.getElementById('percentageLabel').textContent = isEs ? 'Porcentaje:' : 'Percentage:';
    document.getElementById('passingScoreLabel').textContent = isEs ? 'Puntuación para Pasar:' : 'Passing Score:';
    document.getElementById('domainPerformanceTitle').textContent = isEs ? '🎯 Desempeño por Dominio' : '🎯 Domain Performance';
    document.getElementById('detailedReviewTitle').textContent = isEs ? 'Revisión Detallada de Preguntas' : 'Detailed Question Review';
    document.getElementById('returnHomeBtn').textContent = isEs ? '🏠 Volver al Inicio' : '🏠 Return to Home';
    document.getElementById('retryBtn').textContent = isEs ? '🔄 Intentar Nuevamente' : '🔄 Try Again';
}
