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
       id: "project",
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