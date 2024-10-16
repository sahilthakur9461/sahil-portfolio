import Image from "next/image";

interface SkillCardProps {
    image: string;
    name: string;
}
export default function SkillCard({image, name} : SkillCardProps) {
    return(
        <div className="flex items-center justify-end flex-col gap-4">
            <Image alt="skill" src={`/skills/${image}`} className="object-cover " width={100} height={100}/> 
            <span>{name}</span>
        </div>
    )
}