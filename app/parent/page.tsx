import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function Home() {

    return (
        <div className="flex h-screen">
            <div className="relative w-1/2 h-full overflow-hidden">
  <Image src="/Assets/Frame.png" alt="Frame" fill className="object-contain scale-y-125" />
<Image src="/Assets/logo.png" width={120} height={120} alt="logo" className="text-white absolute top-10 left-10"/>
  <div className="absolute items-center h-screen px-20  flex flex-col justify-center gap-3">
   <p className="text-white font-bold text-5xl  text-center">Welcome to Parent's Portal!</p>
          <p className="text-white opacity-75 italic font-normal text-2xl text-center">Please enter a phone number to receive OTP</p>
            <div className="absolute bottom-80 -right-20   py-60"><p className="text-black underline text-xl">Login</p></div>
  </div>
</div>
  <div className="ms-24 mt-56">
          <div className="flex flex-col gap-4 mb-10">
          <p className="text-black font-semibold text-5xl ">Sign In</p>
          <div className="bg-black w-16 h-1.5 rounded-lg"></div>
          </div>
            <p className="text-first text-xl">Please sign in  to access your campus  account</p>
            <div className="flex flex-col ">
                <div className="relative w-xl mt-14">
                <input 
                    type="tel" 
                    id="phoneNumber" 
                    className="w-full border border-input rounded-lg text-lg px-6 py-5 outline-none" 
                    placeholder="+250 _"/>
                <label htmlFor="phoneNumber" className="absolute left-4 -top-2 input-text text-md bg-white px-1" style={{color: '#1C1B1F'}}>
                    Phone Number
                </label>
                </div>

            </div>
        <Link href="/parent/OTP"><div className="flex items-center justify-center my-8">
            <Button className="font-semibold text-xl py-7 px-64 cursor-pointer">Send OTP</Button></div></Link>
            <p className="text-xl text-black text-center mb-6">Sign In with <Link href="/parent/password" className="text-blue-500">Password</Link></p>
             <p className="text-xl text-black">Don't have an account? <span className="text-blue-500"> Request for a Link</span></p>
    </div>

        </div>
    )
}