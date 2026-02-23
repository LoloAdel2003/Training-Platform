 "use client"
 import Title from '@/components/custome/Title'
import AnnouncementSection from '@/components/student/homebageSections/AnnouncementSection'
import BlogSection from '@/components/student/homebageSections/BlogsSection'
import CommentSection from '@/components/student/homebageSections/CommentSection'
import HeroSection from '@/components/student/homebageSections/Hero'
import ImpactSection from '@/components/student/homebageSections/ImpactNum'
import Instructors from '@/components/student/homebageSections/Instructors'
import JourneySection from '@/components/student/homebageSections/JourneySection'
import OnlineCourse from '@/components/student/homebageSections/OnlineCourse'
import OnSiteSection from '@/components/student/homebageSections/OnSiteCourse'
import OrganizationSection from '@/components/student/homebageSections/Organization'
import PlansSection from '@/components/student/homebageSections/PlansSection'
import QuestionSection from '@/components/student/homebageSections/QuestionSection'
import RecordedSection from '@/components/student/homebageSections/RecordedCourse'
import RoadmapSection from '@/components/student/homebageSections/Roadmap'
import SearchSection from '@/components/student/homebageSections/SearchSection'
import WhyChoose from '@/components/student/homebageSections/WhyChoose'
import React from 'react'
export default function page() {   
     return(
        
        // <div>higbhbhjnm</div>
        <>
        <HeroSection />
        <WhyChoose />
        <SearchSection />
        <JourneySection />
        <AnnouncementSection />
        <RecordedSection />
        <OnlineCourse />
        <OnSiteSection />
        <RoadmapSection />
        <Instructors />
        <OrganizationSection />
        <CommentSection />
        <ImpactSection />
        <BlogSection />
        <QuestionSection />
        <PlansSection />


        {/* <Title title='Welcome' subTitle='hiiiii' /> */}
        </>
    )
} 