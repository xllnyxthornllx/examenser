const questions = [
    // --- SEMANA 1: DNS (BIND9) ---
    {
        id: 1,
        category: "DNS",
        type: "choice",
        question: "¿Cuál es el archivo principal de configuración de BIND9 en Ubuntu donde se incluyen las declaraciones de zonas locales?",
        options: [
            "/etc/bind/bind.conf",
            "/etc/bind/named.conf.local",
            "/etc/bind/zones.conf",
            "/etc/named/named.conf"
        ],
        answer: 1,
        explanation: "En Ubuntu, 'named.conf.local' es el lugar recomendado para añadir tus zonas personalizadas, manteniendo el archivo principal limpio."
    },
    {
        id: 2,
        category: "DNS",
        type: "fill",
        question: "Completar comando: Para verificar la sintaxis de todos los archivos de configuración de BIND9 sin reiniciar el servicio, usamos:",
        placeholder: "named-________",
        answer: "named-checkconf",
        explanation: "'named-checkconf' verifica la sintaxis del archivo named.conf y sus incluidos. Es vital antes de reiniciar."
    },
    {
        id: 3,
        category: "DNS",
        type: "fill",
        question: "Completar comando: ¿Qué comando se usa para verificar específicamente la integridad de un archivo de zona (ej. db.tecsup.com)?",
        placeholder: "named-________",
        answer: "named-checkzone",
        explanation: "Uso: 'named-checkzone <nombre_dominio> <archivo_zona>'. Verifica seriales y registros."
    },
    {
        id: 4,
        category: "DNS",
        type: "choice",
        question: "En un archivo de zona, ¿qué registro se utiliza para definir el 'Nombre Canónico' o Alias de un host?",
        options: ["Registro A", "Registro PTR", "Registro CNAME", "Registro NS"],
        answer: 2,
        explanation: "CNAME (Canonical Name) mapea un alias a un nombre real (A record)."
    },
    {
        id: 5,
        category: "DNS",
        type: "fill",
        question: "¿Cuál es el nombre del servicio de DNS en Ubuntu Server para usar con systemctl?",
        placeholder: "________",
        answer: "bind9",
        explanation: "Se gestiona con 'sudo systemctl restart bind9'."
    },
    {
        id: 6,
        category: "DNS",
        type: "tf",
        question: "Las zonas de búsqueda inversa (PTR) asocian una dirección IP con un nombre de dominio.",
        answer: true,
        explanation: "Correcto. El registro PTR hace lo opuesto al registro A."
    },

    // --- SEMANA 2: SERVICIO WEB (APACHE2) ---
    {
        id: 7,
        category: "Web",
        type: "fill",
        question: "Completar comando: En Apache2 (Ubuntu), ¿qué comando se usa para habilitar un nuevo sitio virtual cuyo archivo está en 'sites-available'?",
        placeholder: "________ mi-sitio.conf",
        answer: "a2ensite",
        explanation: "'a2ensite' crea un enlace simbólico desde sites-available hacia sites-enabled."
    },
    {
        id: 8,
        category: "Web",
        type: "fill",
        question: "Completar comando: Para habilitar el módulo de 'reescritura' (rewrite) en Apache2 usamos:",
        placeholder: "________ rewrite",
        answer: "a2enmod",
        explanation: "'a2enmod' habilita módulos específicos que vienen preinstalados pero desactivados."
    },
    {
        id: 9,
        category: "Web",
        type: "choice",
        question: "¿Cuál es la ruta por defecto del DocumentRoot en una instalación limpia de Apache en Ubuntu?",
        options: [
            "/etc/apache2/www",
            "/home/www",
            "/var/www/html",
            "/usr/share/apache2"
        ],
        answer: 2,
        explanation: "/var/www/html es el estándar en distribuciones basadas en Debian/Ubuntu."
    },
    {
        id: 10,
        category: "Web",
        type: "fill",
        question: "Completar comando: Para verificar si la configuración de Apache tiene errores de sintaxis antes de reiniciar:",
        placeholder: "________ configtest",
        answer: "apache2ctl",
        explanation: "También se puede usar 'apachectl configtest'."
    },
    {
        id: 11,
        category: "Web",
        type: "choice",
        question: "¿Qué archivo contiene los registros de errores (logs) por defecto de Apache2?",
        options: [
            "/var/log/apache2/access.log",
            "/var/log/syslog",
            "/var/log/apache2/error.log",
            "/etc/apache2/logs/error.log"
        ],
        answer: 2,
        explanation: "error.log es donde Apache escribe los fallos de arranque y errores 500."
    },
    {
        id: 12,
        category: "Web",
        type: "tf",
        question: "El protocolo HTTPS viaja cifrado por defecto a través del puerto 80.",
        answer: false,
        explanation: "Falso. HTTPS usa el puerto 443. El puerto 80 es para HTTP (texto plano)."
    },

    // --- SEMANA 3: FTP (VSFTPD) ---
    {
        id: 13,
        category: "FTP",
        type: "choice",
        question: "¿Qué parámetro en 'vsftpd.conf' debe estar en 'YES' para permitir que los usuarios del sistema Linux inicien sesión en el FTP?",
        options: ["anonymous_enable", "local_enable", "write_enable", "chroot_local_user"],
        answer: 1,
        explanation: "local_enable=YES permite que los usuarios definidos en /etc/passwd entren al servicio."
    },
    {
        id: 14,
        category: "FTP",
        type: "choice",
        question: "¿Qué opción de configuración 'enjaula' a los usuarios en su propio directorio personal para que no puedan navegar por el resto del servidor?",
        options: ["userlist_enable", "chroot_local_user", "write_enable", "pasv_enable"],
        answer: 1,
        explanation: "chroot_local_user=YES es una medida de seguridad crítica en FTP."
    },
    {
        id: 15,
        category: "FTP",
        type: "fill",
        question: "En modo pasivo de FTP, ¿quién establece la conexión de datos (puerto aleatorio)?",
        placeholder: "El ________",
        answer: "cliente",
        explanation: "En modo pasivo, el cliente inicia tanto la conexión de control como la de datos."
    },
    {
        id: 16,
        category: "FTP",
        type: "fill",
        question: "¿Qué comando de Linux nos permite ver qué puertos están escuchando actualmente en el servidor (incluyendo el proceso)?",
        placeholder: "netstat -________",
        answer: "plnt",
        explanation: "-p (proceso), -l (listening), -n (numérico), -t (tcp)."
    },
    {
        id: 17,
        category: "FTP",
        type: "tf",
        question: "FTP es un protocolo seguro porque cifra las contraseñas al enviarlas al servidor.",
        answer: false,
        explanation: "Falso. FTP envía todo en texto plano. Para seguridad se debe usar SFTP o FTPS."
    },

    // --- DIAGNÓSTICO GENERAL Y REDES ---
    {
        id: 18,
        category: "Red",
        type: "fill",
        question: "¿Qué comando moderno de Ubuntu reemplaza a 'ifconfig' para ver las interfaces de red e IPs?",
        placeholder: "________ addr",
        answer: "ip",
        explanation: "El paquete net-tools está obsoleto; se prefiere el comando 'ip'."
    },
    {
        id: 19,
        category: "Red",
        type: "choice",
        question: "¿Cuál es el comando para ver las últimas 20 líneas del log del sistema en tiempo real para debuggear un servicio que no arranca?",
        options: [
            "cat /var/log/syslog",
            "tail -f -n 20 /var/log/syslog",
            "grep -r 'error' /var/log",
            "nano /var/log/messages"
        ],
        answer: 1,
        explanation: "tail -f (follow) es esencial para ver errores mientras ocurren."
    },
    {
        id: 20,
        category: "Red",
        type: "fill",
        question: "Completar comando: Para reiniciar cualquier servicio (ej. vsftpd) después de un cambio de config:",
        placeholder: "sudo ________ restart vsftpd",
        answer: "systemctl",
        explanation: "systemctl es el estándar de systemd en Ubuntu."
    }
];

