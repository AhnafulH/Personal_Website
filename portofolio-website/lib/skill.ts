import cpp from '@/public/skills_logo/c.svg'
import c from '@/public/skills_logo/c-1.svg'
import python from '@/public/skills_logo/python.svg'
import js from '@/public/skills_logo/logo-javascript.svg'
import html from '@/public/skills_logo/html.svg'
import css from '@/public/skills_logo/css.svg'
import njs from '@/public/skills_logo/next.svg'
import react from '@/public/skills_logo/react.svg'
import sqlite from '@/public/skills_logo/sqlite.svg'
import twcss from '@/public/skills_logo/tailwind-css.svg'

import { IconType } from 'react-icons';
import { SiCplusplus, SiC, SiPython, SiJavascript, SiHtml5, SiCss3, SiNextdotjs, SiReact, SiSqlite, SiTailwindcss } from 'react-icons/si';
import { FaAws } from "react-icons/fa";

type Skill = {
    skill_name: string;
    icon: IconType;
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
        skill_name: "AWS",
        icon: FaAws,
    }
];

export { skill };