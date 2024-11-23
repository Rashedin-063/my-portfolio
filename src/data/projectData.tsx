
export const projects = [
  // data 1
  {
    id: 1,
    title: 'Tech Insights',
    des: 'A dynamic news website where users can browse latest tech related articles and purchase premium memberships via the Stripe Payment Gateway as well as create, read , update and delete their own post.',
    img: 'https://i.ibb.co.com/1L6nz0X/tech-Insights.png',
    vidoUrl: '',
    iconLists: ['/re.svg', '/tail.svg', '/js.png', 'node.png', 'mongodb.svg', '/jwt.svg', '/stripe.png'],
    link: 'https://tech-insights-d2159.web.app',
    gihub: '',
    clientSide: 'https://github.com/Rashedin-063/techInsights-Project-Client',
    serverSide: 'https://github.com/Rashedin-063/techInsights-Project-Server',
    duration: '2 months',
    role: 'Full-Stack Developer',
    // content
    content: () => {
      return (
        <div className='text-white text-base '>
          <div>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg'>
              Key Features:{' '}
            </p>
            <ul className='mt-2 space-y-2 '>
              <li>
                ⇒ Engineered a dynamic news website where users can browse tech
                articles and purchase premium memberships via the Stripe Payment
                Gateway.
              </li>
              <li>
                ⇒ Implemented user authentication with JWT to secure access and
                integrated features for updating, deleting, and adding new
                content.
              </li>
              <li>
                ⇒ Utilized MongoDB&apos;s aggregate pipeline for efficient data
                fetching, pagination, search, and sorting functionalities,
                ensuring a smooth user experience.
              </li>

              <li>
                ⇒ Incorporated TanStack Query for optimized data handling and
                architected a dedicated admin dashboard for streamlined content
                management.
              </li>
              <li>
                ⇒ Designed a visually appealing UI with Chakra-UI and Daisy UI
                to enhance user engagement and interaction.
              </li>
            </ul>
          </div>
          {/* challenge and solutions */}
          <div className='my-4 space-y-2'>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg mr-4'>
              Challenge Faced:{' '}
              <span className='text-white font-regular text-base'>
                While implementing advanced data queries for using MongoDB, I
                encountered difficulties with the aggregate pipeline.
                Configuring the stages to filter, group, and transform data as
                required proved complex, especially when managing multiple
                nested fields.
              </span>
            </p>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg mr-4'>
              Solution Applied :{' '}
              <span className='text-white font-regular text-base'>
                To overcome this challenge, I referred to the official MongoDB
                documentation, which provided detailed examples and explanations
                of the aggregate pipeline stages. Additionally, I used ChatGPT
                to clarify specific use cases and understand how to chain stages
                effectively. Combining these resources helped me design a robust
                pipeline that met the project requirements and optimized query
                performance.
              </span>
            </p>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg mr-4'>
              Challenge Faced:{' '}
              <span className='text-white font-regular text-base'>
                Integrating Stripe payment functionality into the website was
                challenging due to the complexity of securely handling
                transactions and ensuring a seamless user experience.
                Configuring the API keys, setting up payment intents, and
                managing error handling required careful attention to detail.
              </span>
            </p>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg mr-4'>
              Steps to Solve :{' '}
              <span className='text-white font-regular text-base'>
                I tackled this issue by thoroughly studying Stripe&apos;s official
                documentation, which provided step-by-step guidance on
                integration. I also utilized couple of youtube tutorials to address specific
                implementation queries and debug errors during testing. This
                approach enabled me to successfully integrate a secure and
                efficient payment system into the website.
              </span>
            </p>
          </div>
        </div>
      );
    },
  },

  // data 2
  {
    id: 2,
    title: 'ByteBlog',
    des: 'A blogging platform that allows users to register and create, edit, and delete their own blogs. Sign-up and login are authenticated with Firebase, establishing secure user access and data integrity.',
    img: 'https://i.ibb.co.com/jyrqxWY/byteBLog.png',
    videoUrl: '',
    iconLists: ['/re.svg', '/tail.svg', '/js.png', 'node.png', 'mongodb.svg', '/jwt.svg', 'fm.svg'],
    link: 'https://byteblog-da679.web.app',
    gihub: '',
    clientSide: 'https://github.com/Rashedin-063/ByteBlog-Client-Side',
    serverSide: 'https://github.com/Rashedin-063/ByteBlog-Server-Side',
    duration: '1.5 months',
    role: 'Full-Stack Developer',
    content: () => {
      return (
        <div className='text-white text-base'>
          {/* key features */}
          <div>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg'>
              Key Features:{' '}
            </p>
            <ul className='mt-2 space-y-2 list-disc font-josefinSans'>
              <li>
                ⇒ The blogging platform was engineered to allow users to
                register and create, edit, and delete their own blogs, ensuring
                a complete CRUD functionality.integrity.
              </li>
              <li>
                ⇒ Sign-up and login are authenticated with Firebase,
                establishing secure user access and data
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
                Swiper Slider, AOS, and React Awesome Reveal for an engaging
                user experience.
              </li>
            </ul>
          </div>
          {/* challenges */}
          <div className='my-4 space-y-2'>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg mr-4'>
              Challenge Faced:{' '}
              <span className='text-white font-regular text-base'>
                While implementing JWT authentication, I encountered an issue
                caused by API race conditions. This resulted in inconsistent
                behavior during token generation and validation, disrupting the
                authentication process and user experience.
              </span>
            </p>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg mr-4'>
              Solution Applied :{' '}
              <span className='text-white font-regular text-base'>
                After trying various approaches without success, I revisited a
                video tutorial from my complete web development course that specifically addressed
                handling race conditions in JWT authentication. The tutorial
                provided clear, actionable steps to resolve the issue by
                introducing better request handling and token refresh
                mechanisms. This ultimately ensured secure and reliable
                authentication for the application.
              </span>
            </p>
          </div>
        </div>
      );
    },
  },

  // data 3
  {
    id: 3,
    title: 'Craft Canvas',
    des: 'An art and craft website equipped with CRUD functionality, supported by a RESTful API and MongoDB for data management. It features Firebase authentication ensuring smooth navigation and secure access.',
    img: 'https://i.ibb.co.com/61FJ0Xc/craft-Canvas.png',
    videoUrl: '',
    iconLists: ['/re.svg', '/tail.svg', '/js.png', 'node.png', 'mongodb.svg', '/firebase.png'],
    link: 'https://a10-assignment-project.web.app',
    github: '',
    clientSide: 'https://github.com/Rashedin-063/A10-Craft-Canvas-Client',
    serverSide: 'https://github.com/Rashedin-063/A10-Craft-Canvas-Server',
    duration: '2 months',
    role: 'Full-Stack Developer',
    nextSteps: [
      'Adding user analytics to track popular articles.',
      'Incorporating multilingual support for a broader audience.',
      'Refactoring the backend code for scalability.',
    ],
    content: () => {
      return (
        <div className='text-white text-base'>
          {/* key features */}
        <div>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg'>
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
{/* challenges */}
             <div className='my-4 space-y-2'>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg mr-4'>
              Challenge Faced:{' '}
              <span className='text-white font-regular text-base'>
                Implementing local storage functionality to save user
                preferences and retrieving them efficiently was a significant
                challenge. Initially, there were issues with data persistence
                and ensuring the retrieved data matched the expected structure
                for smooth user experience.
              </span>
            </p>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg mr-4'>
              Solution Applied :{' '}
              <span className='text-white font-regular text-base'>
                After researching and troubleshooting, I referred to solutions
                on Stack Overflow, which provided clear guidance on correctly
                using localStorage APIs. I learned how to properly store data in
                a structured format (e.g., JSON), retrieve it, and handle edge
                cases like empty or invalid data. This solution streamlined the
                process and ensured reliable data storage and retrieval for user
                preferences.
              </span>
            </p>
          </div>
        </div>
      );
    },
  },

  // data 4
  {
    id: 4,
    title: 'Relux.com',
    des: 'Relux.com is a beautifully designed real estate platform dedicated to luxury properties. Whether you are looking for a penthouse, a beachfront villa, a private island, or a mansion, this website offers a seamless way to explore and find your dream property. Users can browse a wide range of listings, see their preferred type of luxury homes, and even get access to special offers.',
    img: 'https://i.ibb.co.com/2jB6SYv/reluxCom.png',
    iconLists: ['/re.svg', '/tail.svg', '/js.png', '/swiper.svg', '/firebase.png'],
    link: 'https://a9-real-estate-9f975.web.app',
    gihub: 'https://github.com/Rashedin-063/RealState-Assignment-A9',
    clientSide: '',
    serverSide: '',
    content: () => {
      return (
        <div className='text-white text-base'>
          {/* key feature */}
          <div>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg'>
              Key Features:{' '}
            </p>
            <ul className='mt-2 space-y-2 list-disc font-josefinSans'>
              <li>
                ⇒ Designed a visually engaging real estate website with
                animations and a sleek interface to deliver a premium browsing
                experience.
              </li>
              <li>
                ⇒ Enhanced performance and responsiveness, making property
                searches seamless and enjoyable.
              </li>
              <li>
                ⇒ Implemented secure user authentication using Firebase,
                ensuring reliable sign-up and login functionality.
              </li>
              <li>
                ⇒ Deployed the website on Surge for fast load times, with images
                efficiently hosted on ImageBB.
              </li>
            </ul>
          </div>
          {/* challenge and solution */}
          <div className='my-4 space-y-2'>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg mr-4'>
              Challenge Faced:{' '}
              <span className='text-white font-regular text-base'>
                Implementing local storage functionality to save user
                preferences and retrieving them efficiently was a significant
                challenge. Initially, there were issues with data persistence
                and ensuring the retrieved data matched the expected structure
                for smooth user experience.
              </span>
            </p>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg mr-4'>
              Solution Applied :{' '}
              <span className='text-white font-regular text-base'>
                After researching and troubleshooting, I referred to solutions
                on Stack Overflow, which provided clear guidance on correctly
                using localStorage APIs. I learned how to properly store data in
                a structured format (e.g., JSON), retrieve it, and handle edge
                cases like empty or invalid data. This solution streamlined the
                process and ensured reliable data storage and retrieval for user
                preferences.
              </span>
            </p>
          </div>
        </div>
      );
    },
  },

  // data 5
  {
    id: 5,
    title: 'Bookworm',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: 'https://i.ibb.co.com/vv4nQpN/bookWorm.png',
    iconLists: ['/re.svg', '/tail.svg', '/js.png'],
    link: 'https://waggish-judge.surge.sh',
    gihub: 'https://github.com/Rashedin-063/React-Bookworm-Project',
    clientSide: '',
    serverSide: '',
    content: () => {
      return (
        <div className='text-white text-base'>
          <p className='text-yellow-sunshine pb-4 font-semibold text-lg'>
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
    },
  },

  // data 6
  // {
  //   id: 6,
  //   title: 'Animated Apple Iphone 3D Website',
  //   des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
  //   img: '/p4.svg',
  //   iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
  //   link: '/ui.apple.com',
  //   gihub: '',
  //   clientSide: '',
  //   serverSide: '',
  // },
];
export default projects