import { FC } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, url: "https://github.com/igorgomes12" },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/igor-gomes-77ba02129/",
  },
  { icon: <FaInstagram />, url: "https://www.instagram.com/igor_anjos9/" },
];
export const Social: FC = () => {
  return (
    <div className="flex gap-6">
      {socials.map((item, index: number) => {
        return (
          <a
            key={index}
            href={item.url}
            className="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            target="_blank"
            rel="noreferrer"
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};
