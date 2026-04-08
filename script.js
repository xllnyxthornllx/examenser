const questions = [
    // --- SEMANA 1: DNS ---
    {
        id: 1,
        category: "DNS",
        type: "choice",
        question: "¿Cuál es la función principal del registro tipo 'MX' en una zona DNS?",
        options: [
            "Apuntar un dominio a una dirección IPv4.",
            "Definir el servidor de correo responsable del dominio.",
            "Crear un alias para un nombre de dominio existente.",
            "Indicar el servidor de nombres (Name Server) autorizado."
        ],
        answer: 1,
        explanation: "El registro MX (Mail Exchange) especifica cómo deben enrutarse los correos electrónicos para ese dominio hacia los servidores de correo correspondientes."
    },
    {
        id: 2,
        category: "DNS",
        type: "fill",
        question: "Escribe el comando de Linux (sin parámetros adicionales) que se utiliza para realizar consultas DNS detalladas, permitiendo ver secciones como 'ANSWER' y 'AUTHORITY':",
        answer: "dig",
        explanation: "'dig' (Domain Information Groper) es la herramienta preferida en Linux para diagnósticos DNS por su salida detallada y estructurada."
    },
    {
        id: 3,
        category: "DNS",
        type: "tf",
        question: "En una consulta DNS recursiva, el cliente espera que el servidor DNS resuelva el nombre por completo y le entregue la respuesta final.",
        answer: true,
        explanation: "Correcto. A diferencia de la iterativa (donde el servidor da una referencia), en la recursiva el servidor asume la carga de buscar en otros servidores hasta hallar la IP."
    },
    // --- SEMANA 2: WEB ---
    {
        id: 4,
        category: "Web",
        type: "choice",
        question: "¿Qué código de estado HTTP indica que el servidor ha encontrado un error interno y no puede completar la solicitud?",
        options: [
            "200 OK",
            "301 Moved Permanently",
            "404 Not Found",
            "500 Internal Server Error"
        ],
        answer: 3,
        explanation: "Los códigos que empiezan con 5xx (como el 500) indican errores del lado del servidor."
    },
    {
        id: 5,
        category: "Web",
        type: "fill",
        question: "¿En qué puerto (número) escucha por defecto el protocolo HTTPS?",
        answer: "443",
        explanation: "HTTPS utiliza el puerto 443 para comunicaciones cifradas mediante TLS/SSL, mientras que el puerto 80 es para HTTP estándar."
    },
    {
        id: 6,
        category: "Web",
        type: "choice",
        question: "¿Cuál de los siguientes métodos HTTP se utiliza generalmente para enviar datos de un formulario para crear un nuevo recurso en el servidor?",
        options: [
            "GET",
            "POST",
            "HEAD",
            "OPTIONS"
        ],
        answer: 1,
        explanation: "POST se utiliza para enviar datos al servidor, a menudo resultando en un cambio de estado o la creación de un recurso."
    },
    // --- SEMANA 3: FTP ---
    {
        id: 7,
        category: "FTP",
        type: "tf",
        question: "En el modo FTP Activo, es el servidor quien inicia la conexión de datos hacia el cliente.",
        answer: true,
        explanation: "Es cierto. En el modo activo, el cliente escucha y el servidor 'llama'. Esto suele causar problemas con firewalls en el lado del cliente."
    },
    {
        id: 8,
        category: "FTP",
        type: "choice",
        question: "¿Qué puerto se utiliza para la 'conexión de control' (donde se envían los comandos) en FTP?",
        options: [
            "Puerto 20",
            "Puerto 21",
            "Puerto 22",
            "Puerto 80"
        ],
        answer: 1,
        explanation: "FTP usa el puerto 21 para control (comandos) y el 20 para la transferencia de datos (en modo activo)."
    },
    {
        id: 9,
        category: "FTP",
        type: "fill",
        question: "Dentro de la consola interactiva de FTP, ¿qué comando se usa para subir un archivo local al servidor?",
        answer: "put",
        explanation: "El comando 'put' sube un archivo, mientras que 'get' se usa para descargarlo."
    },
    {
        id: 10,
        category: "FTP",
        type: "choice",
        question: "En el modo FTP Pasivo, ¿quién inicia la conexión de datos?",
        options: [
            "El Servidor",
            "El Cliente",
            "Ambos simultáneamente",
            "Ninguno, la conexión es estática"
        ],
        answer: 1,
        explanation: "En el modo pasivo (PASV), el servidor indica un puerto aleatorio y el cliente se conecta a él. Es más amigable con los firewalls del cliente."
    }
];

