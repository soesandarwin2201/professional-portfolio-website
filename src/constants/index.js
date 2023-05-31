import web from '../assets/web.png';
import backend from '../assets/backend.png'
import mobile from '../assets/mobile.png'
import creator from '../assets/creator.png'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
 
export const navLinks = [
     {
       id: "about",
       title: "About",
     },
     {
       id: "projects",
       title: "Projects",
     },
     {
       id: "contact",
       title: "Contact",
     },
   ];


export const services = [
    {
      title: "FrontEnd Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
     title: "UI/UX Designer",
     icon: mobile,
   },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];

 export const projects = [
    {
        image: project1,
        live: "https://kismoilov.github.io/JS-Capstone-Project/",
        source: "https://github.com/KIsmoilov/JS-Capstone-Project",
        title: "Food Recipe",
        description:
         "The app allows the user to see various kinds of meal categories with the functionalities of like and comment features. The MEALDB API has been used to provide meal category data for our Food App",
       tags: [
         {
           name: "javascript",
           color: "blue-text-gradient",
         },
         {
           name: "html",
           color: "green-text-gradient",
         },
         {
           name: "css",
           color: "pink-text-gradient",
         },
       ],
    },
    {
      image: project2,
      title: "Bugs Gallery for children education",
      description:
        "A comprehensive Bugs Gallery for children education that allows users to teach kids to learn about the bug species and its ability, natures, search for  popular species.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
    },
    {
      title: "Portfolio Landing Page",
      image: project3,
      live: "https://soesandarwin2201.github.io/portfolio-website-soesandarwin2201.github.io/",
      source: "https://github.com/soesandarwin2201/Portfolio_website",
      name: "Portfolio Landing Page",
      description:
        "A comprehensive landing page for  developers to show off the skills. that allows users to see the projects, about the author, and see the experience, and can contact the author to hire.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "group project",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
    },
    {
      title: "Leader Board",
      image: project4,
      live: "https://soesandarwin2201.github.io/LeaderBoard-project/",
      source: "https://github.com/soesandarwin2201/LeaderBoard-project",
      description:
        "Leader Board is the app for game user to keep track of their team score and their own score.User can add the name and score ",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "group project",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
    },
]
export const experiences = [
  {
    title: "Content Creator",
    company_name: "Guide with Mahuyar",
    icon: mobile,
    iconBg: "#383E56",
    date: "March 2020 - August 2020",
    points: [
      "Work on a scholarship Program with a big team of youths who belong to different culture and backgrounds",
      " worked as the facilitator for the Myanmar youth people in the 2019 Youth developing camp"
    ],
  },
  {
    title: "Student Mentor",
    company_name: "Microverse",
    icon: backend,
    iconBg: "#383E56",
    date: "December 2022 - Present",
    points: [
      " Assisted two junior developers weekly to ensure their mastery of web development, agile methodologies, and professional work behavior",
      "Assisted junior developers with debugging, educating them in coding best practices and providing them with technical support",
      "Built group project with junior developers to help them improve their skills",
      "Giving time to listen to their stories and experiences to give emotional support",
    ],
  },
  {
    title: "business consultant",
    company_name: "AlNA Beauty Products",
    icon:creator,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Successfully created the business plan and designed an innovative product package for enhanced sales",
      "Achieved successful connections with global investors and managers, facilitating valuable partnerships and collaborations",
      "Successfully trained staff members in the areas of public speaking, sales, and business planning, leading to enhanced skills and increased performance",
      "Successfully created engaging content and visually appealing graphic design for the product, leading to its enhanced appeal and market success.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Microverse",
    icon:web,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "recently graduated from Microverse, an online software development program that accepts less than 1% of applicants",
      "Spent 1300+ hours mastering algorithms, data structures, and full-stack web development. Developed skills in remote pair programming using industry-standard git-flow and daily standups to collaborate with international remote developers",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const techs = ["HTML5", "CSS3" , "React", "Rails", "Ruby", "JavaScript", "SQL" ,"PostgreSQL", "jQuery", "Next.js", "UI", "UX", "Graphic", "Content", "Remote", "GitHub", "Git"]