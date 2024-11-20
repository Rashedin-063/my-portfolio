 <div className='lg:col-span-3 md:col-span-6 md:row-span-4 row-span-1 overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input  flex flex-col space-y-4 bg-custom-gradient px-8'>

        <h1 className="text-3xl lg:text-5xl text-yellow-sunshine my-8 text-center" > My Tech Stack </h1>
        
         <div className='grid grid-cols-3 gap-x-3 gap-y-5 lg:gap-8'>
        {techStack.map((item, i) => (
          <span
            key={i}
            className=' text-black font-semibold text-sm lg:text-base opacity-100 rounded-lg text-center bg-gray-200 flex px-4 lg:px-6 py-2 lg:py-3 justify-center items-center gap-2'
          >
            {item.icon}
            {item.text}
          </span>
        ))}
        </div>
      </div>

      {/* second div */}
      <div className='lg:col-span-2 md:col-span-3 md:row-span-2 row-span-1 overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input  flex flex-col space-y-4 bg-custom-gradient px-8'>
      
      </div>

      {/* third div */}

    <div className='lg:col-span-2 md:col-span-3 md:row-span-2 row-span-1 overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input  flex flex-col space-y-4 bg-custom-gradient px-8'>
    
    </div>

    {/* fourth grid */}
    <div className='lg:col-span-2 md:col-span-3 md:row-span-1 row-span-1 overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input  flex flex-col space-y-4 bg-custom-gradient px-8'>
    
    </div>

      {/* 5th grid */}
    <div className='md:col-span-3 md:row-span-2 row-span-1 overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input  flex flex-col space-y-4 bg-custom-gradient px-8'>
    
      </div>
      
      {/* 6th grid */}
      <div className='lg:col-span-2 md:col-span-3 md:row-span-1 row-span-1 overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input  flex flex-col space-y-4 bg-custom-gradient px-8'>
       <iframe
                src='https://drive.google.com/file/d/1g8dWYrawzY4NvAvzaOojSpkr6LPW6H0J/preview'
                width='400'
                height='300'
                allow='autoplay'
                allowFullScreen
              ></iframe>
      </div>
     