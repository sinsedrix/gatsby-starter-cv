module.exports = {
  siteTitle: 'Ingénieur Développement Fullstack',
  siteDescription: `Voici mon CV basé sur un starter Gatsby`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Cédric COULIOU',
  twitterUsername: 'sinsedrix',
  githubUsername: 'sinsedrix',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Développeur, touche à tout. <br />
  J'aimerais travailler sur des technologies d'actualité telles que <strong>Javascript, NodeJS et React.</strong>`,
  skills: [
    {
      name: 'C#',
      level: 80
    },
    {
      name: 'ASP.Net',
      level: 80
    },
    {
      name: 'C/C++',
      level: 60
    },
    {
      name: 'Java',
      level: 70
    },
    {
    name: 'HTML',
      level: 80
    },
    {
      name: 'CSS',
      level: 80
    },
    {
      name: 'Javascript',
      level: 90
    },
    {
      name: 'NodeJs',
      level: 25
    },
    {
      name: 'React',
      level: 50
    },
    {
      name: 'Git',
      level: 50
    }
  ],
  jobs: [
    {
      company: "VERLINGUE",
      begin: {
        month: 'fev',
        year: '2012'
      },
      duration: null,
      occupation: "Ingénieur étude & développement",
      description: "J'y' développe et maintiens les intranets, extranets, services métier et technique."
  
    }, {
      company: "AUSY pour le CIMUT",
      begin: {
        month: 'sept',
        year: '2010'
      },
      duration: '2 ans et 6 mois',
      occupation: "Ingénieur développement",
      description: "Développement, maintenance et refonte graphique de l'appli Starweb."
    }, {
      company: "ALTECA pour le CIMUT",
      begin: {
        month: 'avr',
        year: '2010'
      },
      duration: '6 mois',
      occupation: "Ingénieur développement",
      description: "Développement, maintenance et génération de code sur l'appli Starweb"
    }, {
      company: "Synergie pour Ozalit",
      begin: {
        month: 'fev',
        year: '2010'
      },
      duration: '3 mois',
      occupation: "Ingénieur développement web",
      description: "Conception et développement de sites corporatifs, e-boutiques et catalogues interactifs."
    },
    /* ... */
  ],
  studies: [
    {
      year:'2015',
      degree:"Master Informatique du Logiciel",
      location:"UBO de Brest"
    },
    {
      year:'2013',
      degree:"Maîtrise d''informatique",
      location:"UBO de Brest"
    },
  ],
  social: {
    twitter: "https://twitter.com/sinsedrix",
    linkedin: "https://www.linkedin.com/in/sinsedrix",
    viadeo: "https://fr.viadeo.com/fr/profile/cedric.c1",
    stackOverflow: 'https://stackoverflow.com/users/1177999/sinsedrix',
    //stackExchange: 'https://stackoverflow.com/users/1209090/sinsedrix',
    github: "https://github.com/sinsedrix",
    email: "cedric.couliou@gmail.com",
    phone:"06.75.54.97.19"
  },
  siteUrl: 'https://sinsedrix.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#eeffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Cédric COULIOU',
      url: '/',
    }
  ]
}