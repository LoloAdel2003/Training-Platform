
import React from 'react'
import Title from '../../custome/Title'
import RoadmapCard, { RoadmapCardType } from '../cards/RoadmapCard';


import LinkButton from '../../ui/LinkButton';

const RoadmapSection=()=>{
  
  const Roadmaps: RoadmapCardType[] = [
    {
      id: "1r",
       image: "/imges/course.png",

      title: "Web Development Bootcamp",
      description: "Learn everything you need to become a professional frontend developer, from the basics of HTML, CSS, and JavaScript to advanced frameworks",
      InstuctorName: "John Doe",
level: "Beginner",
      type: "Recorded",
      
      price: "$49",
     time:"15",
     star:4,
       coursesCount: 10
    },
     {
      id: "2r",
       image: "/imges/course2.png",

      title: "Web Development Bootcamp",
      description: "Learn everything you need to become a professional frontend developer, from the basics of HTML, CSS, and JavaScript to advanced frameworks",
      InstuctorName: "John Doe",
level: "Beginner",
      type: "Recorded",
      
      price: "$49",
     time:"15",
     star:4,
       coursesCount: 10
    },
     {
      id: "3r",
       image: "/imges/course3.png",

      title: "Web Development Bootcamp",
      description: "Learn everything you need to become a professional frontend developer, from the basics of HTML, CSS, and JavaScript to advanced frameworks",
      InstuctorName: "John Doe",
level: "Beginner",
      type: "Recorded",
      
      price: "$49",
     time:"15",
     star:4,
       coursesCount: 10
    },
     {
      id: "4r",
       image: "/imges/course.png",

      title: "Web Development Bootcamp",
      description: "Learn everything you need to become a professional frontend developer, from the basics of HTML, CSS, and JavaScript to advanced frameworks",
      InstuctorName: "John Doe",
level: "Beginner",
      type: "Recorded",
      
      price: "$49",
     time:"15",
     star:4,
       coursesCount: 10
    },
    
  ];
    return(
        
         <section className="py-12 text-center bg-background md:py-16 px-4 md:px-10 lg:px-16">
              <Title title="Complete Learning Paths" subTitle="Follow a structured learning path that combines a series of related courses to develop your skills step by step" />
              <div className='my-10 card-grid'>
                {Roadmaps.map((roadmap)=>(
                 <RoadmapCard key={roadmap.id} card={roadmap} />

                )
                  
                )}
                
              </div>
              <LinkButton label="See More" href='/student/roadmaps' />
            </section>
    )
}
export default RoadmapSection