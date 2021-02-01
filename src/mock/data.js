import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Eren Ahmed Akyol', // e.g: 'Name | Developer'
  lang: 'tr', // e.g: en, es, fr, jp
  description: 'About me, Eren Ahmed Akyol portfolio page.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "I'm",
  name: 'Eren Ahmed Akyol',
  subtitle: 'Welcome to my about page.',
  cta: 'Continue',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "My name is Eren Ahmed, I'm 16 years old and I'm a software developer for 4 years. I am the founder of RedMC Network since 2019 which is a game server project for Minecraft related.",
  paragraphTwo:
    "I love learning programming languages and developing software. Sometimes It's for money but mostly for hobby. My favorite programming language is Go and also I know PHP, JavaScript, Python and I learn little bit Ruby and C# right now.",
  paragraphThree: 'I work for a company as remote developer now and also study for university.',
  resume: 'https://www.resumemaker.online/en.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'redmc.png',
    title: 'RedMC Network',
    info: 'My game server RedMC Network website.',
    info2:
      "It's has shop, vote, blog for players. And may pages. Written with NextJS and Go for backend.",
    url: 'https://redmc.me',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ulasimsaati.png',
    title: 'Ulaşım Saati',
    info: 'The transportation hours project I made for Gavth Ltd.',
    info2: 'Most cities have hours of transportation in it. Coded with GatsbyJS and Go.',
    url: 'https://ulasimsaati.online',
    repo: ''
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ahmederen123@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/alphaeren59',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/eren5960',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
