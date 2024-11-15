import '../../styles/rightSidebar.css'
const RightSidebar = () => {
  return (
    <div className='  fixed mt-48'>
      <div className="flex flex-col justify-center items-center gap-y-12 relative">
      <div className="absolute w-[2px] h-full bg-gray-200 -z-10">

      </div>
         <div className='rectangle hover:scale-150'></div>
         <div className='rectangle'></div>
         <div className='rectangle'></div>
         <div className='rectangle'></div>
         <div className='rectangle'></div>
      
     </div>
    </div>
  );
};
export default RightSidebar;
