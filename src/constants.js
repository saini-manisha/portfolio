//Skills Section logos 
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import cssLogo from './assets/tech_logo/css.png';
import figmaLogo from './assets/tech_logo/figmaLogo.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import htmlLogo from './assets/tech_logo/html.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Experience section logo

import accLogo from './assets/company_logo/acc_logo.png';

// Eduction section logo

import kukLogo from './assets/education_logo/Kurukshetra_University_logo.png';


export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Redux', logo: reduxLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
        ]
    },
    {
        title: "Languages",
        skills: [

            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'JavaScript', logo: javascriptLogo },


        ]
    },
    {
        titles: 'tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Netlify', logo: netlifyLogo },
            { name: 'Figma', logo: figmaLogo },
            {name:'Mysql',logo:mysqlLogo}
        ]
    }
];

export const experience = [
    {
        id: 0,

        img: accLogo,
        role: "Frontend Developer",
        company: "Accenture",
        date: "January 2024 - May 2025",
        desc: "Developed dynamic and scalable web applications using the Frontend stack,Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Git",
            "Tailwind CSS",
            "Redux",
        ],
    },

    {
        id: 1,
        img: accLogo,
        role: "Custom Software Engineer",
        company: "Accenture",
        date: "January 2022 - Dec 2023",
        desc: `pdated database records using SQL queries to maintain data accuracy. 
Resolved project codebase issues through debugging and troubleshooting,
 implementing necessary fixes. 
Collaborated with the support team to address and resolve client-reported
 problems `,
        skills: [
            "SQL",
            "DATABASE",
            "EMAIL",
            "DEBUGGING",
            "FRONTEND",
        ],
    }
]

