"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
export default function Home() {
      const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex w-full h-screen">
                 <div className="relative w-1/2 h-full overflow-hidden">
       <Image src="/Assets/Frame.png" alt="Frame" fill className="object-contain scale-y-125" />
     <Image src="/Assets/logo.png" width={120} height={120} alt="logo" className="text-white absolute top-10 left-10"/>
       <div className="absolute items-center h-screen px-18  flex flex-col justify-center gap-3">
        <p className="text-white font-bold text-5xl  text-center">Welcome to Teacher's Portal!</p>
               <p className="text-white opacity-75 italic font-normal text-2xl text-center">Please sign in  to access your campus  account</p>
                 <div className="absolute bottom-80 -right-16   py-60"><p className="text-black underline text-xl">Login</p></div>
       </div>
     </div>
      
        <div className="ms-24 mt-56 ">
          <div className="flex flex-col gap-6 mb-10">
             <Link href="/teacher"><p className="text-xl flex items-center gap-2">
            <MdOutlineKeyboardArrowLeft className="size-8" />Back to Login</p></Link>
          <p className="text-black font-semibold text-5xl">Verify OTP</p>
          </div>
            <p className="text-first text-xl mb-6">A unique OTP has been sent to your phone number.</p>
            <div className="flex flex-col">
                
                 <div className="relative w-xl mt-6">
                <input 
                    type={showPassword? "text":"password"} 
                    id="otp" 
                    className="w-full border border-input  rounded-lg text-lg px-4 py-5 outline-none" 
                    placeholder="7789BM6X"/>
                <label htmlFor="otp
                " className="absolute left-4 -top-2  text-md bg-white px-1" style={{color: '#1C1B1F'}}>
                    Enter OTP
                </label>
                           {showPassword ? ( 
                                  <IoEye className="size-7 absolute top-5 right-8" onClick={() => setShowPassword(!showPassword)} />) :  (<IoEyeOffSharp className="size-7 absolute top-5 right-8" onClick={() => setShowPassword(!showPassword)} />)
                                  }
                </div>
            </div>
             <p className="text-lg text-black my-8">Didn't receive OTP? <span className="text-blue-500"> Resend</span></p>
        <div className="flex items-center justify-center">
            <Button className="font-semibold text-xl py-7 px-64">Verify</Button></div>
    </div>
    </div>
  );
}
