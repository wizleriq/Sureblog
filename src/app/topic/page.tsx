









"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/interfaces/logo.jpg'
import { GalleryThumbnails } from 'lucide-react'
import Footer from '@/components/Footer';

// const Page = () => {
  function Page () {
  // const [image, setImage ] = useState(false);
  const [isClick, setIsClicked] = useState(false)

  const handleClick =()=>{
  alert('Successful')
    
  }
  return (
    
    <section>
     <div className='lg:bg-gray-200 lg:py-5 bg-gray-200 py-5 md:px-12 lg:px-28'>
      <div className='lg:flex flex lg:justify-between justify-between lg:items-center items-center'>
      <Link href="/">
      <Image src={logo} alt='' width={100} height={100} className='w-[130px] sm:w-auto'/>
      </Link>
      <button className='flex items-center gap-2 font-medium py-1 px-3 lg:mr-0 mr-2 sm:py-3 sm:px-6 border-[2px] border-black shadow-[-7px_7px_0px_#000000]'>
            Add Blog
          </button>
        </div>        
    </div>
    <div className=' lg:py-5  py-5 md:px-12 lg:px-28 lg:justify-center  lg:items-center lg:mx-20 mx-3'>
    {/* <div className='lg:bg-gray-200 lg:py-5 bg-gray-200 py-5 md:px-12 lg:px-28'> */}
          <form className='lg:pt-5 lg:px-5 pt-12 '>
            <p className='text-2xl sm:text-2xl font-medium'>Upload Thumbnail</p>
            <label htmlFor='image'>
              {/* <Image src={} /> */}
              <GalleryThumbnails className='lg:w-[250px] lg:h-[400px] w-[140px] h-[250px] lg:justify-end lg:right-48' />
            </label>
            <input   type='file' id='image'  hidden required/>
            {/**/}
            <p className='lg:text-xl text-lg lg:mt-4 mt-3'>Blog Title</p>
            <input className='lg:w-full w-[390px] lg:mt-4 mt-3 lg:px-4 px-3 lg:py-3 py-3 border lg:outline-none outline-none' type='text' placeholder='Title' required />

            <p className='lg:text-xl text-lg lg:mt-4 mt-3'>Category</p>
            <input className='lg:w-full w-[390px] lg:mt-4 mt-3 lg:px-4 px-3 lg:py-3 py-3 border lg:outline-none outline-none' type='text' placeholder='Category' required />

            <p className='lg:text-xl text-lg lg:mt-4 mt-3'>Author</p>
            <input className='lg:w-full w-[390px] lg:mt-4 mt-3 lg:px-4 px-3 lg:py-3 py-3 border lg:outline-none outline-none' type='text' placeholder='Author' required />

            <p className='lg:text-xl text-lg lg:mt-4 mt-3'>Description</p>
            <textarea className='lg:w-full w-[390px] lg:mt-4 mt-3 lg:px-4 px-3 lg:py-3 py-3 border lg:outline-none outline-none' placeholder='Write content here' rows={6} required />
          </form>
          <div className='lg:mt-8 lg:mb-8 mb-5 mt-5 lg:item center lg:justify-center lg:text-center lg:flex flex item center justify-center ltext-center'>
          <button onClick={handleClick} className='lg:flex flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-[2px] border-black shadow-[-7px_7px_0px_#000000]'>
            Add Blog
          </button>
          </div>
         
          </div>
          <Footer />
      </section>
    
 
  )
}

export default Page
