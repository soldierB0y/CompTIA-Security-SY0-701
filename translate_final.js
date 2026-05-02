const fs = require('fs');

const translations = {
    91: {
        q: "¿Qué control disuade a los atacantes al hacer que el esfuerzo parezca menos atractivo?",
        o: ["Deterrent control", "Preventive control", "Detective control", "Corrective control"],
        e: "Los Deterrent controls desaniman a los atacantes potenciales advirtiéndoles de las consecuencias o dificultando el inicio del ataque."
    },
    92: {
        q: "¿Qué control está diseñado para detener un incidente antes de que ocurra?",
        o: ["Preventive control", "Detective control", "Corrective control", "Physical control"],
        e: "Los Preventive controls (como los firewalls) están diseñados para evitar que ocurra una brecha de seguridad."
    },
    93: {
        q: "¿Qué control identifica y registra un incidente después de que ha ocurrido?",
        o: ["Preventive control", "Detective control", "Corrective control", "Deterrent control"],
        e: "Los Detective controls (como las cámaras de seguridad o los logs) identifican actividad sospechosa después del hecho."
    },
    94: {
        q: "¿Qué tipo de control se utiliza cuando el control primario no es factible o es demasiado costoso?",
        o: ["Compensating control", "Directive control", "Detective control", "Corrective control"],
        e: "Un Compensating control se utiliza para mitigar el riesgo cuando no se puede implementar el control estándar."
    },
    95: {
        q: "¿Cuál de los siguientes es un ejemplo de un Administrative control?",
        o: ["Hiring and termination policies", "Encryption", "Security cameras", "Fences"],
        e: "Los Administrative controls son políticas, procedimientos y directrices establecidas por la gerencia."
    },
    96: {
        q: "¿Cuál de los siguientes es un Technical control?",
        o: ["Encryption", "Security awareness training", "Background checks", "Employee handbooks"],
        e: "Los Technical controls son hardware o software implementados para proteger los sistemas."
    },
    97: {
        q: "¿Qué tipo de control de seguridad incluye vallas, guardias y cerraduras?",
        o: ["Physical control", "Technical control", "Administrative control", "Logical control"],
        e: "Los Physical controls son medidas tangibles para restringir el acceso a áreas físicas."
    },
    98: {
        q: "¿Qué métrica define el tiempo máximo que una organización puede tolerar la pérdida de datos?",
        o: ["Recovery Point Objective (RPO)", "Recovery Time Objective (RTO)", "MTBF", "MTTR"],
        e: "El RPO determina la frecuencia necesaria de los backups para evitar una pérdida de datos inaceptable."
    },
    99: {
        q: "¿Qué métrica define el tiempo máximo aceptable para restaurar una función de negocio después de un desastre?",
        o: ["Recovery Time Objective (RTO)", "Recovery Point Objective (RPO)", "SLA", "MTTR"],
        e: "El RTO es el tiempo objetivo para volver a poner en funcionamiento un sistema después de una interrupción."
    },
    100: {
        q: "Un atacante que finge ser un técnico de soporte para obtener contraseñas está realizando:",
        o: ["Pretexting", "Shoulder Surfing", "Tailgating", "Dumpster Diving"],
        e: "Pretexting implica crear un escenario falso para engañar a alguien y obtener información."
    },
    101: {
        q: "¿Qué ataque de Social Engineering utiliza mensajes de texto SMS maliciosos?",
        o: ["Smishing", "Vishing", "Phishing", "Spam"],
        e: "Smishing es el Phishing realizado a través de mensajes de texto (SMS)."
    },
    102: {
        q: "¿Qué ataque utiliza llamadas de voz para engañar a las víctimas?",
        o: ["Vishing", "Smishing", "Pharming", "Whaling"],
        e: "Vishing (Voice Phishing) utiliza llamadas telefónicas o mensajes de voz para obtener datos sensibles."
    },
    103: {
        q: "Un ataque de Phishing dirigido específicamente a una persona de alto perfil (como un CEO) es:",
        o: ["Whaling", "Spear Phishing", "Vishing", "Baiting"],
        e: "Whaling es un tipo de Phishing altamente dirigido a ejecutivos de alto nivel."
    },
    104: {
        q: "Un correo electrónico de Phishing enviado a un grupo específico de empleados de finanzas es:",
        o: ["Spear Phishing", "Whaling", "Vishing", "Tailgating"],
        e: "Spear Phishing se dirige a un individuo o grupo específico dentro de una organización."
    },
    105: {
        q: "¿Qué técnica de Social Engineering deja un USB infectado en un estacionamiento esperando que alguien lo use?",
        o: ["Baiting", "Pretexting", "Quid Pro Quo", "Tailgating"],
        e: "Baiting utiliza la curiosidad de la víctima ofreciéndole un objeto infectado (como un pendrive)."
    },
    106: {
        q: "Un atacante sigue a un empleado autorizado a través de una puerta cerrada sin usar su propia credencial. Esto es:",
        o: ["Tailgating", "Piggybacking", "Whaling", "Vishing"],
        e: "Tailgating ocurre cuando alguien entra a un área restringida siguiendo de cerca a una persona autorizada."
    },
    107: {
        q: "Comprometer una cuenta de correo electrónico legítima de un ejecutivo para ordenar transferencias fraudulentas es:",
        o: ["Business Email Compromise (BEC)", "Spamming", "Typosquatting", "Shoulder Surfing"],
        e: "BEC implica tomar el control de una cuenta de correo interna para realizar transferencias de fondos no autorizadas."
    },
    108: {
        q: "Registrar un dominio similar a un sitio web popular pero con errores ortográficos comunes es:",
        o: ["Typosquatting", "DNS Poisoning", "Domain Hijacking", "Watering Hole"],
        e: "Typosquatting aprovecha los errores tipográficos que cometen los usuarios al ingresar una URL."
    },
    109: {
        q: "Comprometer un sitio web específico que los empleados de una organización visitan con frecuencia es un:",
        o: ["Watering Hole Attack", "Phishing Attack", "DDoS Attack", "Brute Force Attack"],
        e: "Los Watering Hole attacks infectan sitios de confianza para las víctimas específicas."
    },
    110: {
        q: "La creación y el intercambio deliberado de información falsa para engañar o confundir es:",
        o: ["Disinformation", "Misinformation", "Social Proof", "Pretexting"],
        e: "La Disinformation es maliciosa y deliberada, a diferencia de la misinformation que se comparte sin intención de dañar."
    },
    111: {
        q: "Mirar por encima del hombro de alguien para capturar su contraseña se conoce como:",
        o: ["Shoulder Surfing", "Eavesdropping", "Tailgating", "Baiting"],
        e: "Shoulder surfing implica robar visualmente datos sensibles mientras se escriben."
    },
    112: {
        q: "Buscar en la basura de una empresa para encontrar documentos sensibles se llama:",
        o: ["Dumpster Diving", "Data Exfiltration", "Scraping", "Piggybacking"],
        e: "Dumpster diving consiste en recuperar documentos descartados que no fueron triturados correctamente."
    },
    113: {
        q: "¿Cuál es la diferencia clave entre Piggybacking y Tailgating?",
        o: ["Piggybacking requiere el consentimiento del usuario autorizado; tailgating no.", "Tailgating es físico; piggybacking es digital.", "Tailgating involucra vehículos; piggybacking involucra peatones.", "No hay diferencia."],
        e: "Piggybacking implica engañar al usuario para que permita la entrada, mientras que tailgating es entrar detrás de él sin que se dé cuenta."
    },
    114: {
        q: "A diferencia de un virus, ¿qué característica se aplica a un computer worm?",
        o: ["Se autorreplica y se propaga sin interacción del usuario.", "Requiere archivos anfitriones para adjuntarse.", "Cifra el disco duro inmediatamente.", "Suele ser una pieza de hardware."],
        e: "Los worms se propagan automáticamente por las redes sin necesidad de que un usuario ejecute un archivo."
    },
    115: {
        q: "¿Qué tipo de software o hardware registra secretamente lo que escribe un usuario?",
        o: ["Keylogger", "Ransomware", "Rootkit", "Logic Bomb"],
        e: "Los Keyloggers registran las pulsaciones de teclas para robar contraseñas y texto sensible."
    },
    116: {
        q: "El código malicioso que se ejecuta solo cuando ocurre una fecha o evento específico es una:",
        o: ["Logic Bomb", "Worm", "Trojan", "Dropper"],
        e: "Las Logic bombs permanecen latentes hasta que se cumplen las condiciones predefinidas."
    },
    117: {
        q: "El software preinstalado que consume recursos pero no es necesariamente malicioso es:",
        o: ["Bloatware", "Spyware", "Rootkit", "Ransomware"],
        e: "Bloatware se refiere al software no deseado que viene preinstalado y degrada el rendimiento."
    },
    118: {
        q: "En un ataque de malware multietapa, ¿cuál es el propósito de un Stage 1 Dropper?",
        o: ["Iniciar y descargar el payload malicioso principal.", "Cifrar el disco duro.", "Exfiltrar datos a un servidor.", "Actuar como un honeypot de señuelo."],
        e: "Un dropper es un código ligero diseñado únicamente para descargar el malware real."
    },
    119: {
        q: "El malware que opera completamente en la memoria del sistema para evitar dejar rastros en el disco duro se llama:",
        o: ["Fileless Malware", "Boot Sector Virus", "Hardware Keylogger", "Ransomware"],
        e: "El Fileless malware utiliza herramientas nativas del sistema y la memoria para evadir la detección basada en firmas."
    },
    120: {
        q: "¿Qué técnica implica que los atacantes utilicen herramientas integradas del sistema (como PowerShell)?",
        o: ["Living off the Land", "Brute Force", "Social Engineering", "Dumpster Diving"],
        e: "'Living off the Land' consiste en usar herramientas administrativas legítimas para realizar ataques sin instalar nuevo malware."
    },
    121: {
        q: "Un atacante se autentica en un servidor remoto usando el hash de la contraseña en lugar de la contraseña en texto plano. Esto es:",
        o: ["Pass the Hash Attack", "Birthday Attack", "Downgrade Attack", "Watering Hole Attack"],
        e: "Los ataques Pass the Hash utilizan hashes capturados para eludir los mecanismos de autenticación."
    },
    122: {
        q: "Que la información digital esté sujeta a las leyes del país donde se encuentra se conoce como:",
        o: ["Data Sovereignty", "Data Masking", "Data Classification", "Data Loss Prevention"],
        e: "Data Sovereignty significa que los datos están sujetos al marco legal de la nación donde residen."
    },
    123: {
        q: "Reemplazar datos sensibles por un equivalente no sensible que no tiene valor intrínseco se llama:",
        o: ["Tokenization", "Hashing", "Encryption", "Salting"],
        e: "La Tokenization sustituye datos sensibles (como números de tarjeta) por tokens sin valor legal fuera del sistema."
    },
    124: {
        q: "Los datos almacenados en bases de datos o sistemas de archivos que no se están moviendo activamente son:",
        o: ["Data at Rest", "Data in Transit", "Data in Use", "Regulated Data"],
        e: "Data at Rest se refiere a los datos inactivos almacenados en dispositivos de almacenamiento."
    },
    125: {
        q: "¿Qué tipo de sistema DLP se instala directamente en las estaciones de trabajo para monitorear los datos en uso?",
        o: ["Endpoint DLP", "Network DLP", "Storage DLP", "Cloud-based DLP"],
        e: "El Endpoint DLP opera en la máquina local del usuario para prevenir transferencias de archivos no autorizadas."
    },
    126: {
        q: "Dividir una red en zonas separadas para evitar el movimiento lateral de los atacantes se llama:",
        o: ["Network Segmentation", "Obfuscation", "Steganography", "Geofencing"],
        e: "La Network segmentation restringe el acceso entre diferentes áreas de la red, limitando el alcance de un ataque."
    },
    127: {
        q: "¿Qué tipo de cifrado utiliza la misma clave tanto para cifrar como para descifrar?",
        o: ["Symmetric Encryption", "Asymmetric Encryption", "Public Key Cryptography", "Hashing"],
        e: "La Symmetric encryption utiliza una única clave secreta compartida para ambas funciones."
    },
    128: {
        q: "¿Qué cifrado cifra los datos continuamente, bit a bit o byte a byte?",
        o: ["Stream Cipher", "Block Cipher", "RSA", "Hash Digest"],
        e: "Los Stream ciphers cifran los datos en un flujo continuo, ideal para audio/video en tiempo real."
    },
    129: {
        q: "¿Qué cifrado divide los datos de entrada en trozos de tamaño fijo (como 128 o 256 bits)?",
        o: ["Block Cipher", "Stream Cipher", "Diffie-Hellman", "Elliptic Curve"],
        e: "Los Block ciphers cifran los datos en bloques de tamaño definido y utilizan padding para los bits restantes."
    },
    130: {
        q: "¿Qué algoritmo cifra datos con una clave, descifra con otra y cifra de nuevo con una tercera?",
        o: ["3DES", "AES", "Blowfish", "RC4"],
        e: "Triple DES (3DES) aplica el algoritmo DES tres veces a cada bloque de datos."
    },
    131: {
        q: "¿Cuál de los siguientes algoritmos de hashing produce un digest de 256 bits?",
        o: ["SHA-256", "MD5", "SHA-1", "RIPEMD-160"],
        e: "SHA-256 pertenece a la familia SHA-2 y crea una salida de longitud fija de 256 bits."
    },
    132: {
        q: "Agregar datos aleatorios a las contraseñas antes de aplicarles el hash para evitar ataques de rainbow tables es:",
        o: ["Salting", "Key Stretching", "Obfuscation", "Collision"],
        e: "El Salting asegura que dos contraseñas idénticas produzcan hashes diferentes, dificultando los ataques de fuerza bruta."
    },
    133: {
        q: "¿Qué protocolo de red se utiliza para transferir archivos de forma segura cifrando la sesión de control y de datos?",
        o: ["SFTP", "FTP", "HTTP", "Telnet"],
        e: "SFTP (SSH File Transfer Protocol) proporciona transferencia de archivos segura sobre un canal cifrado SSH."
    },
    134: {
        q: "¿Qué protocolo proporciona una comunicación segura a través de una red informática al cifrar el tráfico HTTP?",
        o: ["HTTPS", "SNMP", "DNS", "RDP"],
        e: "HTTPS utiliza TLS para cifrar las comunicaciones entre un navegador web y un servidor."
    },
    135: {
        q: "¿Qué protocolo se utiliza para la transferencia segura de correo electrónico entre servidores?",
        o: ["SMTPS", "IMAP", "POP3", "SNMP"],
        e: "SMTPS añade una capa de seguridad (TLS) al protocolo de transferencia de correo simple."
    },
    136: {
        q: "¿Qué protocolo permite a los administradores gestionar y monitorear dispositivos de red de forma segura?",
        o: ["SNMPv3", "SSH", "Telnet", "TFTP"],
        e: "SNMPv3 proporciona cifrado y autenticación para la gestión de dispositivos de red."
    },
    137: {
        q: "¿Qué servicio de directorio centralizado utiliza Microsoft para gestionar usuarios y computadoras?",
        o: ["Active Directory (AD)", "LDAP", "Kerberos", "RADIUS"],
        e: "Active Directory es el servicio de gestión de identidades estándar en entornos Windows."
    },
    138: {
        q: "¿Qué protocolo de autenticación utiliza 'tickets' para permitir que los nodos se comuniquen de forma segura?",
        o: ["Kerberos", "RADIUS", "TACACS+", "LDAP"],
        e: "Kerberos utiliza un Key Distribution Center (KDC) para emitir tickets de autenticación temporales."
    },
    139: {
        q: "¿Qué protocolo se utiliza comúnmente para centralizar la autenticación de usuarios que se conectan vía VPN?",
        o: ["RADIUS", "Kerberos", "SAML", "OAuth"],
        e: "RADIUS centraliza la gestión de autenticación, autorización y accounting (AAA) para accesos remotos."
    },
    140: {
        q: "¿Qué estándar basado en XML permite el intercambio de datos de autenticación entre un Identity Provider y un Service Provider?",
        o: ["SAML", "OAuth", "OpenID Connect", "Active Directory"],
        e: "SAML se utiliza comúnmente para implementar Single Sign-On (SSO) en aplicaciones web."
    },
    141: {
        q: "¿Qué estándar abierto se utiliza para la autorización, permitiendo que aplicaciones accedan a datos sin compartir contraseñas?",
        o: ["OAuth 2.0", "SAML", "LDAP", "Kerberos"],
        e: "OAuth se utiliza para otorgar acceso limitado (tokens) a recursos de terceros (ej. 'Iniciar sesión con Google')."
    },
    142: {
        q: "¿Qué protocolo de resolución de nombres de dominio añade firmas digitales para asegurar la integridad de los datos?",
        o: ["DNSSEC", "NSLOOKUP", "Dig", "DHCP"],
        e: "DNSSEC previene ataques de envenenamiento de caché (cache poisoning) mediante la validación de firmas digitales."
    },
    143: {
        q: "¿Qué tipo de firewall inspecciona el tráfico basándose en el estado de las conexiones activas?",
        o: ["Stateful Firewall", "Stateless Firewall", "Packet Filter", "Proxy Server"],
        e: "Los Stateful firewalls monitorean el estado de las conexiones y permiten el tráfico de retorno legítimo."
    },
    144: {
        q: "¿Qué dispositivo de red analiza el tráfico en busca de patrones maliciosos y lo bloquea automáticamente?",
        o: ["Intrusion Prevention System (IPS)", "Intrusion Detection System (IDS)", "Load Balancer", "Hub"],
        e: "A diferencia del IDS, el IPS tiene la capacidad activa de bloquear el tráfico sospechoso en tiempo real."
    },
    145: {
        q: "¿Qué sistema permite agregar y analizar logs de múltiples fuentes para detectar amenazas en tiempo real?",
        o: ["SIEM", "SOAR", "DLP", "VPN"],
        e: "SIEM (Security Information and Event Management) centraliza y correlaciona eventos de seguridad de toda la red."
    },
    146: {
        q: "Encontrar dos entradas distintas que produzcan exactamente la misma salida de hash es explotar una:",
        o: ["Birthday Attack", "Downgrade Attack", "Brute Force Attack", "Logic Bomb"],
        e: "Un Birthday attack aprovecha la probabilidad estadística de colisiones de hash."
    },
    147: {
        q: "¿Qué tecnología emergente amenaza el cifrado asimétrico al factorizar rápidamente números primos grandes?",
        o: ["Quantum Computing", "Blockchain", "Artificial Intelligence", "5G Networks"],
        e: "La computación cuántica utiliza qubits y superposición para resolver ecuaciones complejas mucho más rápido."
    },
    148: {
        q: "Los algoritmos criptográficos diseñados para resistir ataques de computadoras cuánticas se llaman:",
        o: ["Post-quantum cryptography", "Elliptic Curve Cryptography", "Triple DES", "Advanced Encryption Standard"],
        e: "La Post-quantum cryptography se basa en problemas matemáticos demasiado complejos incluso para ordenadores cuánticos."
    },
    149: {
        q: "Un servidor señuelo colocado en una red para atraer y analizar el comportamiento de los atacantes es un:",
        o: ["Honeypot", "Firewall", "Proxy", "VPN"],
        e: "Los Honeypots distraen a los atacantes de los activos reales mientras proporcionan inteligencia a los defensores."
    },
    150: {
        q: "Un documento falso dejado intencionalmente en una red para disparar una alerta si se abre es un:",
        o: ["Honeyfile", "Logic Bomb", "Rootkit", "Macro Virus"],
        e: "Los Honeyfiles son herramientas de decepción que notifican a los equipos de seguridad tras un acceso no autorizado."
    },
    151: {
        q: "Se dispara una alerta porque un usuario inició sesión en Nueva York y 10 minutos después en Londres. Esto es:",
        o: ["Impossible Travel", "Concurrent Session", "Resource Consumption", "Downgrade Attack"],
        e: "El Impossible travel indica que se están usando credenciales comprometidas a grandes distancias en poco tiempo."
    },
    152: {
        q: "Múltiples intentos fallidos de inicio de sesión que resultan en que un usuario pierda el acceso a su perfil es un:",
        o: ["Account Lockout", "Session Hijacking", "Privilege Escalation", "Denial of Service"],
        e: "Los Account lockouts protegen contra ataques de fuerza bruta para adivinar contraseñas."
    },
    153: {
        q: "Logs generados a las 3 AM para un usuario que solo trabaja de 9 a 5 es un indicador conocido como:",
        o: ["Out-of-cycle logging", "Missing Logs", "Impossible Travel", "Data exfiltration"],
        e: "El Out-of-cycle logging marca actividades inesperadas que ocurren fuera del horario normal."
    },
    154: {
        q: "¿Qué entidad determina los propósitos y métodos para recopilar y almacenar datos personales?",
        o: ["Data Controller", "Data Processor", "Data Steward", "Privacy Officer"],
        e: "El Data Controller tiene la autoridad legal y dicta cómo se gestionan los datos."
    },
    155: {
        q: "¿Quién es el ejecutivo responsable de etiquetar la información y asegurar su protección?",
        o: ["Data Owner", "Data Custodian", "Data Processor", "System Administrator"],
        e: "Los Data Owners suelen ser ejecutivos responsables de la protección del activo de datos."
    },
    156: {
        q: "¿Qué marco regulatorio protege específicamente los registros médicos y el estado de salud de un individuo?",
        o: ["HIPAA", "GDPR", "PCI DSS", "SOX"],
        e: "HIPAA protege la Protected Health Information (PHI) en el sector sanitario."
    },
    157: {
        q: "Algoritmos confidenciales, listas de clientes o fórmulas que proporcionan una ventaja comercial son:",
        o: ["Trade Secrets", "Public Data", "Regulated Data", "Personal Identification Information"],
        e: "Los Trade Secrets requieren protección estricta ya que afectan directamente a la competitividad de la empresa."
    },
    158: {
        q: "Restringir el acceso a los datos virtualmente basándose en las coordenadas GPS o la ubicación IP se llama:",
        o: ["Geofencing", "Network Segmentation", "Data Sovereignty", "Tokenization"],
        e: "El Geofencing impone políticas de control de acceso basadas en la ubicación."
    },
    159: {
        q: "Reemplazar los primeros 12 dígitos de una tarjeta de crédito por una 'X' para ocultarlos en un recibo es:",
        o: ["Data Masking", "Hashing", "Encryption", "Steganography"],
        e: "El Data Masking oculta partes de los datos por privacidad mientras mantiene su estructura."
    },
    160: {
        q: "Definir reglas de acceso a datos usando ACLs o RBAC se conoce como:",
        o: ["Permission Restrictions", "Data Segmentation", "Geofencing", "Obfuscation"],
        e: "Las Permission restrictions imponen técnicamente quién puede leer, escribir o ejecutar recursos."
    },
    161: {
        q: "Un único certificado digital usado para asegurar 'shop.example.com' y 'mail.example.com' es un:",
        o: ["Wildcard Certificate", "Self-Signed Certificate", "SAN Certificate", "Root Certificate"],
        e: "Los Wildcard certificates aseguran un dominio raíz y todos sus subdominios."
    },
    162: {
        q: "Un certificado digital que asegura múltiples nombres de dominio completamente diferentes es un:",
        o: ["Subject Alternate Name (SAN) Certificate", "Wildcard Certificate", "Self-Signed Certificate", "Dual-Sided Certificate"],
        e: "Los certificados SAN pueden listar dominios completamente diferentes bajo el mismo certificado."
    },
    163: {
        q: "¿Qué certificados se usan a menudo para pruebas internas porque carecen de validación de confianza externa?",
        o: ["Self-Signed Certificates", "Wildcard Certificates", "Extended Validation Certificates", "Root Certificates"],
        e: "Los Self-signed certificates proporcionan cifrado pero provocan avisos en el navegador por no ser de una CA pública."
    },
    164: {
        q: "Desconectar una estación infectada de la red corporativa ocurre en qué fase de Incident Response?",
        o: ["Containment", "Detection", "Eradication", "Recovery"],
        e: "La fase de Containment se enfoca en detener la propagación de un incidente."
    },
    165: {
        q: "Eliminar malware y borrar cuentas de usuario comprometidas ocurre en qué fase de Incident Response?",
        o: ["Eradication", "Containment", "Recovery", "Preparation"],
        e: "La fase de Eradication neutraliza y elimina completamente la causa raíz del incidente."
    },
    166: {
        q: "Evaluar los riesgos usando categorías como 'Alto', 'Medio' y 'Bajo' es un ejemplo de:",
        o: ["Qualitative Risk Analysis", "Quantitative Risk Analysis", "Vulnerability Scanning", "Penetration Testing"],
        e: "El Qualitative analysis utiliza puntuaciones subjetivas en lugar de datos financieros."
    },
    167: {
        q: "Calcular el riesgo usando métricas como Single Loss Expectancy (SLE) es:",
        o: ["Quantitative Risk Analysis", "Qualitative Risk Analysis", "Risk Avoidance", "Risk Acceptance"],
        e: "El Quantitative analysis se basa en datos medibles y cifras financieras."
    },
    168: {
        q: "Decidir cerrar por completo una aplicación web legacy insegura es un ejemplo de:",
        o: ["Risk Avoidance", "Risk Mitigation", "Risk Transference", "Risk Acceptance"],
        e: "Risk Avoidance implica detener actividades para esquivar completamente un riesgo."
    },
    169: {
        q: "Comprar un seguro de ciberseguridad para cubrir posibles pérdidas por un ataque de ransomware es:",
        o: ["Risk Transference", "Risk Mitigation", "Risk Acceptance", "Risk Avoidance"],
        e: "Risk Transference (o Sharing) traslada la carga financiera a un tercero."
    },
    170: {
        q: "Elegir no parchear una vulnerabilidad menor porque el sistema se retirará la próxima semana es:",
        o: ["Risk Acceptance", "Risk Mitigation", "Risk Transference", "Risk Avoidance"],
        e: "Risk Acceptance significa reconocer el riesgo sin tomar medidas, normalmente porque el coste supera el impacto."
    },
    171: {
        q: "¿Qué documento proporciona instrucciones paso a paso para restaurar la infraestructura IT tras un fallo?",
        o: ["Disaster Recovery Plan (DRP)", "Business Continuity Plan (BCP)", "Incident Response Plan (IRP)", "Service Level Agreement (SLA)"],
        e: "El DRP se enfoca específicamente en los pasos técnicos para restaurar las operaciones IT."
    },
    172: {
        q: "¿Qué plan se centra en mantener operativa toda la organización durante una interrupción?",
        o: ["Business Continuity Plan (BCP)", "Disaster Recovery Plan (DRP)", "Backup Plan", "Risk Assessment"],
        e: "El BCP incluye estrategias más amplias (como sedes alternas) para mantener vivo el negocio."
    },
    173: {
        q: "Un ejercicio donde un equipo habla sobre cómo manejaría un hipotético ataque de ransomware es una:",
        o: ["Tabletop Exercise", "Penetration Test", "Parallel Test", "Full Interruption Test"],
        e: "Los Tabletop exercises son discusiones de bajo coste para evaluar los planes de respuesta a incidentes."
    },
    174: {
        q: "¿Qué métrica estima cuánto tiempo funcionará un sistema antes de que ocurra un fallo?",
        o: ["MTBF", "MTTR", "RTO", "RPO"],
        e: "Mean Time Between Failures (MTBF) mide la fiabilidad del sistema y su vida útil esperada."
    },
    175: {
        q: "¿Qué métrica mide el tiempo promedio que se tarda en reparar un sistema averiado?",
        o: ["MTTR", "MTBF", "RTO", "RPO"],
        e: "Mean Time To Repair (MTTR) representa el tiempo de reparación una vez ocurrido el fallo."
    },
    176: {
        q: "La cantidad máxima de pérdida de datos aceptable medida en tiempo se define por el:",
        o: ["RPO", "RTO", "MTBF", "MTTR"],
        e: "El Recovery Point Objective (RPO) dicta la frecuencia de los backups para minimizar la pérdida de datos."
    },
    177: {
        q: "El tiempo máximo de inactividad aceptable para una función crítica antes de sufrir consecuencias graves es:",
        o: ["RTO", "RPO", "MTBF", "MTTR"],
        e: "El Recovery Time Objective (RTO) es el tiempo objetivo para volver a poner los sistemas en marcha."
    },
    178: {
        q: "Un contrato entre un proveedor y un cliente que garantiza métricas de rendimiento como el 99.9% de uptime es:",
        o: ["SLA", "NDA", "MOU", "BPA"],
        e: "Un Service Level Agreement (SLA) establece expectativas legalmente vinculantes para la entrega del servicio."
    },
    179: {
        q: "¿Qué se realiza para identificar y mitigar riesgos para los datos personales antes de desplegar un sistema?",
        o: ["Privacy Impact Assessment (PIA)", "Penetration Test", "Tabletop Exercise", "Vulnerability Scan"],
        e: "Un PIA asegura el cumplimiento de las leyes de privacidad e identifica riesgos para la información identificable."
    },
    180: {
        q: "¿Cuál es el control administrativo más efectivo para evitar la contratación de una amenaza interna?",
        o: ["Background checks", "Separation of duties", "Mandatory vacations", "Job rotation"],
        e: "Los Background checks revisan el historial criminal y las referencias antes de conceder el empleo."
    }
};

