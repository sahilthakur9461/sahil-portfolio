import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

export default function ProjectCard() {
    return(
        <div className="flex items-center my-10 gap-5">
        <div className="gap-8 flex flex-col">
            <p className="text-4xl">01</p>
            <p className="text-3xl">Geo Route</p>
        </div>
        <div className="relative  w-80 h-80">
            <Image alt="project" src={"/skills/flutter.png"} fill/>
        </div>
        <span className="w-2/4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum dolor id nesciunt sint soluta voluptatem blanditiis est consequuntur! Expedita illum sapiente tempore hic obcaecati nam doloremque blanditiis nostrum magnam at.</span>
        <div className="border-2 rounded-full w-20 h-20 hover:text-same  hover:border-[#ffc86a] flex items-center hover:rotate-45 transition justify-center hover:cursor-pointer">
            <BsArrowUpRight size={40} className=""/>
        </div>

      </div>
    )
}