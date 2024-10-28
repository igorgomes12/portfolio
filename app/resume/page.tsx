"use client";
// import {
//   FaHtml5,
//   FaCss3,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaGithub,
//   FaFigma,
// } from "react-icons/fa";
// import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// const about = {
//   title: "About me",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur, id est impedit dignissimos et corporis",
//   info: [
//     { fielName: "Nome", fieldValue: "Igor Gomes" },
//     { fielName: "Telefone", fieldValue: "(+55) 31 9 9400-2300" },
//     { fielName: "Experiência", fieldValue: "4+ Years" },
//     { fielName: "Nacionalidade", fieldValue: "Brasileiro" },
//     { fielName: "Email", fieldValue: "igorgomesigla@gmail.com" },
//     { fielName: "Freelance", fieldValue: "Disponível" },
//     {
//       fielName: "Linguagens",
//       fieldValue: "Português, Espanhol, Inglês intermediario",
//     },
//   ],
// };
const experience = {
  icon: "/assests/assets/resume/badge.svg",
  title: "Experiência",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur, id est impedit dignissimos et corporis",
  items: [
    {
      company: "Lider Automação",
      duration: "2024 - Atual",
      position: "Full Stack Developer",
      responsibilities: [
        "Desenvolvimento de aplicações web",
        "Desenvolvimento de APIs RESTful",
        "Desenvolvimento Backend com NodeJS",
        "Desenvolvimento Backend com Nestjs",
        "Desenvolvimento de frontend com React",
        "Desenvolvimento de frontend com Next.js",
        "Utilização de ferramentas de versionamento (Git)",
        "Utilização de ferramentas de build (Webpack, Babel)",
        "Utilização de ferramentas de teste (Jest, React Testing Library)",
        "Utilização de ferramentas de CI/CD (Github Actions)",
        "Utilização de ferramentas de estilo (Tailwind CSS)",
        "Utilização de ferramentas de framework (React, Next.js)",
      ],
    },
    {
      company: "TW Directions LTDA",
      duration: "2022 - 2024",
      position: "Desenvolvedor Frontend",
      responsibilities: [
        "Desenvolvimento de aplicações web",
        "Desenvolvimento de APIs RESTful",
        "Desenvolvimento de frontend com React",
        "Desenvolvimento de frontend com Next.js",
        "Utilização de ferramentas de versionamento (Git)",
        "Utilização de ferramentas de build (Webpack, Babel)",
        "Utilização de ferramentas de teste (Jest, React Testing Library)",
        "Utilização de ferramentas de CI/CD (Github Actions)",
        "Utilização de ferramentas de estilo (Tailwind CSS)",
        "Utilização de ferramentas de framework (React, Next.js)",
      ],
    },
    {
      company: "Capys LTDA",
      duration: "2022 - 2022",
      position: "Desenvolvedor Frontend",
      responsibilities: [
        "Desenvolvimento de aplicações web",
        "Desenvolvimento de APIs RESTful",
        "Desenvolvimento de frontend com React",
        "Utilização de ferramentas de versionamento (Git)",
      ],
    },
    {
      company: "Força Aerea Brasileira",
      duration: "2014 - 2022",
      position: "Militar",
      responsibilities: [
        "Desenvolvimento de aplicações web",
        "Desenvolvimento de APIs RESTful",
        "Desenvolvimento de frontend com React",
      ],
    },
  ],
};

// const education = {
//   icon: "/assests/assets/resume/cap.svg",
//   title: "Educação",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur, id est impedit dignissimos et corporis",
//   items: [
//     {
//       institution: "Universidade Estácio",
//       degree: "Analise e desenvolvimento de sistemas",
//       duration: "2022 - 2025",
//     },
//     {
//       institution: "Rocketseat Academy",
//       degree: "Cursos",
//       duration: "2022 - Atual",
//     },
//     {
//       institution: "Alura",
//       degree: "Cursos",
//       duration: "2022 - Atual",
//     },
//   ],
// };

// const skills = {
//   title: "Habilidades",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur, id est impedit dignissimos et corporis",
//   skillList: [
//     {
//       icon: FaHtml5,
//       name: "HTML5",
//       level: "Experiência Avançada",
//     },
//     {
//       icon: FaCss3,
//       name: "Css 3",
//       level: "Experiência Avançada",
//     },
//     {
//       icon: FaJs,
//       name: "Javascript",
//       level: "Experiência Avançada",
//     },
//     {
//       icon: FaReact,
//       name: "React.js",
//       level: "Experiência Avançada",
//     },
//     {
//       icon: FaNodeJs,
//       name: "Node.js",
//       level: "Experiência Avançada",
//     },
//     {
//       icon: FaGithub,
//       name: "Git",
//       level: "Experiência Avançada",
//     },
//     {
//       icon: FaFigma,
//       name: "Figma",
//       level: "Experiência Intermediária",
//     },
//     {
//       icon: SiTailwindcss,
//       name: "Tailwind CSS",
//       level: "Experiência Avançada",
//     },
//     {
//       icon: SiNextdotjs,
//       name: "Next.js",
//       level: "Experiência Avançada",
//     },
//   ],
// };

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: "easeIn", delay: 2.4 },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skill">Skills</TabsTrigger>
            <TabsTrigger value="about">Sobre</TabsTrigger>
          </TabsList>
          <div className=" min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, i: number) => {
                      return (
                        <li
                          key={i}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[360px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className=" text-white/60 ">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              Educação
            </TabsContent>
            <TabsContent value="skill" className="w-full">
              Skill
            </TabsContent>
            <TabsContent value="about" className="w-full">
              Sobre
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
