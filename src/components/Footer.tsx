import React from 'react'
// import { Post } from '@/type/post'
import posts from '@/data/blogDats';
import Image from 'next/image'
import logo from '@/interfaces/logo.jpg'
import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <div className=' lg:w-full lg:flex lg:justify-around lg:items-center flex justify-between items-center  gap-2 sm:gap-0 sm:flex-row bg-black '>
      <Image src={logo} alt='' width={100} height={80}  className=' lg:bg-black'/>
      <p className='lg:text-center  lg:text-white text-white lg:block hidden'>
        All right reserved, Copyright @ndata</p>

        <p className='lg:text-center  lg:text-white lg:text-lg text-sm text-white lg:hidden block'>
        All right reserved, Copyright <br/> @ndata</p>
      <div className='lg:flex flex lg:justify-between justify-between lg:text-white text-white lg:mx-0 mx-3'>
          <div className='lg:w-[30px] w-30px lg:mr-1 mr-1 '>
          <Link href="https://facebook.com" target="_blank"><Facebook  className=''/></Link>
          </div>

          <div className='lg:w-[30px] w-30px lg:mr-1 mr-1'>
          <Link href="https://twitter.com/your_twitter_handle" target="_blank"><Twitter /> </Link>
          </div>

          <div className='lg:w-[30px] w-30px lg:mr-1 mr-1'>
          <Link href="https://linkedin.com" target="_blank"><Linkedin /></Link>
          </div>
        </div>

    </div>
  )
}

export default Footer
