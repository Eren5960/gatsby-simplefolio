import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Eren Ahmed Akyol', // e.g: 'Name | Developer'
  lang: 'tr', // e.g: en, es, fr, jp
  description: 'Siteme hoşgeldiniz', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "I'm",
  name: 'Eren Ahmed Akyol',
  subtitle: 'Welcome to my world',
  cta: 'Continue',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "My name is Eren Ahmed, I'm 16 years old and I'm a software developer for 4 years. I am the founder of RedMC Network for 1 year. It's a game server project for Minecraft related.",
  paragraphTwo:
    'I love learning programming languages and making software. Sometimes for money but usually for hobby. My favorite programming language is Go. Already I know PHP, JavaScript, Python and little Ruby and C#',
  paragraphThree: 'I working remotely now and I study for university.',
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
