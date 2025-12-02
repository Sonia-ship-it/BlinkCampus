import Image from "next/image";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiParentFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { IoIosPerson } from "react-icons/io";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-white flex w-full h-screen">
        <div className="relative w-1/2 h-full overflow-hidden">
              <Image src="/Assets/Frame.png" alt="Frame" fill className="object-contain scale-y-125" />
            <Image src="/Assets/logo.png" width={120} height={120} alt="logo" className="text-white absolute top-10 left-10"/>
              <div className="absolute items-center h-screen px-12  flex flex-col justify-center gap-3">
               <p className="text-white font-bold text-5xl  text-center">Welcome Back to Blink campus!</p>
                      <p className="text-white opacity-75 italic font-normal text-2xl text-center">Please sign in  to access your campus  account</p>
                        <div className="absolute bottom-80 -right-16   py-60"><p className="text-black underline text-xl">Login</p></div>
              </div>
            </div>
      
        <div className="ms-24 mt-56 ">
          <div className="flex flex-col gap-4 mb-10">
          <p className="text-black font-semibold text-5xl ">Sign In</p>
          <div className="bg-black w-16 h-1.5 rounded-lg"></div>
          </div>
            <p className="text-first text-xl mb-6">Please select your profile  to access your campus  account</p>
            <p className="text-xl">Login as: </p>

  
            <div className="my-14 flex flex-col gap-4 mx-6">
              <Link href="/student">
              <p className="text-xl flex items-center gap-3 text-black hover:text-white cursor-pointer hover:bg-black py-3 rounded-lg">
                <MdOutlineKeyboardArrowRight className="size-8" />
                  <PiStudentFill className="size-8" />
                Student
              </p></Link>

                <Link href="/teacher"><p className="text-xl flex items-center gap-3 text-black hover:text-white cursor-pointer hover:bg-black py-3 rounded-lg">
                <MdOutlineKeyboardArrowRight className="size-8" />
                <GiTeacher className="size-8" />
                  Teacher
              </p></Link>  

                  <Link href="/parent"><p className="text-xl flex items-center gap-3 text-black hover:text-white cursor-pointer hover:bg-black py-3 rounded-lg">
                <MdOutlineKeyboardArrowRight className="size-8" />
               <RiParentFill className="size-8" />
                  Parent
              </p></Link>  

                  <Link href="/schoolAdmin"><p className="text-xl flex items-center gap-3 text-black hover:text-white cursor-pointer hover:bg-black py-3 rounded-lg">
                <MdOutlineKeyboardArrowRight className="size-8" />
                  <IoIosPerson className="size-8" />
                  Admin
              </p></Link>  

            </div>

        </div>

    </div>
  );
}