let questionsFile = fs.readFileSync('/home/soldier/Documents/projects/Comptia/questions.js', 'utf8');

console.log("Applying translations to questions.js...");

for (const id in translations) {
    const t = translations[id];
    const qId = parseInt(id);
    
    // Find the block for this id
    // We match the id and then the properties
    const regex = new RegExp('(\\{[^{}]*?"id":\\s*' + qId + '[\\s\\S]*?)(questionText":\\s*"(.*?)"[\\s\\S]*?)(explanation":\\s*"(.*?)"[\\s\\S]*?\\})', 'g');
    
    questionsFile = questionsFile.replace(regex, (match, p1, p2, p3, p4, p5) => {
        // match: the whole object block
        // p1: start of object including id
        // p2: questionText line
        // p3: original question text
        // p4: explanation line
        // p5: original explanation text
        
        let newBlock = match;
        
        // Add questionText_es
        newBlock = newBlock.replace(p2, p2 + `,\n        "questionText_es": "${t.q}"`);
        
        // Add explanation_es
        newBlock = newBlock.replace(p4, p4 + `,\n        "explanation_es": "${t.e}"`);
        
        // Add text_es to options
        // This is tricky with regex, but we know there are 4 options in fixed order.
        t.o.forEach((optText, idx) => {
            // Find the Nth occurrence of "text": "..." inside this block and add text_es
            // We'll do it one by one
            let count = 0;
            newBlock = newBlock.replace(/"text":\s*"(.*?)"/g, (optMatch, optVal) => {
                if (count === idx) {
                    count++;
                    return optMatch + `,\n                "text_es": "${optText}"`;
                }
                count++;
                return optMatch;
            });
        });
        
        return newBlock;
    });
}

fs.writeFileSync('/home/soldier/Documents/projects/Comptia/questions.js', questionsFile);
console.log("Successfully translated questions 91-180 in questions.js");
