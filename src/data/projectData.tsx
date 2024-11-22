
export const projects = [

  // data 1
  {
    id: 1,
    title: 'Tech Insights',
    des: 'A dynamic news website where users can browse latest tech related articles and purchase premium memberships via the Stripe Payment Gateway as well as create, read , update and delete their own post',
    img: 'https://i.ibb.co.com/1L6nz0X/tech-Insights.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: 'https://tech-insights-d2159.web.app',
    gihub: '',
    clientSide: 'https://github.com/Rashedin-063/techInsights-Project-Client',
    serverSide: 'https://github.com/Rashedin-063/techInsights-Project-Server',
    // content
      content: () => {
      return (
        <div className='text-white text-base'>
          <p className='text-yellow-dusk pb-4 font-semibold text-lg'>
            Key Features:{' '}
          </p>
          <ul className='mt-2 space-y-2 list-disc font-josefinSans'>
            <li>
              ⇒ Engineered a dynamic news website where users can browse tech articles and purchase premium memberships via the Stripe Payment Gateway. 
            </li>
            <li>
              ⇒ Implemented user authentication with JWT to secure access and integrated features for updating, deleting, and adding new content.
            </li>
            <li>
              ⇒ Utilized MongoDB&apos;s aggregate pipeline for efficient data fetching, pagination, search, and sorting functionalities, ensuring a smooth user experience.
            </li>

            <li>
              ⇒ Incorporated TanStack Query for optimized data handling and architected a dedicated admin dashboard for streamlined content management.
            </li>
            <li>
              ⇒ Designed a visually appealing UI with Chakra-UI and Daisy UI to enhance user engagement and interaction.
            </li>
          </ul>
        </div>
      );
    }
   
  },

  // data 2
  {
    id: 2,
    title: 'ByteBlog',
    des: 'A blogging platform that allows users to register and create, edit, and delete their own blogs. Sign-up and login are authenticated with Firebase, establishing secure user access and data integrity.',
    img: 'https://i.ibb.co.com/jyrqxWY/byteBLog.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: 'https://byteblog-da679.web.app',
    gihub: '',
    clientSide: 'https://github.com/Rashedin-063/ByteBlog-Client-Side',
    serverSide: 'https://github.com/Rashedin-063/ByteBlog-Server-Side',
     content: () => {
      return (
        <div className='text-white text-base'>
          <p className='text-yellow-dusk pb-4 font-semibold text-lg'>
            Key Features:{' '}
          </p>
          <ul className='mt-2 space-y-2 list-disc font-josefinSans'>
            <li>
              ⇒ The blogging platform was engineered to allow users to register
              and create, edit, and delete their own blogs, ensuring a complete
              CRUD functionality.integrity.
            </li>
            <li>
              ⇒ Sign-up and login are authenticated with Firebase, establishing
              secure user access and data
            </li>
            <li>
              ⇒ Architected with JWT for user authentication, the platform
              supports seamless content management.
            </li>

            <li>
              ⇒ Designed and tested for optimal performance, featuring React
              Query for efficient data fetching.
            </li>
            <li>
              ⇒ Created a visually appealing UX/UI with animations powered by
              Swiper Slider, AOS, and React Awesome Reveal for an engaging user
              experience.
            </li>
          </ul>
        </div>
      );
    }
  },

  // data 3
  {
    id: 3,
    title: 'Craft Canvas',
    des: 'A art and craft website equipped with CRUD functionality, supported by a RESTful API and MongoDB for data management. It features Firebase authentication ensuring smooth navigation and secure access.',
    img: 'https://i.ibb.co.com/61FJ0Xc/craft-Canvas.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: 'https://a10-assignment-project.web.app',
    github: '',
    clientSide: 'https://github.com/Rashedin-063/A10-Craft-Canvas-Client',
    serverSide: 'https://github.com/Rashedin-063/A10-Craft-Canvas-Server',
     content: () => {
      return (
        <div className='text-white text-base'>
          <p className='text-yellow-dusk pb-4 font-semibold text-lg'>
            Key Features:{' '}
          </p>
          <ul className='mt-2 space-y-2 font-josefinSans'>
            <li>
              ⇒ The blogging platform was engineered to allow users to register
              and create, edit, and delete their own blogs, ensuring a complete
              CRUD functionality.integrity.
            </li>
            <li>
              ⇒ Sign-up and login are authenticated with Firebase, establishing
              secure user access and data
            </li>
            <li>
              ⇒ Architected with JWT for user authentication, the platform
              supports seamless content management.
            </li>

            <li>
              ⇒ Designed and tested for optimal performance, featuring React
              Query for efficient data fetching.
            </li>
            <li>
              ⇒ Created a visually appealing UX/UI with animations powered by
              Swiper Slider, AOS, and React Awesome Reveal for an engaging user
              experience.
            </li>
          </ul>
        </div>
      );
    }
  },

  // data 4
  {
    id: 4,
    title: 'Relux.com',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: 'https://i.ibb.co.com/2jB6SYv/reluxCom.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: 'https://a9-real-estate-9f975.web.app',
    gihub: 'https://github.com/Rashedin-063/RealState-Assignment-A9',
    clientSide: '',
    serverSide: '',
     content: () => {
      return (
        <div className='text-white text-base'>
          <p className='text-yellow-dusk pb-4 font-semibold text-lg'>
            Key Features:{' '}
          </p>
          <ul className='mt-2 space-y-2 list-disc font-josefinSans'>
            <li>
              ⇒ The blogging platform was engineered to allow users to register
              and create, edit, and delete their own blogs, ensuring a complete
              CRUD functionality.integrity.
            </li>
            <li>
              ⇒ Sign-up and login are authenticated with Firebase, establishing
              secure user access and data
            </li>
            <li>
              ⇒ Architected with JWT for user authentication, the platform
              supports seamless content management.
            </li>

            <li>
              ⇒ Designed and tested for optimal performance, featuring React
              Query for efficient data fetching.
            </li>
            <li>
              ⇒ Created a visually appealing UX/UI with animations powered by
              Swiper Slider, AOS, and React Awesome Reveal for an engaging user
              experience.
            </li>
          </ul>
        </div>
      );
    }
  },

  // data 5
  {
    id: 5,
    title: 'Bookworm',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: 'https://i.ibb.co.com/vv4nQpN/bookWorm.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: 'https://waggish-judge.surge.sh',
    gihub: 'https://github.com/Rashedin-063/React-Bookworm-Project',
    clientSide: '',
    serverSide: '',
     content: () => {
      return (
        <div className='text-white text-base'>
          <p className='text-yellow-dusk pb-4 font-semibold text-lg'>
            Key Features:{' '}
          </p>
          <ul className='mt-2 space-y-2 list-disc font-josefinSans'>
            <li>
              ⇒ The blogging platform was engineered to allow users to register
              and create, edit, and delete their own blogs, ensuring a complete
              CRUD functionality.integrity.
            </li>
            <li>
              ⇒ Sign-up and login are authenticated with Firebase, establishing
              secure user access and data
            </li>
            <li>
              ⇒ Architected with JWT for user authentication, the platform
              supports seamless content management.
            </li>

            <li>
              ⇒ Designed and tested for optimal performance, featuring React
              Query for efficient data fetching.
            </li>
            <li>
              ⇒ Created a visually appealing UX/UI with animations powered by
              Swiper Slider, AOS, and React Awesome Reveal for an engaging user
              experience.
            </li>
          </ul>
        </div>
      );
    }
  },

  // data 6
  {
    id: 6,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '/ui.apple.com',
    gihub: '',
    clientSide: '',
    serverSide: '',
  },
];
export default projects