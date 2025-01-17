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
        "headInfo1": {
            "pt-br": "Sobre",
            "es": "Sobre",
            "en": "About"
        },
        "headInfo2": {
            "pt-br": "Competências",
            "es": "Competencias",
            "en": "Skills"
        },
        "headInfo3": {
            "pt-br": "Projetos",
            "es": "Proyectos",
            "en": "Projects"
        },
        "headInfo4": {
            "pt-br": "Contatos",
            "es": "Contactos",
            "en": "Contact"
        },
        "headInfo5": {
            "pt-br": "Português",
            "es": "Portugués",
            "en": "Portuguese"
        },
        "headInfo6": {
            "pt-br": "Espanhol",
            "es": "Español",
            "en": "Spanish"
        },
        "headInfo7": {
            "pt-br": "Inglês",
            "es": "Inglés",
            "en": "English"
        },
        "aboutTextP1": {
            "pt-br": "Graduado em Engenharia Mecânica, me aproximei da programação durante minha Iniciação Científica em bioengenharia, onde desenvolvi algoritmos genéticos para a otimização de design de componentes e simulação computacional para as análises necessárias, realizando essas atividades majoritariamente com Python e Matlab.",
            "es": "Graduado en Ingeniería Mecánica, me interesé por la programación a través del desarrollo de algoritmos genéticos y simulaciones computacionales durante mi formación. Durante mi pasantía, trabajé como desarrollador de RPA y también desempeñé funciones en análisis de datos. Actualmente, busco consolidarme en el desarrollo de RPA y perfeccionarme en el área de datos.",
            "en": "Graduated in Mechanical Engineering, I became interested in programming through the development of genetic algorithms and computational simulations during my studies. During my internship, I worked as an RPA developer and also took on data analysis functions. Currently, I am looking to consolidate my career in RPA development and further improve my skills in the data field."
        },
        "aboutTextP2": {
            "pt-br": "Durante o estágio atuei como desenvolvedor RPA, me aprofundando na programação com Python ao passo em que aprendia VBA para criar macros sob demanda da empresa. Nesse período também explorei a área da Análise de Dados, sendo responsável por análises preditivas e projeções de faturamento.",
            "es": "Graduado en Ingeniería Mecánica, me interesé por la programación a través del desarrollo de algoritmos genéticos y simulaciones computacionales durante mi formación. Durante mi pasantía, trabajé como desarrollador de RPA y también desempeñé funciones en análisis de datos. Actualmente, busco consolidarme en el desarrollo de RPA y perfeccionarme en el área de datos.",
            "en": "Graduated in Mechanical Engineering, I became interested in programming through the development of genetic algorithms and computational simulations during my studies. During my internship, I worked as an RPA developer and also took on data analysis functions. Currently, I am looking to consolidate my career in RPA development and further improve my skills in the data field."
        },
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
