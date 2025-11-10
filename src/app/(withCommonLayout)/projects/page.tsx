import { getAllProject } from "@/app/utils/actions/projects";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "rfSetu | Projects",
   
  };

const ProjectsPage = () => {
   const projects=getAllProject()
   console.log(projects?.data)
    return (
        <div className="lg:max-w-[80%] lg:mx-auto my-20">
            <h2 className="text-center text-[30px] font-bold mb-4">All Projects</h2>
        <div className=" mt-10 "><div className="flex flex-col overflow-hidden  rounded shadow-md   sm:flex-row">
        {/*  <!-- Image --> */}
        <Image
            src="https://i.ibb.co.com/v4Z1k6GY/rf-Book-Nest.png"
            alt="card image"
            className="object-cover w-[40%] rounded-xl aspect-auto h-[300px]"
            width={400}
            height={400}
          />
        {/*  <!-- Body--> */}
        <div className="flex-1 px-6 sm:mx-6 sm:px-0">
         <div className="flex items-center justify-between mb-8">
         <h2 className="mb-2 text-xl font-bold ">rf Book Nest Project</h2>
         <div className=" flex items-center gap-4">
            <Link href='' className="text-[#a855f7] font-bold  underline underline-offset-4">Details</Link>
                <Link href='https://rf-book-nest-clint.vercel.app/' className="text-[#a855f7] font-bold  underline underline-offset-4">Live side</Link>
                <Link href='https://github.com/msetu1/b4-a4-rfBookNest-client' className="text-[#a855f7] font-bold  underline underline-offset-4 ">Client code </Link>
                <Link href='https://github.com/msetu1/b4a4-rfBookNest-server' className="text-[#a855f7] font-bold  underline underline-offset-4 ">Server code </Link>
            </div>
         </div>
        <p>

        </p>
          <p className="mt-4"><span className="text-lg  font-bold ">Technology:</span>
 
</p>
        </div>
            </div>
        </div>
        </div>
    );
};

export default ProjectsPage;