// Lógica de Temas
const themeSwitcher = document.getElementById('themeSwitcher');
const htmlEl = document.documentElement;

function toggleTheme() {
    const currentTheme = htmlEl.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function setTheme(theme) {
    htmlEl.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    themeSwitcher.innerHTML = theme === 'light' ? '<i class="bi bi-moon-stars-fill"></i>' : '<i class="bi bi-sun-fill"></i>';
}

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);
themeSwitcher.addEventListener('click', toggleTheme);

// Renderizado de Preguntas
function renderQuestions() {
    const list = document.getElementById('questions-list');
    list.innerHTML = '';

    questions.forEach((q, index) => {
        let content = '';
        if (q.type === 'choice') {
            content = q.options.map((opt, i) => `
                <div class="form-check my-2">
                    <input class="form-check-input" type="radio" name="q${q.id}" id="q${q.id}o${i}" value="${i}">
                    <label class="form-check-label w-100" for="q${q.id}o${i}">${opt}</label>
                </div>
            `).join('');
        } else if (q.type === 'fill') {
            content = `
                <div class="input-group">
                    <input type="text" class="form-control terminal-input" name="q${q.id}" placeholder="${q.placeholder || 'Escribe aquí...'}">
                </div>
            `;
        } else if (q.type === 'tf') {
            content = `
                <div class="d-flex gap-4 my-2">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="q${q.id}" id="q${q.id}t" value="true">
                        <label class="form-check-label" for="q${q.id}t">Verdadero</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="q${q.id}" id="q${q.id}f" value="false">
                        <label class="form-check-label" for="q${q.id}f">Falso</label>
                    </div>
                </div>
            `;
        }

        const card = document.createElement('div');
        card.className = 'card question-card p-4 animate-in';
        card.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-3">
                <span class="badge badge-ubuntu rounded-pill px-3 py-2">${q.category}</span>
                <span class="text-muted small">ID: #${q.id}</span>
            </div>
            <h5 class="mb-4">${q.question}</h5>
            <div class="options-container">${content}</div>
            <div id="feedback-${q.id}" class="mt-3"></div>
        `;
        list.appendChild(card);
    });

    // Actualizar progreso al interactuar
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('change', updateProgress);
        if (input.type === 'text') input.addEventListener('input', updateProgress);
    });
}

function updateProgress() {
    const total = questions.length;
    let answered = 0;
    
    questions.forEach(q => {
        if (q.type === 'fill') {
            const input = document.querySelector(\`input[name="q\${q.id}"]\`);
            if (input && input.value.trim() !== "") answered++;
        } else {
            const checked = document.querySelector(\`input[name="q\${q.id}"]:checked\`);
            if (checked) answered++;
        }
    });

    const percent = Math.round((answered / total) * 100);
    const bar = document.getElementById('progress-bar');
    bar.style.width = percent + '%';
    document.getElementById('progress-text').innerText = percent + '%';
}

function gradeExam() {
    let score = 0;
    let categoryScores = { "DNS": 0, "Web": 0, "FTP": 0, "Red": 0 };
    let categoryTotals = { "DNS": 0, "Web": 0, "FTP": 0, "Red": 0 };

    questions.forEach(q => {
        categoryTotals[q.category]++;
        const feedbackDiv = document.getElementById(\`feedback-\${q.id}\`);
        let isCorrect = false;

        if (q.type === 'choice') {
            const selected = document.querySelector(\`input[name="q\${q.id}"]:checked\`);
            isCorrect = selected && parseInt(selected.value) === q.answer;
        } else if (q.type === 'fill') {
            const input = document.querySelector(\`input[name="q\${q.id}"]\`);
            isCorrect = input.value.trim().toLowerCase() === q.answer.toLowerCase();
        } else if (q.type === 'tf') {
            const selected = document.querySelector(\`input[name="q\${q.id}"]:checked\`);
            isCorrect = selected && (selected.value === "true") === q.answer;
        }

        if (isCorrect) {
            score++;
            categoryScores[q.category]++;
            feedbackDiv.innerHTML = \`<div class="alert alert-success py-2 mt-2 border-0"><i class="bi bi-check-circle-fill"></i> Correcto. \${q.explanation}</div>\`;
        } else {
            let correctText = q.type === 'choice' ? q.options[q.answer] : (q.type === 'tf' ? (q.answer ? "Verdadero" : "Falso") : q.answer);
            feedbackDiv.innerHTML = \`
                <div class="alert alert-danger py-2 mt-2 border-0">
                    <i class="bi bi-x-circle-fill"></i> Incorrecto. La respuesta era: <strong>\${correctText}</strong>
                    <div class="explanation-text text-muted small mt-2">\${q.explanation}</div>
                </div>
            \`;
        }
    });

    // Mostrar resultados
    document.getElementById('exam-form').style.display = 'none';
    const res = document.getElementById('results-container');
    res.style.display = 'block';

    const total = questions.length;
    document.getElementById('score-display').innerText = \`\${score} / \${total}\`;
    
    const msg = document.getElementById('score-message');
    const percent = (score / total) * 100;
    if (percent >= 80) {
        msg.className = "alert alert-success";
        msg.innerHTML = "<h4>¡Nivel Experto!</h4>Tienes un dominio excelente de Ubuntu Server.";
    } else if (percent >= 60) {
        msg.className = "alert alert-warning";
        msg.innerHTML = "<h4>Buen progreso</h4>Estás cerca, pero revisa los comandos en los que fallaste.";
    } else {
        msg.className = "alert alert-danger";
        msg.innerHTML = "<h4>Necesitas repasar</h4>Te recomendamos volver a practicar la configuración de los servicios.";
    }

    // Stats por categoría
    document.getElementById('count-dns').innerText = \`\${categoryScores["DNS"]} / \${categoryTotals["DNS"]}\`;
    document.getElementById('count-web').innerText = \`\${categoryScores["Web"]} / \${categoryTotals["Web"]}\`;
    document.getElementById('count-ftp').innerText = \`\${categoryScores["FTP"] + categoryScores["Red"]} / \${categoryTotals["FTP"] + categoryTotals["Red"]}\`;

    // Clonar lista de preguntas para la revisión
    const review = document.getElementById('mistakes-review');
    review.appendChild(document.getElementById('questions-list').cloneNode(true));
    review.querySelectorAll('input').forEach(i => i.disabled = true);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', renderQuestions);
