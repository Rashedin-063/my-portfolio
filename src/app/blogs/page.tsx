import dynamic from 'next/dynamic';


const HoverEffect = dynamic(() => import('@/components/ui/CardHoverEffect'), {
  ssr: false,
});
import { Blogs } from '@/data';
// import {RiArticleFill} from "@/data/icons"
const BlogsPage = () => {
  return (
    <div className='mt-16 text-center '>
      This is blog page
      <div>
        <HoverEffect items={Blogs} />
      </div>
    </div>
  );
};

export default BlogsPage;
