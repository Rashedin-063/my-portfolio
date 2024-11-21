import { gridItems } from "@/data"
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';

const About = () => {
  return (
      <section id='about' className="mt-8 lg:mt-0">
      <BentoGrid className='w-full'>
        {gridItems?.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default About;

