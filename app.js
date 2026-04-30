// CompTIA Security+ Exam Simulator
// Application Logic

class ExamSimulator {
    constructor() {
        this.mode = null; // 'practice' or 'timed'
        this.currentQuestionIndex = 0;
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

        const question = questions[this.currentQuestionIndex];

        // Update question info
        document.getElementById('questionNumber').textContent = 
            `Question ${this.currentQuestionIndex + 1} of ${this.totalQuestions}`;
        document.getElementById('questionText').textContent = question.questionText;
        document.getElementById('questionType').textContent = 
            question.type === 'multiple-choice' ? 'Multiple Choice' : 'Multi-Select';

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

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('label');
            optionElement.className = 'option';

            const inputType = question.type === 'multiple-choice' ? 'radio' : 'checkbox';
            const inputName = question.type === 'multiple-choice' ? `question_${question.id}` : `question_${question.id}_${index}`;

            const input = document.createElement('input');
            input.type = inputType;
            input.name = inputName;
            input.value = index;
            input.dataset.correct = option.correct;

            const textSpan = document.createElement('span');
            textSpan.className = 'option-text';
            textSpan.textContent = option.text;

            input.addEventListener('change', () => this.handleOptionChange(question, index, input.type));

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
    }

    // =====================
    // REVIEW MANAGEMENT
    // =====================

    toggleMarkReview() {
        const checkbox = document.getElementById('markReview');
        const questionId = questions[this.currentQuestionIndex].id;

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
            const question = questions[i];
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

        questions.forEach(question => {
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

            return selectedIndices.every(idx => {
                return selectedIndices.includes(idx) && question.options[idx].correct;
            });
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

        questions.forEach(question => {
            const isCorrect = this.isAnswerCorrect(question);
            const userAnswered = this.answers.has(question.id);
            const userAnswer = userAnswered ? this.answers.get(question.id) : null;

            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review-question ' + (isCorrect ? 'correct' : 'incorrect');

            let detailsHTML = `
                <h4>Question ${question.questionNumber}: ${question.questionText}</h4>
            `;

            if (userAnswered) {
                let userAnswerText = '';
                if (question.type === 'multiple-choice') {
                    userAnswerText = question.options[userAnswer].text;
                } else {
                    const indices = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
                    userAnswerText = indices.map(idx => question.options[idx].text).join(', ');
                }
                detailsHTML += `<div class="review-answer"><strong>Your Answer:</strong> ${userAnswerText}</div>`;
            } else {
                detailsHTML += `<div class="review-answer"><strong>Your Answer:</strong> Not answered</div>`;
            }

            let correctAnswerText = '';
            const correctOptions = question.options.filter(opt => opt.correct);
            correctAnswerText = correctOptions.map(opt => opt.text).join(', ');
            detailsHTML += `<div class="review-answer"><strong>Correct Answer:</strong> ${correctAnswerText}</div>`;
            detailsHTML += `<div class="review-answer"><strong>Explanation:</strong> ${question.explanation}</div>`;

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

document.addEventListener('DOMContentLoaded', () => {
    examSimulator = new ExamSimulator();
    setupEventListeners();
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
