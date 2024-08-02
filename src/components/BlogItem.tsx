import React from 'react';
import Image from 'next/image';
import { ArrowRight, Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';

// Define the type for props
interface BlogItemProps {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string; // Ensure this is a valid path or URL
}

const BlogItem: React.FC<BlogItemProps> = ({id,title, description, category, image }) => {
  console.log('BlogItem id:', id); // Add this line to check the id
  return (
    <div className='lg:max-w-[330px] max-w-[330px]  bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
       <Link href={`/blog/${id}`}>
    
      <Image
        src={image}
        alt='Blog Image'
        width={400}
        height={200}
        className='border-b border-black object-cover'
      />
      </Link>
      <p className='ml-5 mt-5 px-2 inline-block bg-black text-white text-sm'>{category}</p>
      <div className='p-5'>
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>
          {title}
        </h5>
        <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
        <div className='lg:flex lg:justify-between  justify-between flex items-center py-2 font-semibold text-center'>   
        {/* <div className='lg:flex lg:justify-between inline-flex items-center py-2 font-semibold text-center'>
        <Link href={`/blog/${id}`}><h3 className='mr-2'>Read more</h3>
        </Link>
          <ArrowRight className='w-4 h-4' />
          </div> */}
             <Link href={`/blog/${id}`}><div className='lg:flex lg:justify-between inline-flex items-center py-2 font-semibold text-center'>
     <h3 className='mr-2'>Read more</h3>
          <ArrowRight className='w-4 h-4' />
          </div></Link>
        
         
          <div className='lg:flex lg:justify-between justify-between flex items-center lg:py- py-2 font-semibold text-center lg:w-[44px] w-[40px]'>
          
       
          <Pencil className='w-4 h-4 lg:w-4 lg:h-4' />
          
      
          <Trash2 className='lg:w-4 lg:h-4 w-4 h-4  lg:text-red-500' />
          </div>
        </div>
      </div>
       </div>
  );
};

export default BlogItem;






// // BlogItem.tsx
// import React from 'react';
// import Image from 'next/image';
// import { ArrowRight } from 'lucide-react';

// interface BlogItemProps {
//   title: string;
//   description: string;
//   category: string;
//   image: string; // Ensure this is a valid path or URL
// }

// const BlogItem: React.FC<BlogItemProps> = ({ title, description, category, image }) => {
//   return (
//     <div className='max-w-[330px] bg-white border border-black'>
//       <Image
//         src={image}
//         alt='Blog Image'
//         width={400}
//         height={400}
//         className='border-b border-black object-cover'
//       />
//       <p className='ml-5 mt-5 px-2 inline-block bg-black text-white text-sm'>{category}</p>
//       <div className='p-5'>
//         <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>
//           {title}
//         </h5>
//         <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
//         <div className='inline-flex items-center py-2 font-semibold text-center'>
//           <h3 className='mr-2'>Read more</h3>
//           <ArrowRight className='w-4 h-4' />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogItem;
