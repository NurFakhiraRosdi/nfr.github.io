import React from 'react';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <HomeSection />
            <AboutSection />
            <ProjectsSection />
            <ContactBanner />
            <Footer />
        </div>
    );
}
