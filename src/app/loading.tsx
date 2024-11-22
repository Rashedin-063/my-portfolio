import { FaHandsClapping } from 'react-icons/fa6';
const loading = () => {
return (
    <div
      className={`absolute top-0 left-0 w-full h-[800px]  z-50`}
    >
      <div className='flex flex-col items-center justify-center w-full h-full bg-custom-gradient text-white font-josefinSans tracking-wider -pt-16'>
        <div className='md:text-lg lg:text-xl mb-4 text-center'>
          <h3>&quot;Creativity is intelligence having fun.&quot;</h3>
        </div>
        <h1 className='text-2xl md:text-3xl lg:text-5xl text-yellow-sunshine font-semibold flex gap-2'>
          Welcome to my portfolio
          <FaHandsClapping />
        </h1>
      </div>
    </div>
)

}


export default loading