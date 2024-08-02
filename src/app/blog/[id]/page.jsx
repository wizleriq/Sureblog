"use client";
import posts from '@/data/blogDats';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/interfaces/logo.jpg';
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Footer from '@/components/Footer';

function Page({ params }) {
  const [data, setData] = useState(null);

  const fetchBlogData = useCallback(() => {
    for (let i = 0; i < posts.length; i++) {
      if (Number(params.id) === posts[i].id) {
        setData(posts[i]);
        console.log(posts[i]);
        break;
      }
    }
  }, [params.id]);

  useEffect(() => {
    fetchBlogData();
  }, [params.id, fetchBlogData]);

  return (
    data ? (
      <>
        <div className='lg:bg-gray-200 lg:py-5 bg-gray-200 py-5 md:px-12 lg:px-28'>
          <div className='lg:flex flex lg:justify-between justify-between lg:items-center items-center'>
            <Link href="/">
              <Image src={logo} alt='Logo' width={100} height={100} className='w-[130px] sm:w-auto'/>
            </Link>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-[2px] border-black shadow-[-7px_7px_0px_#000000] lg:mr-0 mr-3'>
              Add Blog
            </button>
          </div>
          <div className='lg:text-center text-center lg:my-24 my-24 '>
            <h1 className='lg:text-3xl text-2xl lg:font-semibold font-semibold lg:max-w-[700px] mx-auto'>{data.title}</h1>
            <Image src={data.author_img} width={60} height={60} alt='Author' className='lg:rounded-full rounded-full lg:mx-auto mx-auto lg:mt-6 mt-6 border border-white'/>
            <p className='lg:mt-1 mt-1 lg:pb-2 pg-2 lg:text-lg text-base lg:max-w-[700px] max-w-[500px] lg:mx-auto mx-auto'>{data.author}</p>
          </div>
        </div>
        <div className='lg:max-w-[800px] max-w-[600px] lg:px-0 mx-3 md:mx-auto lg:mt-[-100px] mt-[-100px] lg:mb-10 mb-10'>
          <Image src={data.image} width={1280} height={720} alt='Blog Image' className='lg:border-4 border-4 border-white lg:border-white'/>
          <h1 className='lg:my-8 my-8 lg:text-[26px] text-[26px] lg:font-semibold capitalize'>Introduction:</h1>
          <p>{data.description}</p>
          <h3 className='lg:my-5 my-3 lg:text-[18px] lg:font-semibold font-medium'>Step 1: Self Reflection and Goal Setting</h3>
          <p className='lg:my-3'>Before you manage your lifestyle</p>
          <h3 className='lg:my-5 my-3 lg:text-[18px] lg:font-semibold font-medium'>Conclusion</h3>
          <p className='lg:my-3'>Managing your lifestyle is a journey</p>
          <div className='my-24'>
            <p className='lg:text-black text-black lg:font-semibold font-semibold lg:my-4 my-4'>Share this article on social media</p>
            <div className='lg:flex flex'>
              <div className='lg:w-[30px] w-30px lg:mr-1 mr-1'>
                <Link href="https://facebook.com" target="_blank"><Facebook className=''/></Link>
              </div>
              <div className='lg:w-[30px] w-30px lg:mr-1 mr-1'>
                <Link href="https://twitter.com/your_twitter_handle" target="_blank"><Twitter /> </Link>
              </div>
              <div className='lg:w-[30px] w-30px lg:mr-1 mr-1'>
                <Link href="https://linkedin.com" target="_blank"><Linkedin /></Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    ) : <></>
  );
}

export default Page;










// "use client";
// import posts from '@/data/blogDats';
// import { useSearchParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import logo from '@/interfaces/logo.jpg';
// import { Facebook, Twitter, Linkedin } from "lucide-react";
// import Footer from '@/components/Footer';

// function Page({ params }) {
//   const [data, setData] = useState(null);

//   const fetchBlogData = () => {
//     for (let i = 0; i < posts.length; i++) {
//       if (Number(params.id) === posts[i].id) {
//         setData(posts[i]);
//         console.log(posts[i]);
//         break;
//       }
//     }
//   };

//   useEffect(() => {
//     fetchBlogData();
//   }, [params.id]);

//   return (
//     data ? (
//       <>
//         <div className='lg:bg-gray-200 lg:py-5 bg-gray-200 py-5 md:px-12 lg:px-28'>
//           <div className='lg:flex flex lg:justify-between justify-between lg:items-center items-center'>
//             <Link href="/">
//               <Image src={logo} alt='Logo' width={100} height={100} className='w-[130px] sm:w-auto'/>
//             </Link>
//             <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-[2px] border-black shadow-[-7px_7px_0px_#000000] lg:mr-0 mr-3'>
//               Add Blog
//             </button>
//           </div>
//           <div className='lg:text-center text-center lg:my-24 my-24 '>
//             <h1 className='lg:text-3xl text-2xl lg:font-semibold font-semibold lg:max-w-[700px] mx-auto'>{data.title}</h1>
//             <Image src={data.author_img} width={60} height={60} alt='Author' className='lg:rounded-full rounded-full lg:mx-auto mx-auto lg:mt-6 mt-6 border border-white'/>
//             <p className='lg:mt-1 mt-1 lg:pb-2 pg-2 lg:text-lg text-base lg:max-w-[700px] max-w-[500px] lg:mx-auto mx-auto'>{data.author}</p>
//           </div>
//         </div>
//         <div className='lg:max-w-[800px] max-w-[600px] lg:px-0 mx-3 md:mx-auto lg:mt-[-100px] mt-[-100px] lg:mb-10 mb-10'>
//           <Image src={data.image} width={1280} height={720} alt='Blog Image' className='lg:border-4 border-4 border-white lg:border-white'/>
//           <h1 className='lg:my-8 my-8 lg:text-[26px] text-[26px] lg:font-semibold capitalize'>Introduction:</h1>
//           <p>{data.description}</p>
//           {/* Ensure the content is correctly displayed */}
//           <h3 className='lg:my-5 my-3 lg:text-[18px] lg:font-semibold font-medium'>Step 1: Self Reflection and Goal Setting</h3>
//           <p className='lg:my-3'>Before you manage your lifestyle</p>
//           {/* Repeat the content as needed */}
//           <h3 className='lg:my-5 my-3 lg:text-[18px] lg:font-semibold font-medium'>Conclusion</h3>
//           <p className='lg:my-3'>Managing your lifestyle is a journey</p>
//           <div className='my-24'>
//             <p className='lg:text-black text-black lg:font-semibold font-semibold lg:my-4 my-4'>Share this article on social media</p>
//             <div className='lg:flex flex'>
//               <div className='lg:w-[30px] w-30px lg:mr-1 mr-1'>
//                 <Link href="https://facebook.com" target="_blank"><Facebook className=''/></Link>
//               </div>
//               <div className='lg:w-[30px] w-30px lg:mr-1 mr-1'>
//                 <Link href="https://twitter.com/your_twitter_handle" target="_blank"><Twitter /> </Link>
//               </div>
//               <div className='lg:w-[30px] w-30px lg:mr-1 mr-1'>
//                 <Link href="https://linkedin.com" target="_blank"><Linkedin /></Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </>
//     ) : <></>
//   );
// }

// export default Page;







// "use client"
// import posts from '@/data/blogDats';
// import { useSearchParams } from 'next/navigation'
// import React, { useEffect, useState } from 'react'
// import Image from 'next/image';
// import Link from 'next/link';
// import logo from '@/interfaces/logo.jpg'
// // import logo from '@/interfaces/logo.jpg'
// import { Facebook, Twitter, Linkedin } from "lucide-react"
// import Footer from '@/components/Footer';

// function Page  ({ params }) {

//   // const [data, setData] = useState(null);
//   const [data, setData] = useState(false);

//   const fetchBlogData = () => {
//     for (let i = 0; i < posts.length; i++) {
//       if (Number(params.id) === posts[i].id) {
//         setData(posts[i]);
//         console.log(posts[i]);
//         break;
//       }
//     }
//   }
//   useEffect(() => {
//     fetchBlogData();
//   }, [params.id]);
//   // useEffect(() => {
//   //   fetchBlogData();
//   // }, []);
//   return (data?<>

//     <div className='lg:bg-gray-200 lg:py-5 bg-gray-200 py-5 md:px-12 lg:px-28'>
//       <div className='lg:flex flex lg:justify-between justify-between lg:items-center items-center'>
//       <Link href="/">
//       <Image src={logo} alt='' width={100} height={100} className='w-[130px] sm:w-auto'/>
//       </Link>
//       <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-[2px] border-black shadow-[-7px_7px_0px_#000000] lg:mr-0 mr-3'>
//             Add Blog
//           </button>
//         </div>  
//         <div className='lg:text-center text-center lg:my-24 my-24 '>

//           <h1 className='lg:text-3xl  text-2xl  lg:font-semibold font-semibold lg:max-w-[700px] mx-auto'>{data.title}</h1>

//           <Image src={data. author_img} width={60} height={60} alt='' className='lg:rounded-full rounded-full lg:mx- mx-auto lg:mt-6 mt-6 border border-white'/>

//           <p className='lg:mt-1 mt-1 lg:pb-2 pg-2 lg:text-lg text-base lg:max-w-[700px] max-w-[500px] lg:mx-auto mx-auto'>{data.author}</p>
//         </div>
//     </div>
//     <div className='lg:max-w-[800px] max-w-[600px]  lg:px-0 mx-3 md:mx-auto lg:mt-[-100px] mt-[-100px]  lg:mb-10 mb-10'>
//       <Image src={data.image} width={1280} height={720} alt='' className='lg:border-4 border-4 border-white lg:border-white'/>
//       <h1 className='lg:my-8 my-8 lg:text-[26px] text-[26px] lg:font-semibold capitalize'>introduction:</h1>
//       <p>{data.description}</p>
//       <h3 className='lg:my-5 my-3 lg:text-[18px] lg:font-semibold font-medium'>Step 1: Self Reflection and Goal Setting</h3>
//       <p className='lg:my-3'>Before you manage your lifestyle</p>
//       <p className='lg:my-3'>Before you manage your lifestyle</p>

//       <h3 className='lg:my-5 my-3 lg:text-[18px] lg:font-semibold font-medium'>Step 1: Self Reflection and Goal Setting</h3>
//       <p className='lg:my-3'>Before you manage your lifestyle</p>
//       <p className='lg:my-3'>Before you manage your lifestyle</p>

//       <h3 className='lg:my-5 my-3 lg:text-[18px] lg:font-semibold font-medium'>Step 1: Self Reflection and Goal Setting</h3>
//       <p className='lg:my-3'>Before you manage your lifestyle</p>
//       <p className='lg:my-3'>Before you manage your lifestyle</p>

//       <h3 className='lg:my-5 my-3 lg:text-[18px] lg:font-semibold font-medium'>Conclusion</h3>
//       <p className='lg:my-3'>Managing your lifestyle is a journey</p>
//       <div className='my-24'>
//         <p className='lg:text-black text-black lg:font-semibold font-semibold lg:my-4 my-4'>Share this article on social media</p>
//         <div className='lg:flex flex'>
//           <div className='lg:w-[30px] w-30px lg:mr-1 mr-1'>
//           <Link href="https://facebook.com" target="_blank"><Facebook  className=''/></Link>
//           </div>

//           <div className='lg:w-[30px] w-30px lg:mr-1 mr-1'>
//           <Link href="https://twitter.com/your_twitter_handle" target="_blank"><Twitter /> </Link>
//           </div>

//           <div className='lg:w-[30px] w-30px lg:mr-1 mr-1'>
//           <Link href="https://linkedin.com" target="_blank"><Linkedin /></Link>
//           </div>
//         </div>

//       </div>
//     </div>
//     <Footer />
//     </>:<></>
//   )
// }

// export default Page




// "use client"

// import posts from '@/data/blogDats';
// import { useEffect, useState } from 'react';

// const Page = ({ params }) => {
//   const [data, setData] = useState(null);

//   const fetchBlogData = () => {
//     for (let i = 0; i < posts.length; i++) {
//       if (Number(params.id) === posts[i].id) {
//         setData(posts[i]);
//         console.log(posts[i]); // This will log the post with the matching id
//       }
//     }
//   };

//   useEffect(() => {
//     fetchBlogData();
//   }, [params.id]); // This will call fetchBlogData whenever params.id changes

//   return (
//     <div>
//       {data ? (
//         <>
//           <h1>{data.title}</h1>
//           <p>{data.description}</p>
//           {/* Render other properties as needed */}
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Page;
