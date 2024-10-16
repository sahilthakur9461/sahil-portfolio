import { BsArrowUpRight } from "react-icons/bs"; 
import Image from "next/image";
import ProjectCard from "./project-card";
import ProjectsCard from "./projects-card";

export default function Projects() {
  const projects = [
    {name:"Anime Design", tool:["#Figma"], image:["/projects/Group 1 (2).jpg"]},
    {name:"Nike Page",tool:["#Figma"], image:["/projects/Group 1.jpg"]},
    {name:"Pixel Ui",tool:["#Figma","#Google"], image:["/projects/Group 130.jpg"]},
    {name:"Spotify Ui", tool:["#Figma"], image:["/projects/Untitled (1).png"]},

  ]
  return (
    <div id="project" className="flex flex-col w-full items-center ">
      <span className="text-5xl lg:text-[160px] text-same my-20 font-bold">
        MY <span className="skill text-white">Projects</span>
      </span>
      <div className="mt-20 flex flex-col items-center">
      <span className="text-lg ml-4 lg:text-4xl w-full lg:w-5/6  font-semibold text-white"><span className="hidden sm:inline">Hover To </span><span className="inline sm:hidden">Let&apos;s </span>Look My Recent Project Gallery</span>
      <div className="flex flex-wrap w-full  items-center justify-center mt-20 gap-20">
      {projects.map((data, index)=>(
        <ProjectsCard key={index} name={data.name} tag={data.tool} images={data.image}/>
      ))}
      </div>
      </div>
    </div>
  );
}
