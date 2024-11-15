
import { IconType } from 'react-icons';
import { SiCplusplus, SiC, SiPython, SiJavascript, SiHtml5, SiCss3, SiNextdotjs, SiReact, SiSqlite, SiTailwindcss, SiBlackberry, SiJunit5 } from 'react-icons/si';
import { FaAws } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
type Skill = {
  skill_name: string;
  icon: IconType | string; // icon can be either a React icon type or an SVG string
};

const skill: Skill[] = [
  {
    skill_name: "C++",
    icon: SiCplusplus,
  },
  {
    skill_name: "C",
    icon: SiC,
  },
  {
    skill_name: "Python",
    icon: SiPython,
  },
  {
    skill_name: "Javascript",
    icon: SiJavascript,
  },
  {
    skill_name: "HTML",
    icon: SiHtml5,
  },
  {
    skill_name: "CSS",
    icon: SiCss3,
  },
  {
    skill_name: "Next JS",
    icon: SiNextdotjs,
  },
  {
    skill_name: "React",
    icon: SiReact,
  },
  {
    skill_name: "SQLite",
    icon: SiSqlite,
  },
  {
    skill_name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    skill_name: "QNX",
    icon: SiBlackberry,
  },
  {
    skill_name: "AWS",
    icon: FaAws,
  },
  {
    skill_name: "Firebase",
    icon: IoLogoFirebase,
  },
  {
    skill_name: "JUnit",
    icon: SiJunit5,
  },
];

export { skill };
