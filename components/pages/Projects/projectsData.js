import pf1 from '../../assets/images/pf-1.jpg';
import furniture from '../../assets/images/furniture.jpg';
import snowboards from '../../assets/images/sb.jpg';
import calculator from '../../assets/images/calculator.jpg';
import quiz from '../../assets/images/quiz.jpg';
import algolab from '../../assets/images/algolab.jpg';
import nitroMenu from '../../assets/images/nitroMenu.png';

export const projectsData = [
    {
        id: 1,
        title: "first portfolio",
        category: "other",
        path: "https://joakimwretlind.netlify.app/",
        desc: "The title says it all. This was my first portfolio.",
        tech: "HTML, SCSS, JavaScript",
        image: pf1
    },
    {
        id: 2,
        title: "acme furniture",
        category: "big",
        path: "https://acmefurniture.netlify.app/",
        desc: "A shopping app with some 3D features.",
        tech: "HTML, SCSS, JavaScript",
        image: furniture
    },
    {
        id: 4,
        title: "snowboards",
        category: "small",
        path: "https://snowboards-2021.netlify.app/",
        desc: "A list of items with some functions. For this I created an external API to hold the information.",
        tech: "React, Styled-Components",
        image: snowboards
    },
    {
        id: 5,
        title: "theme calculator",
        category: "small",
        path: "https://theme-calculator.netlify.app/",
        desc: "This one lets you select a theme for your calculator using localStorage.",
        tech: "React, Styled-Components",
        image: calculator
    },
    {
        id: 6,
        title: "quiz",
        category: "small",
        path: "https://jw-codequiz.netlify.app/",
        desc: "A multiselection quiz-app to learn about programming.",
        tech: "React, Styled-Components",
        image: quiz
    },
    {
        id: 7,
        title: "algolab",
        category: "big",
        path: "https://algolab.netlify.app/",
        desc: "A bigger app to help people learn about algorithms and datastructures.",
        tech: "React, Styled-Components",
        image: algolab
    },
    {
        id: 8,
        title: "nitro-menu",
        category: "small",
        path: "https://nitro-menu.netlify.app/",
        desc: "Watch all items or pick a category and watch only the items in that category.",
        tech: "React, Styled-Components",
        image: nitroMenu
    },
]