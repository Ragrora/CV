function changeLanguage(language) {
    // Mapeamento de bandeiras e idiomas
    const flagMap = {
        "pt-br": { src: "img/flagBrazil.png", alt: "Português" },
        "es": { src: "img/flagSpain.png", alt: "Espanhol" },
        "en": { src: "img/flagUsa.png", alt: "Inglês" }
    };

    // Atualiza a imagem e o alt no botão principal
    const languageFlag = document.getElementById("languageFlag");
    languageFlag.src = flagMap[language].src;
    languageFlag.alt = flagMap[language].alt;

    // Salva o idioma ativo no localStorage
    localStorage.setItem("language", language);

    const keys = {
        "pt-br": {
            "headInfo1": "Currículo",
            "headInfo2": "Projetos",
            "headInfo3": "Créditos",
            "headInfo4": "Português",
            "headInfo5": "Espanhol",
            "headInfo6": "Inglês",

            "bodyInfo1": "Telefone:",
            "bodyInfo2": "E-mail:",
            "bodyInfo3": "Endereço:",
            "bodyInfo4": "LinkedIn:",
            "bodyInfo5": "GitHub:",

            "mainTitulo1": "Resumo Profissional/Sobre",
            "mainTexto1": "Graduado em Engenharia Mecânica, me aproximei da programação por meio do desenvolvimento de algoritmos genéticos e simulações computacionais durante minha formação. Durante o estágio, atuei como desenvolvedor de RPA e também desempenhei funções na análise de dados. Atualmente, busco me consolidar no desenvolvimento RPA e me aperfeiçoar na área de dados.",
            
            "mainTitulo2": "Formação Acadêmica",
            "mainTexto2": "Bacharel em Engenharia Mecânica pela Universidade Federal de Minas Gerais - UFMG",
            
            "mainTitulo3": "Competências",
            "mainTexto3P1": "Conhecimento avançado em: Python, VBA e Office",
            "mainTexto3P2": "Conhecimento intermediário em: Power BI, UiPath, SQL, NoSQL, Git e GitHub.",
            "mainTexto3P3": "Conhecimento básico em: HTML, CSS e JavaScript.",

            "mainTitulo4": "Idiomas",
            "mainTexto4P1": "Inglês - avançado",
            "mainTexto4P2": "Espanhol - intermediário",
            "mainTexto4P3": "Francês - básico",
            
            "mainTitulo5": "Experiência Profissional",
            "mainTexto5T1": "Epiroc - Estagiário (fevereiro/2023 - setembro/2024).",
            "mainTexto5P1": "Funções: Desenvolvimento de scripts para extração de dados de relatórios desenvolvidos pela a empresa, objetivando a automatização da criação de contratos e indicadores de desempenho local. Criação de macros VBA para agilizar atividades rotineiras e scripts python para manipulação de grandes volumes de dados.",

            "mainTitulo6": "Cerificados"
        },
        "es": {
            "headInfo1": "Currículum",
            "headInfo2": "Proyectos",
            "headInfo3": "Créditos",
            "headInfo4": "Portugués",
            "headInfo5": "Español",
            "headInfo6": "Inglés",
        
            "bodyInfo1": "Teléfono:",
            "bodyInfo2": "Correo electrónico:",
            "bodyInfo3": "Dirección:",
            "bodyInfo4": "LinkedIn:",
            "bodyInfo5": "GitHub:",
        
            "mainTitulo1": "Resumen Profesional/Sobre",        
            "mainTexto1": "Graduado en Ingeniería Mecánica, me interesé por la programación a través del desarrollo de algoritmos genéticos y simulaciones computacionales durante mi formación. Durante mi pasantía, trabajé como desarrollador de RPA y también desempeñé funciones en análisis de datos. Actualmente, busco consolidarme en el desarrollo de RPA y perfeccionarme en el área de datos.",
        
            "mainTitulo2": "Formación Académica",
            "mainTexto2": "Licenciado en Ingeniería Mecánica por la Universidad Federal de Minas Gerais - UFMG",
            
            "mainTitulo3": "Habilidades",
            "mainTexto3P1": "Conocimiento avanzado en: Python, VBA y Office",
            "mainTexto3P2": "Conocimiento intermedio en: Power BI, UiPath, SQL, NoSQL, Git y GitHub.",
            "mainTexto3P3": "Conocimiento básico en: HTML, CSS y JavaScript.",
        
            "mainTitulo4": "Idiomas",
            "mainTexto4P1": "Inglés - avanzado",
            "mainTexto4P2": "Español - intermedio",
            "mainTexto4P3": "Francés - básico",

            "mainTitulo5": "Experiencia Profesional",
            "mainTexto5T1": "Epiroc - Pasante (febrero/2023 - septiembre/2024).",
            "mainTexto5P1": "Funciones: Desarrollo de scripts para la extracción de datos de informes desarrollados por la empresa, con el objetivo de automatizar la creación de contratos e indicadores de rendimiento local. Creación de macros en VBA para agilizar actividades rutinarias y scripts en Python para la manipulación de grandes volúmenes de datos.",

            "mainTitulo6": "Certificados",
        },
        "en": {
            "headInfo1": "Resume",
            "headInfo2": "Projects",
            "headInfo3": "Credits",
            "headInfo4": "Portuguese",
            "headInfo5": "Spanish",
            "headInfo6": "English",
        
            "bodyInfo1": "Phone:",
            "bodyInfo2": "Email:",
            "bodyInfo3": "Address:",
            "bodyInfo4": "LinkedIn:",
            "bodyInfo5": "GitHub:",
        
            "mainTitulo1": "Professional Summary/About Me",        
            "mainTexto1": "Graduated in Mechanical Engineering, I became interested in programming through the development of genetic algorithms and computational simulations during my studies. During my internship, I worked as an RPA developer and also took on data analysis functions. Currently, I am looking to consolidate my career in RPA development and further improve my skills in the data field.",
            
            "mainTitulo2": "Academic Background",
            "mainTexto2": "Bachelor's Degree in Mechanical Engineering from the Federal University of Minas Gerais - UFMG",
            
            "mainTitulo3": "Skills",
            "mainTexto3P1": "Advanced knowledge in: Python, VBA, and Office",
            "mainTexto3P2": "Intermediate knowledge in: Power BI, UiPath, SQL, NoSQL, Git, and GitHub.",
            "mainTexto3P3": "Basic knowledge in: HTML, CSS, and JavaScript.",
        
            "mainTitulo4": "Languages",
            "mainTexto4P1": "English - Advanced",
            "mainTexto4P2": "Spanish - Intermediate",
            "mainTexto4P3": "French - Basic",
            
            "mainTitulo5": "Professional Experience",
            "mainTexto5T1": "Epiroc - Intern (February/2023 - September/2024).",
            "mainTexto5P1": "Responsibilities: Developed scripts for extracting data from reports created by the company, aiming to automate the creation of contracts and local performance indicators. Created VBA macros to streamline routine activities and Python scripts to handle large data volumes.",
            
            "mainTitulo6": "Certificates"
        }
    }

    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (keys[language][key]) {
            element.textContent = keys[language][key];
        }
    });
}

// Inicializa com o idioma salvo ou padrão
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "pt-br";
    changeLanguage(savedLanguage);
});
