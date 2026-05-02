// CompTIA Security+ (SY0-701) Question Bank
// Domain Distribution:
// Domain 1: General Security Concepts - 12% (~11 questions)
// Domain 2: Threats, Vulnerabilities & Mitigations - 22% (~20 questions)
// Domain 3: Security Architecture - 18% (~16 questions)
// Domain 4: Security Operations - 28% (~25 questions)
// Domain 5: Security Program Management & Oversight - 20% (~18 questions)

const firstQ = [
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
    }
];



const questions = shuffle(firstQ);


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // ES6 swap
    }
    return array;
}