import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";


const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Hero/>
        </div>
    )
}

export default HomePage;