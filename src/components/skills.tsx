import { AiOutlineSwapRight } from "react-icons/ai";
import SkillCard from "./skill-card";
export default function Skills() {
    const skills = {
        ProgrammingLanguages: [
            { name: "JavaScript", image: "js.png" },
            { name: "HTML & CSS", image: "html-css.png" },
        ],
        Frameworks: [
            { name: "Next.Js", image: "nextjs.png" },
            { name: "Node.Js", image: "node.png" },
            { name: "Prisma", image: "prisma.png" },
            { name: "React", image: "react.png" },
            { name: "express", image: "ex.png" },
        ],
        Databases: [
            { name: "MySql", image: "mysql.png" },
            { name: "Postgresql", image: "postgresql.png" },
            { name: "Mongodb", image: "mongodb.png" },
        ],
        Tools: [
            { name: "Figma", image: "1706463199figma-logo-png.png" },
            { name: "Git", image: "git.png" },
            { name: "Github", image: "github.png" },
        ],
    };
    return (
        <div id="skill" className="w-full flex flex-col items-center ">
                <span className="text-5xl lg:text-[160px] text-same font-bold my-20">MY <span className="skill">SKILLS</span></span>

                {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="lg:w-3/4 w-full justify-center flex flex-col items-center  mb-8">
                        <h2 className="text-2xl font-bold my-10 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h2>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                            {skillList.map((data, index) => (
                                <SkillCard key={index} image={data.image} name={data.name} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
    )
}