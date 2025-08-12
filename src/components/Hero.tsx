import { ArrowRight, Github, Linkedin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
    return (
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center">
                    <div className="mb-8">
                        {/* #TODO: change picture later */}
                        <img
                            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                            alt="Kenneth Imade"
                            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
                        />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Hi, I'm <span className="text-blue-600">Kenneth</span>
                    </h1>
                    <p className="text-2xl text-gray-700 dark:text-gray-200 mb-4 font-medium">
                        Software Engineer
                    </p>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Passionate about transforming data into insights and building scalable backend systems.
                        Currently seeking opportunities to grow and contribute to innovative projects.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Link 
                            to="/projects"
                            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 group"
                        >
                            <span>View My Projects</span>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                        <Link
                            to="/contact"
                            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex justify-center space-x-6">
                <a
                    href="https://github.com/KenImade"
                    target="_blank"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
                    title="GitHub"
                >
                    <Github className="h-6 w-6"/>
                </a>
                <a
                    href="https://www.linkedin.com/in/kenneth-imade/"
                    target="_blank"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
                    title="LinkedIn"
                >
                    <Linkedin className="h-6 w-6"/>
                </a>
            </div>
        </section>
    )
}

export default Hero;