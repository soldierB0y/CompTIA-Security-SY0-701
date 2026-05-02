// CompTIA Security+ (SY0-701) Question Bank
// Domain Distribution:
// Domain 1: General Security Concepts - 12% (~11 questions)
// Domain 2: Threats, Vulnerabilities & Mitigations - 22% (~20 questions)
// Domain 3: Security Architecture - 18% (~16 questions)
// Domain 4: Security Operations - 28% (~25 questions)
// Domain 5: Security Program Management & Oversight - 20% (~18 questions)

const allQuestions = [
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
            { text: "Granting users full access by default and revoking permissions as needed", correct: false },
            { text: "Ensuring all users share identical permission levels to avoid favoritism", correct: false },
            { text: "Requiring explicit manager approval before any resource access is granted", correct: false }
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
            { text: "Concentrating all security controls at the network perimeter", correct: false },
            { text: "Encrypting data both at rest and in transit using a single unified solution", correct: false },
            { text: "Delegating security responsibilities to individual business departments", correct: false }
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
            { text: "Never trusting any user or device by default and continuously verifying every access request", correct: true },
            { text: "Trusting all users inside the corporate perimeter while blocking all external connections", correct: false },
            { text: "Removing authentication requirements for devices already enrolled in MDM", correct: false },
            { text: "Applying strict access controls only to privileged administrator accounts", correct: false }
        ],
        explanation: "Zero trust architecture assumes no default trust for any user or device. It continuously verifies and validates every access request, regardless of location, using strategies like microsegmentation, continuous monitoring, and verification.",
        correctAnswer: "Never trusting any user or device by default and continuously verifying every access request"
    },
    {
        id: 6,
        domain: 1,
        questionNumber: 6,
        questionText: "What is the primary goal of risk management in cybersecurity?",
        type: "multiple-choice",
        options: [
            { text: "To eliminate all possible security risks from the environment", correct: false },
            { text: "To identify, assess, and mitigate risks to an acceptable level", correct: true },
            { text: "To transfer all financial risk to a third-party insurer", correct: false },
            { text: "To document risks in a register without implementing any changes", correct: false }
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
            { text: "Mandatory Access Control (MAC)", correct: false },
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
            { text: "Hashing requires a key while encryption does not", correct: false },
            { text: "Encryption produces a fixed-length output, hashing produces variable-length output", correct: false },
            { text: "Hashing is used for data at rest, encryption is only for data in transit", correct: false }
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
            { text: "Tricking users into revealing credentials by impersonating a trustworthy entity", correct: true },
            { text: "Flooding a server with malformed packets to exhaust resources and cause a crash", correct: false },
            { text: "Injecting malicious scripts into a vulnerable web application's input fields", correct: false },
            { text: "Exploiting a misconfigured firewall rule to pivot into the internal network", correct: false }
        ],
        explanation: "Phishing is a social engineering attack where attackers impersonate legitimate organizations (often via email) to trick users into revealing credentials or downloading malware.",
        correctAnswer: "Tricking users into revealing credentials by impersonating a trustworthy entity"
    },
    {
        id: 13,
        domain: 2,
        questionNumber: 13,
        questionText: "What is the difference between a vulnerability and an exploit?",
        type: "multiple-choice",
        options: [
            { text: "A vulnerability is a weakness; an exploit is a method to take advantage of it", correct: true },
            { text: "A vulnerability has been patched; an exploit has not yet been remediated", correct: false },
            { text: "An exploit is a theoretical flaw; a vulnerability is actively used in attacks", correct: false },
            { text: "A vulnerability affects hardware; an exploit targets software flaws only", correct: false }
        ],
        explanation: "A vulnerability is a weakness or flaw in a system. An exploit is a tool or technique that an attacker uses to take advantage of that vulnerability.",
        correctAnswer: "A vulnerability is a weakness; an exploit is a method to take advantage of it"
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
            { text: "A flaw with no available patch that is unknown to the vendor", correct: true },
            { text: "A vulnerability that was reported and patched within 24 hours of discovery", correct: false },
            { text: "A critical flaw assigned the highest possible CVSS severity score", correct: false },
            { text: "A vulnerability that only affects end-of-life operating systems", correct: false }
        ],
        explanation: "A zero-day vulnerability is an unknown security flaw that vendors and attackers discover simultaneously, leaving no time for patches. These are highly valued by attackers.",
        correctAnswer: "A flaw with no available patch that is unknown to the vendor"
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
            { text: "Manipulating people psychologically to divulge information or bypass security controls", correct: true },
            { text: "Exploiting software vulnerabilities using automated scanning and attack tools", correct: false },
            { text: "Analyzing social media profiles to map an organization's network topology", correct: false },
            { text: "Using machine learning to predict and guess user credentials at scale", correct: false }
        ],
        explanation: "Social engineering is the practice of manipulating people through psychological tactics to disclose confidential information or bypass security controls, often avoiding technical defenses.",
        correctAnswer: "Manipulating people psychologically to divulge information or bypass security controls"
    },
    {
        id: 18,
        domain: 2,
        questionNumber: 18,
        questionText: "Which of the following is the most effective protection against SQL injection attacks?",
        type: "multiple-choice",
        options: [
            { text: "Using parameterized queries or prepared statements in the application code", correct: true },
            { text: "Encrypting the database connection string in the application configuration file", correct: false },
            { text: "Deploying a network-layer firewall between the web server and the database", correct: false },
            { text: "Enforcing strong passwords for all database user accounts", correct: false }
        ],
        explanation: "SQL injection attacks are prevented by using parameterized queries (prepared statements) which separate code from data, ensuring user input cannot be interpreted as code.",
        correctAnswer: "Using parameterized queries or prepared statements in the application code"
    },
    {
        id: 19,
        domain: 2,
        questionNumber: 19,
        questionText: "What is the primary goal of a Man-in-the-Middle (MitM) attack?",
        type: "multiple-choice",
        options: [
            { text: "To intercept and potentially modify communications between two parties", correct: true },
            { text: "To crash the target server by exhausting its available connection pool", correct: false },
            { text: "To gain persistent access on a single compromised endpoint", correct: false },
            { text: "To escalate privileges by exploiting a local kernel vulnerability", correct: false }
        ],
        explanation: "A Man-in-the-Middle attack places an attacker between two communicating parties, allowing them to intercept, read, and potentially modify messages before relaying them.",
        correctAnswer: "To intercept and potentially modify communications between two parties"
    },
    {
        id: 20,
        domain: 2,
        questionNumber: 20,
        questionText: "Which type of attack corrupts DNS cache entries to redirect users to malicious websites?",
        type: "multiple-choice",
        options: [
            { text: "DNS poisoning (DNS spoofing)", correct: true },
            { text: "ARP spoofing", correct: false },
            { text: "IP spoofing", correct: false },
            { text: "BGP hijacking", correct: false }
        ],
        explanation: "DNS poisoning (DNS spoofing) corrupts DNS cache or responses to redirect users to malicious websites by associating a domain name with a false IP address.",
        correctAnswer: "DNS poisoning (DNS spoofing)"
    },
    {
        id: 21,
        domain: 2,
        questionNumber: 21,
        questionText: "What is ransomware?",
        type: "multiple-choice",
        options: [
            { text: "Malware that encrypts data and demands payment for the decryption key", correct: true },
            { text: "Malware that silently exfiltrates files to a command-and-control server", correct: false },
            { text: "Spyware that records keystrokes and sends credentials to a remote attacker", correct: false },
            { text: "A worm that self-replicates across the network and degrades performance", correct: false }
        ],
        explanation: "Ransomware is malicious software that encrypts a victim's files or locks their system, then demands payment (ransom) in exchange for providing the decryption key.",
        correctAnswer: "Malware that encrypts data and demands payment for the decryption key"
    },
    {
        id: 22,
        domain: 2,
        questionNumber: 22,
        questionText: "Which of the following is NOT a common mitigation for password attacks?",
        type: "multiple-choice",
        options: [
            { text: "Enforcing complex password requirements and minimum character length", correct: false },
            { text: "Implementing account lockouts after repeated failed login attempts", correct: false },
            { text: "Using single-factor authentication exclusively to reduce login friction", correct: true },
            { text: "Implementing multi-factor authentication for all user accounts", correct: false }
        ],
        explanation: "Single-factor authentication (only passwords) increases vulnerability to password attacks. Proper mitigations include complex passwords, account lockouts, and multi-factor authentication.",
        correctAnswer: "Using single-factor authentication exclusively to reduce login friction"
    },
    {
        id: 23,
        domain: 2,
        questionNumber: 23,
        questionText: "What is a rootkit?",
        type: "multiple-choice",
        options: [
            { text: "Malware that hides its presence and maintains persistent privileged access for an attacker", correct: true },
            { text: "A tool used by administrators to securely manage root-level system accounts", correct: false },
            { text: "A script that removes administrator rights from accounts flagged as compromised", correct: false },
            { text: "Firmware pre-installed on servers to enable out-of-band remote management", correct: false }
        ],
        explanation: "A rootkit is malware designed to hide its presence and provide an attacker with persistent administrator-level access to a system, often evading detection.",
        correctAnswer: "Malware that hides its presence and maintains persistent privileged access for an attacker"
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
            { text: "CWE-434 (Unrestricted File Upload)", correct: false }
        ],
        explanation: "CWE-20 refers to improper input validation, which is a root cause of many application vulnerabilities including SQL injection, XSS, and command injection.",
        correctAnswer: "CWE-20 (Improper Input Validation)"
    },
    {
        id: 25,
        domain: 2,
        questionNumber: 25,
        questionText: "How does a brute force attack differ from a dictionary attack?",
        type: "multiple-choice",
        options: [
            { text: "Brute force tries all possible combinations; a dictionary attack uses a list of common words", correct: true },
            { text: "Brute force requires physical access; a dictionary attack is conducted remotely", correct: false },
            { text: "Brute force targets encryption keys; a dictionary attack only targets user passwords", correct: false },
            { text: "Brute force uses precomputed hash tables; a dictionary attack computes hashes in real time", correct: false }
        ],
        explanation: "A brute force attack systematically tries all possible character combinations, while a dictionary attack uses a precompiled list of likely passwords, making it faster but less exhaustive.",
        correctAnswer: "Brute force tries all possible combinations; a dictionary attack uses a list of common words"
    },
    {
        id: 26,
        domain: 2,
        questionNumber: 26,
        questionText: "Which attack technique involves writing data beyond the boundaries of an allocated memory buffer?",
        type: "multiple-choice",
        options: [
            { text: "Buffer overflow", correct: true },
            { text: "Cross-site scripting", correct: false },
            { text: "Directory traversal", correct: false },
            { text: "Integer overflow", correct: false }
        ],
        explanation: "A buffer overflow attack exploits programming errors where input data is not properly validated, allowing an attacker to write data beyond allocated memory boundaries.",
        correctAnswer: "Buffer overflow"
    },
    {
        id: 27,
        domain: 2,
        questionNumber: 27,
        questionText: "What distinguishes a DDoS attack from a standard DoS attack?",
        type: "multiple-choice",
        options: [
            { text: "A DDoS uses multiple coordinated sources to overwhelm the target simultaneously", correct: true },
            { text: "A DDoS targets application-layer protocols while DoS targets the network layer", correct: false },
            { text: "A DDoS requires insider cooperation while a DoS is fully external", correct: false },
            { text: "A DDoS is always state-sponsored while a DoS is carried out by individual actors", correct: false }
        ],
        explanation: "A Distributed Denial of Service (DDoS) attack uses multiple compromised computers or devices to overwhelm a target with traffic, making services unavailable.",
        correctAnswer: "A DDoS uses multiple coordinated sources to overwhelm the target simultaneously"
    },
    {
        id: 28,
        domain: 2,
        questionNumber: 28,
        questionText: "Which wireless protocol is vulnerable to KRACK (Key Reinstallation Attack)?",
        type: "multiple-choice",
        options: [
            { text: "WPA2", correct: true },
            { text: "TLS 1.3", correct: false },
            { text: "SSH v2", correct: false },
            { text: "WPA3", correct: false }
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
            { text: "Granting a user temporary elevated access through a time-limited token", correct: false },
            { text: "Requesting additional permissions through a formal IT approval workflow", correct: false },
            { text: "Moving laterally to other systems using the same compromised credentials", correct: false }
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
            { text: "Placing databases on a separate network segment from web servers", correct: true },
            { text: "Using a single flat VLAN for all user and server traffic to simplify management", correct: false },
            { text: "Allowing unrestricted traffic flow between the DMZ and the internal corporate network", correct: false },
            { text: "Assigning all IoT devices to the same subnet as employee workstations", correct: false }
        ],
        explanation: "Network segmentation divides a network into separate segments, limiting lateral movement. Databases should be segregated from web servers to contain breaches.",
        correctAnswer: "Placing databases on a separate network segment from web servers"
    },
    {
        id: 31,
        domain: 2,
        questionNumber: 31,
        questionText: "What is the primary goal of patch management?",
        type: "multiple-choice",
        options: [
            { text: "Regularly applying security updates to fix known vulnerabilities in systems and software", correct: true },
            { text: "Periodically auditing user accounts to remove stale or excessive permissions", correct: false },
            { text: "Replacing end-of-life hardware components before vendor support expires", correct: false },
            { text: "Updating firewall rules to reflect changes in the current network topology", correct: false }
        ],
        explanation: "Patch management involves regularly applying security patches and updates to systems to fix known vulnerabilities before attackers can exploit them.",
        correctAnswer: "Regularly applying security updates to fix known vulnerabilities in systems and software"
    },

    // ============================================
    // DOMAIN 3: Security Architecture (18%)
    // ============================================
    {
        id: 32,
        domain: 3,
        questionNumber: 32,
        questionText: "Which security model enforces confidentiality using the rules 'no read up' and 'no write down'?",
        type: "multiple-choice",
        options: [
            { text: "Bell-LaPadula Model", correct: true },
            { text: "Biba Model", correct: false },
            { text: "Clark-Wilson Model", correct: false },
            { text: "Brewer-Nash (Chinese Wall) Model", correct: false }
        ],
        explanation: "The Bell-LaPadula Model enforces confidentiality using security levels and clearances. Its rules include 'no read up' and 'no write down' to prevent unauthorized information flow.",
        correctAnswer: "Bell-LaPadula Model"
    },
    {
        id: 33,
        domain: 3,
        questionNumber: 33,
        questionText: "Which of the following best describes a DMZ in network security?",
        type: "multiple-choice",
        options: [
            { text: "A perimeter network segment that separates public-facing servers from the internal network", correct: true },
            { text: "A dedicated VLAN where security controls are relaxed to facilitate external partner access", correct: false },
            { text: "A subnet reserved exclusively for management and monitoring infrastructure", correct: false },
            { text: "An air-gapped network segment with no connectivity to any external systems", correct: false }
        ],
        explanation: "A DMZ is a perimeter network segment that adds an extra layer of security between internal networks and untrusted external networks like the internet.",
        correctAnswer: "A perimeter network segment that separates public-facing servers from the internal network"
    },
    {
        id: 34,
        domain: 3,
        questionNumber: 34,
        questionText: "What is the primary purpose of Network Access Control (NAC)?",
        type: "multiple-choice",
        options: [
            { text: "Verifying that devices meet security requirements before granting network access", correct: true },
            { text: "Restricting bandwidth available to specific users or application categories", correct: false },
            { text: "Encrypting all traffic passing between endpoints and the access-layer switch", correct: false },
            { text: "Dynamically assigning IP addresses to devices as they join the network", correct: false }
        ],
        explanation: "Network Access Control (NAC) ensures that devices meet security requirements (patches, antivirus, encryption) before being allowed to connect to the network.",
        correctAnswer: "Verifying that devices meet security requirements before granting network access"
    },
    {
        id: 35,
        domain: 3,
        questionNumber: 35,
        questionText: "Which encryption standard is recommended for long-term data protection?",
        type: "multiple-choice",
        options: [
            { text: "AES-256", correct: true },
            { text: "3DES (Triple DES)", correct: false },
            { text: "RC4", correct: false },
            { text: "DES", correct: false }
        ],
        explanation: "AES-256 (Advanced Encryption Standard with 256-bit key) is a strong, widely-trusted encryption standard recommended for protecting sensitive data long-term.",
        correctAnswer: "AES-256"
    },
    {
        id: 36,
        domain: 3,
        questionNumber: 36,
        questionText: "What is the primary security advantage of using a VPN?",
        type: "multiple-choice",
        options: [
            { text: "It creates an encrypted tunnel to protect data traveling over untrusted networks", correct: true },
            { text: "It masks the source MAC address to anonymize the user's network identity", correct: false },
            { text: "It eliminates the need for endpoint antivirus by isolating traffic in a sandbox", correct: false },
            { text: "It provides application-layer firewall functionality for outbound connections", correct: false }
        ],
        explanation: "A VPN creates an encrypted tunnel for communications over untrusted networks like the internet, protecting data from eavesdropping and sniffing.",
        correctAnswer: "It creates an encrypted tunnel to protect data traveling over untrusted networks"
    },
    {
        id: 37,
        domain: 3,
        questionNumber: 37,
        questionText: "Which of the following best describes asymmetric encryption?",
        type: "multiple-choice",
        options: [
            { text: "Uses a key pair where data encrypted with one key can only be decrypted with the other", correct: true },
            { text: "Uses the same shared secret key for both encryption and decryption operations", correct: false },
            { text: "Encrypts fixed-size blocks of data using a symmetric algorithm and a secret key", correct: false },
            { text: "Produces a one-way hash digest that cannot be reversed or decrypted", correct: false }
        ],
        explanation: "Asymmetric encryption uses a public-private key pair. Data encrypted with the public key can only be decrypted with the private key, enabling secure key distribution and digital signatures.",
        correctAnswer: "Uses a key pair where data encrypted with one key can only be decrypted with the other"
    },
    {
        id: 38,
        domain: 3,
        questionNumber: 38,
        questionText: "What is the primary role of a Certificate Authority (CA)?",
        type: "multiple-choice",
        options: [
            { text: "To issue and digitally sign certificates that bind a public key to a verified identity", correct: true },
            { text: "To securely store and distribute private keys on behalf of enrolled entities", correct: false },
            { text: "To decrypt TLS sessions on behalf of the organization for traffic inspection", correct: false },
            { text: "To generate and automatically rotate symmetric encryption keys for applications", correct: false }
        ],
        explanation: "A Certificate Authority (CA) is a trusted third party that issues, validates, and signs digital certificates to verify the identity of websites, individuals, or organizations.",
        correctAnswer: "To issue and digitally sign certificates that bind a public key to a verified identity"
    },
    {
        id: 39,
        domain: 3,
        questionNumber: 39,
        questionText: "Which of the following is a primary limitation of symmetric encryption?",
        type: "multiple-choice",
        options: [
            { text: "Securely sharing the secret key with all parties before communication is a major challenge", correct: true },
            { text: "It is significantly slower than asymmetric encryption for bulk data processing", correct: false },
            { text: "It can only provide data integrity, not confidentiality or authentication", correct: false },
            { text: "It requires a Certificate Authority to manage and distribute the encryption keys", correct: false }
        ],
        explanation: "Symmetric encryption's main limitation is key distribution: the same key must be shared between parties securely, which becomes impractical with many users.",
        correctAnswer: "Securely sharing the secret key with all parties before communication is a major challenge"
    },
    {
        id: 40,
        domain: 3,
        questionNumber: 40,
        questionText: "What is the primary purpose of an Intrusion Prevention System (IPS)?",
        type: "multiple-choice",
        options: [
            { text: "To detect and automatically block malicious traffic in real time", correct: true },
            { text: "To log all network traffic for post-incident forensic analysis", correct: false },
            { text: "To encrypt sensitive traffic passing between internal network segments", correct: false },
            { text: "To generate security alerts without taking any blocking action", correct: false }
        ],
        explanation: "An Intrusion Prevention System (IPS) monitors network traffic in real-time to detect and automatically block malicious traffic and attacks.",
        correctAnswer: "To detect and automatically block malicious traffic in real time"
    },
    {
        id: 41,
        domain: 3,
        questionNumber: 41,
        questionText: "Which protocol is used to establish secure, encrypted web connections?",
        type: "multiple-choice",
        options: [
            { text: "HTTPS (with TLS/SSL)", correct: true },
            { text: "SFTP", correct: false },
            { text: "FTPS", correct: false },
            { text: "SMTPS", correct: false }
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
            { text: "To filter HTTP/HTTPS traffic and block common web application attacks like SQLi and XSS", correct: true },
            { text: "To encrypt web server storage and protect application data at rest", correct: false },
            { text: "To authenticate users and enforce MFA before granting access to web applications", correct: false },
            { text: "To distribute incoming web requests across multiple backend servers", correct: false }
        ],
        explanation: "A Web Application Firewall (WAF) specifically protects web applications by filtering and monitoring HTTP/HTTPS traffic for common web application attacks.",
        correctAnswer: "To filter HTTP/HTTPS traffic and block common web application attacks like SQLi and XSS"
    },
    {
        id: 43,
        domain: 3,
        questionNumber: 43,
        questionText: "In the cloud shared responsibility model, which of the following is always the customer's responsibility?",
        type: "multiple-choice",
        options: [
            { text: "Securing their own data, user identities, and application configurations", correct: true },
            { text: "Patching the underlying hypervisor and physical host server hardware", correct: false },
            { text: "Managing physical data center security, environmental controls, and hardware failures", correct: false },
            { text: "Guaranteeing network backbone redundancy and internet service provider failover", correct: false }
        ],
        explanation: "Cloud security is a shared responsibility model where the provider secures infrastructure while customers secure their data, applications, and access controls.",
        correctAnswer: "Securing their own data, user identities, and application configurations"
    },
    {
        id: 44,
        domain: 3,
        questionNumber: 44,
        questionText: "What is the primary function of a load balancer in a security architecture?",
        type: "multiple-choice",
        options: [
            { text: "Distributing incoming traffic across multiple servers to improve availability and resilience", correct: true },
            { text: "Inspecting and filtering traffic for malicious payloads before forwarding to servers", correct: false },
            { text: "Authenticating users and enforcing access control policies at the network edge", correct: false },
            { text: "Encrypting all data in transit between clients and backend application servers", correct: false }
        ],
        explanation: "A load balancer distributes incoming traffic across multiple servers, improving availability and preventing any single server from being overwhelmed by attacks or legitimate traffic.",
        correctAnswer: "Distributing incoming traffic across multiple servers to improve availability and resilience"
    },
    {
        id: 45,
        domain: 3,
        questionNumber: 45,
        questionText: "Which of the following is an example of a host-based security control?",
        type: "multiple-choice",
        options: [
            { text: "Host-based Intrusion Detection System (HIDS)", correct: true },
            { text: "Network-based firewall", correct: false },
            { text: "Web Application Firewall (WAF)", correct: false },
            { text: "Network-based Intrusion Prevention System (NIPS)", correct: false }
        ],
        explanation: "Host-based security tools run on individual computers to protect them locally. A HIDS monitors a specific host for suspicious activities and intrusions.",
        correctAnswer: "Host-based Intrusion Detection System (HIDS)"
    },
    {
        id: 46,
        domain: 3,
        questionNumber: 46,
        questionText: "What is the purpose of Data Loss Prevention (DLP)?",
        type: "multiple-choice",
        options: [
            { text: "To monitor and prevent unauthorized transmission of sensitive data outside the organization", correct: true },
            { text: "To encrypt sensitive data stored in databases and shared file systems", correct: false },
            { text: "To automatically back up critical data to a secure offsite location", correct: false },
            { text: "To classify and apply sensitivity labels to documents for proper handling", correct: false }
        ],
        explanation: "Data Loss Prevention (DLP) tools monitor and control data movement to prevent sensitive information from being transmitted outside the organization without authorization.",
        correctAnswer: "To monitor and prevent unauthorized transmission of sensitive data outside the organization"
    },
    {
        id: 47,
        domain: 3,
        questionNumber: 47,
        questionText: "A compensating control is best described as:",
        type: "multiple-choice",
        options: [
            { text: "An alternative measure used when the primary control cannot be fully implemented", correct: true },
            { text: "A detective control that generates alerts whenever a primary control fails or is bypassed", correct: false },
            { text: "A redundant instance of a primary control deployed for high availability purposes", correct: false },
            { text: "A corrective control that automatically restores systems to normal after an incident", correct: false }
        ],
        explanation: "Compensating controls are alternative security measures implemented when primary controls are not feasible, providing equivalent security through different means.",
        correctAnswer: "An alternative measure used when the primary control cannot be fully implemented"
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
            { text: "Collecting, correlating, and analyzing security logs from multiple sources to detect threats", correct: true },
            { text: "Blocking malicious traffic in real time based on updated threat intelligence feeds", correct: false },
            { text: "Performing deep-packet inspection of all inbound and outbound network traffic", correct: false },
            { text: "Automatically remediating vulnerabilities identified by periodic security scans", correct: false }
        ],
        explanation: "A SIEM system collects and correlates security event data from multiple sources to detect patterns, anomalies, and potential security incidents.",
        correctAnswer: "Collecting, correlating, and analyzing security logs from multiple sources to detect threats"
    },
    {
        id: 49,
        domain: 4,
        questionNumber: 49,
        questionText: "What is the primary purpose of security awareness training?",
        type: "multiple-choice",
        options: [
            { text: "To educate employees about security threats and best practices to reduce human error", correct: true },
            { text: "To certify employees in industry-recognized security credentials like CompTIA Security+", correct: false },
            { text: "To train IT staff on deploying and operationally managing security tools", correct: false },
            { text: "To simulate real attacks against employees to evaluate their technical defenses", correct: false }
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
            { text: "To independently assess whether security controls are properly implemented and effective", correct: true },
            { text: "To simulate adversary techniques against production systems in a controlled environment", correct: false },
            { text: "To scan assets for known vulnerabilities and produce a remediation priority list", correct: false },
            { text: "To review and formally update the organization's security policies and standards", correct: false }
        ],
        explanation: "A security audit is an independent assessment that evaluates whether security controls are properly implemented, effective, and in compliance with policies.",
        correctAnswer: "To independently assess whether security controls are properly implemented and effective"
    },
    {
        id: 51,
        domain: 4,
        questionNumber: 51,
        questionText: "What is the key difference between vulnerability scanning and penetration testing?",
        type: "multiple-choice",
        options: [
            { text: "Vulnerability scanning identifies weaknesses; penetration testing actively exploits them", correct: true },
            { text: "Vulnerability scanning requires authorization; penetration testing does not need approval", correct: false },
            { text: "Penetration testing is fully automated; vulnerability scanning is always manual", correct: false },
            { text: "Vulnerability scanning is only conducted externally; penetration testing is internal only", correct: false }
        ],
        explanation: "Vulnerability scanning automatically identifies potential weaknesses, while penetration testing simulates an attacker by actively exploiting vulnerabilities to test defenses.",
        correctAnswer: "Vulnerability scanning identifies weaknesses; penetration testing actively exploits them"
    },
    {
        id: 52,
        domain: 4,
        questionNumber: 52,
        questionText: "According to NIST SP 800-61, what is the correct sequence of the incident response lifecycle?",
        type: "multiple-choice",
        options: [
            { text: "Preparation → Detection & Analysis → Containment → Eradication → Recovery → Post-Incident", correct: true },
            { text: "Detection → Containment → Analysis → Eradication → Recovery → Preparation", correct: false },
            { text: "Identification → Triage → Containment → Notification → Recovery → Lessons Learned", correct: false },
            { text: "Prevention → Detection → Response → Reporting → Recovery → Remediation", correct: false }
        ],
        explanation: "The NIST incident response lifecycle includes: Preparation (having tools/plans ready), Detection (identifying incidents), Containment (stopping spread), Eradication (removing threat), Recovery (restoring systems), and Post-Incident activities.",
        correctAnswer: "Preparation → Detection & Analysis → Containment → Eradication → Recovery → Post-Incident"
    },
    {
        id: 53,
        domain: 4,
        questionNumber: 53,
        questionText: "What is a Security Operations Center (SOC)?",
        type: "multiple-choice",
        options: [
            { text: "A centralized team that continuously monitors, detects, and responds to security incidents", correct: true },
            { text: "A secure physical room where network equipment and servers are housed and managed", correct: false },
            { text: "A governance committee that defines and approves organizational security policies", correct: false },
            { text: "A third-party service that performs annual penetration tests and security assessments", correct: false }
        ],
        explanation: "A Security Operations Center (SOC) is a centralized team and facility that monitors, detects, and responds to security threats 24/7.",
        correctAnswer: "A centralized team that continuously monitors, detects, and responds to security incidents"
    },
    {
        id: 54,
        domain: 4,
        questionNumber: 54,
        questionText: "What is the primary purpose of log management and retention?",
        type: "multiple-choice",
        options: [
            { text: "To preserve audit trails for forensic investigations, compliance, and troubleshooting", correct: true },
            { text: "To reduce storage costs by compressing and archiving older system event records", correct: false },
            { text: "To stream real-time events to a SIEM platform for immediate correlation", correct: false },
            { text: "To produce dashboards and metrics for security program performance reporting", correct: false }
        ],
        explanation: "Log management and retention preserve audit trails for security investigations, compliance audits, troubleshooting, and legal requirements.",
        correctAnswer: "To preserve audit trails for forensic investigations, compliance, and troubleshooting"
    },
    {
        id: 55,
        domain: 4,
        questionNumber: 55,
        questionText: "What is a Key Performance Indicator (KPI) in security operations?",
        type: "multiple-choice",
        options: [
            { text: "A measurable value that evaluates how effectively a security program meets its objectives", correct: true },
            { text: "A cryptographic key used to authenticate security monitoring and logging agents", correct: false },
            { text: "A priority classification label assigned to high-severity security incidents", correct: false },
            { text: "A benchmark score mandated by a regulatory body as part of compliance certification", correct: false }
        ],
        explanation: "A KPI is a metric used to evaluate how effectively an organization achieves its security objectives, such as mean time to detect or patch compliance rate.",
        correctAnswer: "A measurable value that evaluates how effectively a security program meets its objectives"
    },
    {
        id: 56,
        domain: 4,
        questionNumber: 56,
        questionText: "What is the primary purpose of backup and disaster recovery planning?",
        type: "multiple-choice",
        options: [
            { text: "To restore data and systems quickly after a failure and maintain business continuity", correct: true },
            { text: "To prevent unauthorized access to backup media and offsite storage facilities", correct: false },
            { text: "To test the organization's incident response and stakeholder notification procedures", correct: false },
            { text: "To archive historical data in compliance with regulatory retention requirements", correct: false }
        ],
        explanation: "Backup and disaster recovery plans ensure organizations can restore operations quickly after data loss, system failures, or major incidents, minimizing downtime.",
        correctAnswer: "To restore data and systems quickly after a failure and maintain business continuity"
    },
    {
        id: 57,
        domain: 4,
        questionNumber: 57,
        questionText: "What is the goal of change management in a security context?",
        type: "multiple-choice",
        options: [
            { text: "To ensure system changes are reviewed, tested, and approved before deployment", correct: true },
            { text: "To document configuration changes after they have already been applied to production", correct: false },
            { text: "To prevent all modifications to production systems without C-level executive approval", correct: false },
            { text: "To automate software deployments and fully eliminate manual intervention in changes", correct: false }
        ],
        explanation: "Change management ensures that all system modifications go through review processes to prevent security risks and maintain system stability.",
        correctAnswer: "To ensure system changes are reviewed, tested, and approved before deployment"
    },
    {
        id: 58,
        domain: 4,
        questionNumber: 58,
        questionText: "Mean Time to Detect (MTTD) specifically measures which of the following?",
        type: "multiple-choice",
        options: [
            { text: "The average elapsed time between when an incident occurs and when it is detected", correct: true },
            { text: "The average time required to fully remediate an incident after it has been detected", correct: false },
            { text: "The average time between two successive system failures in a production environment", correct: false },
            { text: "The time required to restore normal operations after a system outage is confirmed", correct: false }
        ],
        explanation: "Mean Time to Detect (MTTD) measures how quickly security events are identified after they occur. Lower MTTD is better for minimizing damage.",
        correctAnswer: "The average elapsed time between when an incident occurs and when it is detected"
    },
    {
        id: 59,
        domain: 4,
        questionNumber: 59,
        questionText: "What is the primary goal of a Business Continuity Plan (BCP)?",
        type: "multiple-choice",
        options: [
            { text: "To ensure critical business functions continue operating during and after a disruption", correct: true },
            { text: "To restore IT infrastructure to a known-good state following a declared disaster", correct: false },
            { text: "To define the communication chain and escalation path during a major security incident", correct: false },
            { text: "To establish and document recovery time and recovery point objectives per system", correct: false }
        ],
        explanation: "A Business Continuity Plan ensures that essential business functions can continue or be rapidly restored during major disruptions like natural disasters or cyberattacks.",
        correctAnswer: "To ensure critical business functions continue operating during and after a disruption"
    },
    {
        id: 60,
        domain: 4,
        questionNumber: 60,
        questionText: "What is the purpose of threat hunting?",
        type: "multiple-choice",
        options: [
            { text: "To proactively search for hidden threats and indicators of compromise missed by automated tools", correct: true },
            { text: "To investigate and respond to active alerts already generated by the SIEM or IPS", correct: false },
            { text: "To conduct scheduled vulnerability scans across all networked assets and systems", correct: false },
            { text: "To trace the attribution of known malware samples using threat intelligence platforms", correct: false }
        ],
        explanation: "Threat hunting involves proactively searching through networks for signs of compromise or advanced threats that automated tools may have missed.",
        correctAnswer: "To proactively search for hidden threats and indicators of compromise missed by automated tools"
    },
    {
        id: 61,
        domain: 4,
        questionNumber: 61,
        questionText: "What is a security baseline?",
        type: "multiple-choice",
        options: [
            { text: "A defined minimum security configuration standard applied to systems and devices", correct: true },
            { text: "A snapshot of normal network traffic used as a reference to detect anomalies", correct: false },
            { text: "The initial security posture of a new system before any hardening has been applied", correct: false },
            { text: "A set of CVSS vulnerability scores used to prioritize remediation efforts", correct: false }
        ],
        explanation: "A security baseline defines the minimum security standards required for systems, providing a configuration to build from and maintain consistently.",
        correctAnswer: "A defined minimum security configuration standard applied to systems and devices"
    },
    {
        id: 62,
        domain: 4,
        questionNumber: 62,
        questionText: "What is the purpose of Endpoint Detection and Response (EDR)?",
        type: "multiple-choice",
        options: [
            { text: "To continuously monitor endpoints and enable rapid detection and response to threats", correct: true },
            { text: "To enforce device compliance policies before allowing endpoints onto the network", correct: false },
            { text: "To encrypt endpoint storage to protect data if a device is lost or stolen", correct: false },
            { text: "To deploy and manage security patches across all endpoints in the environment", correct: false }
        ],
        explanation: "EDR tools monitor and protect individual devices (laptops, servers, etc.) by detecting suspicious activities and enabling rapid response.",
        correctAnswer: "To continuously monitor endpoints and enable rapid detection and response to threats"
    },
    {
        id: 63,
        domain: 4,
        questionNumber: 63,
        questionText: "What is the purpose of vulnerability management?",
        type: "multiple-choice",
        options: [
            { text: "To identify, assess, prioritize, and remediate vulnerabilities across systems", correct: true },
            { text: "To simulate attacker techniques against production systems in a controlled manner", correct: false },
            { text: "To monitor production systems for active exploitation of known vulnerabilities", correct: false },
            { text: "To maintain a register of accepted risk exceptions with documented business justifications", correct: false }
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
            { text: "To link related events across multiple log sources to identify coordinated attack patterns", correct: true },
            { text: "To assign severity scores to individual events as they are ingested by the SIEM", correct: false },
            { text: "To normalize log formats from different vendors into a standardized common schema", correct: false },
            { text: "To automatically route security alerts to the appropriate response team members", correct: false }
        ],
        explanation: "Event correlation analyzes multiple security events together to identify patterns, relationships, and coordinated attacks that might be missed individually.",
        correctAnswer: "To link related events across multiple log sources to identify coordinated attack patterns"
    },
    {
        id: 65,
        domain: 4,
        questionNumber: 65,
        questionText: "What is a tabletop exercise?",
        type: "multiple-choice",
        options: [
            { text: "A discussion-based simulation where teams walk through responses to a hypothetical incident", correct: true },
            { text: "A live-fire drill where actual production systems are taken offline to test recovery", correct: false },
            { text: "A red team engagement where testers actively simulate real-world attack techniques", correct: false },
            { text: "An automated test of backup restoration procedures for all critical systems", correct: false }
        ],
        explanation: "A tabletop exercise is a simulated incident scenario where teams discuss how they would respond, helping identify gaps in incident response procedures.",
        correctAnswer: "A discussion-based simulation where teams walk through responses to a hypothetical incident"
    },
    {
        id: 66,
        domain: 4,
        questionNumber: 66,
        questionText: "What is the primary purpose of network monitoring and packet analysis?",
        type: "multiple-choice",
        options: [
            { text: "To observe traffic patterns and detect anomalies or malicious activity on the network", correct: true },
            { text: "To enforce QoS policies and prioritize bandwidth for business-critical applications", correct: false },
            { text: "To capture and archive all network traffic for regulatory compliance and legal hold", correct: false },
            { text: "To measure network latency and identify performance bottlenecks in the infrastructure", correct: false }
        ],
        explanation: "Network monitoring and packet analysis examine network traffic to detect anomalies, attacks, policy violations, and unauthorized activities.",
        correctAnswer: "To observe traffic patterns and detect anomalies or malicious activity on the network"
    },
    {
        id: 67,
        domain: 4,
        questionNumber: 67,
        questionText: "What is the purpose of digital forensics?",
        type: "multiple-choice",
        options: [
            { text: "To collect, preserve, and analyze digital evidence in a forensically sound manner", correct: true },
            { text: "To recover deleted files and rebuild systems after a ransomware encryption event", correct: false },
            { text: "To reverse-engineer malware samples and document their full functional capabilities", correct: false },
            { text: "To attribute cyberattacks to specific threat actors using open-source intelligence", correct: false }
        ],
        explanation: "Digital forensics involves collecting and analyzing evidence from digital devices in a controlled manner to support investigations and legal proceedings.",
        correctAnswer: "To collect, preserve, and analyze digital evidence in a forensically sound manner"
    },
    {
        id: 68,
        domain: 4,
        questionNumber: 68,
        questionText: "Why is maintaining the chain of custody critical when collecting digital evidence?",
        type: "multiple-choice",
        options: [
            { text: "It documents who handled the evidence and when, ensuring admissibility in court", correct: true },
            { text: "It encrypts the evidence to prevent tampering while in transit to the forensics lab", correct: false },
            { text: "It ensures evidence is collected in the correct order of volatility", correct: false },
            { text: "It verifies that forensic tools used are properly licensed for legal proceedings", correct: false }
        ],
        explanation: "The chain of custody is critical for digital evidence to be admissible in court. It documents who handled the evidence and when.",
        correctAnswer: "It documents who handled the evidence and when, ensuring admissibility in court"
    },
    {
        id: 69,
        domain: 4,
        questionNumber: 69,
        questionText: "What is User Behavior Analytics (UBA)?",
        type: "multiple-choice",
        options: [
            { text: "Using machine learning to detect deviations from a user's established activity baseline", correct: true },
            { text: "Recording all user keystrokes and screen activity for compliance and auditing purposes", correct: false },
            { text: "Analyzing how users interact with applications to improve usability and workflow", correct: false },
            { text: "Generating risk scores for users based solely on their authentication failure history", correct: false }
        ],
        explanation: "User Behavior Analytics uses machine learning to establish normal user behavior patterns and detect deviations that could indicate compromised accounts or insider threats.",
        correctAnswer: "Using machine learning to detect deviations from a user's established activity baseline"
    },
    {
        id: 70,
        domain: 4,
        questionNumber: 70,
        questionText: "What is the purpose of security testing?",
        type: "multiple-choice",
        options: [
            { text: "To evaluate whether security controls function as intended and identify weaknesses", correct: true },
            { text: "To confirm that software meets functional and performance requirements before release", correct: false },
            { text: "To measure system throughput and identify bottlenecks under peak load conditions", correct: false },
            { text: "To verify that users can only access the resources they are specifically authorized to use", correct: false }
        ],
        explanation: "Security testing evaluates whether security controls work as intended through methods like vulnerability scans and penetration tests.",
        correctAnswer: "To evaluate whether security controls function as intended and identify weaknesses"
    },
    {
        id: 71,
        domain: 4,
        questionNumber: 71,
        questionText: "What is the purpose of an allowlist (whitelist)?",
        type: "multiple-choice",
        options: [
            { text: "To permit only pre-approved applications, files, or users to execute or access resources", correct: true },
            { text: "To catalog all known malicious signatures for automatic detection and blocking", correct: false },
            { text: "To define IP address ranges that are exempted from deep-packet inspection", correct: false },
            { text: "To record users who have reviewed and acknowledged the acceptable use policy", correct: false }
        ],
        explanation: "An allowlist (whitelist) specifies what is permitted to run, rather than what is blocked. Only approved applications/users are allowed access.",
        correctAnswer: "To permit only pre-approved applications, files, or users to execute or access resources"
    },
    {
        id: 72,
        domain: 4,
        questionNumber: 72,
        questionText: "What is the purpose of a blocklist (blacklist)?",
        type: "multiple-choice",
        options: [
            { text: "To automatically deny access to known malicious IPs, domains, or file hashes", correct: true },
            { text: "To enumerate all user accounts that have been temporarily locked out of the system", correct: false },
            { text: "To restrict all outbound traffic to a set of approved destination addresses", correct: false },
            { text: "To flag high-risk users for additional authentication challenges at login", correct: false }
        ],
        explanation: "A blocklist (blacklist) contains known malicious items (malware hashes, malicious IPs, phishing URLs) that are automatically blocked.",
        correctAnswer: "To automatically deny access to known malicious IPs, domains, or file hashes"
    },
    {
        id: 73,
        domain: 4,
        questionNumber: 73,
        questionText: "What is the primary purpose of a reverse proxy?",
        type: "multiple-choice",
        options: [
            { text: "To receive client requests and forward them to backend servers while masking server identity", correct: true },
            { text: "To route internal user traffic through an external gateway for internet access", correct: false },
            { text: "To inspect and filter outbound requests from internal users to external destinations", correct: false },
            { text: "To cache DNS responses and reduce name resolution times for internal clients", correct: false }
        ],
        explanation: "A reverse proxy sits between clients and servers, forwarding requests while hiding the backend server's identity and providing load balancing and security.",
        correctAnswer: "To receive client requests and forward them to backend servers while masking server identity"
    },
    {
        id: 74,
        domain: 4,
        questionNumber: 74,
        questionText: "What is the primary security purpose of a honeypot?",
        type: "multiple-choice",
        options: [
            { text: "To lure attackers into a decoy system to study their tools, tactics, and techniques", correct: true },
            { text: "To isolate actively compromised systems from the production network during an incident", correct: false },
            { text: "To store privileged credentials in a vault that monitors and alerts on all access attempts", correct: false },
            { text: "To simulate vulnerability scan results for use in security awareness training exercises", correct: false }
        ],
        explanation: "Honeypots are decoy systems designed to attract attackers, allowing security teams to study attack methods, collect intelligence, and detect intrusions.",
        correctAnswer: "To lure attackers into a decoy system to study their tools, tactics, and techniques"
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
            { text: "To provide step-by-step technical configuration guidance for security tools", correct: false },
            { text: "To document detailed procedures for responding to specific security incidents", correct: false },
            { text: "To define the KPIs and metrics used to measure security program effectiveness", correct: false }
        ],
        explanation: "Security policies define what is expected, what is prohibited, and how to handle security matters throughout an organization.",
        correctAnswer: "To establish rules and expectations for protecting information and systems"
    },
    {
        id: 76,
        domain: 5,
        questionNumber: 76,
        questionText: "What is the primary purpose of a risk assessment?",
        type: "multiple-choice",
        options: [
            { text: "To identify threats, vulnerabilities, and potential impacts to determine overall risk level", correct: true },
            { text: "To implement controls that reduce all identified risks to zero or near zero", correct: false },
            { text: "To quantify the total financial cost of all potential security incidents", correct: false },
            { text: "To rank all organizational assets by criticality for disaster recovery prioritization", correct: false }
        ],
        explanation: "A risk assessment identifies threats, vulnerabilities, and assets to evaluate potential consequences and prioritize risk mitigation efforts.",
        correctAnswer: "To identify threats, vulnerabilities, and potential impacts to determine overall risk level"
    },
    {
        id: 77,
        domain: 5,
        questionNumber: 77,
        questionText: "What is the purpose of a data classification policy?",
        type: "multiple-choice",
        options: [
            { text: "To categorize data by sensitivity level so appropriate protection controls can be applied", correct: true },
            { text: "To specify how long each data type must be retained before it can be disposed of", correct: false },
            { text: "To assign formal ownership and stewardship responsibilities for all data assets", correct: false },
            { text: "To mandate which encryption algorithms must be used for each category of data", correct: false }
        ],
        explanation: "Data classification assigns data into categories (public, internal, confidential, restricted) so appropriate security controls can be applied based on sensitivity.",
        correctAnswer: "To categorize data by sensitivity level so appropriate protection controls can be applied"
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
        questionText: "Which regulation applies to healthcare organizations and their handling of patient health information?",
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
        questionText: "What is the primary purpose of PCI-DSS?",
        type: "multiple-choice",
        options: [
            { text: "To establish security requirements for organizations that process or store credit card data", correct: true },
            { text: "To regulate how financial institutions must report data breaches to government regulators", correct: false },
            { text: "To protect the privacy of consumer banking records and online transaction history", correct: false },
            { text: "To govern how healthcare payment systems must handle protected patient billing data", correct: false }
        ],
        explanation: "PCI-DSS requires organizations that process, store, or transmit credit card data to implement specific security controls to protect cardholders.",
        correctAnswer: "To establish security requirements for organizations that process or store credit card data"
    },
    {
        id: 81,
        domain: 5,
        questionNumber: 81,
        questionText: "What is the primary purpose of an Acceptable Use Policy (AUP)?",
        type: "multiple-choice",
        options: [
            { text: "To define what employees may and may not do with company systems and resources", correct: true },
            { text: "To specify the technical security configuration standards for company-issued devices", correct: false },
            { text: "To outline the disciplinary process for employees who cause a security incident", correct: false },
            { text: "To document the minimum security awareness training requirements for all personnel", correct: false }
        ],
        explanation: "An Acceptable Use Policy outlines acceptable and unacceptable use of company technology, setting expectations for employee behavior.",
        correctAnswer: "To define what employees may and may not do with company systems and resources"
    },
    {
        id: 82,
        domain: 5,
        questionNumber: 82,
        questionText: "What is the purpose of a code of conduct?",
        type: "multiple-choice",
        options: [
            { text: "To establish ethical expectations and standards of professional behavior for employees", correct: true },
            { text: "To define technical security controls required for system and database administrators", correct: false },
            { text: "To document legal obligations related to data privacy and breach notification laws", correct: false },
            { text: "To specify acceptable methods for handling and transferring confidential company data", correct: false }
        ],
        explanation: "A code of conduct defines ethical expectations and standards for employee behavior, including how to handle conflicts of interest and confidential information.",
        correctAnswer: "To establish ethical expectations and standards of professional behavior for employees"
    },
    {
        id: 83,
        domain: 5,
        questionNumber: 83,
        questionText: "What is the purpose of a Service Level Agreement (SLA)?",
        type: "multiple-choice",
        options: [
            { text: "To define expected service quality, uptime guarantees, and remedies if targets are missed", correct: true },
            { text: "To establish the security controls a vendor must implement to protect customer data", correct: false },
            { text: "To specify how and when a vendor must notify customers about service-impacting incidents", correct: false },
            { text: "To outline each party's legal liability limits in the event of a data breach", correct: false }
        ],
        explanation: "An SLA is a contract that specifies expected service levels, uptime guarantees, performance metrics, and remedies if service levels aren't met.",
        correctAnswer: "To define expected service quality, uptime guarantees, and remedies if targets are missed"
    },
    {
        id: 84,
        domain: 5,
        questionNumber: 84,
        questionText: "What is the primary purpose of an information security governance framework?",
        type: "multiple-choice",
        options: [
            { text: "To provide organizational structure and accountability for managing information security", correct: true },
            { text: "To define specific technical controls required for each class of system", correct: false },
            { text: "To establish incident response procedures and communication escalation paths", correct: false },
            { text: "To consolidate all applicable regulatory compliance requirements in one document", correct: false }
        ],
        explanation: "An information security governance framework establishes policies, procedures, and accountability structures to manage information security strategically.",
        correctAnswer: "To provide organizational structure and accountability for managing information security"
    },
    {
        id: 85,
        domain: 5,
        questionNumber: 85,
        questionText: "What is the purpose of a privacy notice?",
        type: "multiple-choice",
        options: [
            { text: "To inform individuals how their personal data is collected, used, and protected", correct: true },
            { text: "To obtain legally binding consent before any form of user data is collected", correct: false },
            { text: "To describe the technical encryption methods applied to all personal information", correct: false },
            { text: "To notify regulators of the organization's data processing activities and lawful basis", correct: false }
        ],
        explanation: "A privacy notice informs individuals how organizations collect, use, share, and protect their personal information, often required by regulations like GDPR.",
        correctAnswer: "To inform individuals how their personal data is collected, used, and protected"
    },
    {
        id: 86,
        domain: 5,
        questionNumber: 86,
        questionText: "What is the purpose of vendor management in security?",
        type: "multiple-choice",
        options: [
            { text: "To evaluate and oversee the security posture and ongoing risks of third-party providers", correct: true },
            { text: "To negotiate favorable pricing and contract terms with technology suppliers", correct: false },
            { text: "To track software licenses and ensure compliance with vendor usage agreements", correct: false },
            { text: "To centralize procurement of all security tools through a list of approved vendors", correct: false }
        ],
        explanation: "Vendor management evaluates third-party security controls, monitors ongoing compliance, and manages the risks associated with external providers.",
        correctAnswer: "To evaluate and oversee the security posture and ongoing risks of third-party providers"
    },
    {
        id: 87,
        domain: 5,
        questionNumber: 87,
        questionText: "What is the purpose of a Business Impact Analysis (BIA)?",
        type: "multiple-choice",
        options: [
            { text: "To determine the potential impact of disruptions on critical business functions", correct: true },
            { text: "To calculate the return on investment of proposed security controls and initiatives", correct: false },
            { text: "To establish recovery time and recovery point objectives for all IT systems", correct: false },
            { text: "To assess how proposed regulatory changes may affect the organization's risk posture", correct: false }
        ],
        explanation: "A Business Impact Analysis identifies critical business functions and assesses potential consequences of disruptions to prioritize recovery efforts.",
        correctAnswer: "To determine the potential impact of disruptions on critical business functions"
    },
    {
        id: 88,
        domain: 5,
        questionNumber: 88,
        questionText: "In security compliance, what is an attestation?",
        type: "multiple-choice",
        options: [
            { text: "A formal declaration that specified security controls have been implemented and verified", correct: true },
            { text: "An automated technical scan confirming that systems meet a defined security baseline", correct: false },
            { text: "A signed legal agreement between an organization and an external regulatory authority", correct: false },
            { text: "An internal memo documenting approved exceptions to an organization's security policy", correct: false }
        ],
        explanation: "An attestation is a formal verification by an independent party that an organization has implemented specified security controls effectively.",
        correctAnswer: "A formal declaration that specified security controls have been implemented and verified"
    },
    {
        id: 89,
        domain: 5,
        questionNumber: 89,
        questionText: "What is the purpose of a security steering committee?",
        type: "multiple-choice",
        options: [
            { text: "To provide executive oversight and strategic direction for the security program", correct: true },
            { text: "To review and approve all security-related technology purchases and vendor contracts", correct: false },
            { text: "To investigate and adjudicate employee violations of security policies and procedures", correct: false },
            { text: "To manage day-to-day security operations and coordinate incident response activities", correct: false }
        ],
        explanation: "A security steering committee provides leadership, strategic direction, and oversight for an organization's security program and initiatives.",
        correctAnswer: "To provide executive oversight and strategic direction for the security program"
    },
    {
        id: 90,
        domain: 5,
        questionNumber: 90,
        questionText: "Which framework provides guidance for governing and managing IT-related risks in organizations?",
        type: "multiple-choice",
        options: [
            { text: "COBIT (Control Objectives for Information and Related Technology)", correct: true },
            { text: "ITIL (IT Infrastructure Library)", correct: false },
            { text: "TOGAF (The Open Group Architecture Framework)", correct: false },
            { text: "PRINCE2 (Projects in Controlled Environments)", correct: false }
        ],
        explanation: "COBIT is a framework developed by ISACA for governing IT and managing IT-related risks, focusing on alignment with business objectives.",
        correctAnswer: "COBIT (Control Objectives for Information and Related Technology)"
    },
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
    },
    {
        id: 177,
        domain: 1,
        questionNumber: 177,
        questionText: "In a Zero Trust Architecture, which plane is responsible for defining, managing, and enforcing user and system access policies?",
        type: "multiple-choice",
        options: [
            { text: "Data Plane", correct: false },
            { text: "Control Plane", correct: true },
            { text: "Management Plane", correct: false },
            { text: "Enforcement Plane", correct: false }
        ],
        explanation: "The Control Plane refers to the overarching framework responsible for defining, managing, and enforcing access policies, while the Data Plane ensures the policies are actually executed.",
        correctAnswer: "Control Plane"
    },
    {
        id: 178,
        domain: 2,
        questionNumber: 178,
        questionText: "Which of the following describes the use of personal or unauthorized devices and software without the explicit approval of the IT department?",
        type: "multiple-choice",
        options: [
            { text: "Bring Your Own Device (BYOD)", correct: false },
            { text: "Insider Threat", correct: false },
            { text: "Shadow IT", correct: true },
            { text: "Hacktivism", correct: false }
        ],
        explanation: "Shadow IT involves using information technology systems, devices, or applications without explicit organizational approval, often bypassing IT department protocols.",
        correctAnswer: "Shadow IT"
    },
    {
        id: 179,
        domain: 2,
        questionNumber: 179,
        questionText: "An attacker uses a voice call to trick a victim into revealing sensitive financial information. What type of social engineering attack is this?",
        type: "multiple-choice",
        options: [
            { text: "Phishing", correct: false },
            { text: "Smishing", correct: false },
            { text: "Whaling", correct: false },
            { text: "Vishing", correct: true }
        ],
        explanation: "Vishing (Voice Phishing) involves the use of voice calls to trick victims into revealing sensitive information.",
        correctAnswer: "Vishing"
    },
    {
        id: 180,
        domain: 4,
        questionNumber: 180,
        questionText: "What type of deception technology uses fake data to alert administrators when it is accessed or used by an unauthorized user?",
        type: "multiple-choice",
        options: [
            { text: "Honeyfile", correct: false },
            { text: "Honeytoken", correct: true },
            { text: "Honeypot", correct: false },
            { text: "Honeynet", correct: false }
        ],
        explanation: "A honeytoken is a piece of data or a resource that has no legitimate value but is monitored; if an attacker accesses or uses it, an alert is triggered.",
        correctAnswer: "Honeytoken"
    },
    {
        id: 181,
        domain: 3,
        questionNumber: 181,
        questionText: "An unauthorized person manages to enter a secure building by closely following an employee through an access control vestibule without the employee's consent. What is this called?",
        type: "multiple-choice",
        options: [
            { text: "Piggybacking", correct: false },
            { text: "Tailgating", correct: true },
            { text: "Dumpster Diving", correct: false },
            { text: "Shoulder Surfing", correct: false }
        ],
        explanation: "Tailgating occurs when an unauthorized person closely follows someone into a secure space without their knowledge or consent, unlike piggybacking where consent is involved.",
        correctAnswer: "Tailgating"
    },
    {
        id: 182,
        domain: 2,
        questionNumber: 182,
        questionText: "Which biometric error rate occurs when a system erroneously authenticates an unauthorized user?",
        type: "multiple-choice",
        options: [
            { text: "False Rejection Rate (FRR)", correct: false },
            { text: "Crossover Error Rate (CER)", correct: false },
            { text: "False Acceptance Rate (FAR)", correct: true },
            { text: "True Acceptance Rate (TAR)", correct: false }
        ],
        explanation: "False Acceptance Rate (FAR) occurs when the system erroneously authenticates an unauthorized user.",
        correctAnswer: "False Acceptance Rate (FAR)"
    },
    {
        id: 183,
        domain: 2,
        questionNumber: 183,
        questionText: "An attacker registers a domain name that is a common misspelling of a popular online banking site in hopes of capturing user credentials. Which attack is this?",
        type: "multiple-choice",
        options: [
            { text: "Watering Hole Attack", correct: false },
            { text: "Typosquatting", correct: true },
            { text: "Brand Impersonation", correct: false },
            { text: "Business Email Compromise", correct: false }
        ],
        explanation: "Typosquatting, or URL hijacking, involves registering domain names that are similar to popular websites but contain typographical errors to deceive users.",
        correctAnswer: "Typosquatting"
    },
    {
        id: 184,
        domain: 5,
        questionNumber: 184,
        questionText: "According to data sovereignty laws, what primary factor determines how an organization's digital information is governed?",
        type: "multiple-choice",
        options: [
            { text: "The nationality of the data owner", correct: false },
            { text: "The physical location where the data is collected or stored", correct: true },
            { text: "The encryption standard used", correct: false },
            { text: "The headquarters location of the data controller", correct: false }
        ],
        explanation: "Data sovereignty refers to the principle that digital information is subject to the laws of the country where it is located or collected.",
        correctAnswer: "The physical location where the data is collected or stored"
    },
    {
        id: 185,
        domain: 3,
        questionNumber: 185,
        questionText: "Which symmetric block cipher was adopted by the US government to replace DES and 3DES, supporting key sizes of 128, 192, and 256 bits?",
        type: "multiple-choice",
        options: [
            { text: "AES", correct: true },
            { text: "IDEA", correct: false },
            { text: "Blowfish", correct: false },
            { text: "RC4", correct: false }
        ],
        explanation: "AES (Advanced Encryption Standard) replaced DES/3DES as the standard and supports 128-bit, 192-bit, or 256-bit keys and block sizes.",
        correctAnswer: "AES"
    },
    {
        id: 186,
        domain: 5,
        questionNumber: 186,
        questionText: "If an organization purchases insurance to cover potential losses from a cyberattack, which risk management strategy are they employing?",
        type: "multiple-choice",
        options: [
            { text: "Risk Avoidance", correct: false },
            { text: "Risk Mitigation", correct: false },
            { text: "Risk Acceptance", correct: false },
            { text: "Risk Transference", correct: true }
        ],
        explanation: "Risk transference involves shifting the financial consequences of a risk to a third party, such as purchasing insurance or using contract indemnity clauses.",
        correctAnswer: "Risk Transference"
    },
    {
        id: 187,
        domain: 4,
        questionNumber: 187,
        questionText: "A piece of lightweight shellcode designed to execute on a target and retrieve additional malware tools post-infection is known as what?",
        type: "multiple-choice",
        options: [
            { text: "Stage 1 Dropper or Downloader", correct: true },
            { text: "Remote Access Trojan (RAT)", correct: false },
            { text: "Logic Bomb", correct: false },
            { text: "Keylogger", correct: false }
        ],
        explanation: "A stage 1 dropper or downloader is a lightweight shellcode whose primary function is to retrieve and install additional portions of the malware on an infected host.",
        correctAnswer: "Stage 1 Dropper or Downloader"
    },
    {
        id: 188,
        domain: 2,
        questionNumber: 188,
        questionText: "Which of the following is considered an indication of a malware attack specifically related to ransomware?",
        type: "multiple-choice",
        options: [
            { text: "Impossible Travel", correct: false },
            { text: "Resource Inaccessibility", correct: true },
            { text: "Concurrent Session Utilization", correct: false },
            { text: "Out-of-Cycle Logging", correct: false }
        ],
        explanation: "Resource inaccessibility, where a large number of files or critical systems suddenly become unavailable, often accompanied by demands for payment, is a strong indicator of a ransomware attack.",
        correctAnswer: "Resource Inaccessibility"
    },

    {
        "id": 189,
        "domain": 4,
        "questionNumber": 189,
        "questionText": "Which of the following is best described as: Protecting data and information from unauthorized access, modification, disruption, disclosure, and destruction?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Data Exfiltration",
                "correct": false
            },
            {
                "text": "Information Security",
                "correct": true
            },
            {
                "text": "Internet of Things (IoT)",
                "correct": false
            },
            {
                "text": "Threat Detection",
                "correct": false
            }
        ],
        "explanation": "Information Security is defined as Protecting data and information from unauthorized access, modification, disruption, disclosure, and destruction.",
        "correctAnswer": "Information Security"
    },
    {
        "id": 190,
        "domain": 5,
        "questionNumber": 190,
        "questionText": "Which of the following is best described as: Protecting the systems (e.g., computers, servers, network devices) that hold and process critical data?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Rootkits",
                "correct": false
            },
            {
                "text": "Information Systems Security",
                "correct": true
            },
            {
                "text": "Line Conditioners",
                "correct": false
            },
            {
                "text": "Info",
                "correct": false
            }
        ],
        "explanation": "Information Systems Security is defined as Protecting the systems (e.g., computers, servers, network devices) that hold and process critical data.",
        "correctAnswer": "Information Systems Security"
    },
    {
        "id": 191,
        "domain": 5,
        "questionNumber": 191,
        "questionText": "Which of the following is best described as: Guarantees that an action or event cannot be denied by the involved parties (e.g., digital signatures)?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Top Secret",
                "correct": false
            },
            {
                "text": "Non-Repudiation",
                "correct": true
            },
            {
                "text": "DNS Poisoning",
                "correct": false
            },
            {
                "text": "Partially Known Environment",
                "correct": false
            }
        ],
        "explanation": "Non-Repudiation is defined as Guarantees that an action or event cannot be denied by the involved parties (e.g., digital signatures).",
        "correctAnswer": "Non-Repudiation"
    },
    {
        "id": 192,
        "domain": 5,
        "questionNumber": 192,
        "questionText": "Which of the following is best described as: An extension of the CIA triad with the addition of non-repudiation and authentication?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Load Balancing",
                "correct": false
            },
            {
                "text": "CIANA Pentagon",
                "correct": true
            },
            {
                "text": "Storage DLP System",
                "correct": false
            },
            {
                "text": "Onsite Backup",
                "correct": false
            }
        ],
        "explanation": "CIANA Pentagon is defined as An extension of the CIA triad with the addition of non-repudiation and authentication.",
        "correctAnswer": "CIANA Pentagon"
    },
    {
        "id": 193,
        "domain": 2,
        "questionNumber": 193,
        "questionText": "Which of the following is best described as: Technical?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Destruction",
                "correct": false
            },
            {
                "text": "Security Control",
                "correct": true
            },
            {
                "text": "Compliance Requirements",
                "correct": false
            },
            {
                "text": "Data Ownership",
                "correct": false
            }
        ],
        "explanation": "Security Control is defined as Technical.",
        "correctAnswer": "Security Control"
    },
    {
        "id": 194,
        "domain": 5,
        "questionNumber": 194,
        "questionText": "Which of the following is best described as: Preventative?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "XML Injection",
                "correct": false
            },
            {
                "text": "Risk Register",
                "correct": false
            },
            {
                "text": "DAC (Discretionary Access Control)",
                "correct": false
            },
            {
                "text": "Security Control",
                "correct": true
            }
        ],
        "explanation": "Security Control is defined as Preventative.",
        "correctAnswer": "Security Control"
    },
    {
        "id": 195,
        "domain": 5,
        "questionNumber": 195,
        "questionText": "Which of the following is best described as: Operates on the principle that no one should be trusted by default?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Database Encryption",
                "correct": false
            },
            {
                "text": "Risk Analysis",
                "correct": false
            },
            {
                "text": "Tabletop Exercise (TTX)",
                "correct": false
            },
            {
                "text": "Zero Trust Model",
                "correct": true
            }
        ],
        "explanation": "Zero Trust Model is defined as Operates on the principle that no one should be trusted by default.",
        "correctAnswer": "Zero Trust Model"
    },
    {
        "id": 196,
        "domain": 3,
        "questionNumber": 196,
        "questionText": "Which of the following is best described as: Adaptive identity, threat scope reduction, policy-driven access control, and secured zones?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Hardware Token",
                "correct": false
            },
            {
                "text": "Firewalls",
                "correct": false
            },
            {
                "text": "Control Plane",
                "correct": true
            },
            {
                "text": "Least Functionality",
                "correct": false
            }
        ],
        "explanation": "Control Plane is defined as Adaptive identity, threat scope reduction, policy-driven access control, and secured zones.",
        "correctAnswer": "Control Plane"
    },
    {
        "id": 197,
        "domain": 4,
        "questionNumber": 197,
        "questionText": "Which of the following is best described as: Subject/system, policy engine, policy administrator, and establishing policy enforcement points?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Threat Intelligence Feeds",
                "correct": false
            },
            {
                "text": "Risk Treatment",
                "correct": false
            },
            {
                "text": "Data Plane",
                "correct": true
            },
            {
                "text": "Cookies",
                "correct": false
            }
        ],
        "explanation": "Data Plane is defined as Subject/system, policy engine, policy administrator, and establishing policy enforcement points.",
        "correctAnswer": "Data Plane"
    },
    {
        "id": 198,
        "domain": 5,
        "questionNumber": 198,
        "questionText": "Which of the following is best described as: Anything that could cause harm, loss, damage, or compromise to our information technology systems?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Regulated Data",
                "correct": false
            },
            {
                "text": "WPA (Wi-Fi Protected Access)",
                "correct": false
            },
            {
                "text": "Transport Mode",
                "correct": false
            },
            {
                "text": "Threat",
                "correct": true
            }
        ],
        "explanation": "Threat is defined as Anything that could cause harm, loss, damage, or compromise to our information technology systems.",
        "correctAnswer": "Threat"
    },
    {
        "id": 199,
        "domain": 3,
        "questionNumber": 199,
        "questionText": "Which of the following is best described as: Any weakness in the system design or implementation?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Capacity Planning",
                "correct": false
            },
            {
                "text": "Somewhere You Are (Location-Based Factor)",
                "correct": false
            },
            {
                "text": "Surveillance Systems",
                "correct": false
            },
            {
                "text": "Vulnerability",
                "correct": true
            }
        ],
        "explanation": "Vulnerability is defined as Any weakness in the system design or implementation.",
        "correctAnswer": "Vulnerability"
    },
    {
        "id": 200,
        "domain": 3,
        "questionNumber": 200,
        "questionText": "Which of the following is best described as: Where *threats* and *vulnerabilities* **intersect**, that is where the <ins>risk</ins> to your enterprise systems and networks lies?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Cookie Poisoning",
                "correct": false
            },
            {
                "text": "Shellcode",
                "correct": false
            },
            {
                "text": "True Positive",
                "correct": false
            },
            {
                "text": "Risk",
                "correct": true
            }
        ],
        "explanation": "Risk is defined as Where *threats* and *vulnerabilities* **intersect**, that is where the <ins>risk</ins> to your enterprise systems and networks lies.",
        "correctAnswer": "Risk"
    },
    {
        "id": 201,
        "domain": 5,
        "questionNumber": 201,
        "questionText": "Which of the following is best described as: <ins>then you have no risk</ins>?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Threat Vector",
                "correct": false
            },
            {
                "text": "SOAR (Security Orchestration, Automation, and Response)",
                "correct": false
            },
            {
                "text": "Third-party Vendor Risks",
                "correct": false
            },
            {
                "text": "vulnerability",
                "correct": true
            }
        ],
        "explanation": "vulnerability is defined as <ins>then you have no risk</ins>.",
        "correctAnswer": "vulnerability"
    },
    {
        "id": 202,
        "domain": 4,
        "questionNumber": 202,
        "questionText": "Which of the following is best described as: Finding ways to manipulate outcomes in your favor?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Internal Audits",
                "correct": false
            },
            {
                "text": "Risk Management",
                "correct": true
            },
            {
                "text": "Log Files",
                "correct": false
            },
            {
                "text": "VeraCrypt",
                "correct": false
            }
        ],
        "explanation": "Risk Management is defined as Finding ways to manipulate outcomes in your favor.",
        "correctAnswer": "Risk Management"
    },
    {
        "id": 203,
        "domain": 3,
        "questionNumber": 203,
        "questionText": "Which of the following is best described as: Refers to the protection of information from unauthorized access and disclosure?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Confidentiality",
                "correct": true
            },
            {
                "text": "Authorization",
                "correct": false
            },
            {
                "text": "Ransomware",
                "correct": false
            },
            {
                "text": "Adaptive Identity",
                "correct": false
            }
        ],
        "explanation": "Confidentiality is defined as Refers to the protection of information from unauthorized access and disclosure.",
        "correctAnswer": "Confidentiality"
    },
    {
        "id": 204,
        "domain": 3,
        "questionNumber": 204,
        "questionText": "Which of the following is best described as: Process of converting data into a code to prevent unauthorized access?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Shellcode",
                "correct": false
            },
            {
                "text": "Encryption",
                "correct": true
            },
            {
                "text": "Automation",
                "correct": false
            },
            {
                "text": "Hardware Vulnerabilities",
                "correct": false
            }
        ],
        "explanation": "Encryption is defined as Process of converting data into a code to prevent unauthorized access.",
        "correctAnswer": "Encryption"
    },
    {
        "id": 205,
        "domain": 5,
        "questionNumber": 205,
        "questionText": "Which of the following is best described as: By setting up strong user permissions, you ensure that only authorized personnel can access certain types data?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Access Controls",
                "correct": true
            },
            {
                "text": "Data Plane (Forwarding Plane)",
                "correct": false
            },
            {
                "text": "Operational Controls",
                "correct": false
            },
            {
                "text": "Privilege Escalation",
                "correct": false
            }
        ],
        "explanation": "Access Controls is defined as By setting up strong user permissions, you ensure that only authorized personnel can access certain types data.",
        "correctAnswer": "Access Controls"
    },
    {
        "id": 206,
        "domain": 1,
        "questionNumber": 206,
        "questionText": "Which of the following is best described as: Method that involves obscuring specific data within a database to make it inaccessible for unauthorized users while retaining the real data's authenticity and use for authorized users?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Qualitative Risk Analysis",
                "correct": false
            },
            {
                "text": "Data Masking",
                "correct": true
            },
            {
                "text": "Managerial Controls",
                "correct": false
            },
            {
                "text": "Decentralized",
                "correct": false
            }
        ],
        "explanation": "Data Masking is defined as Method that involves obscuring specific data within a database to make it inaccessible for unauthorized users while retaining the real data's authenticity and use for authorized users.",
        "correctAnswer": "Data Masking"
    },
    {
        "id": 207,
        "domain": 2,
        "questionNumber": 207,
        "questionText": "Which of the following is best described as: Ensure confidentiality for both physical types of data, such as paper records stored in a filing cabinet, and for digital information contained on servers and workstations?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Reporting",
                "correct": false
            },
            {
                "text": "Virtual Cold Site",
                "correct": false
            },
            {
                "text": "Physical Security Measures",
                "correct": true
            },
            {
                "text": "Impact Analysis",
                "correct": false
            }
        ],
        "explanation": "Physical Security Measures is defined as Ensure confidentiality for both physical types of data, such as paper records stored in a filing cabinet, and for digital information contained on servers and workstations.",
        "correctAnswer": "Physical Security Measures"
    },
    {
        "id": 208,
        "domain": 2,
        "questionNumber": 208,
        "questionText": "Which of the following is best described as: Conduct regular training on the security awareness best practices that employees can use to protect their organization\u2019s sensitive data?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "IDEA (International Data Encryption Algorithm)",
                "correct": false
            },
            {
                "text": "Anomaly-based IDS",
                "correct": false
            },
            {
                "text": "Sanctions",
                "correct": false
            },
            {
                "text": "Training and Awareness",
                "correct": true
            }
        ],
        "explanation": "Training and Awareness is defined as Conduct regular training on the security awareness best practices that employees can use to protect their organization\u2019s sensitive data.",
        "correctAnswer": "Training and Awareness"
    },
    {
        "id": 209,
        "domain": 2,
        "questionNumber": 209,
        "questionText": "Which of the following is best described as: Helps ensure that information and data remain accurate and unchanged from its original state unless intentionally modified by an authorized individual?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Hot Sites",
                "correct": false
            },
            {
                "text": "Qualitative Risk Analysis",
                "correct": false
            },
            {
                "text": "Integrity",
                "correct": true
            },
            {
                "text": "Data Ownership",
                "correct": false
            }
        ],
        "explanation": "Integrity is defined as Helps ensure that information and data remain accurate and unchanged from its original state unless intentionally modified by an authorized individual.",
        "correctAnswer": "Integrity"
    },
    {
        "id": 210,
        "domain": 4,
        "questionNumber": 210,
        "questionText": "Which of the following is best described as: Process of converting data into a fixed-size value?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Individual Purchase",
                "correct": false
            },
            {
                "text": "Hashing",
                "correct": true
            },
            {
                "text": "Access Control Vestibules",
                "correct": false
            },
            {
                "text": "Script Kiddie",
                "correct": false
            }
        ],
        "explanation": "Hashing is defined as Process of converting data into a fixed-size value.",
        "correctAnswer": "Hashing"
    },
    {
        "id": 211,
        "domain": 4,
        "questionNumber": 211,
        "questionText": "Which of the following is best described as: Ensure both integrity and authenticity?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Supervisory Control and Data Acquisition (SCADA) Systems",
                "correct": false
            },
            {
                "text": "ARF (Asset Reporting Format)",
                "correct": false
            },
            {
                "text": "Record Encryption",
                "correct": false
            },
            {
                "text": "Digital Signatures",
                "correct": true
            }
        ],
        "explanation": "Digital Signatures is defined as Ensure both integrity and authenticity.",
        "correctAnswer": "Digital Signatures"
    },
    {
        "id": 212,
        "domain": 2,
        "questionNumber": 212,
        "questionText": "Which of the following is best described as: Method to verify the integrity of data during transmission?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Unknown Environment",
                "correct": false
            },
            {
                "text": "TPM (Trusted Platform Module)",
                "correct": false
            },
            {
                "text": "Checksums",
                "correct": true
            },
            {
                "text": "Operating System Vulnerabilities",
                "correct": false
            }
        ],
        "explanation": "Checksums is defined as Method to verify the integrity of data during transmission.",
        "correctAnswer": "Checksums"
    },
    {
        "id": 213,
        "domain": 2,
        "questionNumber": 213,
        "questionText": "Which of the following is best described as: Ensure that only authorized individuals can modify data and this reduces the risk of unintentional or malicious alterations?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Offsite Backup",
                "correct": false
            },
            {
                "text": "Qubit",
                "correct": false
            },
            {
                "text": "Access Controls",
                "correct": true
            },
            {
                "text": "Analysis",
                "correct": false
            }
        ],
        "explanation": "Access Controls is defined as Ensure that only authorized individuals can modify data and this reduces the risk of unintentional or malicious alterations.",
        "correctAnswer": "Access Controls"
    },
    {
        "id": 214,
        "domain": 3,
        "questionNumber": 214,
        "questionText": "Which of the following is best described as: Involve systematically reviewing logs and operations to ensure that only authorized changes have been made, and any discrepancies are immediately addressed?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Policy",
                "correct": false
            },
            {
                "text": "Management Frame Protection",
                "correct": false
            },
            {
                "text": "Regular Audits",
                "correct": true
            },
            {
                "text": "Recovery Time Objective (RTO)",
                "correct": false
            }
        ],
        "explanation": "Regular Audits is defined as Involve systematically reviewing logs and operations to ensure that only authorized changes have been made, and any discrepancies are immediately addressed.",
        "correctAnswer": "Regular Audits"
    },
    {
        "id": 215,
        "domain": 1,
        "questionNumber": 215,
        "questionText": "Which of the following is best described as: Ensure that information, systems, and resources are accessible and operational when needed by authorized users?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "DLL Injection",
                "correct": false
            },
            {
                "text": "Availability",
                "correct": true
            },
            {
                "text": "Rings 1 to 3",
                "correct": false
            },
            {
                "text": "Network Appliance",
                "correct": false
            }
        ],
        "explanation": "Availability is defined as Ensure that information, systems, and resources are accessible and operational when needed by authorized users.",
        "correctAnswer": "Availability"
    },
    {
        "id": 216,
        "domain": 4,
        "questionNumber": 216,
        "questionText": "Which of the following is best described as: Duplication of critical components or functions of a system with the intention of enhancing its reliability?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Redundancy",
                "correct": true
            },
            {
                "text": "Spyware and Bloatware",
                "correct": false
            },
            {
                "text": "Threat Intelligence Feeds",
                "correct": false
            },
            {
                "text": "Runbook",
                "correct": false
            }
        ],
        "explanation": "Redundancy is defined as Duplication of critical components or functions of a system with the intention of enhancing its reliability.",
        "correctAnswer": "Redundancy"
    },
    {
        "id": 217,
        "domain": 3,
        "questionNumber": 217,
        "questionText": "Which of the following is best described as: Involves using multiple servers in a load balanced or failover configuration so that if one is overloaded or fails, the other servers can take over the load to continue supporting your end users?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Risk Identification",
                "correct": false
            },
            {
                "text": "Recovery",
                "correct": false
            },
            {
                "text": "Risk",
                "correct": false
            },
            {
                "text": "Server Redundancy",
                "correct": true
            }
        ],
        "explanation": "Server Redundancy is defined as Involves using multiple servers in a load balanced or failover configuration so that if one is overloaded or fails, the other servers can take over the load to continue supporting your end users.",
        "correctAnswer": "Server Redundancy"
    },
    {
        "id": 218,
        "domain": 3,
        "questionNumber": 218,
        "questionText": "Which of the following is best described as: Involves storing data in multiple places?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Defensive Penetration Testing",
                "correct": false
            },
            {
                "text": "Risk Tolerance/Risk Acceptance",
                "correct": false
            },
            {
                "text": "Data Redundancy",
                "correct": true
            },
            {
                "text": "Simulations",
                "correct": false
            }
        ],
        "explanation": "Data Redundancy is defined as Involves storing data in multiple places.",
        "correctAnswer": "Data Redundancy"
    },
    {
        "id": 219,
        "domain": 1,
        "questionNumber": 219,
        "questionText": "Which of the following is best described as: Ensures that if one network path fails, the data can travel through another route?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Bluebugging",
                "correct": false
            },
            {
                "text": "Asset Monitoring",
                "correct": false
            },
            {
                "text": "OID (Object Identifier)",
                "correct": false
            },
            {
                "text": "Network Redundancy",
                "correct": true
            }
        ],
        "explanation": "Network Redundancy is defined as Ensures that if one network path fails, the data can travel through another route.",
        "correctAnswer": "Network Redundancy"
    },
    {
        "id": 220,
        "domain": 2,
        "questionNumber": 220,
        "questionText": "Which of the following is best described as: Involves using backup power sources, like generators and UPS systems?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "GET",
                "correct": false
            },
            {
                "text": "Asymmetric Encryption",
                "correct": false
            },
            {
                "text": "Power Redundancy",
                "correct": true
            },
            {
                "text": "Risk Assessment",
                "correct": false
            }
        ],
        "explanation": "Power Redundancy is defined as Involves using backup power sources, like generators and UPS systems.",
        "correctAnswer": "Power Redundancy"
    },
    {
        "id": 221,
        "domain": 1,
        "questionNumber": 221,
        "questionText": "Which of the following is best described as: Provides undeniable proof of participation in digital transactions?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Responsibility Matrix",
                "correct": false
            },
            {
                "text": "Bluesmack",
                "correct": false
            },
            {
                "text": "Virtual Cold Site",
                "correct": false
            },
            {
                "text": "Non-repudiation",
                "correct": true
            }
        ],
        "explanation": "Non-repudiation is defined as Provides undeniable proof of participation in digital transactions.",
        "correctAnswer": "Non-repudiation"
    },
    {
        "id": 222,
        "domain": 2,
        "questionNumber": 222,
        "questionText": "Which of the following is best described as: Unique to each user who is operating in the digital domain?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Digital Signatures",
                "correct": true
            },
            {
                "text": "SFlow (Sampled Flow)",
                "correct": false
            },
            {
                "text": "BlueSmack",
                "correct": false
            },
            {
                "text": "Boot Sector",
                "correct": false
            }
        ],
        "explanation": "Digital Signatures is defined as Unique to each user who is operating in the digital domain.",
        "correctAnswer": "Digital Signatures"
    },
    {
        "id": 223,
        "domain": 1,
        "questionNumber": 223,
        "questionText": "Which of the following is best described as: Security measure that ensures individuals or entities **are who they claim to be** during a communication or transaction?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Attack Surface",
                "correct": false
            },
            {
                "text": "Authentication",
                "correct": true
            },
            {
                "text": "MOU",
                "correct": false
            },
            {
                "text": "Procedures",
                "correct": false
            }
        ],
        "explanation": "Authentication is defined as Security measure that ensures individuals or entities **are who they claim to be** during a communication or transaction.",
        "correctAnswer": "Authentication"
    },
    {
        "id": 224,
        "domain": 3,
        "questionNumber": 224,
        "questionText": "Which of the following is best described as: Security process that requires users to provide multiple methods of identification to verify their identity?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Multi-Factor Authentication System (MFA)",
                "correct": true
            },
            {
                "text": "Inbound",
                "correct": false
            },
            {
                "text": "Command Injection",
                "correct": false
            },
            {
                "text": "Standards",
                "correct": false
            }
        ],
        "explanation": "Multi-Factor Authentication System (MFA) is defined as Security process that requires users to provide multiple methods of identification to verify their identity.",
        "correctAnswer": "Multi-Factor Authentication System (MFA)"
    },
    {
        "id": 225,
        "domain": 4,
        "questionNumber": 225,
        "questionText": "Which of the following is best described as: Pertains to the permissions and privileges granted to users or entities after they have been authenticated?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Replication",
                "correct": false
            },
            {
                "text": "DNS Filtering",
                "correct": false
            },
            {
                "text": "Data-at-rest Encryption",
                "correct": false
            },
            {
                "text": "Authorization",
                "correct": true
            }
        ],
        "explanation": "Authorization is defined as Pertains to the permissions and privileges granted to users or entities after they have been authenticated.",
        "correctAnswer": "Authorization"
    },
    {
        "id": 226,
        "domain": 2,
        "questionNumber": 226,
        "questionText": "Which of the following is best described as: Security measure that ensures all user activities during a communication or transaction are properly tracked and recorded?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Control Risk",
                "correct": false
            },
            {
                "text": "Accounting",
                "correct": true
            },
            {
                "text": "Unclassified",
                "correct": false
            },
            {
                "text": "Medium Impact",
                "correct": false
            }
        ],
        "explanation": "Accounting is defined as Security measure that ensures all user activities during a communication or transaction are properly tracked and recorded.",
        "correctAnswer": "Accounting"
    },
    {
        "id": 227,
        "domain": 1,
        "questionNumber": 227,
        "questionText": "Which of the following is best described as: Various tools and systems assist in implementing effective accounting processes:?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Risk Identification",
                "correct": false
            },
            {
                "text": "Offsite Backup",
                "correct": false
            },
            {
                "text": "Recovery Point Objective (RPO)",
                "correct": false
            },
            {
                "text": "Technologies Used for Accounting",
                "correct": true
            }
        ],
        "explanation": "Technologies Used for Accounting is defined as Various tools and systems assist in implementing effective accounting processes:.",
        "correctAnswer": "Technologies Used for Accounting"
    },
    {
        "id": 228,
        "domain": 1,
        "questionNumber": 228,
        "questionText": "Which of the following is best described as: Technologies, hardware, and software mechanisms that are implemented to manage and reduce risks?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Technical Controls",
                "correct": true
            },
            {
                "text": "Root of Trust",
                "correct": false
            },
            {
                "text": "Quantitative Risk Analysis",
                "correct": false
            },
            {
                "text": "Nonces (Number Used Once)",
                "correct": false
            }
        ],
        "explanation": "Technical Controls is defined as Technologies, hardware, and software mechanisms that are implemented to manage and reduce risks.",
        "correctAnswer": "Technical Controls"
    },
    {
        "id": 229,
        "domain": 3,
        "questionNumber": 229,
        "questionText": "Which of the following is best described as: Sometimes also referred to as <ins>administrative controls</ins>?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "SAN (Subject Alternate Name) field",
                "correct": false
            },
            {
                "text": "Managerial Controls",
                "correct": true
            },
            {
                "text": "Hybrid Attack",
                "correct": false
            },
            {
                "text": "Simultaneous Authentication of Equals (SAE)",
                "correct": false
            }
        ],
        "explanation": "Managerial Controls is defined as Sometimes also referred to as <ins>administrative controls</ins>.",
        "correctAnswer": "Managerial Controls"
    },
    {
        "id": 230,
        "domain": 5,
        "questionNumber": 230,
        "questionText": "Which of the following is best described as: Procedures and measures that are designed to protect data on a day-to-day basis?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Data Acquisition",
                "correct": false
            },
            {
                "text": "Operational Controls",
                "correct": true
            },
            {
                "text": "Identifying and Integrating Data Sources",
                "correct": false
            },
            {
                "text": "Encryption",
                "correct": false
            }
        ],
        "explanation": "Operational Controls is defined as Procedures and measures that are designed to protect data on a day-to-day basis.",
        "correctAnswer": "Operational Controls"
    },
    {
        "id": 231,
        "domain": 5,
        "questionNumber": 231,
        "questionText": "Which of the following is best described as: Tangible, real-world measures taken to protect assets?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Rules of Engagement",
                "correct": false
            },
            {
                "text": "Physical Controls",
                "correct": true
            },
            {
                "text": "Shadow IT",
                "correct": false
            },
            {
                "text": "Indicators of Compromise (IoC)",
                "correct": false
            }
        ],
        "explanation": "Physical Controls is defined as Tangible, real-world measures taken to protect assets.",
        "correctAnswer": "Physical Controls"
    },
    {
        "id": 232,
        "domain": 2,
        "questionNumber": 232,
        "questionText": "Which of the following is best described as: Proactive measures implemented to thwart potential security threats or breaches?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Examinations",
                "correct": false
            },
            {
                "text": "Preventive Controls",
                "correct": true
            },
            {
                "text": "Virtual Cold Site",
                "correct": false
            },
            {
                "text": "Full Tunnel VPN",
                "correct": false
            }
        ],
        "explanation": "Preventive Controls is defined as Proactive measures implemented to thwart potential security threats or breaches.",
        "correctAnswer": "Preventive Controls"
    },
    {
        "id": 233,
        "domain": 5,
        "questionNumber": 233,
        "questionText": "Which of the following is best described as: Discourage potential attackers by making the effort seem less appealing or more challenging?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Espionage",
                "correct": false
            },
            {
                "text": "Data Sovereignty",
                "correct": false
            },
            {
                "text": "Training and Awareness",
                "correct": false
            },
            {
                "text": "Deterrent Controls",
                "correct": true
            }
        ],
        "explanation": "Deterrent Controls is defined as Discourage potential attackers by making the effort seem less appealing or more challenging.",
        "correctAnswer": "Deterrent Controls"
    },
    {
        "id": 234,
        "domain": 5,
        "questionNumber": 234,
        "questionText": "Which of the following is best described as: Monitor and alert organizations to malicious activities as they occur or shortly thereafter?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Detective Controls",
                "correct": true
            },
            {
                "text": "Risk Identification",
                "correct": false
            },
            {
                "text": "Policy-Driven Access Control",
                "correct": false
            },
            {
                "text": "Assessments",
                "correct": false
            }
        ],
        "explanation": "Detective Controls is defined as Monitor and alert organizations to malicious activities as they occur or shortly thereafter.",
        "correctAnswer": "Detective Controls"
    },
    {
        "id": 235,
        "domain": 4,
        "questionNumber": 235,
        "questionText": "Which of the following is best described as: Mitigate any potential damage and restore systems to their normal state?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "User Account Control (UAC)",
                "correct": false
            },
            {
                "text": "Session Prediction Attacks",
                "correct": false
            },
            {
                "text": "Corrective Controls",
                "correct": true
            },
            {
                "text": "Malware",
                "correct": false
            }
        ],
        "explanation": "Corrective Controls is defined as Mitigate any potential damage and restore systems to their normal state.",
        "correctAnswer": "Corrective Controls"
    },
    {
        "id": 236,
        "domain": 4,
        "questionNumber": 236,
        "questionText": "Which of the following is best described as: Alternative measures implemented when primary security controls are not feasible or effective?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Appendices",
                "correct": false
            },
            {
                "text": "Compensating Controls",
                "correct": true
            },
            {
                "text": "Reputation-Based Filtering",
                "correct": false
            },
            {
                "text": "Hardware Token",
                "correct": false
            }
        ],
        "explanation": "Compensating Controls is defined as Alternative measures implemented when primary security controls are not feasible or effective.",
        "correctAnswer": "Compensating Controls"
    },
    {
        "id": 237,
        "domain": 5,
        "questionNumber": 237,
        "questionText": "Which of the following is best described as: Guide, inform, or mandate actions?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Directive Controls",
                "correct": true
            },
            {
                "text": "Single Sign-On (SSO)",
                "correct": false
            },
            {
                "text": "Redundant Site",
                "correct": false
            },
            {
                "text": "Business Continuity Planning (BC Plan)",
                "correct": false
            }
        ],
        "explanation": "Directive Controls is defined as Guide, inform, or mandate actions.",
        "correctAnswer": "Directive Controls"
    },
    {
        "id": 238,
        "domain": 4,
        "questionNumber": 238,
        "questionText": "Which of the following is best described as: Process of evaluating the differences between an organization's current performance and its desired performance?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Gap Analysis",
                "correct": true
            },
            {
                "text": "Level Context",
                "correct": false
            },
            {
                "text": "SET",
                "correct": false
            },
            {
                "text": "Metasploit",
                "correct": false
            }
        ],
        "explanation": "Gap Analysis is defined as Process of evaluating the differences between an organization's current performance and its desired performance.",
        "correctAnswer": "Gap Analysis"
    },
    {
        "id": 239,
        "domain": 4,
        "questionNumber": 239,
        "questionText": "Which of the following is best described as: A structured framework to address identified gaps:?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Host-based IDS (HIDS)",
                "correct": false
            },
            {
                "text": "Data Collection",
                "correct": false
            },
            {
                "text": "Directory Traversal Attacks",
                "correct": false
            },
            {
                "text": "Plan of Action and Milestones (POA&M)",
                "correct": true
            }
        ],
        "explanation": "Plan of Action and Milestones (POA&M) is defined as A structured framework to address identified gaps:.",
        "correctAnswer": "Plan of Action and Milestones (POA&M)"
    },
    {
        "id": 240,
        "domain": 2,
        "questionNumber": 240,
        "questionText": "Which of the following is best described as: Relies on real-time validation that takes into account the user's behavior, device, location, and more?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Adaptive Identity",
                "correct": true
            },
            {
                "text": "Split Tunnel VPN",
                "correct": false
            },
            {
                "text": "Resilience Testing",
                "correct": false
            },
            {
                "text": "Layer 7 Firewall",
                "correct": false
            }
        ],
        "explanation": "Adaptive Identity is defined as Relies on real-time validation that takes into account the user's behavior, device, location, and more.",
        "correctAnswer": "Adaptive Identity"
    },
    {
        "id": 241,
        "domain": 2,
        "questionNumber": 241,
        "questionText": "Which of the following is best described as: Limits the users\u2019 access to only what they need for their work tasks because this reduces the network\u2019s potential attack surface?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Obfuscation",
                "correct": false
            },
            {
                "text": "LDAP (Lightweight Directory Access Protocol)",
                "correct": false
            },
            {
                "text": "Threat Scope Reduction",
                "correct": true
            },
            {
                "text": "Detection",
                "correct": false
            }
        ],
        "explanation": "Threat Scope Reduction is defined as Limits the users\u2019 access to only what they need for their work tasks because this reduces the network\u2019s potential attack surface.",
        "correctAnswer": "Threat Scope Reduction"
    },
    {
        "id": 242,
        "domain": 3,
        "questionNumber": 242,
        "questionText": "Which of the following is best described as: Entails developing, managing, and enforcing user access policies based on their roles and responsibilities?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Network Segmentation",
                "correct": false
            },
            {
                "text": "Honeynets",
                "correct": false
            },
            {
                "text": "Policy-Driven Access Control",
                "correct": true
            },
            {
                "text": "Cross-Site Scripting (XSS)",
                "correct": false
            }
        ],
        "explanation": "Policy-Driven Access Control is defined as Entails developing, managing, and enforcing user access policies based on their roles and responsibilities.",
        "correctAnswer": "Policy-Driven Access Control"
    },
    {
        "id": 243,
        "domain": 5,
        "questionNumber": 243,
        "questionText": "Which of the following is best described as: Isolated environments within a network that are designed to house sensitive data?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Secured Zones",
                "correct": true
            },
            {
                "text": "Failover Tests",
                "correct": false
            },
            {
                "text": "Hardware Attestation",
                "correct": false
            },
            {
                "text": "Risk Management",
                "correct": false
            }
        ],
        "explanation": "Secured Zones is defined as Isolated environments within a network that are designed to house sensitive data.",
        "correctAnswer": "Secured Zones"
    },
    {
        "id": 244,
        "domain": 1,
        "questionNumber": 244,
        "questionText": "Which of the following is best described as: Refers to the individual or entity attempting to gain access?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Reputational Damage",
                "correct": false
            },
            {
                "text": "SQL Injection",
                "correct": false
            },
            {
                "text": "Subject/System",
                "correct": true
            },
            {
                "text": "Manual Monitoring",
                "correct": false
            }
        ],
        "explanation": "Subject/System is defined as Refers to the individual or entity attempting to gain access.",
        "correctAnswer": "Subject/System"
    },
    {
        "id": 245,
        "domain": 5,
        "questionNumber": 245,
        "questionText": "Which of the following is best described as: Cross-references the access request with its predefined policies?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Report period",
                "correct": false
            },
            {
                "text": "Policy Engine",
                "correct": true
            },
            {
                "text": "Targeted Policies",
                "correct": false
            },
            {
                "text": "Full Packet Capture (FPC)",
                "correct": false
            }
        ],
        "explanation": "Policy Engine is defined as Cross-references the access request with its predefined policies.",
        "correctAnswer": "Policy Engine"
    },
    {
        "id": 246,
        "domain": 1,
        "questionNumber": 246,
        "questionText": "Which of the following is best described as: Used to establish and manage the access policies?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Impossible Travel",
                "correct": false
            },
            {
                "text": "Hybrid Attack",
                "correct": false
            },
            {
                "text": "Vulnerability Response and Remediation",
                "correct": false
            },
            {
                "text": "Policy Administrator",
                "correct": true
            }
        ],
        "explanation": "Policy Administrator is defined as Used to establish and manage the access policies.",
        "correctAnswer": "Policy Administrator"
    },
    {
        "id": 247,
        "domain": 3,
        "questionNumber": 247,
        "questionText": "Which of the following is best described as: Where the decision to grant or deny access is actually execute?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Policy Enforcement Point",
                "correct": true
            },
            {
                "text": "Procedures",
                "correct": false
            },
            {
                "text": "Business Impact Analysis (BIA)",
                "correct": false
            },
            {
                "text": "Honeytokens",
                "correct": false
            }
        ],
        "explanation": "Policy Enforcement Point is defined as Where the decision to grant or deny access is actually execute.",
        "correctAnswer": "Policy Enforcement Point"
    },
    {
        "id": 248,
        "domain": 3,
        "questionNumber": 248,
        "questionText": "Which of the following is best described as: Limited technical expertise, use readily available tools?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Data Consolidation",
                "correct": false
            },
            {
                "text": "Unskilled Attackers",
                "correct": true
            },
            {
                "text": "Mandatory Access Control (MAC)",
                "correct": false
            },
            {
                "text": "Application Plane",
                "correct": false
            }
        ],
        "explanation": "Unskilled Attackers is defined as Limited technical expertise, use readily available tools.",
        "correctAnswer": "Unskilled Attackers"
    },
    {
        "id": 249,
        "domain": 4,
        "questionNumber": 249,
        "questionText": "Which of the following is best described as: Driven by political, social, or environmental ideologies?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Session Management",
                "correct": false
            },
            {
                "text": "Insurance Policy",
                "correct": false
            },
            {
                "text": "Hybrid Solutions",
                "correct": false
            },
            {
                "text": "Hacktivists",
                "correct": true
            }
        ],
        "explanation": "Hacktivists is defined as Driven by political, social, or environmental ideologies.",
        "correctAnswer": "Hacktivists"
    },
    {
        "id": 250,
        "domain": 3,
        "questionNumber": 250,
        "questionText": "Which of the following is best described as: Execute cyberattacks for financial gain (e.g., ransomware, identity theft)?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Overwriting",
                "correct": false
            },
            {
                "text": "Tabletop Exercise (TTX)",
                "correct": false
            },
            {
                "text": "Organized Crime",
                "correct": true
            },
            {
                "text": "WPA2 (Wi-Fi Protected Access 2)",
                "correct": false
            }
        ],
        "explanation": "Organized Crime is defined as Execute cyberattacks for financial gain (e.g., ransomware, identity theft).",
        "correctAnswer": "Organized Crime"
    },
    {
        "id": 251,
        "domain": 2,
        "questionNumber": 251,
        "questionText": "Which of the following is best described as: Highly skilled attackers sponsored by governments for cyber espionage or warfare?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Manual Monitoring",
                "correct": false
            },
            {
                "text": "Network DLP System",
                "correct": false
            },
            {
                "text": "Nation-state Actor",
                "correct": true
            },
            {
                "text": "Business Partnership Agreement (BPA) or Joint Venture Agreement (JV)",
                "correct": false
            }
        ],
        "explanation": "Nation-state Actor is defined as Highly skilled attackers sponsored by governments for cyber espionage or warfare.",
        "correctAnswer": "Nation-state Actor"
    },
    {
        "id": 252,
        "domain": 3,
        "questionNumber": 252,
        "questionText": "Which of the following is best described as: Security threats originating from within the organization?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Session Management",
                "correct": false
            },
            {
                "text": "Insider Threats",
                "correct": true
            },
            {
                "text": "Dark Web",
                "correct": false
            },
            {
                "text": "LDAP Injection",
                "correct": false
            }
        ],
        "explanation": "Insider Threats is defined as Security threats originating from within the organization.",
        "correctAnswer": "Insider Threats"
    },
    {
        "id": 253,
        "domain": 2,
        "questionNumber": 253,
        "questionText": "Which of the following is best described as: IT systems, devices, software, or services managed without explicit organizational approval?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Top Secret",
                "correct": false
            },
            {
                "text": "Shadow IT",
                "correct": true
            },
            {
                "text": "Telnet",
                "correct": false
            },
            {
                "text": "Disaster Recovery Plan (DRP)",
                "correct": false
            }
        ],
        "explanation": "Shadow IT is defined as IT systems, devices, software, or services managed without explicit organizational approval.",
        "correctAnswer": "Shadow IT"
    },
    {
        "id": 254,
        "domain": 4,
        "questionNumber": 254,
        "questionText": "Which of the following is best described as: Decoy systems to attract and deceive attackers?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Key Rotation",
                "correct": false
            },
            {
                "text": "Software Keyloggers",
                "correct": false
            },
            {
                "text": "Access Control Vestibules",
                "correct": false
            },
            {
                "text": "Honeypots",
                "correct": true
            }
        ],
        "explanation": "Honeypots is defined as Decoy systems to attract and deceive attackers.",
        "correctAnswer": "Honeypots"
    },
    {
        "id": 255,
        "domain": 3,
        "questionNumber": 255,
        "questionText": "Which of the following is best described as: Network of decoy systems for observing complex attacks?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Hoax",
                "correct": false
            },
            {
                "text": "Honeynets",
                "correct": true
            },
            {
                "text": "Virtual Warm Site",
                "correct": false
            },
            {
                "text": "Replay Attacks",
                "correct": false
            }
        ],
        "explanation": "Honeynets is defined as Network of decoy systems for observing complex attacks.",
        "correctAnswer": "Honeynets"
    },
    {
        "id": 256,
        "domain": 1,
        "questionNumber": 256,
        "questionText": "Which of the following is best described as: Decoy files to detect unauthorized access or data breaches?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "One-Time Risk Assessments",
                "correct": false
            },
            {
                "text": "Recovery Testing",
                "correct": false
            },
            {
                "text": "Honeyfiles",
                "correct": true
            },
            {
                "text": "Wireless Encryption",
                "correct": false
            }
        ],
        "explanation": "Honeyfiles is defined as Decoy files to detect unauthorized access or data breaches.",
        "correctAnswer": "Honeyfiles"
    },
    {
        "id": 257,
        "domain": 3,
        "questionNumber": 257,
        "questionText": "Which of the following is best described as: Fake data to alert administrators when accessed or used?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Honeytokens",
                "correct": true
            },
            {
                "text": "Incident Response Team",
                "correct": false
            },
            {
                "text": "Indicators of Compromise (IoC)",
                "correct": false
            },
            {
                "text": "Control Plane",
                "correct": false
            }
        ],
        "explanation": "Honeytokens is defined as Fake data to alert administrators when accessed or used.",
        "correctAnswer": "Honeytokens"
    },
    {
        "id": 258,
        "domain": 1,
        "questionNumber": 258,
        "questionText": "Which of the following is best described as: Specific objective or goal that a threat actor is aiming to achieve through their attack?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Granular",
                "correct": false
            },
            {
                "text": "Acquisition and Procurement",
                "correct": false
            },
            {
                "text": "Stage 2: Downloader",
                "correct": false
            },
            {
                "text": "Threat Actors Intent",
                "correct": true
            }
        ],
        "explanation": "Threat Actors Intent is defined as Specific objective or goal that a threat actor is aiming to achieve through their attack.",
        "correctAnswer": "Threat Actors Intent"
    },
    {
        "id": 259,
        "domain": 2,
        "questionNumber": 259,
        "questionText": "Which of the following is best described as: Underlying reasons or driving forces that pushes a threat actor to carry out their attack?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Tactics, Techniques, and Procedures (TTPs)",
                "correct": false
            },
            {
                "text": "Threat Actors Motivation",
                "correct": true
            },
            {
                "text": "Security Control",
                "correct": false
            },
            {
                "text": "Digital Forensic Procedures",
                "correct": false
            }
        ],
        "explanation": "Threat Actors Motivation is defined as Underlying reasons or driving forces that pushes a threat actor to carry out their attack.",
        "correctAnswer": "Threat Actors Motivation"
    },
    {
        "id": 260,
        "domain": 2,
        "questionNumber": 260,
        "questionText": "Which of the following is best described as: Unauthorized transfer of data from a computer?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Steganography",
                "correct": false
            },
            {
                "text": "Application Allowlisting",
                "correct": false
            },
            {
                "text": "Risk Acceptance",
                "correct": false
            },
            {
                "text": "Data Exfiltration",
                "correct": true
            }
        ],
        "explanation": "Data Exfiltration is defined as Unauthorized transfer of data from a computer.",
        "correctAnswer": "Data Exfiltration"
    },
    {
        "id": 261,
        "domain": 1,
        "questionNumber": 261,
        "questionText": "Which of the following is best described as: Spying on individuals, organizations, or nations to gather sensitive or classified information?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Smart Contracts",
                "correct": false
            },
            {
                "text": "Physical Controls",
                "correct": false
            },
            {
                "text": "Espionage",
                "correct": true
            },
            {
                "text": "Known Environment",
                "correct": false
            }
        ],
        "explanation": "Espionage is defined as Spying on individuals, organizations, or nations to gather sensitive or classified information.",
        "correctAnswer": "Espionage"
    },
    {
        "id": 262,
        "domain": 4,
        "questionNumber": 262,
        "questionText": "Which of the following is best described as: Individuals or entities within an organization who pose a threat to its security?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "On-Path Attack",
                "correct": false
            },
            {
                "text": "Public Ledger",
                "correct": false
            },
            {
                "text": "Internal Threat Actors",
                "correct": true
            },
            {
                "text": "Segmentation",
                "correct": false
            }
        ],
        "explanation": "Internal Threat Actors is defined as Individuals or entities within an organization who pose a threat to its security.",
        "correctAnswer": "Internal Threat Actors"
    },
    {
        "id": 263,
        "domain": 5,
        "questionNumber": 263,
        "questionText": "Which of the following is best described as: Individuals or groups outside an organization who attempt to breach its cybersecurity defenses?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Containerization",
                "correct": false
            },
            {
                "text": "Secure Enclaves",
                "correct": false
            },
            {
                "text": "External Threat Actors",
                "correct": true
            },
            {
                "text": "Procurement",
                "correct": false
            }
        ],
        "explanation": "External Threat Actors is defined as Individuals or groups outside an organization who attempt to breach its cybersecurity defenses.",
        "correctAnswer": "External Threat Actors"
    },
    {
        "id": 264,
        "domain": 3,
        "questionNumber": 264,
        "questionText": "Which of the following is best described as: Individual with limited technical knowledge?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Script Kiddie",
                "correct": true
            },
            {
                "text": "Flow Collector",
                "correct": false
            },
            {
                "text": "Defining Requirements",
                "correct": false
            },
            {
                "text": "Offsite Backup",
                "correct": false
            }
        ],
        "explanation": "Script Kiddie is defined as Individual with limited technical knowledge.",
        "correctAnswer": "Script Kiddie"
    },
    {
        "id": 265,
        "domain": 3,
        "questionNumber": 265,
        "questionText": "Which of the following is best described as: Individual who lacks the technical knowledge to develop their own hacking tools or exploits?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Multi-factor Authentication (MFA)",
                "correct": false
            },
            {
                "text": "Single Pane of Glass",
                "correct": false
            },
            {
                "text": "Mutex",
                "correct": false
            },
            {
                "text": "Unskilled Attacker (Script Kiddie)",
                "correct": true
            }
        ],
        "explanation": "Unskilled Attacker (Script Kiddie) is defined as Individual who lacks the technical knowledge to develop their own hacking tools or exploits.",
        "correctAnswer": "Unskilled Attacker (Script Kiddie)"
    },
    {
        "id": 266,
        "domain": 4,
        "questionNumber": 266,
        "questionText": "Which of the following is best described as: Individuals or groups that use their technical skills to promote a cause or drive social change instead of for personal gain?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Fences",
                "correct": false
            },
            {
                "text": "Wrappers (e.g., IPSec)",
                "correct": false
            },
            {
                "text": "Single Loss Expectancy (SLE)",
                "correct": false
            },
            {
                "text": "Hacktivists",
                "correct": true
            }
        ],
        "explanation": "Hacktivists is defined as Individuals or groups that use their technical skills to promote a cause or drive social change instead of for personal gain.",
        "correctAnswer": "Hacktivists"
    },
    {
        "id": 267,
        "domain": 2,
        "questionNumber": 267,
        "questionText": "Which of the following is best described as: Activities in which the use of hacking and other cyber techniques is used to promote or advance a political or social cause?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Hacktivism",
                "correct": true
            },
            {
                "text": "Identity Fraud and Identity Theft",
                "correct": false
            },
            {
                "text": "Data in Use",
                "correct": false
            },
            {
                "text": "Persistent XSS",
                "correct": false
            }
        ],
        "explanation": "Hacktivism is defined as Activities in which the use of hacking and other cyber techniques is used to promote or advance a political or social cause.",
        "correctAnswer": "Hacktivism"
    },
    {
        "id": 268,
        "domain": 2,
        "questionNumber": 268,
        "questionText": "Which of the following is best described as: Involves the public release of private information about an individual or organization?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Change Management Policy",
                "correct": false
            },
            {
                "text": "Partially Known Environment",
                "correct": false
            },
            {
                "text": "Single Factor Authentication",
                "correct": false
            },
            {
                "text": "Doxing",
                "correct": true
            }
        ],
        "explanation": "Doxing is defined as Involves the public release of private information about an individual or organization.",
        "correctAnswer": "Doxing"
    },
    {
        "id": 269,
        "domain": 5,
        "questionNumber": 269,
        "questionText": "Which of the following is best described as: Groups or individuals that are sponsored by a government to conduct cyber operations against other nations, organizations, or individuals?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Business Partnership Agreement (BPA) or Joint Venture Agreement (JV)",
                "correct": false
            },
            {
                "text": "Nation-state Actor",
                "correct": true
            },
            {
                "text": "Encrypted",
                "correct": false
            },
            {
                "text": "SQL Injection",
                "correct": false
            }
        ],
        "explanation": "Nation-state Actor is defined as Groups or individuals that are sponsored by a government to conduct cyber operations against other nations, organizations, or individuals.",
        "correctAnswer": "Nation-state Actor"
    },
    {
        "id": 270,
        "domain": 2,
        "questionNumber": 270,
        "questionText": "Which of the following is best described as: Attack that is orchestrated in such a way that it appears to originate from a different source or group than the actual perpetrators, with the intent to mislead investigators and attribute the attack to someone else?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Managerial Controls",
                "correct": false
            },
            {
                "text": "WPA2 (Wi-Fi Protected Access 2)",
                "correct": false
            },
            {
                "text": "Key Risk Indicators (KRIs)",
                "correct": false
            },
            {
                "text": "False Flag Attack",
                "correct": true
            }
        ],
        "explanation": "False Flag Attack is defined as Attack that is orchestrated in such a way that it appears to originate from a different source or group than the actual perpetrators, with the intent to mislead investigators and attribute the attack to someone else.",
        "correctAnswer": "False Flag Attack"
    },
    {
        "id": 271,
        "domain": 1,
        "questionNumber": 271,
        "questionText": "Which of the following is best described as: Term that used to be used synonymously with a nation-state actor because of their long-term persistence and stealth?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Change Owner",
                "correct": false
            },
            {
                "text": "Automation",
                "correct": false
            },
            {
                "text": "Post-quantum cryptography",
                "correct": false
            },
            {
                "text": "Advanced Persistent Threat (APT)",
                "correct": true
            }
        ],
        "explanation": "Advanced Persistent Threat (APT) is defined as Term that used to be used synonymously with a nation-state actor because of their long-term persistence and stealth.",
        "correctAnswer": "Advanced Persistent Threat (APT)"
    },
    {
        "id": 272,
        "domain": 3,
        "questionNumber": 272,
        "questionText": "Which of the following is best described as: Cybersecurity threats that originate from within the organization?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Partition",
                "correct": false
            },
            {
                "text": "Hardware Keyloggers",
                "correct": false
            },
            {
                "text": "Incident Response Team",
                "correct": false
            },
            {
                "text": "Insider Threats",
                "correct": true
            }
        ],
        "explanation": "Insider Threats is defined as Cybersecurity threats that originate from within the organization.",
        "correctAnswer": "Insider Threats"
    },
    {
        "id": 273,
        "domain": 2,
        "questionNumber": 273,
        "questionText": "Which of the following is best described as: Use of information technology systems, devices, software, applications, and services without explicit organizational approval?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Honeynets",
                "correct": false
            },
            {
                "text": "Cost",
                "correct": false
            },
            {
                "text": "Shadow IT",
                "correct": true
            },
            {
                "text": "Vendor Questionnaires",
                "correct": false
            }
        ],
        "explanation": "Shadow IT is defined as Use of information technology systems, devices, software, applications, and services without explicit organizational approval.",
        "correctAnswer": "Shadow IT"
    },
    {
        "id": 274,
        "domain": 5,
        "questionNumber": 274,
        "questionText": "Which of the following is best described as: Involves the use of personal devices for work purposes?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Playbook",
                "correct": false
            },
            {
                "text": "Bring Your Own Devices (BYOD)",
                "correct": true
            },
            {
                "text": "Full Tunnel VPN",
                "correct": false
            },
            {
                "text": "Virtual Private Networks (VPNs)",
                "correct": false
            }
        ],
        "explanation": "Bring Your Own Devices (BYOD) is defined as Involves the use of personal devices for work purposes.",
        "correctAnswer": "Bring Your Own Devices (BYOD)"
    },
    {
        "id": 275,
        "domain": 5,
        "questionNumber": 275,
        "questionText": "Which of the following is best described as: Means or pathway by which an attacker can gain unauthorized access to a computer or network to deliver a malicious payload or carry out an unwanted action?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Threat Vector",
                "correct": true
            },
            {
                "text": "Encapsulating Security Payload (ESP)",
                "correct": false
            },
            {
                "text": "SOAP (Simple Object Access Protocol)",
                "correct": false
            },
            {
                "text": "VeraCrypt",
                "correct": false
            }
        ],
        "explanation": "Threat Vector is defined as Means or pathway by which an attacker can gain unauthorized access to a computer or network to deliver a malicious payload or carry out an unwanted action.",
        "correctAnswer": "Threat Vector"
    },
    {
        "id": 276,
        "domain": 2,
        "questionNumber": 276,
        "questionText": "Which of the following is best described as: Encompasses all the various points where an unauthorized user can try to enter data to or extract data from an environment?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "One-Time Passwords (OTP)",
                "correct": false
            },
            {
                "text": "Software Keyloggers",
                "correct": false
            },
            {
                "text": "Attack Surface",
                "correct": true
            },
            {
                "text": "Online Certificate Status Protocol (OCSP)",
                "correct": false
            }
        ],
        "explanation": "Attack Surface is defined as Encompasses all the various points where an unauthorized user can try to enter data to or extract data from an environment.",
        "correctAnswer": "Attack Surface"
    },
    {
        "id": 277,
        "domain": 2,
        "questionNumber": 277,
        "questionText": "Which of the following is best described as: Use of voice calls to trick victims into revealing their sensitive information to an attacker?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Risk Description",
                "correct": false
            },
            {
                "text": "Hashing",
                "correct": false
            },
            {
                "text": "Vendor Questionnaires",
                "correct": false
            },
            {
                "text": "Vhishing",
                "correct": true
            }
        ],
        "explanation": "Vhishing is defined as Use of voice calls to trick victims into revealing their sensitive information to an attacker.",
        "correctAnswer": "Vhishing"
    },
    {
        "id": 278,
        "domain": 5,
        "questionNumber": 278,
        "questionText": "Which of the following is best described as: Attacker might leave a malware-infected USB drive in a location where their target might find it, such as in the parking lot or the lobby of the targeted organization?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Disaster Recovery Plan (DRP)",
                "correct": false
            },
            {
                "text": "Baiting",
                "correct": true
            },
            {
                "text": "Data Retention",
                "correct": false
            },
            {
                "text": "Management Frame Protection",
                "correct": false
            }
        ],
        "explanation": "Baiting is defined as Attacker might leave a malware-infected USB drive in a location where their target might find it, such as in the parking lot or the lobby of the targeted organization.",
        "correctAnswer": "Baiting"
    },
    {
        "id": 279,
        "domain": 1,
        "questionNumber": 279,
        "questionText": "Which of the following is best described as: Set of vulnerabilities in Bluetooth technology that can allow an attacker to take over devices, spread malware, or even establish an on-path attack to intercept communications without any user interaction?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "BlueBorne",
                "correct": true
            },
            {
                "text": "Certification",
                "correct": false
            },
            {
                "text": "Ring 3 (Outermost Ring)",
                "correct": false
            },
            {
                "text": "Unknown Environment",
                "correct": false
            }
        ],
        "explanation": "BlueBorne is defined as Set of vulnerabilities in Bluetooth technology that can allow an attacker to take over devices, spread malware, or even establish an on-path attack to intercept communications without any user interaction.",
        "correctAnswer": "BlueBorne"
    },
    {
        "id": 280,
        "domain": 1,
        "questionNumber": 280,
        "questionText": "Which of the following is best described as: Type of Denial of Service attack that targets?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "BlueSmack",
                "correct": true
            },
            {
                "text": "Tailgating",
                "correct": false
            },
            {
                "text": "False Flag Attack",
                "correct": false
            },
            {
                "text": "Persistent Cookies",
                "correct": false
            }
        ],
        "explanation": "BlueSmack is defined as Type of Denial of Service attack that targets.",
        "correctAnswer": "BlueSmack"
    },
    {
        "id": 281,
        "domain": 3,
        "questionNumber": 281,
        "questionText": "Which of the following is best described as: Specific methods and patterns of activities or behaviors associated with a particular threat actor or group of threat actors?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Diffie-Hellman",
                "correct": false
            },
            {
                "text": "False Acceptance Rate (FAR)",
                "correct": false
            },
            {
                "text": "Operational Security (OPSEC)",
                "correct": false
            },
            {
                "text": "Tactics, Techniques, and Procedures (TTPs)",
                "correct": true
            }
        ],
        "explanation": "Tactics, Techniques, and Procedures (TTPs) is defined as Specific methods and patterns of activities or behaviors associated with a particular threat actor or group of threat actors.",
        "correctAnswer": "Tactics, Techniques, and Procedures (TTPs)"
    },
    {
        "id": 282,
        "domain": 1,
        "questionNumber": 282,
        "questionText": "Which of the following is best described as: Technologies designed to mislead, confuse, and divert attackers from critical assets while simultaneously detecting and neutralizing threats?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Deceptive and Disruption Technologies",
                "correct": true
            },
            {
                "text": "Asymmetric",
                "correct": false
            },
            {
                "text": "Threat Hunting",
                "correct": false
            },
            {
                "text": "RSA (Rivest-Shamir-Adleman)",
                "correct": false
            }
        ],
        "explanation": "Deceptive and Disruption Technologies is defined as Technologies designed to mislead, confuse, and divert attackers from critical assets while simultaneously detecting and neutralizing threats.",
        "correctAnswer": "Deceptive and Disruption Technologies"
    },
    {
        "id": 283,
        "domain": 2,
        "questionNumber": 283,
        "questionText": "Which of the following is best described as: Decoy system or network set up to attract potential hackers?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Mean Time Between Failures (MTBF)",
                "correct": false
            },
            {
                "text": "Honeynets",
                "correct": false
            },
            {
                "text": "Single-sided",
                "correct": false
            },
            {
                "text": "Honeypots",
                "correct": true
            }
        ],
        "explanation": "Honeypots is defined as Decoy system or network set up to attract potential hackers.",
        "correctAnswer": "Honeypots"
    },
    {
        "id": 284,
        "domain": 4,
        "questionNumber": 284,
        "questionText": "Which of the following is best described as: Network of honeypots to create a more complex system that is designed to mimic an entire network of systems?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Risk Reporting",
                "correct": false
            },
            {
                "text": "Honeynets",
                "correct": true
            },
            {
                "text": "Automation and Orchestration",
                "correct": false
            },
            {
                "text": "Symmetric Encryption",
                "correct": false
            }
        ],
        "explanation": "Honeynets is defined as Network of honeypots to create a more complex system that is designed to mimic an entire network of systems.",
        "correctAnswer": "Honeynets"
    },
    {
        "id": 285,
        "domain": 5,
        "questionNumber": 285,
        "questionText": "Which of the following is best described as: Decoy file placed within a system to lure in potential attackers?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "SIEM (Security Information and Event Monitoring System)",
                "correct": false
            },
            {
                "text": "Warm Sites",
                "correct": false
            },
            {
                "text": "Legacy",
                "correct": false
            },
            {
                "text": "Honeyfiles",
                "correct": true
            }
        ],
        "explanation": "Honeyfiles is defined as Decoy file placed within a system to lure in potential attackers.",
        "correctAnswer": "Honeyfiles"
    },
    {
        "id": 286,
        "domain": 1,
        "questionNumber": 286,
        "questionText": "Which of the following is best described as: Piece of data or a resource that has no legitimate value or use but is monitored for access or use?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Provisioning",
                "correct": false
            },
            {
                "text": "Industrial Control Systems (ICS)",
                "correct": false
            },
            {
                "text": "Honeytokens",
                "correct": true
            },
            {
                "text": "Security Control",
                "correct": false
            }
        ],
        "explanation": "Honeytokens is defined as Piece of data or a resource that has no legitimate value or use but is monitored for access or use.",
        "correctAnswer": "Honeytokens"
    },
    {
        "id": 287,
        "domain": 4,
        "questionNumber": 287,
        "questionText": "Which of the following is best described as: Security mechanism where specific services or ports on a network device remain closed until a specific outbound traffic pattern is detected?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Downgrade Attack",
                "correct": false
            },
            {
                "text": "Key Management System",
                "correct": false
            },
            {
                "text": "Port Triggering",
                "correct": true
            },
            {
                "text": "Private",
                "correct": false
            }
        ],
        "explanation": "Port Triggering is defined as Security mechanism where specific services or ports on a network device remain closed until a specific outbound traffic pattern is detected.",
        "correctAnswer": "Port Triggering"
    },
    {
        "id": 288,
        "domain": 1,
        "questionNumber": 288,
        "questionText": "Which of the following is best described as: Measures to protect tangible assets (buildings, equipment, people) from harm or unauthorized access?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Physical Security",
                "correct": true
            },
            {
                "text": "Microservices",
                "correct": false
            },
            {
                "text": "Contract indemnity clauses",
                "correct": false
            },
            {
                "text": "Company Credit Card",
                "correct": false
            }
        ],
        "explanation": "Physical Security is defined as Measures to protect tangible assets (buildings, equipment, people) from harm or unauthorized access.",
        "correctAnswer": "Physical Security"
    },
    {
        "id": 289,
        "domain": 1,
        "questionNumber": 289,
        "questionText": "Which of the following is best described as: Short, sturdy vertical posts controlling or preventing vehicle access?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Risk Analysis",
                "correct": false
            },
            {
                "text": "Source/Destination IP Addresses",
                "correct": false
            },
            {
                "text": "Bollards",
                "correct": true
            },
            {
                "text": "BlueBorne",
                "correct": false
            }
        ],
        "explanation": "Bollards is defined as Short, sturdy vertical posts controlling or preventing vehicle access.",
        "correctAnswer": "Bollards"
    },
    {
        "id": 290,
        "domain": 3,
        "questionNumber": 290,
        "questionText": "Which of the following is best described as: Barriers made of posts and wire or boards to enclose or separate areas?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Fences",
                "correct": true
            },
            {
                "text": "Programmable Logic Controllers (PLCs)",
                "correct": false
            },
            {
                "text": "Digital Signature",
                "correct": false
            },
            {
                "text": "Keyloggers",
                "correct": false
            }
        ],
        "explanation": "Fences is defined as Barriers made of posts and wire or boards to enclose or separate areas.",
        "correctAnswer": "Fences"
    },
    {
        "id": 291,
        "domain": 3,
        "questionNumber": 291,
        "questionText": "Which of the following is best described as: An organized strategy to observe and report activities?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Infrastructure as Code (IaC)",
                "correct": false
            },
            {
                "text": "Surveillance Systems",
                "correct": true
            },
            {
                "text": "SAN (Subject Alternate Name) field",
                "correct": false
            },
            {
                "text": "Full-disk",
                "correct": false
            }
        ],
        "explanation": "Surveillance Systems is defined as An organized strategy to observe and report activities.",
        "correctAnswer": "Surveillance Systems"
    },
    {
        "id": 292,
        "domain": 4,
        "questionNumber": 292,
        "questionText": "Which of the following is best described as: Double-door system electronically controlled to allow only one door open at a time?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Host-based IDS (HIDS)",
                "correct": false
            },
            {
                "text": "SAN (Subject Alternate Name) field",
                "correct": false
            },
            {
                "text": "Access Control Vestibules",
                "correct": true
            },
            {
                "text": "Redundancy",
                "correct": false
            }
        ],
        "explanation": "Access Control Vestibules is defined as Double-door system electronically controlled to allow only one door open at a time.",
        "correctAnswer": "Access Control Vestibules"
    },
    {
        "id": 293,
        "domain": 1,
        "questionNumber": 293,
        "questionText": "Which of the following is best described as: Structure that encloses an area using interconnected panels or posts?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Mobile Sites",
                "correct": false
            },
            {
                "text": "Fence",
                "correct": true
            },
            {
                "text": "Extended Detection and Response (XDR)",
                "correct": false
            },
            {
                "text": "Mobile Device Management (MDM)",
                "correct": false
            }
        ],
        "explanation": "Fence is defined as Structure that encloses an area using interconnected panels or posts.",
        "correctAnswer": "Fence"
    },
    {
        "id": 294,
        "domain": 4,
        "questionNumber": 294,
        "questionText": "Which of the following is best described as: Robust, short vertical posts, typically made of steel or concrete, that are designed to manage or redirect vehicular traffic?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Wireless Infrastructure Security",
                "correct": false
            },
            {
                "text": "Bollards",
                "correct": true
            },
            {
                "text": "Open Design Principle",
                "correct": false
            },
            {
                "text": "EAP-TTLS (Extensible Authentication Protocol-Tunneled Transport Layer Security)",
                "correct": false
            }
        ],
        "explanation": "Bollards is defined as Robust, short vertical posts, typically made of steel or concrete, that are designed to manage or redirect vehicular traffic.",
        "correctAnswer": "Bollards"
    },
    {
        "id": 295,
        "domain": 4,
        "questionNumber": 295,
        "questionText": "Which of the following is best described as: Type of attack where access to a system is gained by simply trying all of the possibilities until you break through?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Hacktivism",
                "correct": false
            },
            {
                "text": "Brute Force",
                "correct": true
            },
            {
                "text": "Vertical Privilege Escalation",
                "correct": false
            },
            {
                "text": "LDAP (Lightweight Directory Access Protocol)",
                "correct": false
            }
        ],
        "explanation": "Brute Force is defined as Type of attack where access to a system is gained by simply trying all of the possibilities until you break through.",
        "correctAnswer": "Brute Force"
    },
    {
        "id": 296,
        "domain": 3,
        "questionNumber": 296,
        "questionText": "Which of the following is best described as: Act of gaining unauthorized access to a space by physically breaking or bypassing its barriers, such as windows, doors, or fences?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Forcible Entry",
                "correct": true
            },
            {
                "text": "Telnet",
                "correct": false
            },
            {
                "text": "Hashing",
                "correct": false
            },
            {
                "text": "Invoice Scam",
                "correct": false
            }
        ],
        "explanation": "Forcible Entry is defined as Act of gaining unauthorized access to a space by physically breaking or bypassing its barriers, such as windows, doors, or fences.",
        "correctAnswer": "Forcible Entry"
    },
    {
        "id": 297,
        "domain": 5,
        "questionNumber": 297,
        "questionText": "Which of the following is best described as: Organized strategy or setup designed to observe and report activities in a given area?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Tokenization",
                "correct": false
            },
            {
                "text": "Risk Monitoring",
                "correct": false
            },
            {
                "text": "Tokenization",
                "correct": false
            },
            {
                "text": "Surveillance System",
                "correct": true
            }
        ],
        "explanation": "Surveillance System is defined as Organized strategy or setup designed to observe and report activities in a given area.",
        "correctAnswer": "Surveillance System"
    },
    {
        "id": 298,
        "domain": 4,
        "questionNumber": 298,
        "questionText": "Which of the following is best described as: Can move the camera or its angle to better detect issues during an intrusion?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Confidential",
                "correct": false
            },
            {
                "text": "Device spoofing",
                "correct": false
            },
            {
                "text": "Redundancy",
                "correct": false
            },
            {
                "text": "Pan-Tilt-Zoom (PTZ) System",
                "correct": true
            }
        ],
        "explanation": "Pan-Tilt-Zoom (PTZ) System is defined as Can move the camera or its angle to better detect issues during an intrusion.",
        "correctAnswer": "Pan-Tilt-Zoom (PTZ) System"
    },
    {
        "id": 299,
        "domain": 1,
        "questionNumber": 299,
        "questionText": "Which of the following is best described as: Involves jamming the signals that surveillance system relies on to monitor the environment?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Electromagnetic Interference (EMI)",
                "correct": true
            },
            {
                "text": "Authentication",
                "correct": false
            },
            {
                "text": "Microservices Architecture",
                "correct": false
            },
            {
                "text": "Dark Web",
                "correct": false
            }
        ],
        "explanation": "Electromagnetic Interference (EMI) is defined as Involves jamming the signals that surveillance system relies on to monitor the environment.",
        "correctAnswer": "Electromagnetic Interference (EMI)"
    },
    {
        "id": 300,
        "domain": 3,
        "questionNumber": 300,
        "questionText": "Which of the following is best described as: Double-door system that is designed with two doors that are electronically controlled to ensure that only one door can be open at a given time?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Access Control Vestibules",
                "correct": true
            },
            {
                "text": "Network Infrastructure",
                "correct": false
            },
            {
                "text": "Real-Time Operating System (RTOS)",
                "correct": false
            },
            {
                "text": "GNU Privacy Guard",
                "correct": false
            }
        ],
        "explanation": "Access Control Vestibules is defined as Double-door system that is designed with two doors that are electronically controlled to ensure that only one door can be open at a given time.",
        "correctAnswer": "Access Control Vestibules"
    },
    {
        "id": 301,
        "domain": 1,
        "questionNumber": 301,
        "questionText": "Which of the following is best described as: Involves two people working together with one person who has legitimate access intentionally allows another person who doesn't have proper authorization to enter a secure area with them?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "XCCDF (Extensible Configuration Checklist Description Format)",
                "correct": false
            },
            {
                "text": "Piggybacking",
                "correct": true
            },
            {
                "text": "Impossible Travel",
                "correct": false
            },
            {
                "text": "Vulnerability Scan Report",
                "correct": false
            }
        ],
        "explanation": "Piggybacking is defined as Involves two people working together with one person who has legitimate access intentionally allows another person who doesn't have proper authorization to enter a secure area with them.",
        "correctAnswer": "Piggybacking"
    },
    {
        "id": 302,
        "domain": 2,
        "questionNumber": 302,
        "questionText": "Which of the following is best described as: Occurs whenever an unauthorized person closely follows someone through the access control vestibule who has legitimate access into the?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Influence Campaigns",
                "correct": false
            },
            {
                "text": "Tailgating",
                "correct": true
            },
            {
                "text": "Threat Scope Reduction",
                "correct": false
            },
            {
                "text": "Role Context",
                "correct": false
            }
        ],
        "explanation": "Tailgating is defined as Occurs whenever an unauthorized person closely follows someone through the access control vestibule who has legitimate access into the.",
        "correctAnswer": "Tailgating"
    },
    {
        "id": 303,
        "domain": 2,
        "questionNumber": 303,
        "questionText": "Which of the following is best described as: Critical physical security control measure designed to restrict and regulate access to specific spaces or properties, preventing unauthorized intrusions and safeguarding sensitive data and individuals?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "On-Path Attack",
                "correct": false
            },
            {
                "text": "Tailgating",
                "correct": false
            },
            {
                "text": "Door Locks",
                "correct": true
            },
            {
                "text": "Metasploit",
                "correct": false
            }
        ],
        "explanation": "Door Locks is defined as Critical physical security control measure designed to restrict and regulate access to specific spaces or properties, preventing unauthorized intrusions and safeguarding sensitive data and individuals.",
        "correctAnswer": "Door Locks"
    },
    {
        "id": 304,
        "domain": 4,
        "questionNumber": 304,
        "questionText": "Which of the following is best described as: Occurs when the system erroneously authenticates an unauthorized user?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Non-repudiation",
                "correct": false
            },
            {
                "text": "Single Sign-On (SSO)",
                "correct": false
            },
            {
                "text": "False Acceptance Rate (FAR)",
                "correct": true
            },
            {
                "text": "Identifying Vulnerabilities",
                "correct": false
            }
        ],
        "explanation": "False Acceptance Rate (FAR) is defined as Occurs when the system erroneously authenticates an unauthorized user.",
        "correctAnswer": "False Acceptance Rate (FAR)"
    },
    {
        "id": 305,
        "domain": 3,
        "questionNumber": 305,
        "questionText": "Which of the following is best described as: Denies access to an authorized user. Adjusting sensitivity can increase FRR?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Just-In-Time Permissions (JIT Permissions)",
                "correct": false
            },
            {
                "text": "Cyber Resilience",
                "correct": false
            },
            {
                "text": "False Rejection Rate (FRR)",
                "correct": true
            },
            {
                "text": "Company Credit Card",
                "correct": false
            }
        ],
        "explanation": "False Rejection Rate (FRR) is defined as Denies access to an authorized user. Adjusting sensitivity can increase FRR.",
        "correctAnswer": "False Rejection Rate (FRR)"
    },
    {
        "id": 306,
        "domain": 1,
        "questionNumber": 306,
        "questionText": "Which of the following is best described as: A balance between FAR and FRR for optimal authentication effectiveness?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "MOU",
                "correct": false
            },
            {
                "text": "Change Owner",
                "correct": false
            },
            {
                "text": "Crossover Error Rate (CER)",
                "correct": true
            },
            {
                "text": "Passive Reconnaissance",
                "correct": false
            }
        ],
        "explanation": "Crossover Error Rate (CER) is defined as A balance between FAR and FRR for optimal authentication effectiveness.",
        "correctAnswer": "Crossover Error Rate (CER)"
    },
    {
        "id": 307,
        "domain": 4,
        "questionNumber": 307,
        "questionText": "Which of the following is best described as: Mechanical locks with numbered push buttons, requiring a correct combination to open?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Suppliers",
                "correct": false
            },
            {
                "text": "Cipher Locks",
                "correct": true
            },
            {
                "text": "Control Plane",
                "correct": false
            },
            {
                "text": "Deceptive and Disruption Technologies",
                "correct": false
            }
        ],
        "explanation": "Cipher Locks is defined as Mechanical locks with numbered push buttons, requiring a correct combination to open.",
        "correctAnswer": "Cipher Locks"
    },
    {
        "id": 308,
        "domain": 3,
        "questionNumber": 308,
        "questionText": "Which of the following is best described as: Copying the data from an RFID or NFC card or badge onto another card or device?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Resilience Testing",
                "correct": false
            },
            {
                "text": "Access Badge Cloning",
                "correct": true
            },
            {
                "text": "Bug Bounty Programs",
                "correct": false
            },
            {
                "text": "Journaling",
                "correct": false
            }
        ],
        "explanation": "Access Badge Cloning is defined as Copying the data from an RFID or NFC card or badge onto another card or device.",
        "correctAnswer": "Access Badge Cloning"
    }

