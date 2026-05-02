const secondQ = [
    {
        id: 91,
        domain: 1,
        questionNumber: 91,
        questionText: "Which control category is primarily designed to discourage a potential attacker by making the effort seem less rewarding or more risky?",
        type: "multiple-choice",
        options: [
            { text: "Deterrent control", correct: true },
            { text: "Preventive control", correct: false },
            { text: "Detective control", correct: false },
            { text: "Compensating control", correct: false }
        ],
        explanation: "Deterrent controls aim to discourage attackers (like warning signs), while preventive controls actively block them.",
        correctAnswer: "Deterrent control"
    },
    {
        id: 93,
        domain: 1,
        questionNumber: 93,
        questionText: "When expanding the CIA triad into the CIANA pentagon, which two specific elements are integrated?",
        type: "multiple-choice",
        options: [
            { text: "Authentication and Non-repudiation", correct: true },
            { text: "Authorization and Accountability", correct: false },
            { text: "Accounting and Availability", correct: false },
            { text: "Auditability and Authentication", correct: false }
        ],
        explanation: "The CIANA pentagon adds Non-repudiation and Authentication to the core CIA principles.",
        correctAnswer: "Authentication and Non-repudiation"
    },
    {
        id: 107,
        domain: 2,
        questionNumber: 107,
        questionText: "An attacker successfully intercepts and takes over a high-level executive's email account to authorize fraudulent wire transfers. This is best described as:",
        type: "multiple-choice",
        options: [
            { text: "Business Email Compromise (BEC)", correct: true },
            { text: "Spear Phishing campaign", correct: false },
            { text: "Whaling and Vishing attack", correct: false },
            { text: "Adversary-in-the-Middle (AiTM)", correct: false }
        ],
        explanation: "BEC specifically refers to compromising internal accounts to conduct unauthorized financial transactions.",
        correctAnswer: "Business Email Compromise (BEC)"
    },
    {
        id: 113,
        domain: 2,
        questionNumber: 113,
        questionText: "What is the fundamental distinction between Piggybacking and Tailgating in physical security?",
        type: "multiple-choice",
        options: [
            { text: "Piggybacking involves authorized user consent; tailgating does not.", correct: true },
            { text: "Tailgating is a digital threat; piggybacking is strictly physical.", correct: false },
            { text: "Piggybacking requires a bypass tool; tailgating relies on speed.", correct: false },
            { text: "There is no technical difference; both are forms of social proof.", correct: false }
        ],
        explanation: "In piggybacking, the authorized person knows the other is following; in tailgating, they are unaware.",
        correctAnswer: "Piggybacking involves authorized user consent; tailgating does not."
    },
    {
        id: 121,
        domain: 2,
        questionNumber: 121,
        questionText: "An attacker captures an NTLM response from a network and uses it to authenticate to a remote resource without ever knowing the cleartext password. This is:",
        type: "multiple-choice",
        options: [
            { text: "Pass the Hash Attack", correct: true },
            { text: "Brute Force Attack", correct: false },
            { text: "Replay and Downgrade", correct: false },
            { text: "Birthday Collision", correct: false }
        ],
        explanation: "Pass the Hash uses the captured hash directly to bypass the need for a plaintext password.",
        correctAnswer: "Pass the Hash Attack"
    },
    {
        id: 133,
        domain: 3,
        questionNumber: 133,
        questionText: "To ensure non-repudiation when creating a digital signature, the sender must encrypt the message hash using which key?",
        type: "multiple-choice",
        options: [
            { text: "Sender's private key", correct: true },
            { text: "Sender's public key", correct: false },
            { text: "Receiver's public key", correct: false },
            { text: "Shared symmetric key", correct: false }
        ],
        explanation: "The sender's private key provides proof of origin since only they should possess it.",
        correctAnswer: "Sender's private key"
    },
    {
        id: 146,
        domain: 4,
        questionNumber: 146,
        questionText: "Which cryptographic attack focuses on finding two different plaintexts that result in the same hash output?",
        type: "multiple-choice",
        options: [
            { text: "Birthday attack", correct: true },
            { text: "Downgrade attack", correct: false },
            { text: "Dictionary attack", correct: false },
            { text: "Rainbow table attack", correct: false }
        ],
        explanation: "A Birthday attack exploits the probability of hash collisions.",
        correctAnswer: "Birthday attack"
    },
    {
        id: 151,
        domain: 4,
        questionNumber: 151,
        questionText: "A security system triggers an alert because a user authenticated from Santo Domingo and, 15 minutes later, from Tokyo. This indicator is known as:",
        type: "multiple-choice",
        options: [
            { text: "Impossible Travel", correct: true },
            { text: "Resource Exhaustion", correct: false },
            { text: "Out-of-cycle login", correct: false },
            { text: "Privilege Escalation", correct: false }
        ],
        explanation: "Impossible travel identifies logins from geographically distant locations in an unrealistic timeframe.",
        correctAnswer: "Impossible Travel"
    },
    {
        id: 176,
        domain: 5,
        questionNumber: 176,
        questionText: "Which metric defines the maximum age of files that must be recovered from backup storage for normal operations to resume after a disaster?",
        type: "multiple-choice",
        options: [
            { text: "Recovery Point Objective (RPO)", correct: true },
            { text: "Recovery Time Objective (RTO)", correct: false },
            { text: "Mean Time to Repair (MTTR)", correct: false },
            { text: "Work Recovery Time (WRT)", correct: false }
        ],
        explanation: "RPO focuses on data loss (time since last backup), while RTO focuses on downtime (time to restore).",
        correctAnswer: "Recovery Point Objective (RPO)"
    }
];