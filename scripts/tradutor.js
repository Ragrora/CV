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
            "mainTexto1P1": "Graduado em Engenharia Mecânica pela Universidade Federal de Minas Gerais (UFMG), possuo sólida experiência em Pesquisa e Desenvolvimento (P&D), adquirida durante minha Iniciação Científica na área de Bioengenharia. Nesse período, me aproximei da programação por meio da simulação computacional e desenvolvimento de Algoritmos Genéticos (GA) para otimizar componentes de projeto, aprimorando minhas habilidades em modelagem e resolução de problemas complexos.",
            "mainTexto1P2": "Durante meu estágio, aprofundei meus conhecimentos em Tecnologia da Informação, atuando com análise de dados e automação de processos (RPA). Desenvolvi soluções que aumentaram a eficiência operacional e reduziram significativamente os tempos de execução.",
            "mainTexto1P3": "Atualmente, estou expandindo minhas competências em desenvolvimento Frontend, com foco em consolidar minha atuação no setor de tecnologia e potencializar minha habilidade na manipulação e visualização de dados obtidos da web.",
            
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
            "mainTexto1P1": "Graduado en Ingeniería Mecánica por la Universidad Federal de Minas Gerais (UFMG), poseo una sólida experiencia en Investigación y Desarrollo (I+D), adquirida durante mi Iniciación Científica en el área de Bioingeniería. Durante este período, me acerqué a la programación mediante la simulación computacional y el desarrollo de Algoritmos Genéticos (GA) para optimizar componentes de diseño, mejorando mis habilidades en modelado y resolución de problemas complejos.",
            "mainTexto1P2": "Durante mi pasantía, profundicé mis conocimientos en Tecnología de la Información, trabajando con análisis de datos y automatización de procesos (RPA). Desarrollé soluciones que aumentaron la eficiencia operativa y redujeron significativamente los tiempos de ejecución.",
            "mainTexto1P3": "Actualmente, estoy ampliando mis competencias en desarrollo Frontend, con un enfoque en consolidar mi actuación en el sector tecnológico y potenciar mi habilidad en la manipulación y visualización de datos obtenidos de la web.",

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
            "mainTexto1P1": "Graduated in Mechanical Engineering from the Federal University of Minas Gerais (UFMG), I have solid experience in Research and Development (R&D), acquired during my Scientific Initiation in the field of Bioengineering. During this period, I was introduced to programming through computational simulation and the development of Genetic Algorithms (GA) to optimize design components, enhancing my skills in modeling and solving complex problems.",
            "mainTexto1P2": "During my internship, I deepened my knowledge in Information Technology, working with data analysis and process automation (RPA). I developed solutions that increased operational efficiency and significantly reduced execution times.",
            "mainTexto1P3": "Currently, I am expanding my skills in Frontend development, focusing on consolidating my role in the technology sector and enhancing my ability to manipulate and visualize data obtained from the web.",
            
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
