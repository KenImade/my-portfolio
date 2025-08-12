import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import RecentProjects from "../components/RecentProjects";
import CallToAction from "../components/CallToAction";


const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Hero/>
            <Skills/>
            <RecentProjects/>
            <CallToAction/>
        </div>
    )
}

export default HomePage;