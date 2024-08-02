'use client';
import React from 'react';
import Image from 'next/image';
import blogDats from '@/data/blogDats';
import Link from 'next/link';
import logo from '@/interfaces/logo.jpg'


const Header: React.FC = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='lg:flex lg:justify-between flex justify-between lg:items-center items-center'>
        <div className='flex justify-between lg:flex lg:justify-between'>
          <div>
            {/* <Image src={blogDats[0].image} alt='' width={100} height={100} className='w-[130px] sm:w-auto'/> */}
            <Image src={logo} alt='' width={100} height={100} className='w-[130px] sm:w-auto'/>
          </div>
        </div>
        {/* <Link href="/about">
        <div>
          <h3>me</h3>
        </div>
        </Link>
    */}
        <Link href="/topic">
          <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-[2px] border-black shadow-[-7px_7px_0px_#000000]'>
            {/* Add Blog */}
            Get Started
          </button>
        </Link>
      </div>
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Welcome</p>
        <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
          <input type="email" placeholder='Enter your email' className='pl-4 outline-none '/>
          <button className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Header;





// 'use client'
// import React from 'react';
// import Image from 'next/image';
// // import posts from '@/date/posts';
// import blogDats  from '@/data/blogDats'
// import posts from '@/data/blogDats';
// import Link from 'next/link';
// import add from '@/components/add'

// const Header: React.FC = () => {
//   return (
//     <div className='py-5 px-5 md:px-12 lg:px-28'>
//       <div className='lg:flex lg:justify-between lg:items-center flex justify-center items-center'>
//         <div className='flex justify-between lg:flex lg:justify-between'>
//           <div>
//           <Image src={posts[0].image} alt='' width={100} height={100} className='w-[130px] sm:w-auto'/>
//           </div>
//           {/* <div>
//             Blogger
//           </div> */}

//         </div>
    
//           <link rel="stylesheet" href="/AddTopic"> <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-[2px] border-black shadow-[-7px_7px_0px_#000000] '>
//           Add Blog
//         </button> </link>
      
//         {/* <Link href="/about">Go to About Page</Link> */}

//         {/* <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-[2px] border-black shadow-[-7px_7px_0px_#000000] '>
//           Get Started  
//         </button> */}
//       </div>
//       <div className='text-center my-8'>
//         <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
//         <p className='mt-10 mx-w-[74px] m-auto text-xs sm:text-base'>welcome</p>
//         <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
//           <input type="email" placeholder='enter your email' className='pl-4 outline-none '/>
//           <button className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Header;















// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/interfaces/assets';
// // import { assetsData } from '@/data/AssetsData';
// import picnine from '@/Assets/picnine.jpg'

// const Header = () => {
//   return (
//     <div className='py-5 px-5 md:px-12 lg:px-28'>
//       <div className='lg:flex lg:justify-between lg:items-center flex justify-center items-center'>
//       {/* <Image src={picnine} alt='' width={180} className='w-[130px] sm:w-auto'/> */}
//       blogger
//         <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-[2px] border-black shadow-[-7px_7px_0px_#000000] '>
//           Get Started  
//         </button>
//       </div>
//       <div className='text-center my-8'>
//         <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
//         <p className='mt-10 mx-w-[74px] m-auto text-xs sm:text-base'>welcome</p>
//         <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
//           <input  type="email" placeholder='enter your email' className='pl-4 outline-none '/>
//           <button type="submit" className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe
//           </button>

//         </form>
//       </div>
      
//     </div>
//   )
// }

// export default Header

