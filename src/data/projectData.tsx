export const projects = [
  // data 1
  {
    id: 1,
    title: 'Tech Insights',
    des: 'A dynamic news website where users can browse latest tech related articles and purchase premium memberships via the Stripe Payment Gateway as well as create, read , update and delete their own post.',
    img: 'https://i.ibb.co.com/1L6nz0X/tech-Insights.png',
    vidoUrl: '',
    iconLists: [
      '/re.svg',
      '/tail.svg',
      '/js.png',
      'node.png',
      'mongodb.svg',
      '/jwt.svg',
      '/stripe.png',
    ],
    link: 'https://tech-insights-d2159.web.app',
    github: '',
    clientSide: 'https://github.com/Rashedin-063/techInsights-Project-Client',
    serverSide: 'https://github.com/Rashedin-063/techInsights-Project-Server',
    duration: '2 months',
    role: 'Full-Stack Developer',
    // content
    content: () => {
      return (
        <div className='text-white text-base font-normal'>
          <div>
            <p className='text-yellow-sunshine pb-4 font-lg font-semibold'>
              Key Features:{' '}
            </p>
            <div className='space-y-2 mt-2'>
              <p>
                ⇒ Engineered a dynamic news website where users can browse tech
                articles and purchase premium memberships via the Stripe Payment
                Gateway.
              </p>
              <p>
                ⇒ Implemented user authentication with JWT to secure access and
                integrated features for updating, deleting, and adding new
                content.
              </p>
              <p>
                ⇒ Utilized MongoDB&apos;s aggregate pipeline for efficient data
                fetching, pagination, search, and sorting functionalities,
                ensuring a smooth user experience.
              </p>
              <p>
                ⇒ Incorporated TanStack Query for optimized data handling and
                architected a dedicated admin dashboard for streamlined content
                management.
              </p>
              <p>
                ⇒ Designed a visually appealing UI with Chakra-UI and Daisy UI
                to enhance user engagement and interaction.
              </p>
            </div>
          </div>

          {/* Challenge and solutions */}
          <div className='my-4 space-y-4'>
            <p className='text-yellow-sunshine pb-4 font-lg font-semibold'>
              Challenge Faced:{' '}
            </p>
            <p className='text-white text-base font-normal'>
              While implementing advanced data queries for using MongoDB, I
              encountered difficulties with the aggregate pipeline. Configuring
              the stages to filter, group, and transform data as required proved
              complex, especially when managing multiple nested fields.
            </p>
            <p className='text-yellow-sunshine pb-4 font-lg font-semibold'>
              Solution Applied:{' '}
            </p>
            <p className='text-white text-base font-normal'>
              To overcome this challenge, I referred to the official MongoDB
              documentation, which provided detailed examples and explanations
              of the aggregate pipeline stages. Additionally, I used ChatGPT to
              clarify specific use cases and understand how to chain stages
              effectively. Combining these resources helped me design a robust
              pipeline that met the project requirements and optimized query
              performance.
            </p>
            <p className='text-yellow-sunshine pb-4 font-lg font-semibold'>
              Challenge Faced:{' '}
            </p>
            <p className='text-white text-base font-normal'>
              Integrating Stripe payment functionality into the website was
              challenging due to the complexity of securely handling
              transactions and ensuring a seamless user experience. Configuring
              the API keys, setting up payment intents, and managing error
              handling required careful attention to detail.
            </p>
            <p className='text-yellow-sunshine pb-4 font-lg font-semibold'>
              Solution Applied:{' '}
            </p>
            <p className='text-white text-base font-normal'>
              I tackled this issue by thoroughly studying Stripe&apos;s official
              documentation, which provided step-by-step guidance on
              integration. I also utilized a couple of YouTube tutorials to
              address specific implementation queries and debug errors during
              testing. This approach enabled me to successfully integrate a
              secure and efficient payment system into the website.
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
    iconLists: [
      '/re.svg',
      '/tail.svg',
      '/js.png',
      'node.png',
      'mongodb.svg',
      '/jwt.svg',
      'fm.svg',
    ],
    link: 'https://byteblog-da679.web.app',
    github: '',
    clientSide: 'https://github.com/Rashedin-063/ByteBlog-Client-Side',
    serverSide: 'https://github.com/Rashedin-063/ByteBlog-Server-Side',
    duration: '1.5 months',
    role: 'Full-Stack Developer',
    content: () => {
      return (
        <div className='text-white text-base font-normal'>
          {/* key features */}
          <div>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg'>
              Key Features:{' '}
            </p>
            <div className='mt-2 space-y-2'>
              <p>
                ⇒ The blogging platform was engineered to allow users to
                register and create, edit, and delete their own blogs, ensuring
                complete CRUD functionality and integrity.
              </p>
              <p>
                ⇒ Sign-up and login are authenticated with Firebase,
                establishing secure user access and data.
              </p>
              <p>
                ⇒ Architected with JWT for user authentication, the platform
                supports seamless content management.
              </p>
              <p>
                ⇒ Designed and tested for optimal performance, featuring React
                Query for efficient data fetching.
              </p>
              <p>
                ⇒ Created a visually appealing UX/UI with animations powered by
                Swiper Slider, AOS, and React Awesome Reveal for an engaging
                user experience.
              </p>
            </div>
          </div>
          {/* challenges */}
          <div className='my-4 space-y-2'>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg mr-4'>
              Challenge Faced:{' '}
              <span className='text-white font-normal text-base'>
                While implementing JWT authentication, I encountered an issue
                caused by API race conditions. This resulted in inconsistent
                behavior during token generation and validation, disrupting the authentication process and user experience.
              </span>
            </p>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg mr-4'>
              Solution Applied:{' '}
              <span className='text-white font-normal text-base'>
                After trying various approaches without success, I revisited a video tutorial from my course that specifically addressed handling race conditions in JWT authentication. The tutorial provided clear, actionable steps to resolve the issue by introducing better request handling and token refresh mechanisms. This ultimately ensured secure and reliable authentication for the application.
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
    iconLists: [
      '/re.svg',
      '/tail.svg',
      '/js.png',
      'node.png',
      'mongodb.svg',
      '/firebase.png',
    ],
    link: 'https://a10-assignment-project.web.app',
    github: '',
    clientSide: 'https://github.com/Rashedin-063/A10-Craft-Canvas-Client',
    serverSide: 'https://github.com/Rashedin-063/A10-Craft-Canvas-Server',
    duration: '1 month',
    role: 'Full-Stack Developer',
    content: () => {
      return (
        <div className='text-white text-base font-normal'>
          {/* key features */}
          <div>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg'>
              Key Features:{' '}
            </p>
            <div className='mt-2 space-y-2'>
              <p>
                ⇒ Craft Canvas is equipped with CRUD functionality, supported by
                a RESTful API and MongoDB for data management.
              </p>
              <p>
                ⇒ It features Firebase authentication with a private route for
                guest users, ensuring smooth navigation and secure access.
              </p>
              <p>
                ⇒ Utilized the Context API to create a theme-switching feature,
                enhancing user experience and interface customization.
              </p>
              <p>
                ⇒ Redesigned and analyzed for best performance, featuring React
                Query for efficient data fetching.
              </p>
              <p>
                ⇒ Created a aesthetic looking UX/UI with animations powered by
                Swiper Slider, AOS, and React Awesome Reveal for an engaging
                user experience.
              </p>
            </div>
          </div>
          {/* challenges */}
          <div className='my-4 space-y-2'>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg mr-4'>
              Challenge Faced:{' '}
              <span className='text-white font-regular text-base'>
                Deleting a user from Firebase when the user deletes their
                account from the database was a challenging task. I initially
                tried to get help from ChatGPT, which suggested using Firebase SDK, storage, and some more advanced concepts that made the
                solution unnecessarily complex. This approach added confusion
                and complexity to the process.
              </span>
            </p>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg mr-4'>
              Solution Applied:{' '}
              <span className='text-white font-regular text-base'>
                   After struggling with the complex suggestions, I revisited the official Firebase documentation and performed a deeper search. I found that Firebase provides a straightforward method for deleting users via the Firebase Admin SDK. By using the `admin.auth().deleteUser()` method, I was able to delete the user from both the authentication system and the database effortlessly, resolving the issue quickly and efficiently.
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
    des: 'Relux.com is a beautifully designed real estate platform dedicated to luxury properties. Users can browse a wide range of listings, see their preferred type of luxury homes, and even get access to special offers.',
    img: 'https://i.ibb.co.com/2jB6SYv/reluxCom.png',
    iconLists: [
      '/re.svg',
      '/tail.svg',
      '/js.png',
      '/swiper.svg',
      '/firebase.png',
    ],
    link: 'https://a9-real-estate-9f975.web.app',
    github: 'https://github.com/Rashedin-063/RealState-Assignment-A9',
    clientSide: '',
    serverSide: '',
    duration: '25 days',
    role: 'Frontend Developer',
    content: () => {
      return (
        <div className='text-white text-base font-regular'>
          {/* key features */}
          <div>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg'>
              Key Features:{' '}
            </p>
            <div className='mt-2 space-y-2'>
              <p>
                ⇒ Designed a visually engaging real estate website with
                animations and a sleek interface to deliver a premium browsing
                experience.
              </p>
              <p>
                ⇒ Enhanced performance and responsiveness, making property
                searches seamless and enjoyable.
              </p>
              <p>
                ⇒ Implemented secure user authentication using Firebase,
                ensuring reliable sign-up and login functionality.
              </p>
              <p>
                ⇒ Deployed the website on Surge for fast load times, with images
                efficiently hosted on ImageBB.
              </p>
            </div>
          </div>
          {/* challenge and solution */}
          <div className='my-4 space-y-2'>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg'>
              Challenge Faced:{' '}
              <span className='text-white font-regular text-base'>
                Implementing local storage functionality to save user
                preferences and retrieving them efficiently was a significant
                challenge. Initially, there were issues with data persistence
                and ensuring the retrieved data matched the expected structure
                for a smooth user experience.
              </span>
            </p>
            <p className='text-yellow-sunshine pb-4 font-semibold text-lg'>
              Solution Applied:{' '}
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
    des: 'Book Worm is a platform designed for book lovers, offering a seamless way to explore, read, and organize their reading journey. Users can browse through a wide range of books, view detailed information, bookmark titles for later.',
    img: 'https://i.ibb.co.com/vv4nQpN/bookWorm.png',
    iconLists: ['/re.svg', '/tail.svg', '/js.png'],
    link: 'https://waggish-judge.surge.sh',
    github: 'https://github.com/Rashedin-063/React-Bookworm-Project',
    clientSide: '',
    serverSide: '',
    duration: '15 days',
    role: 'Frontend Developer',
    content: () => {
      return (
        <div className='text-white text-base font-normal'>
          <p className='text-yellow-sunshine pb-4 font-lg font-semibold'>
            Key Features:{' '}
          </p>
          <div className='mt-2 space-y-2'>
            <p>
              ⇒ This website is built with React and styled using Tailwind CSS,
              Daisy UI, and Flowbite, providing an intuitive and visually
              appealing interface.
            </p>
            <p>
              ⇒ Users can view detailed book information and bookmark titles for
              later reading, ensuring they never lose track of their interests.
            </p>
            <p>
              ⇒ Books can be read directly on the platform with saved progress
              for convenience.
            </p>
            <p>
              ⇒ Reading history is saved and displayed through dynamic charts
              using Recharts, helping users visualize their reading trends
              effortlessly.
            </p>
          </div>
        </div>
      );
    },
  },
];
export default projects;
