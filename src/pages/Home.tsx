import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";


const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Hero/>
            <Skills/>
        </div>
    )
}

export default HomePage;