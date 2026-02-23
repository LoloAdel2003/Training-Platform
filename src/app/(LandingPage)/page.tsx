 "use client"
import FeaturesSection from '@/components/Landing/FeaturesSection'
import Footer from '@/components/Landing/Footer'
import HeroSection from '@/components/Landing/Hero'
import HighlightSection from '@/components/Landing/HighlightSection'
import HowItWorks from '@/components/Landing/HowItWorks'
import ImpactSection from '@/components/Landing/ImpactNumber'
import QuestionSection from '@/components/Landing/Question'
import WhyChooseUs from '@/components/Landing/WhyChooseUs'
 import React from 'react'
export default function page() {   
     return(
        
        <div>
    <HeroSection />
    <ImpactSection />
    <HowItWorks />
    <FeaturesSection />

    
    <WhyChooseUs />
        <HighlightSection />

    <QuestionSection />
    {/* <Footer /> */}

        </div>
    )
} 