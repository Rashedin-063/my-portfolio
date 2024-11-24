import React from "react";


interface SectionTitleProps {
  title: string;
  icon: React.ReactNode
}

const SectionTitle:React.FC<SectionTitleProps> = ({title,  icon}) => {
 return (
    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-sunshine text-center flex justify-center items-center gap-4 mb-12'>
       {icon}
       {title}
       {icon}
      </h1>
 )
}


export default SectionTitle