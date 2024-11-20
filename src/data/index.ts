
export const navItems = [
  { to: '#hero', label: 'Home' },
  { to: '#about', label: 'About' },
  { to: '#projects', label: 'Projects' },
  { to: '#blogs', label: 'Blogs' },
  { to: '#contact', label: 'Contact' },
];



export const gridItems = [
  {
    id: 1,
    title: 'My tech stack',
    description: '',

    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[50vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'items-center',
    img: '',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2 min-h-48',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title:
      'I value clear communication and collaboration, I approach challenges with a calm and problem solving mindset ',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: 'opacity-75',
    titleClassName: 'justify-start',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 4,
    title: 'I believe in building products that not only function well but also delight users, creating experiences that feel intuitive and seamless',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },
  {
    id: 5,
    title: '',
    description: '',
    className: '',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full text-center',
    img: '',
    spareImg: '',
  },
  {
    id: 6,
    title:
      'Always eager to learn - currently, I’m diving deeper into TypeScript and exploring advanced Next.js.',
    description: 'The Inside Scoop',
    className: '',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60 opacity-75',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },

];

export const projects = [
  {
    id: 1,
    title: '3D Solar System Planets to Explore',
    des: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    img: '/p1.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: '/ui.earth.com',
  },
  {
    id: 2,
      title: 'Yoom - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: '/ui.yoom.com',
  },
  {
    id: 3,
    title: 'AI Image SaaS - Canva Application',
    des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: '/ui.aiimg.com',
  },
  {
    id: 4,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '/ui.apple.com',
  },
];
