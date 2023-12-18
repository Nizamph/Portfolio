export type NavbarContentsType = {
  Projects: string;
  Resume: string;
  About: string;
  Skills: string;
};

export type crouselImagesType = {
  id: string;
  url: string;
};

export const NavbarContents: NavbarContentsType = {
  Projects: 'Projects',
  Resume: 'Resume',
  About: 'About',
  Skills: 'Skills',
};

export const GET_REPO_DETAILS: string =
  'https://api.github.com/users/Mohd-shahid-iqbal/repos?sort=updated&direction=desc';

export const STARS_URL: string =
  'https://github.com/Mohd-shahid-iqbal/Mohd-shahid-iqbal/stargazers';

export const crouselImages: crouselImagesType[] = [
  {
    id: '1',
    url: 'https://mohd-shahid-iqbal.github.io/myportfolio/static/media/3.cda1b0f737dfa5074f91.png',
  },
  {
    id: '2',
    url: 'https://mohd-shahid-iqbal.github.io/myportfolio/static/media/home.94c72077f628a4a8c4b2.png',
  },
  {
    id: '3',
    url: 'https://mohd-shahid-iqbal.github.io/myportfolio/static/media/add.94dd9c5a447d0133abf6.png',
  },
  {
    id: '4',
    url: 'https://mohd-shahid-iqbal.github.io/myportfolio/static/media/1.9fd43a85f309e6549581.png',
  },
  {
    id: '5',
    url: 'https://mohd-shahid-iqbal.github.io/myportfolio/static/media/3.cda1b0f737dfa5074f91.png',
  },
  {
    id: '6',
    url: 'https://mohd-shahid-iqbal.github.io/myportfolio/static/media/4.68935427aa7818e9443d.png',
  },
  {
    id: '7',
    url: 'https://mohd-shahid-iqbal.github.io/myportfolio/static/media/5.4527d2cc8ad9bf8b5212.png',
  },
];

export const techSkill: { id: string; skill: string; percentage: number }[] = [
  {
    id: String(Math.random()),
    skill: 'React',
    percentage: 70,
  },
  {
    id: String(Math.random()),
    skill: 'Javascript',
    percentage: 80,
  },
  {
    id: String(Math.random()),
    skill: 'HTMl',
    percentage: 90,
  },
  {
    id: String(Math.random()),
    skill: 'CSS',
    percentage: 80,
  },
  {
    id: String(Math.random()),
    skill: 'NEXT.js',
    percentage: 70,
  },
  {
    id: String(Math.random()),
    skill: 'Node.js',
    percentage: 65,
  },
];

export const softSkill: { id: string; skill: string; percentage: number }[] = [
  {
    id: String(Math.random()),
    skill: 'Communication',
    percentage: 80,
  },
  {
    id: String(Math.random()),
    skill: 'Punctual',
    percentage: 90,
  },
  {
    id: String(Math.random()),
    skill: 'Time Management',
    percentage: 70,
  },
  {
    id: String(Math.random()),
    skill: 'Task Management',
    percentage: 90,
  },
  {
    id: String(Math.random()),
    skill: 'Team player',
    percentage: 80,
  },
  {
    id: String(Math.random()),
    skill: 'critical Thinking',
    percentage: 95,
  },
];
