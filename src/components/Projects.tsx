import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import card from './Card'
import Card from './Card';

const data = [
    
    {
        id: 0,
        title: "ATM_Machine", 
        description: "A react & ",
        img: "/Responsive_ATM.png",
        tags: ["React", "Node", "CSS", "TypeScript"],

    },
    {
        id: 1,
        title: "Responsive_Todo_List", 
        description: "A react & ",
        img: "/Responsive_Todo_List.png",
        tags: ["React", "Node", "CSS", "TypeScript"],

    },
    {
        id: 2,
        title: "Responsive_Calculator", 
        description: "A react & ",
        img: "/Responsive_Calculator.png",
        tags: ["React", "Node", "CSS", "TypeScript"],

    },
    {
        id: 3,
        title: "Dynamic_Resume", 
        description: "A react & ",
        img: "/Responsive_Dynamic_Resume.png",
        tags: ["React", "Node", "CSS", "TypeScript"],

    },
    {
        id: 4,
        title: "Atractive-Resume", 
        description: "A react & ",
        img: "/Resume_Builder.png",
        tags: ["React", "Node", "CSS", "TypeScript"],

    },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-35'>
        <Heading title= 'My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-12 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) =>(<Card
            key={el.id}
            title={el.title}
            description={el.description}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
    </div>
  )
}

export default Projects
