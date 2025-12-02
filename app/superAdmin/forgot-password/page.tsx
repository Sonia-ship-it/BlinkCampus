import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
export default function Home() {
  return (
    <div className="flex w-full h-screen">
                 <div className="relative w-1/2 h-full overflow-hidden">
       <Image src="/Assets/Frame.png" alt="Frame" fill className="object-contain scale-y-125" />
     <Image src="/Assets/logo.png" width={120} height={120} alt="logo" className="text-white absolute top-10 left-10"/>
       <div className="absolute items-center h-screen px-10  flex flex-col justify-center gap-3">
        <p className="text-white font-bold text-5xl  text-center">Welcome to Back Blink Campus!</p>
               <p className="text-white opacity-75 italic font-normal text-2xl text-center">Please sign in  to access your campus  account</p>
                 <div className="absolute bottom-80 -right-16   py-60"><p className="text-black underline text-xl">Login</p></div>
       </div>
     </div>
      
        <div className="ms-24 mt-56 ">
          <div className="flex flex-col gap-6 mb-10">
             <p className="text-xl flex items-center gap-2">
            <MdOutlineKeyboardArrowLeft className="size-8" />Back to Login</p>
          <p className="text-black font-semibold text-5xl">Forgot your Password?</p>
          </div>
            <p className="text-first text-xl">Don’t worry, happens to all of us. Enter your email below to <br /> recove your password</p>
            <div className="flex flex-col ">
                
                 <div className="relative w-xl mt-14">
                <input 
                    type="email" 
                    id="email" 
                    className="w-full border border-input rounded-lg text-lg px-6 py-5 outline-none" 
                    placeholder="johndoe@gmail.com"/>
                <label htmlFor="email" className="absolute left-4 -top-2 input-text text-md bg-white px-1" style={{color: '#1C1B1F'}}>
                    Email
                </label>
                </div>

            </div>
        <div className="flex items-center justify-center my-8">
            <Button className="font-semibold text-xl py-7 px-64">Submit</Button></div>
    </div>
    </div>
  );
}
