"use client"
import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="flex h-screen">
            <div className="relative w-1/2 h-full hidden lg:block overflow-hidden">
  <Image src="/Assets/Frame.png" alt="Frame" fill className="object-contain scale-y-125" />
<Image src="/Assets/logo.png" width={120} height={120} alt="logo" className="text-white absolute top-10 left-10"/>
  <div className="absolute items-center h-screen px-20  flex flex-col justify-center gap-3">
   <p className="text-white font-bold text-5xl  text-center">Welcome to Student's Portal!</p>
          <p className="text-white opacity-75 italic font-normal text-2xl text-center">Please sign in  to access your campus  account</p>
            <div className="absolute bottom-80 -right-14   py-60"><p className="text-black underline text-xl">Login</p></div>
  </div>
</div>
  <div className="lg:ms-24 lg:mt-48 lg:block flex flex-col justify-center">
          <div className="flex flex-col lg:gap-4 gap-2 mb-10 mx-4">
          <p className="text-black font-semibold lg:text-5xl text-4xl">Sign In</p>
          <div className="bg-black w-16 h-1.5 rounded-lg"></div>
          </div>
            <p className="text-first text-lg lg:text-xl mx-4">Please sign in  to access your campus  account</p>
            <div className="flex flex-col mx-4">
                <div className="relative w-sm lg:w-xl mt-20">
                <input 
                    type="text" 
                    id="schoolName" 
                    className="w-full border border-input rounded-lg text-md lg:text-lg px-6 py-3 lg:py-5 outline-none" 
                    placeholder="College of Werthmore"/>
                <label htmlFor="phoneNumber" className="absolute left-4 -top-2 input-text text-md bg-white px-1" style={{color: '#1C1B1F'}}>
                    School Name
                </label>
                </div>

                <div className="relative w-sm lg:w-xl mt-6">
                <input 
                    type="text" 
                    id="studentID" 
                    className="w-full border border-input rounded-lg text-md lg:text-lg px-6 py-3 lg:py-5 outline-none" 
                    placeholder="Student ID"/>
                <label htmlFor="phoneNumber" className="absolute left-4 -top-2 input-text text-md bg-white px-1" style={{color: '#1C1B1F'}}>
                    Student ID
                </label>
                </div>

                <div className="relative w-sm lg:w-xl mt-6">
                <input 
                    type={showPassword? "text":"password"} 
                    inputMode="numeric"
                    id="password" 
                    className="w-full border border-input  rounded-lg text-md lg:text-lg px-6 py-3 lg:py-5 outline-none" 
                    placeholder="_ _ _ _ _ _"/>
                <label htmlFor="pin" className="absolute left-4 -top-2 input-text text-md bg-white px-1" style={{color: '#1C1B1F'}}>
                    PIN
                </label>
                  {showPassword ? ( 
                  <IoEye className="size-7 absolute top-3 lg:top-5 right-4 lg:right-8" onClick={() => setShowPassword(!showPassword)} />) :  (<IoEyeOffSharp className="size-7 absolute top-3 lg:top-5 right-4 lg:right-8" onClick={() => setShowPassword(!showPassword)} />)
                  }
                  
                </div>
            </div>
    
        <div className="flex items-center justify-center my-10">
            <Button className="font-semibold text-xl py-7 px-40 lg:px-64">Sign In</Button></div>
            <p className="text-xl text-black text-center">Sign In with <Link href="/student/password" className="text-blue-500">Password</Link></p>
    </div>

        </div>
    )
}