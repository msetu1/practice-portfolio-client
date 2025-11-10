"use client"
import { Typewriter } from "react-simple-typewriter";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
const Introduction = () => {
    return (
        <div>
             <div className=" lg:max-w-[80%] lg:mx-auto mt-20">
                <div>
                <h2 className="text-2xl font-semibold mb-5">Hello !!</h2>

                <div className="flex gap-2">
                    <p className="text-[30px] font-bold">I am </p>
                    <div
                    style={{
                        fontSize: "30px",
                        textAlign: "center",
                        color: "#15803d",
                        fontWeight: "bold",
                    }}
                    >
                    <Typewriter
                        words={[
                        "MERN Stack Developer",
                        "Front end Developer",
                        "React Developer",
                        ]}
                        loop={5}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    </div>
                </div>
                <p className=" my-4 max-w-[600px]">
                    I am a MERN Stack web developer with expertise in creating
                    attractive, user-friendly websites. Specializing in clean,
                    responsive designs using HTML, CSS, Tailwind, JavaScript, and React.
                    Proficient in Node.js, and MongoDB. Eager to enhance your team –
                    let's connect! Email me or use the provided information.
                </p>
                <div className="flex gap-5">
                <a href="/setu-resume/st-setu-resume.pdf" download>
        <button className="flex items-center gap-2 border-2 border-[#15803d] px-2 py-2 rounded-md">
            <MdOutlineFileDownload /> My resume
        </button>
    </a>
                </div>
                <div className="flex mt-6 gap-4">
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
            </div>
        </div>
    );
};

export default Introduction;