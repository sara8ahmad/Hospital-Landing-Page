import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import Link from 'next/link';

 
const Banner = () => {
  return (
   <div className=' hidden border-solid md:block border-gray-400 border-opacity-50 border-b-[0.2px] w-full px-12 pb-3'>
    <div className="bg-transparent  flex flex-col items-center justify-between mx-auto sm:flex-row">
       
        <div className="text-sm text-white flex gap-2 items-center dark:text-gray-300"><FaSquarePhone/>+20-106-731-7553</div>
        <div className="text-sm flex gap-2 text-white items-center dark:text-gray-300"><MdEmail/>info@example.com </div>


        <div className="flex -mx-2">
            <Link href="https://www.facebook.com/hossameldin.ahmed.1" className="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400" aria-label="Reddit">
                <FaSquareFacebook />
            </Link>

            <Link href="https:// eg.linkedin.com/in/hossam-el-din-ahmed-530953168" className="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                <FaLinkedin />
            </Link>

            <Link href="#" className="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                <FaSquareTwitter />
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Banner