import React from 'react'
import Title from '../../custome/Title'
import { Button } from '../../ui/button'
import { ArrowRight } from 'lucide-react'
import InstructorCard, { InstructorCardType } from '../cards/InstructorCard'
import LinkButton from '../../ui/LinkButton'
const Instructors=()=>{
const Instructors:InstructorCardType[] =[
{
    id:1,
    srcImg:'/imges/i1.png',
name:"Ahmed",
deciplinary:"React Developer",
 coursesCount:10,
    roadmapsCount:5,
},
{
    id:2,
    srcImg:'/imges/i2.png',
name:"Ahmed",
deciplinary:"React Developer",
 coursesCount:10,
    roadmapsCount:5,
},
{
   id:3,
    srcImg:'/imges/i3.png',
name:"Ahmed",
deciplinary:"React Developer",
 coursesCount:10,
    roadmapsCount:5,
},
{
    id:4,
    srcImg:'/imges/i4.png',
name:"Ahmed",
deciplinary:"React Developer",
 coursesCount:10,
    roadmapsCount:5,
},

]
    return(
        <section className="text-center py-16 bg-background  md:pb-[30px] px-4 md:px-10 lg:px-16">
        <Title title="Meet Our Expert Instructor" subTitle="Learn from passionate mentors who turn knowledge into inspiration" />
 <div className='my-10 card-grid'>
               {Instructors.map(instructor=>(
<InstructorCard key={instructor.id}  card={instructor} />
               ))

               } 
                
              </div>
              <LinkButton label="See More" href='student/instructors' />
        </section>
    )
}
export default Instructors