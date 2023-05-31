import web from '../assets/web.png';
import backend from '../assets/backend.png'
import mobile from '../assets/mobile.png'
import creator from '../assets/creator.png'
import project1 from '../assets/project1.png'
 
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
    
]