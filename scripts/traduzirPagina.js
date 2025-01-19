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
        // Head
        "headInfo1": {
            "pt-br": "Início",
            "en": "Home"
        },
        "headInfo2": {
            "pt-br": "CV/Currículo",
            "en": "CV/Resume"
        },
        "headInfo3": {
            "pt-br": "Portfólio",
            "en": "Portfolio"
        },
        "headInfo4": {
            "pt-br": "Certificados",
            "en": "Certificates"
        },
        "headInfo5": {
            "pt-br": "Português",
            "en": "Portuguese"
        },
        "headInfo6": {
            "pt-br": "Inglês",
            "en": "English"
        },
        "authorInfo1": {
            "pt-br": "Analista de Dados",
            "en": "Data Analyst"
        },

        // Página Inicial
        "homeInfo1": {
            "pt-br": "Sobre",
            "en": "About Me",
        },
        "homeText1": {
            "pt-br": "Sou graduado em Engenharia Mecânica pela UFMG, e minha trajetória acadêmica me proporcionou as primeiras experiências com programação durante minha última iniciação científica. Nesse projeto, tive a oportunidade de desenvolver aplicações para aplicar o Método de Elementos Finitos (FEM) a campos magnéticos, além de criar algoritmos genéticos para a otimização do design de componentes mecânicos. Essas vivências me permitiram não apenas consolidar meu conhecimento técnico, mas também explorar as possibilidades de integração entre a engenharia e a programação.",
            "en":  "I hold a degree in Mechanical Engineering from UFMG, and my academic journey provided me with my first experiences in programming during my last scientific research project. In this project, I had the opportunity to develop applications to apply the Finite Element Method (FEM) to magnetic fields, as well as create genetic algorithms for optimizing the design of mechanical components. These experiences allowed me to not only consolidate my technical knowledge but also explore the possibilities of integrating engineering and programming."
        },
        "homeText2": {
            "pt-br": "Durante meu estágio, aproximei-me da área de análise de dados, onde pude aplicar meus conhecimentos em estatística para estimar o faturamento de uma empresa ao longo de diferentes períodos de tempo, com base nas expectativas de serviços de manutenção. Essa análise permitiu um detalhamento mais preciso das quantidades de peças necessárias em estoque, contribuindo para uma gestão mais eficiente. Além disso, tive a oportunidade de trabalhar brevemente no desenvolvimento de scripts para a automatização de atividades, uma área que despertou meu interesse e que passei a explorar com mais profundidade.",
            "en":  "During my internship, I became involved with the field of data analysis, where I applied my knowledge in statistics to estimate a company's revenue over different periods based on maintenance service expectations. This analysis allowed for more precise detailing of the quantities of parts required in stock, contributing to more efficient management. Additionally, I had the opportunity to briefly work on developing scripts for task automation, an area that sparked my interest and that I began exploring further."
        },
        "homeText3": {
            "pt-br": "Esse conjunto de experiências me levou a uma transição natural para o campo de RPA (Automação de Processos Robóticos) e análise de dados. Busco expandir meus conhecimentos em Python, ferramentas de aprendizado de máquina, e automação de processos empresariais.",
            "en":  "This combination of experiences led to a natural transition into the field of RPA (Robotic Process Automation) and data analysis. I aim to expand my knowledge in Python, machine learning tools, and business process automation."
        },

        // Currículo
        "resumeInfo1": {
            "pt-br": "CV/Currículo",
            "en": "CV/Resume"
        },
        "resumeTitle1": {
            "pt-br": "Experiência Profissional",
            "en": "Work Experience"
        },
        "resumeTitle2": {
            "pt-br": "Formação Acadêmica",
            "en": "Education"
        },
        "resumeTitle3": {
            "pt-br": "Competências",
            "en": "Skills"
        },
        "resumeText1": {
            "pt-br": "Epiroc - Estagiário (fevereiro/2023 - setembro/2024).",
            "en": "Epiroc - Intern (February/2023 - September/2024)."
        },
        "resumeText2": {
            "pt-br": "Análise de Dados, Visualização de Dados, Web Scraping, RPA, Macros VBA",
            "en": "Data Analysis, Data Visualization, Web Scraping, RPA, VBA Macros."
        },
        "resumeText3": {
            "pt-br": "Bacharel em Engenharia Mecânica pela Universidade Federal de Minas Gerais - UFMG",
            "en": "Bachelor's degree in Mechanical Engineering from the Federal University of Minas Gerais - UFMG."
        },
        "resumeText4": {
            "pt-br": "Python",
            "en": "Python"
        },
        "resumeText5": {
            "pt-br": "Pandas, Selenium, Openpyxl, Numpy, Seaborn, Matplotlib, Pyodbc, TensorFlow",
            "en": "Pandas, Selenium, Openpyxl, Numpy, Seaborn, Matplotlib, Pyodbc, TensorFlow"
        },
        "resumeText6": {
            "pt-br": "R",
            "en": "R"
        },
        "resumeText7": {
            "pt-br": "Markdown, dplry, ggplot2, tidyr, tseries, lmtest, forecast",
            "en": "Markdown, dplry, ggplot2, tidyr, tseries, lmtest, forecast"
        },
        "resumeText8": {
            "pt-br": "SQL",
            "en": "SQL"
        },
        "resumeText9": {
            "pt-br": "Power BI",
            "en": "Power Bi"
        },
        "resumeText10": {
            "pt-br": "JavaScript",
            "en": "JavaScript"
        },
        "resumeText11": {
            "pt-br": "HTML5",
            "en": "HTML5"
        },
        "resumeText12": {
            "pt-br": "CSS",
            "en": "CSS"
        },


        // Portifólio
        "portInfo1": {
            "pt-br": "Portfólio",
            "en": "Portfolio"
        },
        "portTitle1": {
            "pt-br": "Item 1",
            "en": "Item 1"
        },
        "portText1": {
            "pt-br": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas maximus ultricies. Duis gravida ut turpis non auctor. Nunc consequat consequat dignissim. Etiam quam lorem, placerat sed dapibus ac, aliquam non orci. Mauris nec leo eu est molestie laoreet sit amet ut dolor. Vestibulum aliquam, turpis et tristique pulvinar, quam.",
            "en":  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas maximus ultricies. Duis gravida ut turpis non auctor. Nunc consequat consequat dignissim. Etiam quam lorem, placerat sed dapibus ac, aliquam non orci. Mauris nec leo eu est molestie laoreet sit amet ut dolor. Vestibulum aliquam, turpis et tristique pulvinar, quam."
        },

        // Certificados
        "certInfo1": {
            "pt-br": "Portfólio",
            "en": "Portfolio"
        },
        "certTitle1": {
            "pt-br": "Item 1",
            "en": "Item 1"
        },
        "certText1": {
            "pt-br": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas maximus ultricies. Duis gravida ut turpis non auctor. Nunc consequat consequat dignissim. Etiam quam lorem, placerat sed dapibus ac, aliquam non orci. Mauris nec leo eu est molestie laoreet sit amet ut dolor. Vestibulum aliquam, turpis et tristique pulvinar, quam.",
            "en":  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas maximus ultricies. Duis gravida ut turpis non auctor. Nunc consequat consequat dignissim. Etiam quam lorem, placerat sed dapibus ac, aliquam non orci. Mauris nec leo eu est molestie laoreet sit amet ut dolor. Vestibulum aliquam, turpis et tristique pulvinar, quam."
        }
    }


    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (keys[key][language]) {
            element.textContent = keys[key][language];
        }
    });
}

// Inicializa com o idioma salvo ou padrão
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "pt-br";
    changeLanguage(savedLanguage);
});
