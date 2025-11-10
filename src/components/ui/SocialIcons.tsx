import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
    return (
        <div >
           <div className="flex gap-4">
                               <div className="bg-slate-700 rounded-full p-3 shadow-lg hover:bg-green-600 ">
                               <a href="https://www.facebook.com/profile.php?id=100093013625415">
                                   {" "}
                                   <FaFacebookF className=" hover:text-white text-primary-content text-2xl  " />
                               </a>
                               </div>
                               <div className="bg-slate-700 rounded-full p-3 shadow-lg hover:bg-green-600">
                               <a href="https://github.com/msetu1">
                                   {" "}
                                   <FaGithub className="hover:text-white text-primary-content text-2xl  " />
                               </a>
                               </div>
                               <div className="bg-slate-700 rounded-full p-3 shadow-lg hover:bg-green-600">
                               <a href="https://www.linkedin.com/feed/">
                                   {" "}
                                   <FaLinkedin className="hover:text-white text-primary-content text-2xl  " />
                               </a>
                               </div>
                           </div>
        </div>
    );
};

export default SocialIcons;