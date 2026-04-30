// CompTIA Security+ (SY0-701) Question Bank
// Domain Distribution:
// Domain 1: General Security Concepts - 12% (~11 questions)
// Domain 2: Threats, Vulnerabilities & Mitigations - 22% (~20 questions)
// Domain 3: Security Architecture - 18% (~16 questions)
// Domain 4: Security Operations - 28% (~25 questions)
// Domain 5: Security Program Management & Oversight - 20% (~18 questions)

const firstQ= [
    // ============================================
    // DOMAIN 1: General Security Concepts (12%)
    // ============================================
    {
        id: 1,
        domain: 1,
        questionNumber: 1,
        questionText: "Which of the following best describes the principle of least privilege?",
        type: "multiple-choice",
        options: [
            { text: "Granting users the minimum level of access needed to perform their job functions", correct: true },
            { text: "Restricting all users from accessing sensitive systems", correct: false },
            { text: "Limiting the number of attempts a user can make to access a resource", correct: false },
            { text: "Requiring multiple forms of identification before accessing resources", correct: false }
        ],
        explanation: "The principle of least privilege means granting users only the minimum permissions they need to complete their assigned tasks, reducing the attack surface and potential damage from compromised accounts.",
        correctAnswer: "Granting users the minimum level of access needed to perform their job functions"
    },
    {
        id: 2,
        domain: 1,
        questionNumber: 2,
        questionText: "Which of the following represents the three fundamental components of the CIA triad?",
        type: "multiple-choice",
        options: [
            { text: "Confidentiality, Integrity, Availability", correct: true },
            { text: "Centralization, Integration, Authorization", correct: false },
            { text: "Compliance, Identification, Audit", correct: false },
            { text: "Classification, Inspection, Approval", correct: false }
        ],
        explanation: "The CIA triad is the foundational model in information security: Confidentiality (protecting data from unauthorized access), Integrity (ensuring data hasn't been altered), and Availability (ensuring systems are accessible when needed).",
        correctAnswer: "Confidentiality, Integrity, Availability"
    },
    {
        id: 3,
        domain: 1,
        questionNumber: 3,
        questionText: "What is the primary purpose of defense in depth?",
        type: "multiple-choice",
        options: [
            { text: "Implementing multiple layers of security controls to protect assets", correct: true },
            { text: "Ensuring data is encrypted at rest and in transit", correct: false },
            { text: "Creating a perimeter security boundary around the network", correct: false },
            { text: "Monitoring all user activities in real-time", correct: false }
        ],
        explanation: "Defense in depth uses multiple overlapping security controls so that if one fails, others can still protect the system. This layered approach includes network security, application security, data security, and operational security.",
        correctAnswer: "Implementing multiple layers of security controls to protect assets"
    },
    {
        id: 4,
        domain: 1,
        questionNumber: 4,
        questionText: "Which type of security control is a firewall?",
        type: "multiple-choice",
        options: [
            { text: "Detective control", correct: false },
            { text: "Preventive control", correct: true },
            { text: "Corrective control", correct: false },
            { text: "Compensating control", correct: false }
        ],
        explanation: "A firewall is a preventive control because it prevents unauthorized network traffic from reaching systems before any access occurs. Preventive controls stop security events before they happen.",
        correctAnswer: "Preventive control"
    },
    {
        id: 5,
        domain: 1,
        questionNumber: 5,
        questionText: "Which of the following best describes zero trust architecture?",
        type: "multiple-choice",
        options: [
            { text: "Never trusting any user or device, even if previously verified, and continuously verifying access requests", correct: true },
            { text: "Eliminating all firewalls and relying on encryption", correct: false },
            { text: "Trusting all internal network traffic by default", correct: false },
            { text: "Using passwordless authentication for all users", correct: false }
        ],
        explanation: "Zero trust architecture assumes no default trust for any user or device. It continuously verifies and validates every access request, regardless of location, using strategies like microsegmentation, continuous monitoring, and verification.",
        correctAnswer: "Never trusting any user or device, even if previously verified, and continuously verifying access requests"
    },
    {
        id: 6,
        domain: 1,
        questionNumber: 6,
        questionText: "What is the primary goal of risk management in cybersecurity?",
        type: "multiple-choice",
        options: [
            { text: "To eliminate all possible security risks", correct: false },
            { text: "To identify, assess, and mitigate risks to an acceptable level", correct: true },
            { text: "To ensure compliance with industry regulations", correct: false },
            { text: "To maintain security budgets within allocated resources", correct: false }
        ],
        explanation: "Risk management aims to identify what risks exist, analyze their potential impact, and implement controls to reduce them to acceptable levels. It's impossible to eliminate all risks, so the goal is informed risk reduction.",
        correctAnswer: "To identify, assess, and mitigate risks to an acceptable level"
    },
    {
        id: 7,
        domain: 1,
        questionNumber: 7,
        questionText: "Which access control model grants permissions based on the user's identity and role in an organization?",
        type: "multiple-choice",
        options: [
            { text: "Access Control List (ACL)", correct: false },
            { text: "Role-Based Access Control (RBAC)", correct: true },
            { text: "Attribute-Based Access Control (ABAC)", correct: false },
            { text: "Discretionary Access Control (DAC)", correct: false }
        ],
        explanation: "Role-Based Access Control (RBAC) assigns permissions based on a user's role within the organization. For example, all managers might have the same access rights regardless of their specific identity.",
        correctAnswer: "Role-Based Access Control (RBAC)"
    },
    {
        id: 8,
        domain: 1,
        questionNumber: 8,
        questionText: "What does the AAA security model stand for?",
        type: "multiple-choice",
        options: [
            { text: "Authentication, Authorization, Auditing", correct: false },
            { text: "Authentication, Authorization, Accounting", correct: true },
            { text: "Access, Authorization, Audit", correct: false },
            { text: "Authentication, Access, Accounting", correct: false }
        ],
        explanation: "AAA stands for Authentication (verifying user identity), Authorization (determining what they can access), and Accounting (logging and tracking user actions and resource usage).",
        correctAnswer: "Authentication, Authorization, Accounting"
    },
    {
        id: 9,
        domain: 1,
        questionNumber: 9,
        questionText: "Which of the following is NOT a type of authentication factor?",
        type: "multiple-choice",
        options: [
            { text: "Something you know (password)", correct: false },
            { text: "Something you have (security token)", correct: false },
            { text: "Something you are (biometric)", correct: false },
            { text: "Something you buy (purchased license)", correct: true }
        ],
        explanation: "The three main authentication factors are: something you know (password/PIN), something you have (physical device), and something you are (biometrics). A purchased license doesn't authenticate a user.",
        correctAnswer: "Something you buy (purchased license)"
    },
    {
        id: 10,
        domain: 1,
        questionNumber: 10,
        questionText: "What is the primary difference between encryption and hashing?",
        type: "multiple-choice",
        options: [
            { text: "Encryption is reversible, hashing is one-way", correct: true },
            { text: "Hashing is faster than encryption", correct: false },
            { text: "Encryption uses symmetric keys, hashing uses asymmetric keys", correct: false },
            { text: "Hashing is used for authentication, encryption is used for access control", correct: false }
        ],
        explanation: "Encryption is a reversible process that transforms data into ciphertext that can be decrypted with a key. Hashing is a one-way function that creates a fixed-length digest and cannot be reversed to recover original data.",
        correctAnswer: "Encryption is reversible, hashing is one-way"
    },
    {
        id: 11,
        domain: 1,
        questionNumber: 11,
        questionText: "Which security principle ensures that a user cannot deny performing an action or making a transaction?",
        type: "multiple-choice",
        options: [
            { text: "Confidentiality", correct: false },
            { text: "Integrity", correct: false },
            { text: "Non-repudiation", correct: true },
            { text: "Availability", correct: false }
        ],
        explanation: "Non-repudiation ensures that a user cannot deny that they performed a specific action. This is commonly achieved through digital signatures and audit trails.",
        correctAnswer: "Non-repudiation"
    },

    // ============================================
    // DOMAIN 2: Threats, Vulnerabilities & Mitigations (22%)
    // ============================================
    {
        id: 12,
        domain: 2,
        questionNumber: 12,
        questionText: "Which of the following best describes a phishing attack?",
        type: "multiple-choice",
        options: [
            { text: "An attempt to trick users into revealing sensitive information by impersonating a trustworthy entity", correct: true },
            { text: "A direct attack on network infrastructure using specialized tools", correct: false },
            { text: "An exploitation of software vulnerabilities to gain unauthorized access", correct: false },
            { text: "A denial of service attack using botnets", correct: false }
        ],
        explanation: "Phishing is a social engineering attack where attackers impersonate legitimate organizations (often via email) to trick users into revealing credentials or downloading malware.",
        correctAnswer: "An attempt to trick users into revealing sensitive information by impersonating a trustworthy entity"
    },
    {
        id: 13,
        domain: 2,
        questionNumber: 13,
        questionText: "What is the difference between a vulnerability and an exploit?",
        type: "multiple-choice",
        options: [
            { text: "A vulnerability is a weakness, an exploit is a method to take advantage of it", correct: true },
            { text: "A vulnerability is detected by antivirus, an exploit requires a firewall", correct: false },
            { text: "An exploit is a vulnerability that has been patched", correct: false },
            { text: "A vulnerability affects only users, an exploit affects systems", correct: false }
        ],
        explanation: "A vulnerability is a weakness or flaw in a system. An exploit is a tool or technique that an attacker uses to take advantage of that vulnerability.",
        correctAnswer: "A vulnerability is a weakness, an exploit is a method to take advantage of it"
    },
    {
        id: 14,
        domain: 2,
        questionNumber: 14,
        questionText: "Which type of malware is designed to give an attacker remote control of a compromised system?",
        type: "multiple-choice",
        options: [
            { text: "Remote Access Trojan (RAT)", correct: true },
            { text: "Ransomware", correct: false },
            { text: "Logic bomb", correct: false },
            { text: "Worm", correct: false }
        ],
        explanation: "A Remote Access Trojan (RAT) is malware that provides an attacker with remote control capabilities over a compromised computer, allowing them to perform various malicious activities.",
        correctAnswer: "Remote Access Trojan (RAT)"
    },
    {
        id: 15,
        domain: 2,
        questionNumber: 15,
        questionText: "What is a zero-day vulnerability?",
        type: "multiple-choice",
        options: [
            { text: "A previously unknown vulnerability that has no available patch", correct: true },
            { text: "A vulnerability that affects only legacy systems", correct: false },
            { text: "A vulnerability that was discovered 24 hours ago", correct: false },
            { text: "A vulnerability with a CVSS score of zero", correct: false }
        ],
        explanation: "A zero-day vulnerability is an unknown security flaw that vendors and attackers discover simultaneously, leaving no time for patches. These are highly valued by attackers.",
        correctAnswer: "A previously unknown vulnerability that has no available patch"
    },
    {
        id: 16,
        domain: 2,
        questionNumber: 16,
        questionText: "Which attack floods a server with traffic to make it unavailable to legitimate users?",
        type: "multiple-choice",
        options: [
            { text: "SQL Injection", correct: false },
            { text: "Denial of Service (DoS)", correct: true },
            { text: "Cross-Site Scripting (XSS)", correct: false },
            { text: "Buffer overflow", correct: false }
        ],
        explanation: "A Denial of Service (DoS) attack overwhelms a server with traffic or requests, making it unable to respond to legitimate users and rendering the service unavailable.",
        correctAnswer: "Denial of Service (DoS)"
    },
    {
        id: 17,
        domain: 2,
        questionNumber: 17,
        questionText: "What is social engineering?",
        type: "multiple-choice",
        options: [
            { text: "Manipulating people into divulging confidential information or bypassing security", correct: true },
            { text: "Creating fake social media accounts to gather intelligence", correct: false },
            { text: "Using algorithms to predict social trends", correct: false },
            { text: "Analyzing social networks to find vulnerabilities", correct: false }
        ],
        explanation: "Social engineering is the practice of manipulating people through psychological tactics to disclose confidential information or bypass security controls, often avoiding technical defenses.",
        correctAnswer: "Manipulating people into divulging confidential information or bypassing security"
    },
    {
        id: 18,
        domain: 2,
        questionNumber: 18,
        questionText: "Which of the following is a protection against SQL injection attacks?",
        type: "multiple-choice",
        options: [
            { text: "Using parameterized queries or prepared statements", correct: true },
            { text: "Implementing a stronger firewall", correct: false },
            { text: "Increasing database access permissions", correct: false },
            { text: "Disabling database logging", correct: false }
        ],
        explanation: "SQL injection attacks are prevented by using parameterized queries (prepared statements) which separate code from data, ensuring user input cannot be interpreted as code.",
        correctAnswer: "Using parameterized queries or prepared statements"
    },
    {
        id: 19,
        domain: 2,
        questionNumber: 19,
        questionText: "What is the primary goal of a Man-in-the-Middle (MitM) attack?",
        type: "multiple-choice",
        options: [
            { text: "To intercept and potentially modify communications between two parties", correct: true },
            { text: "To consume all bandwidth on a network", correct: false },
            { text: "To steal physical hardware from data centers", correct: false },
            { text: "To compromise only the server, not the client", correct: false }
        ],
        explanation: "A Man-in-the-Middle attack places an attacker between two communicating parties, allowing them to intercept, read, and potentially modify messages before relaying them.",
        correctAnswer: "To intercept and potentially modify communications between two parties"
    },
    {
        id: 20,
        domain: 2,
        questionNumber: 20,
        questionText: "Which type of attack uses DNS to redirect traffic to a malicious website?",
        type: "multiple-choice",
        options: [
            { text: "DNS poisoning or DNS spoofing", correct: true },
            { text: "Packet sniffing", correct: false },
            { text: "IP spoofing", correct: false },
            { text: "ARP spoofing", correct: false }
        ],
        explanation: "DNS poisoning (DNS spoofing) corrupts DNS cache or responses to redirect users to malicious websites by associating a domain name with a false IP address.",
        correctAnswer: "DNS poisoning or DNS spoofing"
    },
    {
        id: 21,
        domain: 2,
        questionNumber: 21,
        questionText: "What is ransomware?",
        type: "multiple-choice",
        options: [
            { text: "Malware that encrypts data and demands payment for decryption", correct: true },
            { text: "A virus that randomly deletes files", correct: false },
            { text: "Software that monitors user activity", correct: false },
            { text: "A program that steals banking credentials", correct: false }
        ],
        explanation: "Ransomware is malicious software that encrypts a victim's files or locks their system, then demands payment (ransom) in exchange for providing the decryption key.",
        correctAnswer: "Malware that encrypts data and demands payment for decryption"
    },
    {
        id: 22,
        domain: 2,
        questionNumber: 22,
        questionText: "Which of the following is NOT a common mitigation for password attacks?",
        type: "multiple-choice",
        options: [
            { text: "Enforcing complex password requirements", correct: false },
            { text: "Implementing account lockouts after failed attempts", correct: false },
            { text: "Using single-factor authentication exclusively", correct: true },
            { text: "Implementing multi-factor authentication", correct: false }
        ],
        explanation: "Single-factor authentication (only passwords) increases vulnerability to password attacks. Proper mitigations include complex passwords, account lockouts, and multi-factor authentication.",
        correctAnswer: "Using single-factor authentication exclusively"
    },
    {
        id: 23,
        domain: 2,
        questionNumber: 23,
        questionText: "What is a rootkit?",
        type: "multiple-choice",
        options: [
            { text: "Malware that hides itself and provides administrator-level access to an attacker", correct: true },
            { text: "A vulnerability in the root partition of a system", correct: false },
            { text: "A tool for managing system administrator accounts", correct: false },
            { text: "Software that removes root privileges from users", correct: false }
        ],
        explanation: "A rootkit is malware designed to hide its presence and provide an attacker with persistent administrator-level access to a system, often evading detection.",
        correctAnswer: "Malware that hides itself and provides administrator-level access to an attacker"
    },
    {
        id: 24,
        domain: 2,
        questionNumber: 24,
        questionText: "Which Common Weakness Enumeration (CWE) describes improper input validation?",
        type: "multiple-choice",
        options: [
            { text: "CWE-89 (SQL Injection)", correct: false },
            { text: "CWE-20 (Improper Input Validation)", correct: true },
            { text: "CWE-79 (Cross-site Scripting)", correct: false },
            { text: "CWE-434 (Unrestricted Upload)", correct: false }
        ],
        explanation: "CWE-20 refers to improper input validation, which is a root cause of many application vulnerabilities including SQL injection, XSS, and command injection.",
        correctAnswer: "CWE-20 (Improper Input Validation)"
    },
    {
        id: 25,
        domain: 2,
        questionNumber: 25,
        questionText: "What is a brute force attack?",
        type: "multiple-choice",
        options: [
            { text: "Trying many password combinations to gain access", correct: true },
            { text: "Physical destruction of security systems", correct: false },
            { text: "Exploiting a known vulnerability in code", correct: false },
            { text: "Intercepting network packets", correct: false }
        ],
        explanation: "A brute force attack systematically tries many combinations (passwords, encryption keys) until finding the correct one, relying on raw computational power rather than finesse.",
        correctAnswer: "Trying many password combinations to gain access"
    },
    {
        id: 26,
        domain: 2,
        questionNumber: 26,
        questionText: "Which attack technique involves crafting specially formatted input to exploit a programming error?",
        type: "multiple-choice",
        options: [
            { text: "Buffer overflow", correct: true },
            { text: "Cross-site scripting", correct: false },
            { text: "Directory traversal", correct: false },
            { text: "Command injection", correct: false }
        ],
        explanation: "A buffer overflow attack exploits programming errors where input data is not properly validated, allowing an attacker to write data beyond allocated memory boundaries.",
        correctAnswer: "Buffer overflow"
    },
    {
        id: 27,
        domain: 2,
        questionNumber: 27,
        questionText: "What is a DDoS attack?",
        type: "multiple-choice",
        options: [
            { text: "A coordinated attack from multiple sources overwhelming a target", correct: true },
            { text: "An attack that directly modifies database records", correct: false },
            { text: "A single attacker using one computer", correct: false },
            { text: "An attack that only affects users, not servers", correct: false }
        ],
        explanation: "A Distributed Denial of Service (DDoS) attack uses multiple compromised computers or devices to overwhelm a target with traffic, making services unavailable.",
        correctAnswer: "A coordinated attack from multiple sources overwhelming a target"
    },
    {
        id: 28,
        domain: 2,
        questionNumber: 28,
        questionText: "Which protocol is vulnerable to KRACK attacks?",
        type: "multiple-choice",
        options: [
            { text: "WPA2", correct: true },
            { text: "TLS 1.3", correct: false },
            { text: "SSH", correct: false },
            { text: "HTTPS", correct: false }
        ],
        explanation: "KRACK (Key Reinstallation Attack) is a vulnerability in the WPA2 wireless protocol that allows attackers to decrypt traffic and potentially execute other attacks.",
        correctAnswer: "WPA2"
    },
    {
        id: 29,
        domain: 2,
        questionNumber: 29,
        questionText: "What is privilege escalation?",
        type: "multiple-choice",
        options: [
            { text: "Gaining higher-level permissions than originally granted", correct: true },
            { text: "Increasing the number of user accounts", correct: false },
            { text: "Upgrading security software", correct: false },
            { text: "Promoting a junior administrator to senior", correct: false }
        ],
        explanation: "Privilege escalation is when an attacker or compromised process gains higher permissions than originally intended, often moving from user-level to admin-level access.",
        correctAnswer: "Gaining higher-level permissions than originally granted"
    },
    {
        id: 30,
        domain: 2,
        questionNumber: 30,
        questionText: "Which of the following represents a proper network segmentation strategy?",
        type: "multiple-choice",
        options: [
            { text: "Placing databases on a different network segment from web servers", correct: true },
            { text: "Using the same VLAN for all users and systems", correct: false },
            { text: "Removing all firewalls between segments", correct: false },
            { text: "Connecting all IoT devices to the main network", correct: false }
        ],
        explanation: "Network segmentation divides a network into separate segments, limiting lateral movement. Databases should be segregated from web servers to contain breaches.",
        correctAnswer: "Placing databases on a different network segment from web servers"
    },
    {
        id: 31,
        domain: 2,
        questionNumber: 31,
        questionText: "What is the purpose of patch management?",
        type: "multiple-choice",
        options: [
            { text: "To apply security updates to systems regularly to fix vulnerabilities", correct: true },
            { text: "To upgrade hardware components", correct: false },
            { text: "To completely reformat systems", correct: false },
            { text: "To remove all third-party software", correct: false }
        ],
        explanation: "Patch management involves regularly applying security patches and updates to systems to fix known vulnerabilities before attackers can exploit them.",
        correctAnswer: "To apply security updates to systems regularly to fix vulnerabilities"
    },

    // ============================================
    // DOMAIN 3: Security Architecture (18%)
    // ============================================
    {
        id: 32,
        domain: 3,
        questionNumber: 32,
        questionText: "Which model describes permission inheritance based on data classification levels?",
        type: "multiple-choice",
        options: [
            { text: "Bell-LaPadula Model", correct: true },
            { text: "Biba Model", correct: false },
            { text: "Clark-Wilson Model", correct: false },
            { text: "Chinese Wall Model", correct: false }
        ],
        explanation: "The Bell-LaPadula Model enforces confidentiality using security levels and clearances. Its rules include 'no read up' and 'no write down' to prevent unauthorized information flow.",
        correctAnswer: "Bell-LaPadula Model"
    },
    {
        id: 33,
        domain: 3,
        questionNumber: 33,
        questionText: "Which of the following is a characteristic of a demilitarized zone (DMZ)?",
        type: "multiple-choice",
        options: [
            { text: "A network segment that separates internal networks from untrusted external networks", correct: true },
            { text: "A wireless network with no encryption", correct: false },
            { text: "A security policy that prevents all external connections", correct: false },
            { text: "A area of the network where security controls don't apply", correct: false }
        ],
        explanation: "A DMZ is a perimeter network segment that adds an extra layer of security between internal networks and untrusted external networks like the internet.",
        correctAnswer: "A network segment that separates internal networks from untrusted external networks"
    },
    {
        id: 34,
        domain: 3,
        questionNumber: 34,
        questionText: "What is the primary purpose of network access control (NAC)?",
        type: "multiple-choice",
        options: [
            { text: "To enforce security policies on devices before they connect to the network", correct: true },
            { text: "To prevent all wireless devices from connecting", correct: false },
            { text: "To encrypt all network traffic", correct: false },
            { text: "To monitor bandwidth usage only", correct: false }
        ],
        explanation: "Network Access Control (NAC) ensures that devices meet security requirements (patches, antivirus, encryption) before being allowed to connect to the network.",
        correctAnswer: "To enforce security policies on devices before they connect to the network"
    },
    {
        id: 35,
        domain: 3,
        questionNumber: 35,
        questionText: "Which encryption standard is considered secure for long-term data protection?",
        type: "multiple-choice",
        options: [
            { text: "AES-256", correct: true },
            { text: "WEP", correct: false },
            { text: "MD5", correct: false },
            { text: "DES", correct: false }
        ],
        explanation: "AES-256 (Advanced Encryption Standard with 256-bit key) is a strong, widely-trusted encryption standard recommended for protecting sensitive data long-term.",
        correctAnswer: "AES-256"
    },
    {
        id: 36,
        domain: 3,
        questionNumber: 36,
        questionText: "What is the primary advantage of using a Virtual Private Network (VPN)?",
        type: "multiple-choice",
        options: [
            { text: "Encrypting traffic and creating a secure tunnel over untrusted networks", correct: true },
            { text: "Increasing network bandwidth automatically", correct: false },
            { text: "Removing the need for firewalls", correct: false },
            { text: "Allowing any device to connect without authentication", correct: false }
        ],
        explanation: "A VPN creates an encrypted tunnel for communications over untrusted networks like the internet, protecting data from eavesdropping and sniffing.",
        correctAnswer: "Encrypting traffic and creating a secure tunnel over untrusted networks"
    },
    {
        id: 37,
        domain: 3,
        questionNumber: 37,
        questionText: "Which of the following best describes asymmetric encryption?",
        type: "multiple-choice",
        options: [
            { text: "Uses a pair of keys (public and private) where one encrypts and the other decrypts", correct: true },
            { text: "Uses the same key for both encryption and decryption", correct: false },
            { text: "Is faster than symmetric encryption", correct: false },
            { text: "Cannot be used for digital signatures", correct: false }
        ],
        explanation: "Asymmetric encryption uses a public-private key pair. Data encrypted with the public key can only be decrypted with the private key, enabling secure key distribution and digital signatures.",
        correctAnswer: "Uses a pair of keys (public and private) where one encrypts and the other decrypts"
    },
    {
        id: 38,
        domain: 3,
        questionNumber: 38,
        questionText: "What is the purpose of a Certificate Authority (CA)?",
        type: "multiple-choice",
        options: [
            { text: "To issue and sign digital certificates verifying the identity of entities", correct: true },
            { text: "To encrypt all network traffic automatically", correct: false },
            { text: "To manage user passwords", correct: false },
            { text: "To generate firewall rules", correct: false }
        ],
        explanation: "A Certificate Authority (CA) is a trusted third party that issues, validates, and signs digital certificates to verify the identity of websites, individuals, or organizations.",
        correctAnswer: "To issue and sign digital certificates verifying the identity of entities"
    },
    {
        id: 39,
        domain: 3,
        questionNumber: 39,
        questionText: "Which of the following is a limitation of symmetric encryption?",
        type: "multiple-choice",
        options: [
            { text: "The challenge of securely distributing shared keys to multiple parties", correct: true },
            { text: "It is slower than asymmetric encryption", correct: false },
            { text: "It cannot encrypt large files", correct: false },
            { text: "It requires a Certificate Authority", correct: false }
        ],
        explanation: "Symmetric encryption's main limitation is key distribution: the same key must be shared between parties securely, which becomes impractical with many users.",
        correctAnswer: "The challenge of securely distributing shared keys to multiple parties"
    },
    {
        id: 40,
        domain: 3,
        questionNumber: 40,
        questionText: "What is the primary purpose of an Intrusion Prevention System (IPS)?",
        type: "multiple-choice",
        options: [
            { text: "To detect and block malicious traffic in real-time", correct: true },
            { text: "To encrypt all network packets", correct: false },
            { text: "To monitor user activities only", correct: false },
            { text: "To manage access control lists", correct: false }
        ],
        explanation: "An Intrusion Prevention System (IPS) monitors network traffic in real-time to detect and automatically block malicious traffic and attacks.",
        correctAnswer: "To detect and block malicious traffic in real-time"
    },
    {
        id: 41,
        domain: 3,
        questionNumber: 41,
        questionText: "Which protocol is used to establish secure web connections?",
        type: "multiple-choice",
        options: [
            { text: "HTTPS (with TLS/SSL)", correct: true },
            { text: "HTTP", correct: false },
            { text: "FTP", correct: false },
            { text: "Telnet", correct: false }
        ],
        explanation: "HTTPS uses TLS/SSL protocols to encrypt web traffic between clients and servers, protecting data from eavesdropping and man-in-the-middle attacks.",
        correctAnswer: "HTTPS (with TLS/SSL)"
    },
    {
        id: 42,
        domain: 3,
        questionNumber: 42,
        questionText: "What is the primary purpose of a Web Application Firewall (WAF)?",
        type: "multiple-choice",
        options: [
            { text: "To protect web applications from common attacks like SQL injection and XSS", correct: true },
            { text: "To replace traditional firewalls completely", correct: false },
            { text: "To monitor only user login attempts", correct: false },
            { text: "To encrypt web server hard drives", correct: false }
        ],
        explanation: "A Web Application Firewall (WAF) specifically protects web applications by filtering and monitoring HTTP/HTTPS traffic for common web application attacks.",
        correctAnswer: "To protect web applications from common attacks like SQL injection and XSS"
    },
    {
        id: 43,
        domain: 3,
        questionNumber: 43,
        questionText: "Which of the following describes cloud infrastructure security?",
        type: "multiple-choice",
        options: [
            { text: "Shared responsibility between the cloud provider and customer for implementing security controls", correct: true },
            { text: "The cloud provider is responsible for all security", correct: false },
            { text: "The customer has no security responsibilities", correct: false },
            { text: "Cloud infrastructure cannot be secured", correct: false }
        ],
        explanation: "Cloud security is a shared responsibility model where the provider secures infrastructure while customers secure their data, applications, and access controls.",
        correctAnswer: "Shared responsibility between the cloud provider and customer for implementing security controls"
    },
    {
        id: 44,
        domain: 3,
        questionNumber: 44,
        questionText: "What is the primary function of a load balancer in a security architecture?",
        type: "multiple-choice",
        options: [
            { text: "To distribute traffic across multiple servers to improve availability and performance", correct: true },
            { text: "To encrypt all data on servers", correct: false },
            { text: "To prevent all external connections", correct: false },
            { text: "To manage user passwords", correct: false }
        ],
        explanation: "A load balancer distributes incoming traffic across multiple servers, improving availability and preventing any single server from being overwhelmed by attacks or legitimate traffic.",
        correctAnswer: "To distribute traffic across multiple servers to improve availability and performance"
    },
    {
        id: 45,
        domain: 3,
        questionNumber: 45,
        questionText: "Which of the following is an example of host-based security?",
        type: "multiple-choice",
        options: [
            { text: "Host-based intrusion detection system (HIDS)", correct: true },
            { text: "Network firewall", correct: false },
            { text: "Router", correct: false },
            { text: "Network switch", correct: false }
        ],
        explanation: "Host-based security tools run on individual computers to protect them locally. A HIDS monitors a specific host for suspicious activities and intrusions.",
        correctAnswer: "Host-based intrusion detection system (HIDS)"
    },
    {
        id: 46,
        domain: 3,
        questionNumber: 46,
        questionText: "What is the purpose of data loss prevention (DLP)?",
        type: "multiple-choice",
        options: [
            { text: "To monitor and prevent unauthorized transmission of sensitive data", correct: true },
            { text: "To delete all company data automatically", correct: false },
            { text: "To prevent users from accessing files", correct: false },
            { text: "To backup data to external drives only", correct: false }
        ],
        explanation: "Data Loss Prevention (DLP) tools monitor and control data movement to prevent sensitive information from being transmitted outside the organization without authorization.",
        correctAnswer: "To monitor and prevent unauthorized transmission of sensitive data"
    },
    {
        id: 47,
        domain: 3,
        questionNumber: 47,
        questionText: "Which control is an example of a compensating control?",
        type: "multiple-choice",
        options: [
            { text: "Additional security measures implemented when primary controls cannot be fully implemented", correct: true },
            { text: "A firewall protecting against all attacks", correct: false },
            { text: "A primary encryption mechanism", correct: false },
            { text: "A standard access control list", correct: false }
        ],
        explanation: "Compensating controls are alternative security measures implemented when primary controls are not feasible, providing equivalent security through different means.",
        correctAnswer: "Additional security measures implemented when primary controls cannot be fully implemented"
    },

    // ============================================
    // DOMAIN 4: Security Operations (28%)
    // ============================================
    {
        id: 48,
        domain: 4,
        questionNumber: 48,
        questionText: "What is the primary function of a Security Information and Event Management (SIEM) system?",
        type: "multiple-choice",
        options: [
            { text: "To collect, aggregate, and analyze security logs from multiple systems", correct: true },
            { text: "To prevent all security incidents from occurring", correct: false },
            { text: "To manually review every network packet", correct: false },
            { text: "To backup all security data", correct: false }
        ],
        explanation: "A SIEM system collects and correlates security event data from multiple sources to detect patterns, anomalies, and potential security incidents.",
        correctAnswer: "To collect, aggregate, and analyze security logs from multiple systems"
    },
    {
        id: 49,
        domain: 4,
        questionNumber: 49,
        questionText: "What is the purpose of security awareness training?",
        type: "multiple-choice",
        options: [
            { text: "To educate employees about security threats and best practices to reduce human error", correct: true },
            { text: "To test employee compliance with firing those who fail", correct: false },
            { text: "To prevent all security incidents", correct: false },
            { text: "To install security software on personal devices", correct: false }
        ],
        explanation: "Security awareness training educates employees about common threats like phishing and password security to reduce incidents caused by human error.",
        correctAnswer: "To educate employees about security threats and best practices to reduce human error"
    },
    {
        id: 50,
        domain: 4,
        questionNumber: 50,
        questionText: "What is the main objective of a security audit?",
        type: "multiple-choice",
        options: [
            { text: "To independently assess whether security controls are effective and compliant", correct: true },
            { text: "To punish employees for security violations", correct: false },
            { text: "To prevent all security breaches", correct: false },
            { text: "To replace all security systems", correct: false }
        ],
        explanation: "A security audit is an independent assessment that evaluates whether security controls are properly implemented, effective, and in compliance with policies.",
        correctAnswer: "To independently assess whether security controls are effective and compliant"
    },
    {
        id: 51,
        domain: 4,
        questionNumber: 51,
        questionText: "What is the difference between vulnerability scanning and penetration testing?",
        type: "multiple-choice",
        options: [
            { text: "Vulnerability scanning identifies weaknesses; penetration testing actively exploits them", correct: true },
            { text: "Penetration testing is illegal while scanning is not", correct: false },
            { text: "Scanning takes months while testing takes hours", correct: false },
            { text: "They are the same thing with different names", correct: false }
        ],
        explanation: "Vulnerability scanning automatically identifies potential weaknesses, while penetration testing simulates an attacker by actively exploiting vulnerabilities to test defenses.",
        correctAnswer: "Vulnerability scanning identifies weaknesses; penetration testing actively exploits them"
    },
    {
        id: 52,
        domain: 4,
        questionNumber: 52,
        questionText: "What is the proper sequence of incident response?",
        type: "multiple-choice",
        options: [
            { text: "Preparation, Detection and Analysis, Containment, Eradication, Recovery, Post-Incident", correct: true },
            { text: "Detection, Prevention, Analysis, Recovery", correct: false },
            { text: "Response, Recovery, Analysis, Prevention", correct: false },
            { text: "Analysis, Containment, Detection, Recovery", correct: false }
        ],
        explanation: "The NIST incident response lifecycle includes: Preparation (having tools/plans ready), Detection (identifying incidents), Containment (stopping spread), Eradication (removing threat), Recovery (restoring systems), and Post-Incident activities.",
        correctAnswer: "Preparation, Detection and Analysis, Containment, Eradication, Recovery, Post-Incident"
    },
    {
        id: 53,
        domain: 4,
        questionNumber: 53,
        questionText: "What is a Security Operations Center (SOC)?",
        type: "multiple-choice",
        options: [
            { text: "A centralized facility where security events and incidents are monitored and managed", correct: true },
            { text: "A type of firewall configuration", correct: false },
            { text: "A software program for encryption", correct: false },
            { text: "A network routing protocol", correct: false }
        ],
        explanation: "A Security Operations Center (SOC) is a centralized team and facility that monitors, detects, and responds to security threats 24/7.",
        correctAnswer: "A centralized facility where security events and incidents are monitored and managed"
    },
    {
        id: 54,
        domain: 4,
        questionNumber: 54,
        questionText: "What is the purpose of log management and retention?",
        type: "multiple-choice",
        options: [
            { text: "To maintain records for forensics investigations, compliance, and troubleshooting", correct: true },
            { text: "To delete all logs after one day", correct: false },
            { text: "To encrypt only recent logs", correct: false },
            { text: "To prevent users from accessing systems", correct: false }
        ],
        explanation: "Log management and retention preserve audit trails for security investigations, compliance audits, troubleshooting, and legal requirements.",
        correctAnswer: "To maintain records for forensics investigations, compliance, and troubleshooting"
    },
    {
        id: 55,
        domain: 4,
        questionNumber: 55,
        questionText: "What is a Key Performance Indicator (KPI) in security operations?",
        type: "multiple-choice",
        options: [
            { text: "A measurable value that indicates how effectively security objectives are being met", correct: true },
            { text: "A type of encryption key", correct: false },
            { text: "A firewall configuration setting", correct: false },
            { text: "A network performance metric only", correct: false }
        ],
        explanation: "Security KPIs are quantifiable measurements that track security effectiveness, such as mean time to detect incidents or percentage of systems patched.",
        correctAnswer: "A measurable value that indicates how effectively security objectives are being met"
    },
    {
        id: 56,
        domain: 4,
        questionNumber: 56,
        questionText: "What is the primary purpose of a backup and disaster recovery plan?",
        type: "multiple-choice",
        options: [
            { text: "To ensure business continuity by rapidly restoring data and systems after failures or disasters", correct: true },
            { text: "To prevent all types of attacks", correct: false },
            { text: "To reduce personnel costs", correct: false },
            { text: "To monitor network bandwidth", correct: false }
        ],
        explanation: "Backup and disaster recovery plans ensure organizations can restore operations quickly after data loss, system failures, or major incidents, minimizing downtime.",
        correctAnswer: "To ensure business continuity by rapidly restoring data and systems after failures or disasters"
    },
    {
        id: 57,
        domain: 4,
        questionNumber: 57,
        questionText: "What is the goal of change management in security?",
        type: "multiple-choice",
        options: [
            { text: "To ensure changes to systems are reviewed, approved, and don't introduce security risks", correct: true },
            { text: "To prevent all changes to systems", correct: false },
            { text: "To make changes without testing", correct: false },
            { text: "To bypass security reviews for updates", correct: false }
        ],
        explanation: "Change management ensures that all system modifications go through review processes to prevent security risks and maintain system stability.",
        correctAnswer: "To ensure changes to systems are reviewed, approved, and don't introduce security risks"
    },
    {
        id: 58,
        domain: 4,
        questionNumber: 58,
        questionText: "What is a metric used to measure Mean Time to Detect (MTTD)?",
        type: "multiple-choice",
        options: [
            { text: "The average time between when a security incident occurs and when it is detected", correct: true },
            { text: "The time required to purchase security software", correct: false },
            { text: "The duration of a security audit", correct: false },
            { text: "The time to send a security email", correct: false }
        ],
        explanation: "Mean Time to Detect (MTTD) measures how quickly security events are identified after they occur. Lower MTTD is better for minimizing damage.",
        correctAnswer: "The average time between when a security incident occurs and when it is detected"
    },
    {
        id: 59,
        domain: 4,
        questionNumber: 59,
        questionText: "What is the primary goal of a business continuity plan (BCP)?",
        type: "multiple-choice",
        options: [
            { text: "To ensure critical business functions continue during and after disruptions", correct: true },
            { text: "To prevent all possible disruptions", correct: false },
            { text: "To reduce employee salaries", correct: false },
            { text: "To eliminate the need for firewalls", correct: false }
        ],
        explanation: "A Business Continuity Plan ensures that essential business functions can continue or be rapidly restored during major disruptions like natural disasters or cyberattacks.",
        correctAnswer: "To ensure critical business functions continue during and after disruptions"
    },
    {
        id: 60,
        domain: 4,
        questionNumber: 60,
        questionText: "What is the purpose of threat hunting?",
        type: "multiple-choice",
        options: [
            { text: "To proactively search for indicators of compromise and advanced threats not detected by alerts", correct: true },
            { text: "To physically search for cyber criminals", correct: false },
            { text: "To prevent all attacks", correct: false },
            { text: "To hunt and capture computer viruses", correct: false }
        ],
        explanation: "Threat hunting involves proactively searching through networks for signs of compromise or advanced threats that automated tools may have missed.",
        correctAnswer: "To proactively search for indicators of compromise and advanced threats not detected by alerts"
    },
    {
        id: 61,
        domain: 4,
        questionNumber: 61,
        questionText: "What is a Security Baseline?",
        type: "multiple-choice",
        options: [
            { text: "An established minimum standard of security for systems, devices, or networks", correct: true },
            { text: "A type of encryption algorithm", correct: false },
            { text: "A firewall rule set", correct: false },
            { text: "A user authentication method", correct: false }
        ],
        explanation: "A security baseline defines the minimum security standards required for systems, providing a configuration to build from and maintain consistently.",
        correctAnswer: "An established minimum standard of security for systems, devices, or networks"
    },
    {
        id: 62,
        domain: 4,
        questionNumber: 62,
        questionText: "What is the purpose of endpoint detection and response (EDR)?",
        type: "multiple-choice",
        options: [
            { text: "To detect and respond to threats on individual devices (endpoints)", correct: true },
            { text: "To prevent network traffic completely", correct: false },
            { text: "To delete all user files automatically", correct: false },
            { text: "To manage only network switches", correct: false }
        ],
        explanation: "EDR tools monitor and protect individual devices (laptops, servers, etc.) by detecting suspicious activities and enabling rapid response.",
        correctAnswer: "To detect and respond to threats on individual devices (endpoints)"
    },
    {
        id: 63,
        domain: 4,
        questionNumber: 63,
        questionText: "What is the purpose of vulnerability management?",
        type: "multiple-choice",
        options: [
            { text: "To identify, assess, prioritize, and remediate vulnerabilities across systems", correct: true },
            { text: "To exploit vulnerabilities deliberately", correct: false },
            { text: "To hide all vulnerabilities from users", correct: false },
            { text: "To prevent any security updates", correct: false }
        ],
        explanation: "Vulnerability management is a continuous process of discovering vulnerabilities, assessing their risk, prioritizing them, and implementing fixes.",
        correctAnswer: "To identify, assess, prioritize, and remediate vulnerabilities across systems"
    },
    {
        id: 64,
        domain: 4,
        questionNumber: 64,
        questionText: "What is the purpose of security event correlation?",
        type: "multiple-choice",
        options: [
            { text: "To link related security events to identify attack patterns and coordinated threats", correct: true },
            { text: "To prevent all security events", correct: false },
            { text: "To delete event logs", correct: false },
            { text: "To send emails to all users", correct: false }
        ],
        explanation: "Event correlation analyzes multiple security events together to identify patterns, relationships, and coordinated attacks that might be missed individually.",
        correctAnswer: "To link related security events to identify attack patterns and coordinated threats"
    },
    {
        id: 65,
        domain: 4,
        questionNumber: 65,
        questionText: "What is the purpose of a tabletop exercise?",
        type: "multiple-choice",
        options: [
            { text: "To simulate security incidents and test incident response procedures", correct: true },
            { text: "To train employees on basic computer skills", correct: false },
            { text: "To test network bandwidth", correct: false },
            { text: "To review only financial records", correct: false }
        ],
        explanation: "A tabletop exercise is a simulated incident scenario where teams discuss how they would respond, helping identify gaps in incident response procedures.",
        correctAnswer: "To simulate security incidents and test incident response procedures"
    },
    {
        id: 66,
        domain: 4,
        questionNumber: 66,
        questionText: "What is the purpose of network monitoring and packet analysis?",
        type: "multiple-choice",
        options: [
            { text: "To observe network traffic patterns and identify suspicious or malicious activity", correct: true },
            { text: "To block all network traffic", correct: false },
            { text: "To delete network logs automatically", correct: false },
            { text: "To increase bandwidth costs", correct: false }
        ],
        explanation: "Network monitoring and packet analysis examine network traffic to detect anomalies, attacks, policy violations, and unauthorized activities.",
        correctAnswer: "To observe network traffic patterns and identify suspicious or malicious activity"
    },
    {
        id: 67,
        domain: 4,
        questionNumber: 67,
        questionText: "What is the purpose of digital forensics?",
        type: "multiple-choice",
        options: [
            { text: "To collect, preserve, analyze, and present evidence from digital systems for investigations", correct: true },
            { text: "To delete evidence of security incidents", correct: false },
            { text: "To prevent all crimes", correct: false },
            { text: "To monitor only financial transactions", correct: false }
        ],
        explanation: "Digital forensics involves collecting and analyzing evidence from digital devices in a controlled manner to support investigations and legal proceedings.",
        correctAnswer: "To collect, preserve, analyze, and present evidence from digital systems for investigations"
    },
    {
        id: 68,
        domain: 4,
        questionNumber: 68,
        questionText: "What is the primary consideration when collecting digital evidence?",
        type: "multiple-choice",
        options: [
            { text: "Maintaining the chain of custody to ensure evidence is admissible in legal proceedings", correct: true },
            { text: "Collecting evidence as quickly as possible", correct: false },
            { text: "Sharing evidence with the public immediately", correct: false },
            { text: "Modifying evidence to make it clearer", correct: false }
        ],
        explanation: "The chain of custody is critical for digital evidence to be admissible in court. It documents who handled the evidence and when.",
        correctAnswer: "Maintaining the chain of custody to ensure evidence is admissible in legal proceedings"
    },
    {
        id: 69,
        domain: 4,
        questionNumber: 69,
        questionText: "What is user behavior analytics (UBA)?",
        type: "multiple-choice",
        options: [
            { text: "Analyzing user activities to identify abnormal behavior that may indicate a security threat", correct: true },
            { text: "Monitoring only user login attempts", correct: false },
            { text: "Preventing users from using the internet", correct: false },
            { text: "Analyzing only administrator activities", correct: false }
        ],
        explanation: "User Behavior Analytics uses machine learning to establish normal user behavior patterns and detect deviations that could indicate compromised accounts or insider threats.",
        correctAnswer: "Analyzing user activities to identify abnormal behavior that may indicate a security threat"
    },
    {
        id: 70,
        domain: 4,
        questionNumber: 70,
        questionText: "What is the purpose of security testing?",
        type: "multiple-choice",
        options: [
            { text: "To evaluate the effectiveness of security controls and identify weaknesses", correct: true },
            { text: "To delete all security systems", correct: false },
            { text: "To prevent employees from working", correct: false },
            { text: "To test only encryption algorithms", correct: false }
        ],
        explanation: "Security testing evaluates whether security controls work as intended through methods like vulnerability scans and penetration tests.",
        correctAnswer: "To evaluate the effectiveness of security controls and identify weaknesses"
    },
    {
        id: 71,
        domain: 4,
        questionNumber: 71,
        questionText: "What is the purpose of an allowlist (whitelist)?",
        type: "multiple-choice",
        options: [
            { text: "To specify which applications, files, or users are approved and allowed to execute", correct: true },
            { text: "To prevent all software installations", correct: false },
            { text: "To list security violations", correct: false },
            { text: "To monitor network bandwidth usage", correct: false }
        ],
        explanation: "An allowlist (whitelist) specifies what is permitted to run, rather than what is blocked. Only approved applications/users are allowed access.",
        correctAnswer: "To specify which applications, files, or users are approved and allowed to execute"
    },
    {
        id: 72,
        domain: 4,
        questionNumber: 72,
        questionText: "What is the purpose of a blocklist (blacklist)?",
        type: "multiple-choice",
        options: [
            { text: "To identify and block known malicious content, IPs, or domains", correct: true },
            { text: "To prevent all internet access", correct: false },
            { text: "To list all employees", correct: false },
            { text: "To monitor user browsing history", correct: false }
        ],
        explanation: "A blocklist (blacklist) contains known malicious items (malware hashes, malicious IPs, phishing URLs) that are automatically blocked.",
        correctAnswer: "To identify and block known malicious content, IPs, or domains"
    },
    {
        id: 73,
        domain: 4,
        questionNumber: 73,
        questionText: "What is the primary purpose of a reverse proxy?",
        type: "multiple-choice",
        options: [
            { text: "To intercept incoming requests and forward them to backend servers while protecting server identity", correct: true },
            { text: "To increase network latency", correct: false },
            { text: "To prevent all web traffic", correct: false },
            { text: "To monitor only user downloads", correct: false }
        ],
        explanation: "A reverse proxy sits between clients and servers, forwarding requests while hiding the backend server's identity and providing load balancing and security.",
        correctAnswer: "To intercept incoming requests and forward them to backend servers while protecting server identity"
    },
    {
        id: 74,
        domain: 4,
        questionNumber: 74,
        questionText: "What is the purpose of deception technology (honeypots)?",
        type: "multiple-choice",
        options: [
            { text: "To create decoy systems that attract attackers to reveal their methods and tools", correct: true },
            { text: "To confuse all network users", correct: false },
            { text: "To prevent firewall testing", correct: false },
            { text: "To increase system performance", correct: false }
        ],
        explanation: "Honeypots are decoy systems designed to attract attackers, allowing security teams to study attack methods, collect intelligence, and detect intrusions.",
        correctAnswer: "To create decoy systems that attract attackers to reveal their methods and tools"
    },

    // ============================================
    // DOMAIN 5: Security Program Management & Oversight (20%)
    // ============================================
    {
        id: 75,
        domain: 5,
        questionNumber: 75,
        questionText: "What is the primary purpose of a security policy?",
        type: "multiple-choice",
        options: [
            { text: "To establish rules and expectations for protecting information and systems", correct: true },
            { text: "To eliminate all employee freedoms", correct: false },
            { text: "To prevent IT departments from working", correct: false },
            { text: "To monitor only executive activities", correct: false }
        ],
        explanation: "Security policies define what is expected, what is prohibited, and how to handle security matters throughout an organization.",
        correctAnswer: "To establish rules and expectations for protecting information and systems"
    },
    {
        id: 76,
        domain: 5,
        questionNumber: 76,
        questionText: "What is the purpose of a risk assessment?",
        type: "multiple-choice",
        options: [
            { text: "To identify threats, vulnerabilities, and their potential impact to determine overall risk", correct: true },
            { text: "To prevent all possible risks", correct: false },
            { text: "To calculate only financial costs", correct: false },
            { text: "To eliminate the need for security controls", correct: false }
        ],
        explanation: "A risk assessment identifies threats, vulnerabilities, and assets to evaluate potential consequences and prioritize risk mitigation efforts.",
        correctAnswer: "To identify threats, vulnerabilities, and their potential impact to determine overall risk"
    },
    {
        id: 77,
        domain: 5,
        questionNumber: 77,
        questionText: "What is the purpose of a data classification policy?",
        type: "multiple-choice",
        options: [
            { text: "To categorize data by sensitivity level to apply appropriate protection controls", correct: true },
            { text: "To prevent all data access", correct: false },
            { text: "To delete all classified data", correct: false },
            { text: "To hire only classified workers", correct: false }
        ],
        explanation: "Data classification assigns data into categories (public, internal, confidential, restricted) so appropriate security controls can be applied based on sensitivity.",
        correctAnswer: "To categorize data by sensitivity level to apply appropriate protection controls"
    },
    {
        id: 78,
        domain: 5,
        questionNumber: 78,
        questionText: "Which regulation focuses on protecting personal data of European Union citizens?",
        type: "multiple-choice",
        options: [
            { text: "General Data Protection Regulation (GDPR)", correct: true },
            { text: "Health Insurance Portability and Accountability Act (HIPAA)", correct: false },
            { text: "Payment Card Industry Data Security Standard (PCI-DSS)", correct: false },
            { text: "Gramm-Leach-Bliley Act (GLBA)", correct: false }
        ],
        explanation: "GDPR is the European Union regulation that governs how personal data of EU citizens must be protected and how data breaches must be reported.",
        correctAnswer: "General Data Protection Regulation (GDPR)"
    },
    {
        id: 79,
        domain: 5,
        questionNumber: 79,
        questionText: "Which regulation applies to healthcare organizations and their handling of health information?",
        type: "multiple-choice",
        options: [
            { text: "Health Insurance Portability and Accountability Act (HIPAA)", correct: true },
            { text: "Sarbanes-Oxley Act (SOX)", correct: false },
            { text: "Payment Card Industry Data Security Standard (PCI-DSS)", correct: false },
            { text: "Family Educational Rights and Privacy Act (FERPA)", correct: false }
        ],
        explanation: "HIPAA requires healthcare organizations and their business associates to protect patient health information and notify patients of breaches.",
        correctAnswer: "Health Insurance Portability and Accountability Act (HIPAA)"
    },
    {
        id: 80,
        domain: 5,
        questionNumber: 80,
        questionText: "What is the purpose of the Payment Card Industry Data Security Standard (PCI-DSS)?",
        type: "multiple-choice",
        options: [
            { text: "To establish requirements for organizations that handle credit card data", correct: true },
            { text: "To regulate internet service providers", correct: false },
            { text: "To control government spending", correct: false },
            { text: "To manage only healthcare data", correct: false }
        ],
        explanation: "PCI-DSS requires organizations that process, store, or transmit credit card data to implement specific security controls to protect cardholders.",
        correctAnswer: "To establish requirements for organizations that handle credit card data"
    },
    {
        id: 81,
        domain: 5,
        questionNumber: 81,
        questionText: "What is the primary purpose of an acceptable use policy (AUP)?",
        type: "multiple-choice",
        options: [
            { text: "To define what employees can and cannot do with company systems and resources", correct: true },
            { text: "To prevent all computer use", correct: false },
            { text: "To only monitor internet usage", correct: false },
            { text: "To eliminate employee productivity", correct: false }
        ],
        explanation: "An Acceptable Use Policy outlines acceptable and unacceptable use of company technology, setting expectations for employee behavior.",
        correctAnswer: "To define what employees can and cannot do with company systems and resources"
    },
    {
        id: 82,
        domain: 5,
        questionNumber: 82,
        questionText: "What is the purpose of a code of conduct?",
        type: "multiple-choice",
        options: [
            { text: "To establish ethical expectations and standards of behavior for employees", correct: true },
            { text: "To control all employee movements", correct: false },
            { text: "To eliminate all company policies", correct: false },
            { text: "To monitor only executive conduct", correct: false }
        ],
        explanation: "A code of conduct defines ethical expectations and standards for employee behavior, including how to handle conflicts of interest and confidential information.",
        correctAnswer: "To establish ethical expectations and standards of behavior for employees"
    },
    {
        id: 83,
        domain: 5,
        questionNumber: 83,
        questionText: "What is the purpose of a service level agreement (SLA)?",
        type: "multiple-choice",
        options: [
            { text: "To define expected service quality, availability, and remedies for failures", correct: true },
            { text: "To prevent all service interruptions", correct: false },
            { text: "To eliminate customer support", correct: false },
            { text: "To increase service costs", correct: false }
        ],
        explanation: "An SLA is a contract that specifies expected service levels, uptime guarantees, performance metrics, and remedies if service levels aren't met.",
        correctAnswer: "To define expected service quality, availability, and remedies for failures"
    },
    {
        id: 84,
        domain: 5,
        questionNumber: 84,
        questionText: "What is the purpose of an information security governance framework?",
        type: "multiple-choice",
        options: [
            { text: "To provide structure and guidance for managing information security across an organization", correct: true },
            { text: "To eliminate all business operations", correct: false },
            { text: "To prevent all employee hiring", correct: false },
            { text: "To focus only on IT departments", correct: false }
        ],
        explanation: "An information security governance framework establishes policies, procedures, and accountability structures to manage information security strategically.",
        correctAnswer: "To provide structure and guidance for managing information security across an organization"
    },
    {
        id: 85,
        domain: 5,
        questionNumber: 85,
        questionText: "What is the purpose of a privacy notice?",
        type: "multiple-choice",
        options: [
            { text: "To inform individuals about how their personal data is collected, used, and protected", correct: true },
            { text: "To prevent all data collection", correct: false },
            { text: "To guarantee privacy absolutely", correct: false },
            { text: "To monitor only internet activity", correct: false }
        ],
        explanation: "A privacy notice informs individuals how organizations collect, use, share, and protect their personal information, often required by regulations like GDPR.",
        correctAnswer: "To inform individuals about how their personal data is collected, used, and protected"
    },
    {
        id: 86,
        domain: 5,
        questionNumber: 86,
        questionText: "What is the purpose of vendor management in security?",
        type: "multiple-choice",
        options: [
            { text: "To evaluate and oversee third-party security controls and risks", correct: true },
            { text: "To prevent companies from using any vendors", correct: false },
            { text: "To ignore vendor security standards", correct: false },
            { text: "To focus only on internal systems", correct: false }
        ],
        explanation: "Vendor management evaluates third-party security controls, monitors ongoing compliance, and manages the risks associated with external providers.",
        correctAnswer: "To evaluate and oversee third-party security controls and risks"
    },
    {
        id: 87,
        domain: 5,
        questionNumber: 87,
        questionText: "What is the purpose of a business impact analysis (BIA)?",
        type: "multiple-choice",
        options: [
            { text: "To determine the potential impact of disruptions on critical business functions", correct: true },
            { text: "To prevent all business disruptions", correct: false },
            { text: "To eliminate business operations", correct: false },
            { text: "To focus only on IT systems", correct: false }
        ],
        explanation: "A Business Impact Analysis identifies critical business functions and assesses potential consequences of disruptions to prioritize recovery efforts.",
        correctAnswer: "To determine the potential impact of disruptions on critical business functions"
    },
    {
        id: 88,
        domain: 5,
        questionNumber: 88,
        questionText: "What is the purpose of an attestation in security compliance?",
        type: "multiple-choice",
        options: [
            { text: "To formally verify and confirm that security controls are implemented and effective", correct: true },
            { text: "To guarantee perfect security", correct: false },
            { text: "To eliminate all audits", correct: false },
            { text: "To replace security testing", correct: false }
        ],
        explanation: "An attestation is a formal verification by an independent party that an organization has implemented specified security controls effectively.",
        correctAnswer: "To formally verify and confirm that security controls are implemented and effective"
    },
    {
        id: 89,
        domain: 5,
        questionNumber: 89,
        questionText: "What is the purpose of a security steering committee?",
        type: "multiple-choice",
        options: [
            { text: "To provide oversight, direction, and governance for the security program", correct: true },
            { text: "To eliminate all security initiatives", correct: false },
            { text: "To prevent employees from accessing systems", correct: false },
            { text: "To manage only network infrastructure", correct: false }
        ],
        explanation: "A security steering committee provides leadership, strategic direction, and oversight for an organization's security program and initiatives.",
        correctAnswer: "To provide oversight, direction, and governance for the security program"
    },
    {
        id: 90,
        domain: 5,
        questionNumber: 90,
        questionText: "Which framework provides guidance for managing IT-related risks in organizations?",
        type: "multiple-choice",
        options: [
            { text: "COBIT (Control Objectives for Information and Related Technology)", correct: true },
            { text: "SDLC (Software Development Life Cycle)", correct: false },
            { text: "PRINCE2", correct: false },
            { text: "Agile Manifesto", correct: false }
        ],
        explanation: "COBIT is a framework developed by ISACA for governing IT and managing IT-related risks, focusing on alignment with business objectives.",
        correctAnswer: "COBIT (Control Objectives for Information and Related Technology)"
    }
];



const questions= shuffle(firstQ);


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // ES6 swap
  }
  return array;
}
