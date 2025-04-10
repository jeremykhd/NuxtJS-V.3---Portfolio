export const portfolio = {
  title: "Portfolio",
  getData: () => {
    return {
      name: "Jeremy",
      leadingDescription: "Je suis développeur d'application et indépendant.",
      description:
        "Bonjour, je m'appelle Jeremy, je suis développeur indépendant avec 4+ d'années d'expérience dans le domaine du dévelopement.",
      projects: {
        leadingDescription:
          "Retrouvez sur mon portfolio mes projets les plus aboutis délivrés à mes clients ou à la communauté. Je serais plus que ravi de répondre à toutes vos questions, sur comment nous pourrons collaborer, afin de mener à bien vos projets ainsi que d'atteindre vos objectifs. N'hésitez pas à me contacter.",
        contents: [
          {
            name: "Une application sportive",
            slug: "une_application_sportive",
            type: "Application mobile",
            description:
              "SportSync est une application qui aide les sportifs à organiser leurs entraînements au quotidien. Elle permet de créer des plannings personnalisés, avec rappels et suivi des performances via des statistiques détaillées. \n \n L’application intègre une dimension sociale, offrant la possibilité d’ajouter des amis, de partager ses séances et de relever des défis pour rester motivé. Elle se synchronise avec des objets connectés et propose des recommandations adaptées aux objectifs de chaque utilisateur. \n Avec SportSync, entraînez-vous efficacement, suivez vos progrès et évoluez au sein d’une communauté motivante ! 💪🔥",
            background: "/img/demo-digital-device.jpg",
            technologies: ["Dart", "Flutter"],
            services: ["Supabase"],
            competences: [
              "Connexion / Inscription",
              "Gestion d'utilisateurs",
              "Paramétrage des objectifs",
              "Création de planning d'entraînement",
              "Création de groupe d'entraînement",
            ],
            urls: {
              github: "#",
            },
          },
          {
            name: "Logiciel SaaS comptable",
            slug: "logiciel_saas_comptable",
            type: "Application logiciel",
            description: "Une description du projet",
            background: "/img/demo-digital-device.jpg",
            technologies: ["Javascript", "Typescript", "VueJs"],
            services: ["Supabase"],
            competences: [
              "Maîtrise de l’architecture applicative",
              "Autoditacte",
              "Résolution de problèmes complexes",
              "Machine learning / Deep learning",
            ],
          },
          {
            name: "Portfolio",
            slug: "portfolio",
            type: "Site internet",
            description: "Une description du projet",
            background: "/img/demo-digital-device.jpg",
            technologies: ["Javascript", "Typescript", "Nuxt"],
            services: [],
            competences: [
              "Maîtrise de l’architecture applicative",
              "Autoditacte",
              "Résolution de problèmes complexes",
              "Machine learning / Deep learning",
            ],
          },
          {
            name: "Site vitrine",
            slug: "site_vitrine",
            type: "Site vitrine",
            description: "Une description du projet",
            background: "/img/demo-digital-device.jpg",
            technologies: ["Javascript", "Typescript", "Nuxt"],
            services: [],
            competences: [
              "Maîtrise de l’architecture applicative",
              "Autoditacte",
              "Résolution de problèmes complexes",
              "Machine learning / Deep learning",
            ],
          },
          {
            name: "Recommendation de film",
            slug: "recommandation_de_film",
            type: "IA",
            description: "Une description du projet",
            background: "/img/demo-digital-device.jpg",
            technologies: ["Python", "Pytorch"],
            services: [],
            competences: [
              "Maîtrise de l’architecture applicative",
              "Autoditacte",
              "Résolution de problèmes complexes",
              "Machine learning / Deep learning",
            ],
          },
        ],
      },
      about: {
        leadingDescription:
          "Avec un peu plus de 4 années d'expérience dans le monde du développement",
        experience: 4,
        completeProject: 8,
        cupOfCoffe: 10,
        profileTitle:
          "Un <span class='text-green-300'>développeur</span> passionné par ce qu'il fait, <span class='text-green-300'>à votre écoute</span> afin de vous apporter l'expertise nécessaire à vos besoins <span class='text-green-300'> pour concrétiser vos idées</span>.",
        profileDescription:
          "Enchanté, je m'appelle Jeremy, ingénieur d'application spécialisé dans l'IA et autodidacte avec 4 années d'expérience.",
        profileCitation:
          "‘Parler, c’est facile. Montre-moi le code.’ – Linus Torvalds. Un bon développeur ne se contente pas d’idées, il les concrétise en écrivant les lignes qui feront avancer le monde.",
      },
      experiences: {
        leadingDescription: "Trouver une phrase d'accroche",
        contents: [
          {
            name: "E-Clid",
            type: "Freelance",
            description:
              "Assiste le développement d'une nouvelle plateforme comptable en ligne, aide sur le développement des différents metrics nécessaire.",
            from: "2024",
            to: "2025",
            poste: "Fullstack developer Javascript",
            competences: [
              "Développement Vue JS / Typescript / PostgreSQL",
              "Travail en Autonomie",
              "Cohésion d'équipe",
              "Connaissance en comptabilité",
            ],
          },
          {
            name: "Sweeeft",
            type: "Freelance",
            description:
              "Refonte d'une nouvelle plateforme en ligne existante, aide sur le développement des différents points.",
            from: "2024",
            to: "2024",
            poste: "Fullstack developer Javascript",
            competences: [
              "Développement Vue JS / Typescript",
              "Cohésion d'équipe",
            ],
          },
          {
            name: "(M2) EPITECH - Architecte d'application logiciel spécialisé IA",
            type: "Formation",
            description:
              "Obtention de mon master chez EPITECH en tant qu'architecte d'application logicielle, et spécialisé dans l'IA.",
            from: "2021",
            to: "2023",
            poste: "",
            competences: [
              "Maîtrise de l’architecture applicative",
              "Autoditacte",
              "Résolution de problèmes complexes",
              "Machine learning / Deep learning",
            ],
          },
          {
            name: "Avicom",
            type: "Alternance",
            description:
              "Lead developer (PHP/Javascript) en alternance chez avicom, j'avais en charge le développement des différents projets au sein de l'agence ainsi que de 2 développeurs.",
            from: "2021",
            to: "2023",
            poste: "Lead Developer",
            competences: [
              "Développement PHP / Symfony / Vue JS",
              "Travail en Autonomie",
              "En charge d'une équipe'",
              "En charge du développement des projets",
              "Définition et implémentation d’une architecture logicielle scalable et maintenable",
              "Mise en place des bonnes pratiques d’architecture (Design Patterns, Clean Architecture, DDD…)",
            ],
          },
          {
            name: "Avicom",
            type: "Alternance",
            description:
              "Fullstack developer (PHP/Javascript) en alternance chez avicom, j'assurais le développement des différents projets au sein de l'agence.",
            from: "2020",
            to: "2021",
            poste: "Fullstack developer",
            competences: [
              "Développement Wordpress / PHP / Symfony",
              "Travail en Autonomie",
            ],
          },
        ],
      },
      services: {
        leadingDescription:
          "Mes services vous emmeneront vers une experience exceptionnelle, où qualité et devouement envers vos projets seront les points principaux.",
        expertises: [
          {
            icon: "ri-device-fill",
            name: "Développement d'aplication logiciel",
            description: "'string'",
          },
          {
            icon: "ri-device-fill",
            name: "Développement de site internet",
            description: "'string'",
          },
          {
            icon: "ri-device-fill",
            name: "Développement de site internet",
            description: "'string'",
          },
        ],
      },
      contact: {
        email: "jeremy.khamdy.pro@outlook.com",
        phoneNumber: "",
        leadingDescription:
          "Vous souhaitez lancer votre projet ou une aide dans vos développements ?",
        description:
          "Rencontrons-nous et mettons cela en place, je suis disponible pour des opportunités à temps plein ou à temps partiel.",
      },
    };
  },
};
