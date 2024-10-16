import { AiOutlineSwapRight } from "react-icons/ai";

export default function About() {
    return (
        <div id="about" className="flex w-full flex-col items-center ">
            <div className="w-2/3 mb-8">
                <span className="flex items-center text-same text-2xl"><AiOutlineSwapRight size={50} /> About</span>
                <span className="text-white text-sm lg:text-lg">
                    I&apos;m a passionate software developer and freelancer with a strong foundation in app and web development. With experience in modern technologies like Flutter, Next.js, and Node.js, I enjoy creating innovative solutions that blend functionality with user-centric design. Whether building mobile apps, crafting responsive web applications, or exploring new tech trends, I&apos;m driven by the excitement of turning ideas into reality. My journey in coding started with Python, and I&apos;ve since honed my skills across various platforms, continuously learning and evolving in this dynamic field. As a freelancer, I&apos;ve had the opportunity to work on diverse projects, collaborating with clients to deliver customized solutions that meet their unique needs. Currently, I&apos;m focused on expanding my expertise in native Android and iOS development while working on personal projects that push the boundaries of creativity and technology.
                </span>
            </div>
            
        </div>
    );
}
