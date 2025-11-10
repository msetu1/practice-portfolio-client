"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {signIn} from "next-auth/react"
const LoginPage = () => {
    return (
        <div className="flex items-center justify-center mt-[150px]">
           <div className="">
            <h2 className="text-4xl font-bold text-center">Welcome to <span className="text-[#15803d]">Back !!</span> </h2>
           <div className="mt-10 border p-10 border-gray-400 rounded-md">
           <p className="text-2xl font-bold mb-5 text-center">Login Here </p>
           <div className="flex items-center gap-5"><button className="border border-[#15803d] px-12 py-2 rounded-md hover:rounded-full"><FcGoogle className="text-4xl"/></button>
           <button
           onClick={()=>signIn("github",{
            callbackUrl:"http://localhost:3000/dashboard"
          })} 
           className="border border-[#15803d] px-12 py-2 rounded-md hover:rounded-full"><FaGithub className="text-4xl"/></button></div>
           </div>
           </div>
        </div>
    );
};

export default LoginPage;