,

    {
        "id": 310,
        "domain": 2,
        "questionNumber": 310,
        "questionText": "What is the definition of Information Security?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Strategy to prevent sensitive information from leaving an organization",
                "correct": false
            },
            {
                "text": "Protecting data and information from unauthorized access, modification, disruption, disclosure, and destruction",
                "correct": true
            },
            {
                "text": "Packet sequence number in the capture",
                "correct": false
            },
            {
                "text": "Unauthorized transfer of data from a computer",
                "correct": false
            }
        ],
        "explanation": "Information Security is defined as Protecting data and information from unauthorized access, modification, disruption, disclosure, and destruction.",
        "correctAnswer": "Protecting data and information from unauthorized access, modification, disruption, disclosure, and destruction"
    },
    {
        "id": 311,
        "domain": 5,
        "questionNumber": 311,
        "questionText": "What is the definition of Information Systems Security?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Embedded in the kernel (Ring Zero)",
                "correct": false
            },
            {
                "text": "Incorrectly indicates an issue when there isn't one",
                "correct": false
            },
            {
                "text": "Protecting the systems (e.g., computers, servers, network devices) that hold and process critical data",
                "correct": true
            },
            {
                "text": "Assessment of an entire vendor supply chain for security and reliability",
                "correct": false
            }
        ],
        "explanation": "Information Systems Security is defined as Protecting the systems (e.g., computers, servers, network devices) that hold and process critical data.",
        "correctAnswer": "Protecting the systems (e.g., computers, servers, network devices) that hold and process critical data"
    },
    {
        "id": 312,
        "domain": 3,
        "questionNumber": 312,
        "questionText": "What is the definition of Non-Repudiation?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Shared immutable ledger for transactions and asset tracking",
                "correct": false
            },
            {
                "text": "Guarantees that an action or event cannot be denied by the involved parties (e.g., digital signatures)",
                "correct": true
            },
            {
                "text": "Occurs when a process stores data outside the memory range allocated by the developer",
                "correct": false
            },
            {
                "text": "Systematic process to investigate incidents and identify underlying factors",
                "correct": false
            }
        ],
        "explanation": "Non-Repudiation is defined as Guarantees that an action or event cannot be denied by the involved parties (e.g., digital signatures).",
        "correctAnswer": "Guarantees that an action or event cannot be denied by the involved parties (e.g., digital signatures)"
    },
    {
        "id": 313,
        "domain": 4,
        "questionNumber": 313,
        "questionText": "What is the definition of CIANA Pentagon?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "An extension of the CIA triad with the addition of non-repudiation and authentication",
                "correct": true
            },
            {
                "text": "Packet sequence number in the capture",
                "correct": false
            },
            {
                "text": "Consolidates data from different sources into a unified display",
                "correct": false
            },
            {
                "text": "Attached to user-level components (Rings 1 to 3)",
                "correct": false
            }
        ],
        "explanation": "CIANA Pentagon is defined as An extension of the CIA triad with the addition of non-repudiation and authentication.",
        "correctAnswer": "An extension of the CIA triad with the addition of non-repudiation and authentication"
    },
    {
        "id": 314,
        "domain": 2,
        "questionNumber": 314,
        "questionText": "What is the definition of Security Control?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Track intrusion attempts and system compromises",
                "correct": false
            },
            {
                "text": "Technical",
                "correct": true
            },
            {
                "text": "Orchestrated strategy to transition teams, departments, and organizations from existing state to a more desirable future state",
                "correct": false
            },
            {
                "text": "Strategy to prevent sensitive information from leaving an organization",
                "correct": false
            }
        ],
        "explanation": "Security Control is defined as Technical.",
        "correctAnswer": "Technical"
    },
    {
        "id": 315,
        "domain": 3,
        "questionNumber": 315,
        "questionText": "What is the definition of Security Control?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Third-party reviews for compliance with external regulations or standards",
                "correct": false
            },
            {
                "text": "Preventative",
                "correct": true
            },
            {
                "text": "Used in control production systems within a single location",
                "correct": false
            },
            {
                "text": "Isolate vulnerable systems from the enterprise network",
                "correct": false
            }
        ],
        "explanation": "Security Control is defined as Preventative.",
        "correctAnswer": "Preventative"
    },
    {
        "id": 316,
        "domain": 2,
        "questionNumber": 316,
        "questionText": "What is the definition of Zero Trust Model?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Designed to gain administrative level control over a given computer system without being detected",
                "correct": false
            },
            {
                "text": "Encrypts the entire hard drive to protect all of the data being stored on it",
                "correct": false
            },
            {
                "text": "Preventative",
                "correct": false
            },
            {
                "text": "Operates on the principle that no one should be trusted by default",
                "correct": true
            }
        ],
        "explanation": "Zero Trust Model is defined as Operates on the principle that no one should be trusted by default.",
        "correctAnswer": "Operates on the principle that no one should be trusted by default"
    },
    {
        "id": 317,
        "domain": 3,
        "questionNumber": 317,
        "questionText": "What is the definition of Control Plane?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Multiple processes or threads accessing shared resources simultaneously",
                "correct": false
            },
            {
                "text": "Governs handling of IT system/process changes",
                "correct": false
            },
            {
                "text": "Used for data exchange in web applications",
                "correct": false
            },
            {
                "text": "Adaptive identity, threat scope reduction, policy-driven access control, and secured zones",
                "correct": true
            }
        ],
        "explanation": "Control Plane is defined as Adaptive identity, threat scope reduction, policy-driven access control, and secured zones.",
        "correctAnswer": "Adaptive identity, threat scope reduction, policy-driven access control, and secured zones"
    },
    {
        "id": 318,
        "domain": 3,
        "questionNumber": 318,
        "questionText": "What is the definition of Data Plane?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Subject/system, policy engine, policy administrator, and establishing policy enforcement points",
                "correct": true
            },
            {
                "text": "Provides data striping across multiple disks",
                "correct": false
            },
            {
                "text": "Developed by Cisco Systems for secure re-authentication",
                "correct": false
            },
            {
                "text": "Hosted by third-party cloud service providers, providing scalability but limited control over configurations",
                "correct": false
            }
        ],
        "explanation": "Data Plane is defined as Subject/system, policy engine, policy administrator, and establishing policy enforcement points.",
        "correctAnswer": "Subject/system, policy engine, policy administrator, and establishing policy enforcement points"
    },
    {
        "id": 319,
        "domain": 4,
        "questionNumber": 319,
        "questionText": "What is the definition of Threat?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "SOAP has a structured message format in XML",
                "correct": false
            },
            {
                "text": "Every subject and object operates under MAC, but it's more complex to set up",
                "correct": false
            },
            {
                "text": "Anything that could cause harm, loss, damage, or compromise to our information technology systems",
                "correct": true
            },
            {
                "text": "Set of rules and protocols used for building and integrating application software",
                "correct": false
            }
        ],
        "explanation": "Threat is defined as Anything that could cause harm, loss, damage, or compromise to our information technology systems.",
        "correctAnswer": "Anything that could cause harm, loss, damage, or compromise to our information technology systems"
    },
    {
        "id": 320,
        "domain": 1,
        "questionNumber": 320,
        "questionText": "What is the definition of Vulnerability?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Specialized type of software that allows the restoration of a lost or or corrupted key to be performed",
                "correct": false
            },
            {
                "text": "Provides specialized services to enhance functionality, security, and efficiency of cloud solutions",
                "correct": false
            },
            {
                "text": "Any weakness in the system design or implementation",
                "correct": true
            },
            {
                "text": "Incorrectly stated vulnerability",
                "correct": false
            }
        ],
        "explanation": "Vulnerability is defined as Any weakness in the system design or implementation.",
        "correctAnswer": "Any weakness in the system design or implementation"
    },
    {
        "id": 321,
        "domain": 4,
        "questionNumber": 321,
        "questionText": "What is the definition of Risk?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Where *threats* and *vulnerabilities* **intersect**, that is where the <ins>risk</ins> to your enterprise systems and networks lies",
                "correct": true
            },
            {
                "text": "Sudden, small increases in voltage beyond the standard level (e.g., 120V in the US)",
                "correct": false
            },
            {
                "text": "Involves the public release of private information about an individual or organization",
                "correct": false
            },
            {
                "text": "A sequence of packets from source to destination",
                "correct": false
            }
        ],
        "explanation": "Risk is defined as Where *threats* and *vulnerabilities* **intersect**, that is where the <ins>risk</ins> to your enterprise systems and networks lies.",
        "correctAnswer": "Where *threats* and *vulnerabilities* **intersect**, that is where the <ins>risk</ins> to your enterprise systems and networks lies"
    },
    {
        "id": 322,
        "domain": 2,
        "questionNumber": 322,
        "questionText": "What is the definition of vulnerability?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Malicious code that's inserted into a program, and the malicious code will only execute when certain conditions have been met",
                "correct": false
            },
            {
                "text": "Aims to monitor data in use, in transit, or at rest to detect and prevent data theft",
                "correct": false
            },
            {
                "text": "<ins>then you have no risk</ins>",
                "correct": true
            },
            {
                "text": "Goes beyond sanitization, ensures physical device is unusable",
                "correct": false
            }
        ],
        "explanation": "vulnerability is defined as <ins>then you have no risk</ins>.",
        "correctAnswer": "<ins>then you have no risk</ins>"
    },
    {
        "id": 323,
        "domain": 1,
        "questionNumber": 323,
        "questionText": "What is the definition of Risk Management?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Mechanism used to ensure that the chosen vendor still aligns with organizational needs and standards",
                "correct": false
            },
            {
                "text": "Finding ways to manipulate outcomes in your favor",
                "correct": true
            },
            {
                "text": "A group of policies that can be loaded through the Group Policy Editor",
                "correct": false
            },
            {
                "text": "The size of the packet",
                "correct": false
            }
        ],
        "explanation": "Risk Management is defined as Finding ways to manipulate outcomes in your favor.",
        "correctAnswer": "Finding ways to manipulate outcomes in your favor"
    },
    {
        "id": 324,
        "domain": 4,
        "questionNumber": 324,
        "questionText": "What is the definition of Confidentiality?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Verifying user, device, or system identity",
                "correct": false
            },
            {
                "text": "A dedicated network security device that filters and controls network traffic at the hardware level",
                "correct": false
            },
            {
                "text": "Refers to the protection of information from unauthorized access and disclosure",
                "correct": true
            },
            {
                "text": "Helps ensure that information and data remain accurate and unchanged from its original state unless intentionally modified by an authorized individual",
                "correct": false
            }
        ],
        "explanation": "Confidentiality is defined as Refers to the protection of information from unauthorized access and disclosure.",
        "correctAnswer": "Refers to the protection of information from unauthorized access and disclosure"
    },
    {
        "id": 325,
        "domain": 2,
        "questionNumber": 325,
        "questionText": "What is the definition of Encryption?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Overall management of IT infrastructure, policies, procedures, and operations",
                "correct": false
            },
            {
                "text": "Notification of potential security incidents",
                "correct": false
            },
            {
                "text": "Subset of ICS",
                "correct": false
            },
            {
                "text": "Process of converting data into a code to prevent unauthorized access",
                "correct": true
            }
        ],
        "explanation": "Encryption is defined as Process of converting data into a code to prevent unauthorized access.",
        "correctAnswer": "Process of converting data into a code to prevent unauthorized access"
    },
    {
        "id": 326,
        "domain": 4,
        "questionNumber": 326,
        "questionText": "What is the definition of Access Controls?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Focuses on IT systems and data recovery after disasters",
                "correct": false
            },
            {
                "text": "Scheme for provisioning secure configuration checks across multiple sources",
                "correct": false
            },
            {
                "text": "Sets of security configuration rules for specific products to establish security baselines",
                "correct": false
            },
            {
                "text": "By setting up strong user permissions, you ensure that only authorized personnel can access certain types data",
                "correct": true
            }
        ],
        "explanation": "Access Controls is defined as By setting up strong user permissions, you ensure that only authorized personnel can access certain types data.",
        "correctAnswer": "By setting up strong user permissions, you ensure that only authorized personnel can access certain types data"
    },
    {
        "id": 327,
        "domain": 2,
        "questionNumber": 327,
        "questionText": "What is the definition of Data Masking?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Evaluates the potential impact of the following",
                "correct": false
            },
            {
                "text": "The likelihood and impact of the risk after mitigation, transference, or acceptance measures have been taken on the initial risk",
                "correct": false
            },
            {
                "text": "Method that involves obscuring specific data within a database to make it inaccessible for unauthorized users while retaining the real data's authenti...",
                "correct": true
            },
            {
                "text": "Piece of malware that is usually created as a lightweight shellcode that can be executed on a given system",
                "correct": false
            }
        ],
        "explanation": "Data Masking is defined as Method that involves obscuring specific data within a database to make it inaccessible for unauthorized users while retaining the real data's authenticity and use for authorized users.",
        "correctAnswer": "Method that involves obscuring specific data within a database to make it inaccessible for unauthorized users while retaining the real data's authenti..."
    },
    {
        "id": 328,
        "domain": 4,
        "questionNumber": 328,
        "questionText": "What is the definition of Physical Security Measures?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "RCA should not assign blame to individuals or teams",
                "correct": false
            },
            {
                "text": "Security model that grants administrative access only when needed for a specific task",
                "correct": false
            },
            {
                "text": "Ensure confidentiality for both physical types of data, such as paper records stored in a filing cabinet, and for digital information contained on ser...",
                "correct": true
            },
            {
                "text": "Technique used to prevent the virus from being detected by the anti-virus software",
                "correct": false
            }
        ],
        "explanation": "Physical Security Measures is defined as Ensure confidentiality for both physical types of data, such as paper records stored in a filing cabinet, and for digital information contained on servers and workstations.",
        "correctAnswer": "Ensure confidentiality for both physical types of data, such as paper records stored in a filing cabinet, and for digital information contained on ser..."
    },
    {
        "id": 329,
        "domain": 5,
        "questionNumber": 329,
        "questionText": "What is the definition of Training and Awareness?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Double-door system that is designed with two doors that are electronically controlled to ensure that only one door can be open at a given time",
                "correct": false
            },
            {
                "text": "Lack of cybersecurity protocols",
                "correct": false
            },
            {
                "text": "Conduct regular training on the security awareness best practices that employees can use to protect their organization\u2019s sensitive data",
                "correct": true
            },
            {
                "text": "Encrypting data as it is written to storage",
                "correct": false
            }
        ],
        "explanation": "Training and Awareness is defined as Conduct regular training on the security awareness best practices that employees can use to protect their organization\u2019s sensitive data.",
        "correctAnswer": "Conduct regular training on the security awareness best practices that employees can use to protect their organization\u2019s sensitive data"
    },
    {
        "id": 330,
        "domain": 3,
        "questionNumber": 330,
        "questionText": "What is the definition of Integrity?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "A XSS attack that only occurs when it is launched and only happens once",
                "correct": false
            },
            {
                "text": "Involves systematic review of logs, configurations, and patches",
                "correct": false
            },
            {
                "text": "A hash digest of a message encrypted with the sender\u2019s private key to let the recipient know the document was created and sent by the person claiming ...",
                "correct": false
            },
            {
                "text": "Helps ensure that information and data remain accurate and unchanged from its original state unless intentionally modified by an authorized individual",
                "correct": true
            }
        ],
        "explanation": "Integrity is defined as Helps ensure that information and data remain accurate and unchanged from its original state unless intentionally modified by an authorized individual.",
        "correctAnswer": "Helps ensure that information and data remain accurate and unchanged from its original state unless intentionally modified by an authorized individual"
    },
    {
        "id": 331,
        "domain": 4,
        "questionNumber": 331,
        "questionText": "What is the definition of Hashing?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Incorrectly indicates an issue when there isn't one",
                "correct": false
            },
            {
                "text": "Process of converting data into a fixed-size value",
                "correct": true
            },
            {
                "text": "A communications network that relies on qubits made of photons (light) to send multiple combinations of ones and zeros simultaneously which results in...",
                "correct": false
            },
            {
                "text": "Sending unsolicited messages to a Bluetooth device",
                "correct": false
            }
        ],
        "explanation": "Hashing is defined as Process of converting data into a fixed-size value.",
        "correctAnswer": "Process of converting data into a fixed-size value"
    },
    {
        "id": 332,
        "domain": 1,
        "questionNumber": 332,
        "questionText": "What is the definition of Digital Signatures?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "An application attack that targets web-based applications by fabricating LDAP statements that are typically created by user input",
                "correct": false
            },
            {
                "text": "Type of Denial of Service attack that targets",
                "correct": false
            },
            {
                "text": "Occurs when a process stores data outside the memory range allocated by the developer",
                "correct": false
            },
            {
                "text": "Ensure both integrity and authenticity",
                "correct": true
            }
        ],
        "explanation": "Digital Signatures is defined as Ensure both integrity and authenticity.",
        "correctAnswer": "Ensure both integrity and authenticity"
    },
    {
        "id": 333,
        "domain": 5,
        "questionNumber": 333,
        "questionText": "What is the definition of Checksums?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Protects EU citizens' data within EU and EEA borders",
                "correct": false
            },
            {
                "text": "Essential for planning and designing wireless networks",
                "correct": false
            },
            {
                "text": "Method to verify the integrity of data during transmission",
                "correct": true
            },
            {
                "text": "Controlled by laws, regulations, or industry standards",
                "correct": false
            }
        ],
        "explanation": "Checksums is defined as Method to verify the integrity of data during transmission.",
        "correctAnswer": "Method to verify the integrity of data during transmission"
    },
    {
        "id": 334,
        "domain": 2,
        "questionNumber": 334,
        "questionText": "What is the definition of Access Controls?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Robust, short vertical posts, typically made of steel or concrete, that are designed to manage or redirect vehicular traffic",
                "correct": false
            },
            {
                "text": "Ensure that only authorized individuals can modify data and this reduces the risk of unintentional or malicious alterations",
                "correct": true
            },
            {
                "text": "Evaluations conducted by third-party entities without a stake in the organization or vendor",
                "correct": false
            },
            {
                "text": "Network of compromised computers or devices controlled remotely by malicious actors",
                "correct": false
            }
        ],
        "explanation": "Access Controls is defined as Ensure that only authorized individuals can modify data and this reduces the risk of unintentional or malicious alterations.",
        "correctAnswer": "Ensure that only authorized individuals can modify data and this reduces the risk of unintentional or malicious alterations"
    },
    {
        "id": 335,
        "domain": 3,
        "questionNumber": 335,
        "questionText": "What is the definition of Regular Audits?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Procuring a cybersecurity insurance policy as a risk management strategy",
                "correct": false
            },
            {
                "text": "Attacker tricks their victims into sharing personal or financial information over the phone",
                "correct": false
            },
            {
                "text": "Involve systematically reviewing logs and operations to ensure that only authorized changes have been made, and any discrepancies are immediately addr...",
                "correct": true
            },
            {
                "text": "Lack of cybersecurity protocols",
                "correct": false
            }
        ],
        "explanation": "Regular Audits is defined as Involve systematically reviewing logs and operations to ensure that only authorized changes have been made, and any discrepancies are immediately addressed.",
        "correctAnswer": "Involve systematically reviewing logs and operations to ensure that only authorized changes have been made, and any discrepancies are immediately addr..."
    },
    {
        "id": 336,
        "domain": 1,
        "questionNumber": 336,
        "questionText": "What is the definition of Availability?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Short-lived voltage increases, often caused by short circuits, tripped breakers, or lightning",
                "correct": false
            },
            {
                "text": "Takes CI/CD further by automatically deploying code changes to testing and production environments",
                "correct": false
            },
            {
                "text": "Ensure that information, systems, and resources are accessible and operational when needed by authorized users",
                "correct": true
            },
            {
                "text": "Unauthorized change of domain registration",
                "correct": false
            }
        ],
        "explanation": "Availability is defined as Ensure that information, systems, and resources are accessible and operational when needed by authorized users.",
        "correctAnswer": "Ensure that information, systems, and resources are accessible and operational when needed by authorized users"
    },
    {
        "id": 337,
        "domain": 2,
        "questionNumber": 337,
        "questionText": "What is the definition of Redundancy?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "A real-world example of race condition exploitation",
                "correct": false
            },
            {
                "text": "Duplication of critical components or functions of a system with the intention of enhancing its reliability",
                "correct": true
            },
            {
                "text": "Communicate risk information and effectiveness of risk management to stakeholders",
                "correct": false
            },
            {
                "text": "Determining the accuracy of identified potential security weaknesses",
                "correct": false
            }
        ],
        "explanation": "Redundancy is defined as Duplication of critical components or functions of a system with the intention of enhancing its reliability.",
        "correctAnswer": "Duplication of critical components or functions of a system with the intention of enhancing its reliability"
    },
    {
        "id": 338,
        "domain": 5,
        "questionNumber": 338,
        "questionText": "What is the definition of Server Redundancy?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Specialized DDoS that allows an attacker to initiate DNS requests from a spoof IP address to flood a website",
                "correct": false
            },
            {
                "text": "Involves using multiple servers in a load balanced or failover configuration so that if one is overloaded or fails, the other servers can take over th...",
                "correct": true
            },
            {
                "text": "Port-based Network Access Control mechanism based on the IEEE 802.1x standard",
                "correct": false
            },
            {
                "text": "Software vulnerability when more data is written to a memory buffer than it can hold",
                "correct": false
            }
        ],
        "explanation": "Server Redundancy is defined as Involves using multiple servers in a load balanced or failover configuration so that if one is overloaded or fails, the other servers can take over the load to continue supporting your end users.",
        "correctAnswer": "Involves using multiple servers in a load balanced or failover configuration so that if one is overloaded or fails, the other servers can take over th..."
    },
    {
        "id": 339,
        "domain": 2,
        "questionNumber": 339,
        "questionText": "What is the definition of Data Redundancy?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Big data information gathering and analysis tool",
                "correct": false
            },
            {
                "text": "Detailed guides for specific tasks or processes",
                "correct": false
            },
            {
                "text": "Manages and tracks mobile devices",
                "correct": false
            },
            {
                "text": "Involves storing data in multiple places",
                "correct": true
            }
        ],
        "explanation": "Data Redundancy is defined as Involves storing data in multiple places.",
        "correctAnswer": "Involves storing data in multiple places"
    },
    {
        "id": 340,
        "domain": 1,
        "questionNumber": 340,
        "questionText": "What is the definition of Network Redundancy?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "A type of spoofing attack where the attacker disconnects a host then replaces it with his or her own machine, spoofing the original host's IP address",
                "correct": false
            },
            {
                "text": "Systematic evaluations conducted by an organization's own audit team",
                "correct": false
            },
            {
                "text": "Isolated environments within a network that are designed to house sensitive data",
                "correct": false
            },
            {
                "text": "Ensures that if one network path fails, the data can travel through another route",
                "correct": true
            }
        ],
        "explanation": "Network Redundancy is defined as Ensures that if one network path fails, the data can travel through another route.",
        "correctAnswer": "Ensures that if one network path fails, the data can travel through another route"
    },
    {
        "id": 341,
        "domain": 5,
        "questionNumber": 341,
        "questionText": "What is the definition of Power Redundancy?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "SOAP has a structured message format in XML",
                "correct": false
            },
            {
                "text": "Acts as proof that data or hardware has been securely disposed of",
                "correct": false
            },
            {
                "text": "Involves using backup power sources, like generators and UPS systems",
                "correct": true
            },
            {
                "text": "Part of the GRC triad (Governance, Risk, and Compliance)",
                "correct": false
            }
        ],
        "explanation": "Power Redundancy is defined as Involves using backup power sources, like generators and UPS systems.",
        "correctAnswer": "Involves using backup power sources, like generators and UPS systems"
    },
    {
        "id": 342,
        "domain": 1,
        "questionNumber": 342,
        "questionText": "What is the definition of Non-repudiation?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Both server and user validate each other",
                "correct": false
            },
            {
                "text": "Governs handling of IT system/process changes",
                "correct": false
            },
            {
                "text": "Provides undeniable proof of participation in digital transactions",
                "correct": true
            },
            {
                "text": "Mechanical locks with numbered push buttons, requiring a correct combination to open",
                "correct": false
            }
        ],
        "explanation": "Non-repudiation is defined as Provides undeniable proof of participation in digital transactions.",
        "correctAnswer": "Provides undeniable proof of participation in digital transactions"
    },
    {
        "id": 343,
        "domain": 3,
        "questionNumber": 343,
        "questionText": "What is the definition of Digital Signatures?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Unique to each user who is operating in the digital domain",
                "correct": true
            },
            {
                "text": "Creates graphs displaying network traffic flows through routers and switches",
                "correct": false
            },
            {
                "text": "Converts data into fixed-size string (digest) using hash functions",
                "correct": false
            },
            {
                "text": "Residual data left behind after deletion or erasure processes",
                "correct": false
            }
        ],
        "explanation": "Digital Signatures is defined as Unique to each user who is operating in the digital domain.",
        "correctAnswer": "Unique to each user who is operating in the digital domain"
    },
    {
        "id": 344,
        "domain": 3,
        "questionNumber": 344,
        "questionText": "What is the definition of Authentication?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Temporary accounts used for time-limited access to resources",
                "correct": false
            },
            {
                "text": "Security measure that ensures individuals or entities **are who they claim to be** during a communication or transaction",
                "correct": true
            },
            {
                "text": "Cisco-developed protocol for reporting network flow information",
                "correct": false
            },
            {
                "text": "Detect changes in environment, convert into data",
                "correct": false
            }
        ],
        "explanation": "Authentication is defined as Security measure that ensures individuals or entities **are who they claim to be** during a communication or transaction.",
        "correctAnswer": "Security measure that ensures individuals or entities **are who they claim to be** during a communication or transaction"
    },
    {
        "id": 345,
        "domain": 5,
        "questionNumber": 345,
        "questionText": "What is the definition of Multi-Factor Authentication System (MFA)?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Uses a list of commonly used passwords (a dictionary) to crack passwords",
                "correct": false
            },
            {
                "text": "Serves as unique digital fingerprint for file identification, including potential malware",
                "correct": false
            },
            {
                "text": "Record network activities and connections",
                "correct": false
            },
            {
                "text": "Security process that requires users to provide multiple methods of identification to verify their identity",
                "correct": true
            }
        ],
        "explanation": "Multi-Factor Authentication System (MFA) is defined as Security process that requires users to provide multiple methods of identification to verify their identity.",
        "correctAnswer": "Security process that requires users to provide multiple methods of identification to verify their identity"
    },
    {
        "id": 346,
        "domain": 5,
        "questionNumber": 346,
        "questionText": "What is the definition of Authorization?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Patches are delivered and installed remotely",
                "correct": false
            },
            {
                "text": "Inactive data on storage devices",
                "correct": false
            },
            {
                "text": "Pertains to the permissions and privileges granted to users or entities after they have been authenticated",
                "correct": true
            },
            {
                "text": "Involve a two-way communication channel where both the organization and the vendor share feedback",
                "correct": false
            }
        ],
        "explanation": "Authorization is defined as Pertains to the permissions and privileges granted to users or entities after they have been authenticated.",
        "correctAnswer": "Pertains to the permissions and privileges granted to users or entities after they have been authenticated"
    },
    {
        "id": 347,
        "domain": 3,
        "questionNumber": 347,
        "questionText": "What is the definition of Accounting?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Standalone programs replicating and spreading to other computers",
                "correct": false
            },
            {
                "text": "A form of brute force attack that tries a few common passwords against many usernames or accounts",
                "correct": false
            },
            {
                "text": "Security measure that ensures all user activities during a communication or transaction are properly tracked and recorded",
                "correct": true
            },
            {
                "text": "Connectionless and faster, but doesn't guarantee data delivery",
                "correct": false
            }
        ],
        "explanation": "Accounting is defined as Security measure that ensures all user activities during a communication or transaction are properly tracked and recorded.",
        "correctAnswer": "Security measure that ensures all user activities during a communication or transaction are properly tracked and recorded"
    },
    {
        "id": 348,
        "domain": 2,
        "questionNumber": 348,
        "questionText": "What is the definition of Technologies Used for Accounting?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Involves looking over someone's shoulder to gather personal information",
                "correct": false
            },
            {
                "text": "Fundamental component of the internet that is responsible for translating human-friendly domain names into IP addresses that computers can understand",
                "correct": false
            },
            {
                "text": "Holds trade secrets, intellectual property, source code, etc.",
                "correct": false
            },
            {
                "text": "Various tools and systems assist in implementing effective accounting processes:",
                "correct": true
            }
        ],
        "explanation": "Technologies Used for Accounting is defined as Various tools and systems assist in implementing effective accounting processes:.",
        "correctAnswer": "Various tools and systems assist in implementing effective accounting processes:"
    },
    {
        "id": 349,
        "domain": 5,
        "questionNumber": 349,
        "questionText": "What is the definition of Technical Controls?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Creating a bit-by-bit copy (image) of a storage device, examining content",
                "correct": false
            },
            {
                "text": "Advanced version of an encrypted virus, but instead of just encrypting the contents it will actually change the viruses code each time it is executed ...",
                "correct": false
            },
            {
                "text": "Encrypts and routes all network requests through the VPN",
                "correct": false
            },
            {
                "text": "Technologies, hardware, and software mechanisms that are implemented to manage and reduce risks",
                "correct": true
            }
        ],
        "explanation": "Technical Controls is defined as Technologies, hardware, and software mechanisms that are implemented to manage and reduce risks.",
        "correctAnswer": "Technologies, hardware, and software mechanisms that are implemented to manage and reduce risks"
    },
    {
        "id": 350,
        "domain": 5,
        "questionNumber": 350,
        "questionText": "What is the definition of Managerial Controls?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Uses multiple computers, storage devices, and network connections as a single system",
                "correct": false
            },
            {
                "text": "Can be categorized into different levels",
                "correct": false
            },
            {
                "text": "Class of security tools for incident response, threat hunting, and security configurations",
                "correct": false
            },
            {
                "text": "Sometimes also referred to as <ins>administrative controls</ins>",
                "correct": true
            }
        ],
        "explanation": "Managerial Controls is defined as Sometimes also referred to as <ins>administrative controls</ins>.",
        "correctAnswer": "Sometimes also referred to as <ins>administrative controls</ins>"
    },
    {
        "id": 351,
        "domain": 5,
        "questionNumber": 351,
        "questionText": "What is the definition of Operational Controls?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Summary of the report's findings and contains outlines of any further actions to be taken",
                "correct": false
            },
            {
                "text": "Combines traditional office work with remote work opportunities",
                "correct": false
            },
            {
                "text": "Procedures and measures that are designed to protect data on a day-to-day basis",
                "correct": true
            },
            {
                "text": "Specific malware type designed to initiate or run other malware forms within a payload on an infected host",
                "correct": false
            }
        ],
        "explanation": "Operational Controls is defined as Procedures and measures that are designed to protect data on a day-to-day basis.",
        "correctAnswer": "Procedures and measures that are designed to protect data on a day-to-day basis"
    },
    {
        "id": 352,
        "domain": 5,
        "questionNumber": 352,
        "questionText": "What is the definition of Physical Controls?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Tangible, real-world measures taken to protect assets",
                "correct": true
            },
            {
                "text": "Estimated frequency of threat occurrence within a year",
                "correct": false
            },
            {
                "text": "Disguises original data to protect sensitive information",
                "correct": false
            },
            {
                "text": "Develop strategies",
                "correct": false
            }
        ],
        "explanation": "Physical Controls is defined as Tangible, real-world measures taken to protect assets.",
        "correctAnswer": "Tangible, real-world measures taken to protect assets"
    },
    {
        "id": 353,
        "domain": 1,
        "questionNumber": 353,
        "questionText": "What is the definition of Preventive Controls?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Body of representatives from various parts of an organization that is responsible for evaluation of any proposed changes",
                "correct": false
            },
            {
                "text": "Creating duplicate copies of digital information to protect against data loss, corruption, or unavailability",
                "correct": false
            },
            {
                "text": "Gaining higher-level permissions than originally assigned",
                "correct": false
            },
            {
                "text": "Proactive measures implemented to thwart potential security threats or breaches",
                "correct": true
            }
        ],
        "explanation": "Preventive Controls is defined as Proactive measures implemented to thwart potential security threats or breaches.",
        "correctAnswer": "Proactive measures implemented to thwart potential security threats or breaches"
    },
    {
        "id": 354,
        "domain": 3,
        "questionNumber": 354,
        "questionText": "What is the definition of Deterrent Controls?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Discourage potential attackers by making the effort seem less appealing or more challenging",
                "correct": true
            },
            {
                "text": "Refers to the individual or entity attempting to gain access",
                "correct": false
            },
            {
                "text": "Specifies entities permitted to access a resource",
                "correct": false
            },
            {
                "text": "Corrupts a DNS resolver's cache with false information",
                "correct": false
            }
        ],
        "explanation": "Deterrent Controls is defined as Discourage potential attackers by making the effort seem less appealing or more challenging.",
        "correctAnswer": "Discourage potential attackers by making the effort seem less appealing or more challenging"
    },
    {
        "id": 355,
        "domain": 5,
        "questionNumber": 355,
        "questionText": "What is the definition of Detective Controls?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Dedicated devices for using Access Control Lists (ACLs) to protect networks",
                "correct": false
            },
            {
                "text": "Monitor and alert organizations to malicious activities as they occur or shortly thereafter",
                "correct": true
            },
            {
                "text": "Occurs whenever an unauthorized person closely follows someone through the access control vestibule who has legitimate access into the",
                "correct": false
            },
            {
                "text": "Involves storing data in multiple places",
                "correct": false
            }
        ],
        "explanation": "Detective Controls is defined as Monitor and alert organizations to malicious activities as they occur or shortly thereafter.",
        "correctAnswer": "Monitor and alert organizations to malicious activities as they occur or shortly thereafter"
    },
    {
        "id": 356,
        "domain": 4,
        "questionNumber": 356,
        "questionText": "What is the definition of Corrective Controls?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Combining in-office and remote work for flexibility",
                "correct": false
            },
            {
                "text": "File creation date, resource owner, file name, and data sensitivity",
                "correct": false
            },
            {
                "text": "Graphical representations of",
                "correct": false
            },
            {
                "text": "Mitigate any potential damage and restore systems to their normal state",
                "correct": true
            }
        ],
        "explanation": "Corrective Controls is defined as Mitigate any potential damage and restore systems to their normal state.",
        "correctAnswer": "Mitigate any potential damage and restore systems to their normal state"
    },
    {
        "id": 357,
        "domain": 2,
        "questionNumber": 357,
        "questionText": "What is the definition of Compensating Controls?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Process of identifying the individual responsible for maintaining the confidentiality, integrity, availability, and privacy of information assets",
                "correct": false
            },
            {
                "text": "Alternative measures implemented when primary security controls are not feasible or effective",
                "correct": true
            },
            {
                "text": "Malicious deception that is often spread through social media, email, or other communication channels",
                "correct": false
            },
            {
                "text": "Provides individualized data encryption even in open networks",
                "correct": false
            }
        ],
        "explanation": "Compensating Controls is defined as Alternative measures implemented when primary security controls are not feasible or effective.",
        "correctAnswer": "Alternative measures implemented when primary security controls are not feasible or effective"
    },
    {
        "id": 358,
        "domain": 5,
        "questionNumber": 358,
        "questionText": "What is the definition of Directive Controls?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Guide, inform, or mandate actions",
                "correct": true
            },
            {
                "text": "Installed on devices in a corporate environment where the organization owns and controls device software",
                "correct": false
            },
            {
                "text": "Software agents are installed on each system to collect and send log data",
                "correct": false
            },
            {
                "text": "Summary of the report's findings and contains outlines of any further actions to be taken",
                "correct": false
            }
        ],
        "explanation": "Directive Controls is defined as Guide, inform, or mandate actions.",
        "correctAnswer": "Guide, inform, or mandate actions"
    },
    {
        "id": 359,
        "domain": 3,
        "questionNumber": 359,
        "questionText": "What is the definition of Gap Analysis?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Process of evaluating the differences between an organization's current performance and its desired performance",
                "correct": true
            },
            {
                "text": "Used for key exchange and secure key distribution",
                "correct": false
            },
            {
                "text": "Highest level, includes highly sensitive national security information",
                "correct": false
            },
            {
                "text": "Everyday objects enhanced with computing and internet capabilities",
                "correct": false
            }
        ],
        "explanation": "Gap Analysis is defined as Process of evaluating the differences between an organization's current performance and its desired performance.",
        "correctAnswer": "Process of evaluating the differences between an organization's current performance and its desired performance"
    },
    {
        "id": 360,
        "domain": 4,
        "questionNumber": 360,
        "questionText": "What is the definition of Plan of Action and Milestones (POA&M)?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Specific method by which malware code penetrates and infects a targeted system",
                "correct": false
            },
            {
                "text": "Means or pathway by which an attacker can gain unauthorized access to a computer or network to deliver a malicious payload or carry out an unwanted ac...",
                "correct": false
            },
            {
                "text": "Operates at the application layer",
                "correct": false
            },
            {
                "text": "A structured framework to address identified gaps:",
                "correct": true
            }
        ],
        "explanation": "Plan of Action and Milestones (POA&M) is defined as A structured framework to address identified gaps:.",
        "correctAnswer": "A structured framework to address identified gaps:"
    },
    {
        "id": 361,
        "domain": 4,
        "questionNumber": 361,
        "questionText": "What is the definition of Adaptive Identity?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Evaluates the potential impact of the following",
                "correct": false
            },
            {
                "text": "Uses a hash digest encrypted with a private key",
                "correct": false
            },
            {
                "text": "Isolated environments within a network that are designed to house sensitive data",
                "correct": false
            },
            {
                "text": "Relies on real-time validation that takes into account the user's behavior, device, location, and more",
                "correct": true
            }
        ],
        "explanation": "Adaptive Identity is defined as Relies on real-time validation that takes into account the user's behavior, device, location, and more.",
        "correctAnswer": "Relies on real-time validation that takes into account the user's behavior, device, location, and more"
    },
    {
        "id": 362,
        "domain": 3,
        "questionNumber": 362,
        "questionText": "What is the definition of Threat Scope Reduction?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Digital certificate that is signed by the same entity whose identity it it certifies",
                "correct": false
            },
            {
                "text": "Involves the use of another person's personal information without",
                "correct": false
            },
            {
                "text": "Limits the users\u2019 access to only what they need for their work tasks because this reduces the network\u2019s potential attack surface",
                "correct": true
            },
            {
                "text": "Essential user security awareness training tool that can be used to educate individuals about the risks of phishing and how to best identify potential...",
                "correct": false
            }
        ],
        "explanation": "Threat Scope Reduction is defined as Limits the users\u2019 access to only what they need for their work tasks because this reduces the network\u2019s potential attack surface.",
        "correctAnswer": "Limits the users\u2019 access to only what they need for their work tasks because this reduces the network\u2019s potential attack surface"
    },
    {
        "id": 363,
        "domain": 1,
        "questionNumber": 363,
        "questionText": "What is the definition of Policy-Driven Access Control?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Process of enhancing system, application, or network security",
                "correct": false
            },
            {
                "text": "Highly skilled attackers sponsored by governments for cyber espionage or warfare",
                "correct": false
            },
            {
                "text": "Entails developing, managing, and enforcing user access policies based on their roles and responsibilities",
                "correct": true
            },
            {
                "text": "involves taking steps to address vulnerabilities or issues, such as patching or reconfiguration",
                "correct": false
            }
        ],
        "explanation": "Policy-Driven Access Control is defined as Entails developing, managing, and enforcing user access policies based on their roles and responsibilities.",
        "correctAnswer": "Entails developing, managing, and enforcing user access policies based on their roles and responsibilities"
    },
    {
        "id": 364,
        "domain": 2,
        "questionNumber": 364,
        "questionText": "What is the definition of Secured Zones?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Elapsed time since the capture started",
                "correct": false
            },
            {
                "text": "Data related to legal proceedings, contracts, regulatory compliance",
                "correct": false
            },
            {
                "text": "Isolated environments within a network that are designed to house sensitive data",
                "correct": true
            },
            {
                "text": "Practices and tools for creating, storing, and managing passwords",
                "correct": false
            }
        ],
        "explanation": "Secured Zones is defined as Isolated environments within a network that are designed to house sensitive data.",
        "correctAnswer": "Isolated environments within a network that are designed to house sensitive data"
    },
    {
        "id": 365,
        "domain": 5,
        "questionNumber": 365,
        "questionText": "What is the definition of Subject/System?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Refers to the individual or entity attempting to gain access",
                "correct": true
            },
            {
                "text": "Scenario-based discussion among key stakeholders",
                "correct": false
            },
            {
                "text": "Sent TRAP messages get a unique object identifier OID) to distinguish each message as a unique message being received",
                "correct": false
            },
            {
                "text": "Known as \u201cred teaming\u201d",
                "correct": false
            }
        ],
        "explanation": "Subject/System is defined as Refers to the individual or entity attempting to gain access.",
        "correctAnswer": "Refers to the individual or entity attempting to gain access"
    },
    {
        "id": 366,
        "domain": 5,
        "questionNumber": 366,
        "questionText": "What is the definition of Policy Engine?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Allows the receiver to verify the source and integrity of an email by adding a digital signature to the email headers",
                "correct": false
            },
            {
                "text": "Blocks all traffic during a failure, prioritizing security over connectivity",
                "correct": false
            },
            {
                "text": "Cross-references the access request with its predefined policies",
                "correct": true
            },
            {
                "text": "Initiating multiple TCP sessions but not completing the 3-way handshake",
                "correct": false
            }
        ],
        "explanation": "Policy Engine is defined as Cross-references the access request with its predefined policies.",
        "correctAnswer": "Cross-references the access request with its predefined policies"
    },
    {
        "id": 367,
        "domain": 2,
        "questionNumber": 367,
        "questionText": "What is the definition of Policy Administrator?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Involves searching through trash to find valuable information",
                "correct": false
            },
            {
                "text": "Formal, written declaration of audit or assessment results",
                "correct": false
            },
            {
                "text": "Involves the process of secretly listening to private conversations",
                "correct": false
            },
            {
                "text": "Used to establish and manage the access policies",
                "correct": true
            }
        ],
        "explanation": "Policy Administrator is defined as Used to establish and manage the access policies.",
        "correctAnswer": "Used to establish and manage the access policies"
    },
    {
        "id": 368,
        "domain": 3,
        "questionNumber": 368,
        "questionText": "What is the definition of Policy Enforcement Point?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Centralized decision-maker in SDN",
                "correct": false
            },
            {
                "text": "Form of spear phishing that targets high-profile individuals, like CEOs or CFOs",
                "correct": false
            },
            {
                "text": "Computing functions distributed across multiple systems or locations",
                "correct": false
            },
            {
                "text": "Where the decision to grant or deny access is actually execute",
                "correct": true
            }
        ],
        "explanation": "Policy Enforcement Point is defined as Where the decision to grant or deny access is actually execute.",
        "correctAnswer": "Where the decision to grant or deny access is actually execute"
    },
    {
        "id": 369,
        "domain": 2,
        "questionNumber": 369,
        "questionText": "What is the definition of Unskilled Attackers?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Enables automated vulnerability management, measurement, and policy compliance evaluation",
                "correct": false
            },
            {
                "text": "Structured process of sourcing, vetting, and obtaining security technologies and services",
                "correct": false
            },
            {
                "text": "Average time to repair a failed component or system",
                "correct": false
            },
            {
                "text": "Limited technical expertise, use readily available tools",
                "correct": true
            }
        ],
        "explanation": "Unskilled Attackers is defined as Limited technical expertise, use readily available tools.",
        "correctAnswer": "Limited technical expertise, use readily available tools"
    },
    {
        "id": 370,
        "domain": 2,
        "questionNumber": 370,
        "questionText": "What is the definition of Hacktivists?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "More specific form of impersonation where an attacker pretends to represent a legitimate company or brand",
                "correct": false
            },
            {
                "text": "Driven by political, social, or environmental ideologies",
                "correct": true
            },
            {
                "text": "Dividing a network into smaller segments to improve performance and security",
                "correct": false
            },
            {
                "text": "Alternative measures implemented when primary security controls are not feasible or effective",
                "correct": false
            }
        ],
        "explanation": "Hacktivists is defined as Driven by political, social, or environmental ideologies.",
        "correctAnswer": "Driven by political, social, or environmental ideologies"
    },
    {
        "id": 371,
        "domain": 4,
        "questionNumber": 371,
        "questionText": "What is the definition of Organized Crime?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Class of malware that conceals its presence by modifying system files, often at the kernel level",
                "correct": false
            },
            {
                "text": "Encompasses the entire system for managing key pairs, policies, and trust",
                "correct": false
            },
            {
                "text": "Execute cyberattacks for financial gain (e.g., ransomware, identity theft)",
                "correct": true
            },
            {
                "text": "Analyzes traffic and compares it to a normal baseline of traffic to determine whether a threat is occurring",
                "correct": false
            }
        ],
        "explanation": "Organized Crime is defined as Execute cyberattacks for financial gain (e.g., ransomware, identity theft).",
        "correctAnswer": "Execute cyberattacks for financial gain (e.g., ransomware, identity theft)"
    },
    {
        "id": 372,
        "domain": 4,
        "questionNumber": 372,
        "questionText": "What is the definition of Nation-state Actor?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Highly skilled attackers sponsored by governments for cyber espionage or warfare",
                "correct": true
            },
            {
                "text": "An Internet protocol used for collecting information from managed devices on IP networks and modifying device behavior",
                "correct": false
            },
            {
                "text": "Checks message integrity and authenticity",
                "correct": false
            },
            {
                "text": "A real-world example of race condition exploitation",
                "correct": false
            }
        ],
        "explanation": "Nation-state Actor is defined as Highly skilled attackers sponsored by governments for cyber espionage or warfare.",
        "correctAnswer": "Highly skilled attackers sponsored by governments for cyber espionage or warfare"
    },
    {
        "id": 373,
        "domain": 5,
        "questionNumber": 373,
        "questionText": "What is the definition of Insider Threats?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Security threats originating from within the organization",
                "correct": true
            },
            {
                "text": "Efficient and secure, uses algebraic structure of elliptical curves",
                "correct": false
            },
            {
                "text": "Improper clearing of resources may expose sensitive data",
                "correct": false
            },
            {
                "text": "May include threat trends, user behavior, and data flow anomalies",
                "correct": false
            }
        ],
        "explanation": "Insider Threats is defined as Security threats originating from within the organization.",
        "correctAnswer": "Security threats originating from within the organization"
    },
    {
        "id": 374,
        "domain": 4,
        "questionNumber": 374,
        "questionText": "What is the definition of Shadow IT?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Individuals or groups that use their technical skills to promote a cause or drive social change instead of for personal gain",
                "correct": false
            },
            {
                "text": "IT systems, devices, software, or services managed without explicit organizational approval",
                "correct": true
            },
            {
                "text": "Sending unsolicited messages to a Bluetooth device",
                "correct": false
            },
            {
                "text": "Turns off SELinux, relying on default DAC for access control",
                "correct": false
            }
        ],
        "explanation": "Shadow IT is defined as IT systems, devices, software, or services managed without explicit organizational approval.",
        "correctAnswer": "IT systems, devices, software, or services managed without explicit organizational approval"
    },
    {
        "id": 375,
        "domain": 2,
        "questionNumber": 375,
        "questionText": "What is the definition of Honeypots?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Records identified risks, descriptions, impacts, likelihoods, and mitigation actions",
                "correct": false
            },
            {
                "text": "Decoy systems to attract and deceive attackers",
                "correct": true
            },
            {
                "text": "Evaluates system stability and reliability under extreme conditions",
                "correct": false
            },
            {
                "text": "Cookies that are stored in the browser cache until they are deleted by the user or pass a defined expiration date",
                "correct": false
            }
        ],
        "explanation": "Honeypots is defined as Decoy systems to attract and deceive attackers.",
        "correctAnswer": "Decoy systems to attract and deceive attackers"
    },
    {
        "id": 376,
        "domain": 3,
        "questionNumber": 376,
        "questionText": "What is the definition of Honeynets?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Network of decoy systems for observing complex attacks",
                "correct": true
            },
            {
                "text": "Techniques and strategies that adversaries employ to exploit vulnerabilities in cryptographic systems with the intent to compromise the confidentialit...",
                "correct": false
            },
            {
                "text": "Describes publicly known vulnerabilities with unique identifiers",
                "correct": false
            },
            {
                "text": "Implement complex admission policies with logical statements to determine access based on conditions",
                "correct": false
            }
        ],
        "explanation": "Honeynets is defined as Network of decoy systems for observing complex attacks.",
        "correctAnswer": "Network of decoy systems for observing complex attacks"
    },
    {
        "id": 377,
        "domain": 2,
        "questionNumber": 377,
        "questionText": "What is the definition of Honeyfiles?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "A hierarchical namespace containing OIDs and their descriptions",
                "correct": false
            },
            {
                "text": "Systematic process for identifying, evaluating, prioritizing, and mitigating vulnerabilities",
                "correct": false
            },
            {
                "text": "Decoy files to detect unauthorized access or data breaches",
                "correct": true
            },
            {
                "text": "Find two different inputs producing the same hash output",
                "correct": false
            }
        ],
        "explanation": "Honeyfiles is defined as Decoy files to detect unauthorized access or data breaches.",
        "correctAnswer": "Decoy files to detect unauthorized access or data breaches"
    },
    {
        "id": 378,
        "domain": 3,
        "questionNumber": 378,
        "questionText": "What is the definition of Honeytokens?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Controlled experiment for transitioning from primary to backup components",
                "correct": false
            },
            {
                "text": "Fake data to alert administrators when accessed or used",
                "correct": true
            },
            {
                "text": "Attacker captures unencrypted data between servers",
                "correct": false
            },
            {
                "text": "Tests the efficiency of the system to recover from multiple points of failure",
                "correct": false
            }
        ],
        "explanation": "Honeytokens is defined as Fake data to alert administrators when accessed or used.",
        "correctAnswer": "Fake data to alert administrators when accessed or used"
    },
    {
        "id": 379,
        "domain": 4,
        "questionNumber": 379,
        "questionText": "What is the definition of Threat Actors Intent?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Specific objective or goal that a threat actor is aiming to achieve through their attack",
                "correct": true
            },
            {
                "text": "Stores MAC addresses associated with switch ports",
                "correct": false
            },
            {
                "text": "Broader term that encompasses lightweight code meant to execute an exploit on a given target",
                "correct": false
            },
            {
                "text": "Vendor-specific, registered with IANA",
                "correct": false
            }
        ],
        "explanation": "Threat Actors Intent is defined as Specific objective or goal that a threat actor is aiming to achieve through their attack.",
        "correctAnswer": "Specific objective or goal that a threat actor is aiming to achieve through their attack"
    },
    {
        "id": 380,
        "domain": 2,
        "questionNumber": 380,
        "questionText": "What is the definition of Threat Actors Motivation?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Malicious deception that is often spread through social media, email, or other communication channels",
                "correct": false
            },
            {
                "text": "Where *threats* and *vulnerabilities* **intersect**, that is where the <ins>risk</ins> to your enterprise systems and networks lies",
                "correct": false
            },
            {
                "text": "Verifying user, device, or system identity",
                "correct": false
            },
            {
                "text": "Underlying reasons or driving forces that pushes a threat actor to carry out their attack",
                "correct": true
            }
        ],
        "explanation": "Threat Actors Motivation is defined as Underlying reasons or driving forces that pushes a threat actor to carry out their attack.",
        "correctAnswer": "Underlying reasons or driving forces that pushes a threat actor to carry out their attack"
    },
    {
        "id": 381,
        "domain": 2,
        "questionNumber": 381,
        "questionText": "What is the definition of Data Exfiltration?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Acts as proof that data or hardware has been securely disposed of",
                "correct": false
            },
            {
                "text": "Electronic credentials verifying entity identity for secure communications",
                "correct": false
            },
            {
                "text": "Involves the process of secretly listening to private conversations",
                "correct": false
            },
            {
                "text": "Unauthorized transfer of data from a computer",
                "correct": true
            }
        ],
        "explanation": "Data Exfiltration is defined as Unauthorized transfer of data from a computer.",
        "correctAnswer": "Unauthorized transfer of data from a computer"
    },
    {
        "id": 382,
        "domain": 1,
        "questionNumber": 382,
        "questionText": "What is the definition of Espionage?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Monitors the traffic coming in and out of a network",
                "correct": false
            },
            {
                "text": "Spying on individuals, organizations, or nations to gather sensitive or classified information",
                "correct": true
            },
            {
                "text": "A balance between FAR and FRR for optimal authentication effectiveness",
                "correct": false
            },
            {
                "text": "Automation and orchestration systems need ongoing maintenance and adaptation",
                "correct": false
            }
        ],
        "explanation": "Espionage is defined as Spying on individuals, organizations, or nations to gather sensitive or classified information.",
        "correctAnswer": "Spying on individuals, organizations, or nations to gather sensitive or classified information"
    },
    {
        "id": 383,
        "domain": 3,
        "questionNumber": 383,
        "questionText": "What is the definition of Internal Threat Actors?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Involves formal validation or confirmation provided by an entity to assert the accuracy and authenticity of specific information",
                "correct": false
            },
            {
                "text": "Individuals or entities within an organization who pose a threat to its security",
                "correct": true
            },
            {
                "text": "Conducted at regular intervals (e.g., annually, quarterly, monthly)",
                "correct": false
            },
            {
                "text": "Type of arbitrary code execution that occurs remotely, often over the internet",
                "correct": false
            }
        ],
        "explanation": "Internal Threat Actors is defined as Individuals or entities within an organization who pose a threat to its security.",
        "correctAnswer": "Individuals or entities within an organization who pose a threat to its security"
    },
    {
        "id": 384,
        "domain": 5,
        "questionNumber": 384,
        "questionText": "What is the definition of External Threat Actors?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Set of vulnerabilities in Bluetooth technology that can allow an attacker to take over devices, spread malware, or even establish an on-path attack to...",
                "correct": false
            },
            {
                "text": "Regularly review collected data and make necessary adjustments",
                "correct": false
            },
            {
                "text": "Individuals or groups outside an organization who attempt to breach its cybersecurity defenses",
                "correct": true
            },
            {
                "text": "Text file used to store information about a user when they visit a website",
                "correct": false
            }
        ],
        "explanation": "External Threat Actors is defined as Individuals or groups outside an organization who attempt to breach its cybersecurity defenses.",
        "correctAnswer": "Individuals or groups outside an organization who attempt to breach its cybersecurity defenses"
    },
    {
        "id": 385,
        "domain": 1,
        "questionNumber": 385,
        "questionText": "What is the definition of Script Kiddie?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Technique used to prevent the virus from being detected by the anti-virus software",
                "correct": false
            },
            {
                "text": "Individual with limited technical knowledge",
                "correct": true
            },
            {
                "text": "Detailed analysis to identify vulnerabilities and risks",
                "correct": false
            },
            {
                "text": "Employees use personal devices for work",
                "correct": false
            }
        ],
        "explanation": "Script Kiddie is defined as Individual with limited technical knowledge.",
        "correctAnswer": "Individual with limited technical knowledge"
    },
    {
        "id": 386,
        "domain": 2,
        "questionNumber": 386,
        "questionText": "What is the definition of Unskilled Attacker (Script Kiddie)?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Log data is collected directly from systems using standard protocols",
                "correct": false
            },
            {
                "text": "Functions",
                "correct": false
            },
            {
                "text": "A real-world example of race condition exploitation",
                "correct": false
            },
            {
                "text": "Individual who lacks the technical knowledge to develop their own hacking tools or exploits",
                "correct": true
            }
        ],
        "explanation": "Unskilled Attacker (Script Kiddie) is defined as Individual who lacks the technical knowledge to develop their own hacking tools or exploits.",
        "correctAnswer": "Individual who lacks the technical knowledge to develop their own hacking tools or exploits"
    },
    {
        "id": 387,
        "domain": 4,
        "questionNumber": 387,
        "questionText": "What is the definition of Hacktivists?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Central hub for power reception and distribution",
                "correct": false
            },
            {
                "text": "Type of Denial of Service attack that targets",
                "correct": false
            },
            {
                "text": "Practice and study of writing and solving codes",
                "correct": false
            },
            {
                "text": "Individuals or groups that use their technical skills to promote a cause or drive social change instead of for personal gain",
                "correct": true
            }
        ],
        "explanation": "Hacktivists is defined as Individuals or groups that use their technical skills to promote a cause or drive social change instead of for personal gain.",
        "correctAnswer": "Individuals or groups that use their technical skills to promote a cause or drive social change instead of for personal gain"
    },
    {
        "id": 388,
        "domain": 5,
        "questionNumber": 388,
        "questionText": "What is the definition of Hacktivism?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Activities in which the use of hacking and other cyber techniques is used to promote or advance a political or social cause",
                "correct": true
            },
            {
                "text": "Multi-platform, open-source log management tool",
                "correct": false
            },
            {
                "text": "Highest level, includes highly sensitive national security information",
                "correct": false
            },
            {
                "text": "Essential for fine-grained access control, grouping objects with similar security characteristics",
                "correct": false
            }
        ],
        "explanation": "Hacktivism is defined as Activities in which the use of hacking and other cyber techniques is used to promote or advance a political or social cause.",
        "correctAnswer": "Activities in which the use of hacking and other cyber techniques is used to promote or advance a political or social cause"
    },
    {
        "id": 389,
        "domain": 3,
        "questionNumber": 389,
        "questionText": "What is the definition of Doxing?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Structured process of sourcing, vetting, and obtaining security technologies and services",
                "correct": false
            },
            {
                "text": "Involves the public release of private information about an individual or organization",
                "correct": true
            },
            {
                "text": "Moving across networks",
                "correct": false
            },
            {
                "text": "Allows a system to control access to things like device drivers, your sound card, your video display or monitor, and other similar things",
                "correct": false
            }
        ],
        "explanation": "Doxing is defined as Involves the public release of private information about an individual or organization.",
        "correctAnswer": "Involves the public release of private information about an individual or organization"
    },
    {
        "id": 390,
        "domain": 1,
        "questionNumber": 390,
        "questionText": "What is the definition of Nation-state Actor?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Short-lived voltage increases, often caused by short circuits, tripped breakers, or lightning",
                "correct": false
            },
            {
                "text": "Groups or individuals that are sponsored by a government to conduct cyber operations against other nations, organizations, or individuals",
                "correct": true
            },
            {
                "text": "Requests identifying information from the user and forwards certificate request up to the CA to create a digital certificate",
                "correct": false
            },
            {
                "text": "WAPs allow wireless devices to connect to a wired network using Wi-Fi standards",
                "correct": false
            }
        ],
        "explanation": "Nation-state Actor is defined as Groups or individuals that are sponsored by a government to conduct cyber operations against other nations, organizations, or individuals.",
        "correctAnswer": "Groups or individuals that are sponsored by a government to conduct cyber operations against other nations, organizations, or individuals"
    },
    {
        "id": 391,
        "domain": 4,
        "questionNumber": 391,
        "questionText": "What is the definition of False Flag Attack?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Connectionless and faster, but doesn't guarantee data delivery",
                "correct": false
            },
            {
                "text": "Attack that is orchestrated in such a way that it appears to originate from a different source or group than the actual perpetrators, with the intent ...",
                "correct": true
            },
            {
                "text": "Currently undergoing change",
                "correct": false
            },
            {
                "text": "Isolates running programs, limiting their access to resources",
                "correct": false
            }
        ],
        "explanation": "False Flag Attack is defined as Attack that is orchestrated in such a way that it appears to originate from a different source or group than the actual perpetrators, with the intent to mislead investigators and attribute the attack to someone else.",
        "correctAnswer": "Attack that is orchestrated in such a way that it appears to originate from a different source or group than the actual perpetrators, with the intent ..."
    },
    {
        "id": 392,
        "domain": 5,
        "questionNumber": 392,
        "questionText": "What is the definition of Advanced Persistent Threat (APT)?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Term that used to be used synonymously with a nation-state actor because of their long-term persistence and stealth",
                "correct": true
            },
            {
                "text": "Central component connecting IoT devices",
                "correct": false
            },
            {
                "text": "involves taking steps to address vulnerabilities or issues, such as patching or reconfiguration",
                "correct": false
            },
            {
                "text": "Uses multiple computers, storage devices, and network connections as a single system",
                "correct": false
            }
        ],
        "explanation": "Advanced Persistent Threat (APT) is defined as Term that used to be used synonymously with a nation-state actor because of their long-term persistence and stealth.",
        "correctAnswer": "Term that used to be used synonymously with a nation-state actor because of their long-term persistence and stealth"
    },
    {
        "id": 393,
        "domain": 1,
        "questionNumber": 393,
        "questionText": "What is the definition of Insider Threats?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Type of spoofing attack where the attacker disconnects a host and then",
                "correct": false
            },
            {
                "text": "Cybersecurity threats that originate from within the organization",
                "correct": true
            },
            {
                "text": "Allows attackers to take control of a device's Bluetooth functions",
                "correct": false
            },
            {
                "text": "REST uses standard HTTP methods, status codes, URIs, and MIME types for interactions",
                "correct": false
            }
        ],
        "explanation": "Insider Threats is defined as Cybersecurity threats that originate from within the organization.",
        "correctAnswer": "Cybersecurity threats that originate from within the organization"
    },
    {
        "id": 394,
        "domain": 1,
        "questionNumber": 394,
        "questionText": "What is the definition of Shadow IT?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Confirms the software author's identity and integrity",
                "correct": false
            },
            {
                "text": "Specific malware type designed to initiate or run other malware forms within a payload on an infected host",
                "correct": false
            },
            {
                "text": "Refers to the encryption and decryption process using public and private keys",
                "correct": false
            },
            {
                "text": "Use of information technology systems, devices, software, applications, and services without explicit organizational approval",
                "correct": true
            }
        ],
        "explanation": "Shadow IT is defined as Use of information technology systems, devices, software, applications, and services without explicit organizational approval.",
        "correctAnswer": "Use of information technology systems, devices, software, applications, and services without explicit organizational approval"
    },
    {
        "id": 395,
        "domain": 4,
        "questionNumber": 395,
        "questionText": "What is the definition of Bring Your Own Devices (BYOD)?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Data related to legal proceedings, contracts, regulatory compliance",
                "correct": false
            },
            {
                "text": "Manage IT services on behalf of organizations",
                "correct": false
            },
            {
                "text": "Involves the use of personal devices for work purposes",
                "correct": true
            },
            {
                "text": "Restricts access to system resources based on subject clearance and object labels",
                "correct": false
            }
        ],
        "explanation": "Bring Your Own Devices (BYOD) is defined as Involves the use of personal devices for work purposes.",
        "correctAnswer": "Involves the use of personal devices for work purposes"
    },
    {
        "id": 396,
        "domain": 3,
        "questionNumber": 396,
        "questionText": "What is the definition of Threat Vector?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Gaining higher-level permissions than originally assigned",
                "correct": false
            },
            {
                "text": "Uses one authentication factor to access a user account",
                "correct": false
            },
            {
                "text": "Means or pathway by which an attacker can gain unauthorized access to a computer or network to deliver a malicious payload or carry out an unwanted ac...",
                "correct": true
            },
            {
                "text": "Governs handling of IT system/process changes",
                "correct": false
            }
        ],
        "explanation": "Threat Vector is defined as Means or pathway by which an attacker can gain unauthorized access to a computer or network to deliver a malicious payload or carry out an unwanted action.",
        "correctAnswer": "Means or pathway by which an attacker can gain unauthorized access to a computer or network to deliver a malicious payload or carry out an unwanted ac..."
    },
    {
        "id": 397,
        "domain": 4,
        "questionNumber": 397,
        "questionText": "What is the definition of Attack Surface?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "REST uses standard HTTP methods, status codes, URIs, and MIME types for interactions",
                "correct": false
            },
            {
                "text": "Identifies and describes the risk",
                "correct": false
            },
            {
                "text": "Strategically deciding what to keep and for how long",
                "correct": false
            },
            {
                "text": "Encompasses all the various points where an unauthorized user can try to enter data to or extract data from an environment",
                "correct": true
            }
        ],
        "explanation": "Attack Surface is defined as Encompasses all the various points where an unauthorized user can try to enter data to or extract data from an environment.",
        "correctAnswer": "Encompasses all the various points where an unauthorized user can try to enter data to or extract data from an environment"
    },
    {
        "id": 398,
        "domain": 3,
        "questionNumber": 398,
        "questionText": "What is the definition of Vhishing?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Monitor and control data endpoints, network traffic, and cloud-stored data to prevent data breaches",
                "correct": false
            },
            {
                "text": "A network switch feature that restricts device access to specific ports based on MAC addresses",
                "correct": false
            },
            {
                "text": "Used to encrypt an individual file instead of an entire partition or an entire disk drive",
                "correct": false
            },
            {
                "text": "Use of voice calls to trick victims into revealing their sensitive information to an attacker",
                "correct": true
            }
        ],
        "explanation": "Vhishing is defined as Use of voice calls to trick victims into revealing their sensitive information to an attacker.",
        "correctAnswer": "Use of voice calls to trick victims into revealing their sensitive information to an attacker"
    },
    {
        "id": 399,
        "domain": 2,
        "questionNumber": 399,
        "questionText": "What is the definition of Baiting?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Divide the network into segments to limit potential damage in case of a breach",
                "correct": false
            },
            {
                "text": "Attacker might leave a malware-infected USB drive in a location where their target might find it, such as in the parking lot or the lobby of the targe...",
                "correct": true
            },
            {
                "text": "Resource owners specify which users can access their resources",
                "correct": false
            },
            {
                "text": "Information that, if accessed by unauthorized persons, can result in the loss of security or competitive advantage for a company",
                "correct": false
            }
        ],
        "explanation": "Baiting is defined as Attacker might leave a malware-infected USB drive in a location where their target might find it, such as in the parking lot or the lobby of the targeted organization.",
        "correctAnswer": "Attacker might leave a malware-infected USB drive in a location where their target might find it, such as in the parking lot or the lobby of the targe..."
    },
    {
        "id": 400,
        "domain": 3,
        "questionNumber": 400,
        "questionText": "What is the definition of BlueBorne?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Robust, short vertical posts, typically made of steel or concrete, that are designed to manage or redirect vehicular traffic",
                "correct": false
            },
            {
                "text": "Divides traffic, routing some through the VPN, some directly to the internet",
                "correct": false
            },
            {
                "text": "Common in environments with personal devices (e.g., college campuses); users connect, access a web-based captive portal, download an agent for",
                "correct": false
            },
            {
                "text": "Set of vulnerabilities in Bluetooth technology that can allow an attacker to take over devices, spread malware, or even establish an on-path attack to...",
                "correct": true
            }
        ],
        "explanation": "BlueBorne is defined as Set of vulnerabilities in Bluetooth technology that can allow an attacker to take over devices, spread malware, or even establish an on-path attack to intercept communications without any user interaction.",
        "correctAnswer": "Set of vulnerabilities in Bluetooth technology that can allow an attacker to take over devices, spread malware, or even establish an on-path attack to..."
    },
    {
        "id": 401,
        "domain": 5,
        "questionNumber": 401,
        "questionText": "What is the definition of BlueSmack?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Information about health status, healthcare provision, or payment linked to a specific individual",
                "correct": false
            },
            {
                "text": "Potential security and operational challenges from external collaborators",
                "correct": false
            },
            {
                "text": "The person who ran the scan",
                "correct": false
            },
            {
                "text": "Type of Denial of Service attack that targets",
                "correct": true
            }
        ],
        "explanation": "BlueSmack is defined as Type of Denial of Service attack that targets.",
        "correctAnswer": "Type of Denial of Service attack that targets"
    },
    {
        "id": 402,
        "domain": 3,
        "questionNumber": 402,
        "questionText": "What is the definition of Tactics, Techniques, and Procedures (TTPs)?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Pretending to be someone else",
                "correct": false
            },
            {
                "text": "A network security device or software that monitors and controls network traffic based on security rules",
                "correct": false
            },
            {
                "text": "Specific methods and patterns of activities or behaviors associated with a particular threat actor or group of threat actors",
                "correct": true
            },
            {
                "text": "Protect data during transfer by hiding data interception points",
                "correct": false
            }
        ],
        "explanation": "Tactics, Techniques, and Procedures (TTPs) is defined as Specific methods and patterns of activities or behaviors associated with a particular threat actor or group of threat actors.",
        "correctAnswer": "Specific methods and patterns of activities or behaviors associated with a particular threat actor or group of threat actors"
    },
    {
        "id": 403,
        "domain": 3,
        "questionNumber": 403,
        "questionText": "What is the definition of Deceptive and Disruption Technologies?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Technologies designed to mislead, confuse, and divert attackers from critical assets while simultaneously detecting and neutralizing threats",
                "correct": true
            },
            {
                "text": "Conceals a message within another to hide its very existence",
                "correct": false
            },
            {
                "text": "Retire end-of-life or legacy systems posing security risks",
                "correct": false
            },
            {
                "text": "Involves leaving a malware-infected physical device, like a USB drive, in a place where it will be found by a victim, who will then hopefully use the ...",
                "correct": false
            }
        ],
        "explanation": "Deceptive and Disruption Technologies is defined as Technologies designed to mislead, confuse, and divert attackers from critical assets while simultaneously detecting and neutralizing threats.",
        "correctAnswer": "Technologies designed to mislead, confuse, and divert attackers from critical assets while simultaneously detecting and neutralizing threats"
    },
    {
        "id": 404,
        "domain": 2,
        "questionNumber": 404,
        "questionText": "What is the definition of Honeypots?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Decoy system or network set up to attract potential hackers",
                "correct": true
            },
            {
                "text": "Based on the value to the organization and the sensitivity of the information, determined by the data owner",
                "correct": false
            },
            {
                "text": "Programs have a reserved memory area called a stack to store data during processing",
                "correct": false
            },
            {
                "text": "The default context-based permission scheme in CentOS and Red Hat Enterprise Linux created by NSA",
                "correct": false
            }
        ],
        "explanation": "Honeypots is defined as Decoy system or network set up to attract potential hackers.",
        "correctAnswer": "Decoy system or network set up to attract potential hackers"
    },
    {
        "id": 405,
        "domain": 5,
        "questionNumber": 405,
        "questionText": "What is the definition of Honeynets?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Form of technical social engineering that attempts to scare our end users",
                "correct": false
            },
            {
                "text": "Unauthorized elevation to higher-level users",
                "correct": false
            },
            {
                "text": "Network of honeypots to create a more complex system that is designed to mimic an entire network of systems",
                "correct": true
            },
            {
                "text": "Evaluations conducted by third-party entities without a stake in the organization or vendor",
                "correct": false
            }
        ],
        "explanation": "Honeynets is defined as Network of honeypots to create a more complex system that is designed to mimic an entire network of systems.",
        "correctAnswer": "Network of honeypots to create a more complex system that is designed to mimic an entire network of systems"
    },
    {
        "id": 406,
        "domain": 5,
        "questionNumber": 406,
        "questionText": "What is the definition of Honeyfiles?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Piece of data or a resource that has no legitimate value or use but is monitored for access or use",
                "correct": false
            },
            {
                "text": "Decoy file placed within a system to lure in potential attackers",
                "correct": true
            },
            {
                "text": "Security model that grants administrative access only when needed for a specific task",
                "correct": false
            },
            {
                "text": "Name of a compromised computer or device that is part of a botnet",
                "correct": false
            }
        ],
        "explanation": "Honeyfiles is defined as Decoy file placed within a system to lure in potential attackers.",
        "correctAnswer": "Decoy file placed within a system to lure in potential attackers"
    },
    {
        "id": 407,
        "domain": 5,
        "questionNumber": 407,
        "questionText": "What is the definition of Honeytokens?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Decoy system or network set up to attract potential hackers",
                "correct": false
            },
            {
                "text": "Piece of data or a resource that has no legitimate value or use but is monitored for access or use",
                "correct": true
            },
            {
                "text": "Average time between system or component failures",
                "correct": false
            },
            {
                "text": "Document that outlines the do's and don'ts for users when interacting with an organization's IT systems and resources",
                "correct": false
            }
        ],
        "explanation": "Honeytokens is defined as Piece of data or a resource that has no legitimate value or use but is monitored for access or use.",
        "correctAnswer": "Piece of data or a resource that has no legitimate value or use but is monitored for access or use"
    },
    {
        "id": 408,
        "domain": 2,
        "questionNumber": 408,
        "questionText": "What is the definition of Port Triggering?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Security mechanism where specific services or ports on a network device remain closed until a specific outbound traffic pattern is detected",
                "correct": true
            },
            {
                "text": "U.S. federal statute providing funding to boost semiconductor research and manufacturing in the U.S.",
                "correct": false
            },
            {
                "text": "Decoy systems to attract and deceive attackers",
                "correct": false
            },
            {
                "text": "Simulated cyber attack to identify exploitable vulnerabilities in a computer system",
                "correct": false
            }
        ],
        "explanation": "Port Triggering is defined as Security mechanism where specific services or ports on a network device remain closed until a specific outbound traffic pattern is detected.",
        "correctAnswer": "Security mechanism where specific services or ports on a network device remain closed until a specific outbound traffic pattern is detected"
    },
    {
        "id": 409,
        "domain": 1,
        "questionNumber": 409,
        "questionText": "What is the definition of Physical Security?",
        "type": "multiple-choice",
        "options": [
            {
                "text": "Isolates a system, network, or application suspected of being compromised",
                "correct": false
            },
            {
                "text": "Measures to protect tangible assets (buildings, equipment, people) from harm or unauthorized access",
                "correct": true
            },
            {
                "text": "Replicates data and system processes onto a secondary system",
                "correct": false
            },
            {
                "text": "Process of evaluating the differences between an organization's current performance and its desired performance",
                "correct": false
            }
        ],
        "explanation": "Physical Security is defined as Measures to protect tangible assets (buildings, equipment, people) from harm or unauthorized access.",
        "correctAnswer": "Measures to protect tangible assets (buildings, equipment, people) from harm or unauthorized access"
    }

];

const questions = shuffle(allQuestions).slice(0, 90);


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // ES6 swap
    }
    return array;
}