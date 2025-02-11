export const portfolio = {
  title: "Portfolio",
  getData: () => {
    return {
      name: "Jeremy",
      leadingDescription: "Je suis développeur d'application et indépendant.",
      description:
        "Bonjour, je m'appelle Jeremy, je suis développeur indépendant avec 4+ d'années d'expérience dans le domaine du dévelopement.",
      projects: [
        {
          name: "Une application sportive",
          type: "Application mobile",
          description: "Une description du projet",
          background: "/img/demo-digital-device.jpg",
          technologies: ["Dart", "Flutter"],
          services: ["Supabase"],
          urls: {
            github: "#",
          },
        },
        {
          name: "Logiciel SaaS comptable",
          type: "Application logiciel",
          description: "Une description du projet",
          background: "/img/demo-digital-device.jpg",
          technologies: ["Javascript", "Typescript", "VueJs"],
          services: ["Supabase"],
        },
        {
          name: "Portfolio",
          type: "Site internet",
          description: "Une description du projet",
          background: "/img/demo-digital-device.jpg",
          technologies: ["Javascript", "Typescript", "Nuxt"],
          services: [],
        },
        {
          name: "Site vitrine",
          type: "Site vitrine",
          description: "Une description du projet",
          background: "/img/demo-digital-device.jpg",
          technologies: ["Javascript", "Typescript", "Nuxt"],
          services: [],
        },
        {
          name: "Recommendation de film",
          type: "IA",
          description: "Une description du projet",
          background: "/img/demo-digital-device.jpg",
          technologies: ["Python", "Pytorch"],
          services: [],
        },
      ],

      about: {},
      contact: {
        email: "",
        phoneNumber: "",
        leadingDescription:
          "Vous souhaitez lancer votre projet ou une aide dans vos développements ?",
        description:
          "Rencontrons-nous et mettons cela en place, je suis disponible pour des opportunités à temps plein ou à temps partiel.",
      },
    };
  },
};
