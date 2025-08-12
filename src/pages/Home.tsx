import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import RecentProjects from "../components/RecentProjects";


const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Hero/>
            <Skills/>
            <RecentProjects/>
        </div>
    )
}

export default HomePage;