function renderQuestions() {
    const list = document.getElementById('questions-list');
    list.innerHTML = '';

    questions.forEach((q, index) => {
        let content = '';
        if (q.type === 'choice') {
            content = q.options.map((opt, i) => `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="q${q.id}" id="q${q.id}o${i}" value="${i}">
                    <label class="form-check-label" for="q${q.id}o${i}">${opt}</label>
                </div>
            `).join('');
        } else if (q.type === 'fill') {
            content = `<input type="text" class="form-control" name="q${q.id}" placeholder="Escribe tu respuesta aquí...">`;
        } else if (q.type === 'tf') {
            content = `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="q${q.id}" id="q${q.id}t" value="true">
                    <label class="form-check-label" for="q${q.id}t">Verdadero</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="q${q.id}" id="q${q.id}f" value="false">
                    <label class="form-check-label" for="q${q.id}f">Falso</label>
                </div>
            `;
        }

        const card = document.createElement('div');
        card.className = 'card question-card p-4';
        card.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge badge-category rounded-pill">${q.category}</span>
                <span class="text-muted small">Pregunta ${index + 1}</span>
            </div>
            <h5 class="mb-3">${q.question}</h5>
            <div class="options-container">${content}</div>
            <div id="feedback-${q.id}" class="mt-3"></div>
        `;
        list.appendChild(card);
    });
}

function gradeExam() {
    let score = 0;
    const total = questions.length;
    const mistakesReview = document.getElementById('mistakes-review');
    mistakesReview.innerHTML = '';

    questions.forEach(q => {
        const feedbackDiv = document.getElementById(`feedback-${q.id}`);
        let userAnswer = "";
        let isCorrect = false;

        if (q.type === 'choice') {
            const selected = document.querySelector(`input[name="q${q.id}"]:checked`);
            userAnswer = selected ? parseInt(selected.value) : null;
            isCorrect = userAnswer === q.answer;
        } else if (q.type === 'fill') {
            const input = document.querySelector(`input[name="q${q.id}"]`);
            userAnswer = input.value.trim().toLowerCase();
            isCorrect = userAnswer === q.answer.toLowerCase();
        } else if (q.type === 'tf') {
            const selected = document.querySelector(`input[name="q${q.id}"]:checked`);
            userAnswer = selected ? (selected.value === "true") : null;
            isCorrect = userAnswer === q.answer;
        }

        if (isCorrect) {
            score++;
            feedbackDiv.innerHTML = `
                <div class="alert alert-success py-2 mb-0">
                    <strong>¡Correcto!</strong> ${q.explanation}
                </div>
            `;
        } else {
            let correctText = "";
            if (q.type === 'choice') correctText = q.options[q.answer];
            else if (q.type === 'tf') correctText = q.answer ? "Verdadero" : "Falso";
            else correctText = q.answer;

            feedbackDiv.innerHTML = `
                <div class="alert alert-danger py-2 mb-0">
                    <strong>Incorrecto.</strong> La respuesta correcta era: <em>${correctText}</em>.
                    <br><small>${q.explanation}</small>
                </div>
            `;
        }
    });

    // Mostrar resultados finales
    document.getElementById('exam-form').style.display = 'none';
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.style.display = 'block';

    const summary = document.getElementById('score-summary');
    const percentage = Math.round((score / total) * 100);
    summary.innerHTML = `
        <h3 class="display-4">${score} / ${total}</h3>
        <p>Tu puntaje es del <strong>${percentage}%</strong></p>
    `;

    if (percentage >= 70) {
        summary.className = "alert alert-success text-center";
        summary.innerHTML += "<p>¡Excelente trabajo! Estás listo para el examen real.</p>";
    } else {
        summary.className = "alert alert-warning text-center";
        summary.innerHTML += "<p>Sigue practicando. Revisa las explicaciones para aprender de tus errores.</p>";
    }

    // Volver a mostrar las preguntas con feedback
    const reviewList = document.getElementById('questions-list').cloneNode(true);
    mistakesReview.appendChild(reviewList);
    // Asegurarse de que los inputs estén deshabilitados en la revisión
    mistakesReview.querySelectorAll('input').forEach(i => i.disabled = true);
    
    // Scrollear al inicio de resultados
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', renderQuestions);
