import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import RecentProjects from "../components/RecentProjects";
import CallToAction from "../components/CallToAction";
import SEOHead from "../components/SEOHead";


const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <SEOHead
                title="Kenneth Imade - Software Engineer | Data Analytics & Backend Development"
                description="Software Engineer specializing in data analytics and backend development. Passionate about building scalable solutions and learning new technologies. View my projects and blog."
                keywords="Kenneth Imade, Software Engineer, Data Analytics, Data Engineering, Backend Development, Python, JavaScript, React, Node.js, PostgreSQL, Developer, Portfolio, London UK"
                url="https://kennethimade.dev/"
            />
            <Hero />
            <Skills />
            <RecentProjects />
            <CallToAction />
        </div>
    )
}

export default HomePage;