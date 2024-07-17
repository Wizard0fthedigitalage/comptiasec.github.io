var questionSource = [
    {
        question: "Question 1 : What is the primary goal of information security?",
        choices: ["a. Detecting Intrusions", "b. Logging Events", "c. Confidentiality, Integrity, Availability", "d. System Maintenance"],
        answer: "c"
    },
    {
        question: "Question 2 : Which of the following is NOT a type of malware?",
        choices: ["a. Virus", "b. Worm", "c. Phishing", "d. Trojan"],
        answer: "c"
    },
    {
        question: "Question 3 : Which encryption protocol is used to secure web traffic?",
        choices: ["a. SSL/TLS", "b. FTP", "c. SSH", "d. IPsec"],
        answer: "a"
    },
    {
        question: "Question 4 : Which access control model uses roles to determine access permissions?",
        choices: ["a. MAC", "b. DAC", "c. RBAC", "d. ABAC"],
        answer: "c"
    },
    {
        question: "Question 5 : What is the purpose of a firewall?",
        choices: ["a. To encrypt data", "b. To filter incoming and outgoing network traffic", "c. To scan for viruses", "d. To manage user accounts"],
        answer: "b"
    },
    {
        question: "Question 6 : Which of the following is a characteristic of a strong password?",
        choices: ["a. Contains personal information", "b. Easy to remember", "c. Includes a mix of letters, numbers, and symbols", "d. Is short and simple"],
        answer: "c"
    },
    {
        question: "Question 7 : What is multi-factor authentication (MFA)?",
        choices: ["a. Using multiple usernames", "b. Using a password and a security question", "c. Using two or more authentication methods", "d. Using an encrypted password"],
        answer: "c"
    },
    {
        question: "Question 8 : What does a VPN do?",
        choices: ["a. Encrypts network traffic", "b. Provides unlimited internet access", "c. Blocks malware", "d. Scans for viruses"],
        answer: "a"
    },
    {
        question: "Question 9 : Which protocol is used to secure HTTP connections?",
        choices: ["a. HTTP", "b. HTTPS", "c. FTP", "d. SSH"],
        answer: "b"
    },
    {
        question: "Question 10 : Which of the following is a common hashing algorithm?",
        choices: ["a. SHA-256", "b. AES", "c. RSA", "d. SSL"],
        answer: "a"
    },
    {
        question: "Question 11 : What is the purpose of a DMZ in network security?",
        choices: ["a. To isolate servers from external threats", "b. To provide a secure remote access", "c. To encrypt data", "d. To block incoming traffic"],
        answer: "a"
    },
    {
        question: "Question 12 : Which type of attack involves sending too much data to overflow a buffer?",
        choices: ["a. Phishing", "b. Man-in-the-middle", "c. Buffer overflow", "d. SQL injection"],
        answer: "c"
    },
    {
        question: "Question 13 : What is a common method used to secure wireless networks?",
        choices: ["a. WPA2", "b. FTP", "c. Telnet", "d. HTTP"],
        answer: "a"
    },
    {
        question: "Question 14 : What is the main function of an IDS?",
        choices: ["a. To detect and alert on potential intrusions", "b. To block unauthorized access", "c. To encrypt data", "d. To manage network traffic"],
        answer: "a"
    },
    {
        question: "Question 15 : Which type of malware disguises itself as a legitimate program?",
        choices: ["a. Virus", "b. Worm", "c. Trojan", "d. Ransomware"],
        answer: "c"
    },
    {
        question: "Question 16 : What is the principle of least privilege?",
        choices: ["a. Giving users maximum access", "b. Giving users minimal access necessary for their job", "c. Allowing full access to system administrators", "d. Restricting all user access"],
        answer: "b"
    },
    {
        question: "Question 17 : Which of the following is a social engineering attack?",
        choices: ["a. Phishing", "b. DDoS", "c. SQL injection", "d. Man-in-the-middle"],
        answer: "a"
    },
    {
        question: "Question 18 : What does SSL/TLS use to secure data transmission?",
        choices: ["a. Hashing", "b. Encryption", "c. Compression", "d. Encoding"],
        answer: "b"
    },
    {
        question: "Question 19 : What is the purpose of a honeypot in network security?",
        choices: ["a. To attract and analyze attacks", "b. To encrypt data", "c. To block malware", "d. To monitor network traffic"],
        answer: "a"
    },
    {
        question: "Question 20 : What type of attack involves modifying a query to a database?",
        choices: ["a. Phishing", "b. SQL injection", "c. XSS", "d. Buffer overflow"],
        answer: "b"
    },
    {
        question: "Question 21 : Which type of cryptographic algorithm uses a pair of keys?",
        choices: ["a. Symmetric", "b. Asymmetric", "c. Hashing", "d. Compression"],
        answer: "b"
    },
    {
        question: "Question 22 : What does the CIA triad stand for in information security?",
        choices: ["a. Confidentiality, Integrity, Availability", "b. Confidentiality, Information, Access", "c. Control, Integrity, Access", "d. Control, Information, Availability"],
        answer: "a"
    },
    {
        question: "Question 23 : What is the function of a digital certificate?",
        choices: ["a. To encrypt data", "b. To verify the identity of a user or device", "c. To block malware", "d. To manage user accounts"],
        answer: "b"
    },
    {
        question: "Question 24 : What is the purpose of network segmentation?",
        choices: ["a. To encrypt data", "b. To isolate different parts of the network", "c. To manage user access", "d. To block malware"],
        answer: "b"
    },
    {
        question: "Question 25 : What does the term 'zero-day' refer to?",
        choices: ["a. An unknown vulnerability", "b. A type of malware", "c. A social engineering attack", "d. A cryptographic algorithm"],
        answer: "a"
    },
    {
        question: "Question 26 : What is the primary function of an antivirus program?",
        choices: ["a. To encrypt data", "b. To detect and remove malware", "c. To manage user access", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 27 : Which type of attack exploits a vulnerability before it is patched?",
        choices: ["a. Phishing", "b. Zero-day attack", "c. Man-in-the-middle", "d. SQL injection"],
        answer: "b"
    },
    {
        question: "Question 28 : What is a botnet?",
        choices: ["a. A network of infected computers", "b. A type of firewall", "c. A cryptographic algorithm", "d. A form of social engineering"],
        answer: "a"
    },
    {
        question: "Question 29 : Which type of cryptographic algorithm uses the same key for encryption and decryption?",
        choices: ["a. Symmetric", "b. Asymmetric", "c. Hashing", "d. Compression"],
        answer: "a"
    },
    {
        question: "Question 30 : What is the purpose of a digital signature?",
        choices: ["a. To encrypt data", "b. To verify the integrity and authenticity of a message", "c. To manage user access", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 31 : What is the main function of a VPN?",
        choices: ["a. To provide secure remote access", "b. To block malware", "c. To monitor network traffic", "d. To manage user accounts"],
        answer: "a"
    },
    {
        question: "Question 32 : Which type of attack involves overwhelming a system with traffic?",
        choices: ["a. Phishing", "b. DDoS", "c. Man-in-the-middle", "d. SQL injection"],
        answer: "b"
    },
    {
        question: "Question 33 : What is a common method to prevent SQL injection attacks?",
        choices: ["a. Using encryption", "b. Input validation", "c. Network segmentation", "d. Using a VPN"],
        answer: "b"
    },
    {
        question: "Question 34 : What is the purpose of an access control list (ACL)?",
        choices: ["a. To encrypt data", "b. To define which users or systems can access resources", "c. To block malware", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 35 : What does a penetration test involve?",
        choices: ["a. Encrypting data", "b. Simulating attacks to find vulnerabilities", "c. Managing user access", "d. Blocking malware"],
        answer: "b"
    },
    {
        question: "Question 36 : What is the purpose of a security audit?",
        choices: ["a. To encrypt data", "b. To review and assess security policies and controls", "c. To manage user access", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 37 : Which type of cryptographic algorithm creates a fixed-size output from variable-size input?",
        choices: ["a. Symmetric", "b. Asymmetric", "c. Hashing", "d. Compression"],
        answer: "c"
    },
    {
        question: "Question 38 : What is the purpose of a secure socket layer (SSL)?",
        choices: ["a. To block malware", "b. To encrypt data in transit", "c. To manage user access", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 39 : What is a security policy?",
        choices: ["a. A type of firewall", "b. A set of rules and practices to protect information", "c. A cryptographic algorithm", "d. A form of social engineering"],
        answer: "b"
    },
    {
        question: "Question 40 : What does the term 'phishing' refer to?",
        choices: ["a. A type of malware", "b. An attempt to obtain sensitive information by disguising as a trustworthy entity", "c. A cryptographic algorithm", "d. A form of encryption"],
        answer: "b"
    },
    {
        question: "Question 41 : What is the function of a web application firewall (WAF)?",
        choices: ["a. To block malware", "b. To filter and monitor HTTP traffic to and from a web application", "c. To manage user access", "d. To encrypt data"],
        answer: "b"
    },
    {
        question: "Question 42 : What is the purpose of two-factor authentication (2FA)?",
        choices: ["a. To encrypt data", "b. To provide an additional layer of security by requiring two forms of identification", "c. To block malware", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 43 : What is a common use of public key infrastructure (PKI)?",
        choices: ["a. Encrypting data", "b. Managing digital certificates", "c. Blocking malware", "d. Monitoring network traffic"],
        answer: "b"
    },
    {
        question: "Question 44 : What type of attack involves intercepting communication between two parties?",
        choices: ["a. Phishing", "b. Man-in-the-middle", "c. DDoS", "d. SQL injection"],
        answer: "b"
    },
    {
        question: "Question 45 : What is the purpose of a security awareness training program?",
        choices: ["a. To encrypt data", "b. To educate employees about security policies and practices", "c. To block malware", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 46 : What is a common characteristic of spyware?",
        choices: ["a. It encrypts data", "b. It monitors user activity and collects information without their knowledge", "c. It blocks network traffic", "d. It manages user access"],
        answer: "b"
    },
    {
        question: "Question 47 : What is the purpose of a business continuity plan (BCP)?",
        choices: ["a. To encrypt data", "b. To ensure the continued operation of a business in the event of a disaster", "c. To block malware", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 48 : What does the term 'brute force attack' refer to?",
        choices: ["a. Encrypting data", "b. Attempting all possible combinations to crack a password", "c. Blocking network traffic", "d. Managing user access"],
        answer: "b"
    },
    {
        question: "Question 49 : What is the purpose of an intrusion prevention system (IPS)?",
        choices: ["a. To encrypt data", "b. To detect and block potential threats in real time", "c. To manage user access", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 50 : Which protocol is used to send email securely?",
        choices: ["a. HTTP", "b. HTTPS", "c. SMTP", "d. S/MIME"],
        answer: "d"
    },
    {
        question: "Question 51 : What is the purpose of a digital certificate?",
        choices: ["a. To encrypt data", "b. To verify the identity of a user or device", "c. To block malware", "d. To manage user accounts"],
        answer: "b"
    },
    {
        question: "Question 52 : What does the term 'ransomware' refer to?",
        choices: ["a. Malware that encrypts files and demands payment for the decryption key", "b. Malware that monitors user activity", "c. Malware that spreads across a network", "d. Malware that disrupts system operations"],
        answer: "a"
    },
    {
        question: "Question 53 : What is the primary function of a proxy server?",
        choices: ["a. To encrypt data", "b. To act as an intermediary between a client and a server", "c. To block malware", "d. To manage user access"],
        answer: "b"
    },
    {
        question: "Question 54 : What is the purpose of an encryption key?",
        choices: ["a. To decrypt data", "b. To manage user access", "c. To monitor network traffic", "d. To encrypt data"],
        answer: "d"
    },
    {
        question: "Question 55 : Which of the following is a characteristic of a secure password?",
        choices: ["a. Contains personal information", "b. Easy to remember", "c. Includes a mix of letters, numbers, and symbols", "d. Is short and simple"],
        answer: "c"
    },
    {
        question: "Question 56 : What is the purpose of a security information and event management (SIEM) system?",
        choices: ["a. To encrypt data", "b. To collect and analyze security-related data from multiple sources", "c. To block malware", "d. To manage user access"],
        answer: "b"
    },
    {
        question: "Question 57 : What type of attack involves sending fraudulent emails to obtain sensitive information?",
        choices: ["a. Phishing", "b. Man-in-the-middle", "c. DDoS", "d. SQL injection"],
        answer: "a"
    },
    {
        question: "Question 58 : What is the purpose of a certificate authority (CA)?",
        choices: ["a. To encrypt data", "b. To issue and manage digital certificates", "c. To block malware", "d. To manage user access"],
        answer: "b"
    },
    {
        question: "Question 59 : What is a common method used to secure a wireless network?",
        choices: ["a. WEP", "b. WPA2", "c. FTP", "d. Telnet"],
        answer: "b"
    },
    {
        question: "Question 60 : What is the purpose of a disaster recovery plan (DRP)?",
        choices: ["a. To encrypt data", "b. To outline procedures for recovering from a disaster", "c. To block malware", "d. To manage user access"],
        answer: "b"
    },
    {
        question: "Question 61 : What does the term 'data breach' refer to?",
        choices: ["a. Unauthorized access to data", "b. Encrypting data", "c. Blocking network traffic", "d. Managing user access"],
        answer: "a"
    },
    {
        question: "Question 62 : What is the purpose of a virtual private network (VPN)?",
        choices: ["a. To encrypt data", "b. To provide secure remote access", "c. To block malware", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 63 : What type of attack involves modifying a query to a database?",
        choices: ["a. Phishing", "b. SQL injection", "c. XSS", "d. Buffer overflow"],
        answer: "b"
    },
    {
        question: "Question 64 : What is the purpose of an access control list (ACL)?",
        choices: ["a. To encrypt data", "b. To define which users or systems can access resources", "c. To block malware", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 65 : What does a penetration test involve?",
        choices: ["a. Encrypting data", "b. Simulating attacks to find vulnerabilities", "c. Managing user access", "d. Blocking malware"],
        answer: "b"
    },
    {
        question: "Question 66 : What is the purpose of a security audit?",
        choices: ["a. To encrypt data", "b. To review and assess security policies and controls", "c. To manage user access", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 67 : Which type of cryptographic algorithm creates a fixed-size output from variable-size input?",
        choices: ["a. Symmetric", "b. Asymmetric", "c. Hashing", "d. Compression"],
        answer: "c"
    },
    {
        question: "Question 68 : What is the purpose of a secure socket layer (SSL)?",
        choices: ["a. To block malware", "b. To encrypt data in transit", "c. To manage user access", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 69 : What is a security policy?",
        choices: ["a. A type of firewall", "b. A set of rules and practices to protect information", "c. A cryptographic algorithm", "d. A form of social engineering"],
        answer: "b"
    },
    {
        question: "Question 70 : What does the term 'phishing' refer to?",
        choices: ["a. A type of malware", "b. An attempt to obtain sensitive information by disguising as a trustworthy entity", "c. A cryptographic algorithm", "d. A form of encryption"],
        answer: "b"
    },
    {
        question: "Question 71 : What is the function of a web application firewall (WAF)?",
        choices: ["a. To block malware", "b. To filter and monitor HTTP traffic to and from a web application", "c. To manage user access", "d. To encrypt data"],
        answer: "b"
    },
    {
        question: "Question 72 : What is the purpose of two-factor authentication (2FA)?",
        choices: ["a. To encrypt data", "b. To provide an additional layer of security by requiring two forms of identification", "c. To block malware", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 73 : What is a common use of public key infrastructure (PKI)?",
        choices: ["a. Encrypting data", "b. Managing digital certificates", "c. Blocking malware", "d. Monitoring network traffic"],
        answer: "b"
    },
    {
        question: "Question 74 : What type of attack involves intercepting communication between two parties?",
        choices: ["a. Phishing", "b. Man-in-the-middle", "c. DDoS", "d. SQL injection"],
        answer: "b"
    },
    {
        question: "Question 75 : What is the purpose of a security awareness training program?",
        choices: ["a. To encrypt data", "b. To educate employees about security policies and practices", "c. To block malware", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 76 : What is a common characteristic of spyware?",
        choices: ["a. It encrypts data", "b. It monitors user activity and collects information without their knowledge", "c. It blocks network traffic", "d. It manages user access"],
        answer: "b"
    },
    {
        question: "Question 77 : What is the purpose of a business continuity plan (BCP)?",
        choices: ["a. To encrypt data", "b. To ensure the continued operation of a business in the event of a disaster", "c. To block malware", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 78 : What does the term 'brute force attack' refer to?",
        choices: ["a. Encrypting data", "b. Attempting all possible combinations to crack a password", "c. Blocking network traffic", "d. Managing user access"],
        answer: "b"
    },
    {
        question: "Question 79 : What is the purpose of an intrusion prevention system (IPS)?",
        choices: ["a. To encrypt data", "b. To detect and block potential threats in real time", "c. To manage user access", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 80 : Which protocol is used to send email securely?",
        choices: ["a. HTTP", "b. HTTPS", "c. SMTP", "d. S/MIME"],
        answer: "d"
    },
    {
        question: "Question 81 : What is the purpose of a digital certificate?",
        choices: ["a. To encrypt data", "b. To verify the identity of a user or device", "c. To block malware", "d. To manage user accounts"],
        answer: "b"
    },
    {
        question: "Question 82 : What does the term 'ransomware' refer to?",
        choices: ["a. Malware that encrypts files and demands payment for the decryption key", "b. Malware that monitors user activity", "c. Malware that spreads across a network", "d. Malware that disrupts system operations"],
        answer: "a"
    },
    {
        question: "Question 83 : What is the primary function of a proxy server?",
        choices: ["a. To encrypt data", "b. To act as an intermediary between a client and a server", "c. To block malware", "d. To manage user access"],
        answer: "b"
    },
    {
        question: "Question 84 : What is the purpose of an encryption key?",
        choices: ["a. To decrypt data", "b. To manage user access", "c. To monitor network traffic", "d. To encrypt data"],
        answer: "d"
    },
    {
        question: "Question 85 : Which of the following is a characteristic of a secure password?",
        choices: ["a. Contains personal information", "b. Easy to remember", "c. Includes a mix of letters, numbers, and symbols", "d. Is short and simple"],
        answer: "c"
    },
    {
        question: "Question 86 : What is the purpose of a security information and event management (SIEM) system?",
        choices: ["a. To encrypt data", "b. To collect and analyze security-related data from multiple sources", "c. To block malware", "d. To manage user access"],
        answer: "b"
    },
    {
        question: "Question 87 : What type of attack involves sending fraudulent emails to obtain sensitive information?",
        choices: ["a. Phishing", "b. Man-in-the-middle", "c. DDoS", "d. SQL injection"],
        answer: "a"
    },
    {
        question: "Question 88 : What is the purpose of a certificate authority (CA)?",
        choices: ["a. To encrypt data", "b. To issue and manage digital certificates", "c. To block malware", "d. To manage user access"],
        answer: "b"
    },
    {
        question: "Question 89 : What is a common method used to secure a wireless network?",
        choices: ["a. WEP", "b. WPA2", "c. FTP", "d. Telnet"],
        answer: "b"
    },
    {
        question: "Question 90 : What is the purpose of a disaster recovery plan (DRP)?",
        choices: ["a. To encrypt data", "b. To outline procedures for recovering from a disaster", "c. To block malware", "d. To manage user access"],
        answer: "b"
    },
    {
        question: "Question 91 : What does the term 'data breach' refer to?",
        choices: ["a. Unauthorized access to data", "b. Encrypting data", "c. Blocking network traffic", "d. Managing user access"],
        answer: "a"
    },
    {
        question: "Question 92 : What is the purpose of a virtual private network (VPN)?",
        choices: ["a. To encrypt data", "b. To provide secure remote access", "c. To block malware", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 93 : What type of attack involves modifying a query to a database?",
        choices: ["a. Phishing", "b. SQL injection", "c. XSS", "d. Buffer overflow"],
        answer: "b"
    },
    {
        question: "Question 94 : What is the purpose of an access control list (ACL)?",
        choices: ["a. To encrypt data", "b. To define which users or systems can access resources", "c. To block malware", "d. To monitor network traffic"],
        answer: "b"
    },
    {
        question: "Question 95 : What does a penetration test involve?",
        choices: ["a. Encrypting data", "b. Simulating attacks to find vulnerabilities", "c. Managing user access", "d. Blocking malware"],
        answer: "b"
    },
    {
        question: "Question 96 : What is the purpose of a security audit?",
        choices: ["a. To encrypt data", "b. To review and assess security policies and controls", "c. To manage user access", "d. To monitor network traffic
        answer: "b"
     },
    {
        question: "Question 97 : What type of wireless network security protocol provides strong encryption with key management",
        choices: ["a. WEP", "b. WAP", "c. WPA2", "d. WPA3"],
        answer: "c"
    },
    {
        question: "Question 98 : What is the purpose of a security audit?",
        choices: ["a. To encrypt data", "b. To review and assess security policies and controls", "c. To manage user access", "d. To monitor network traffic
        answer: "b"
     },
    {
        question: "Question 99 : What is a common type of malware that can replicate itself and spread across a network?",
        choices: ["a. virus", "b. worm", "c. trojan", "d. ranswomware"],
        answer: "b"
    },
    {
        question: "Question 100 : What type of security software monitors network traffic for suspicious activity?",
        choices: ["a. IPS", "b. IDS", "c. AV software", "d. anti-malware
        answer: "b"

     },
    {
];
     



