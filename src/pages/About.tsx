import React from 'react';
import { GraduationCap, MapPin, Calendar, Code2, Database, BarChart3, Target, Users, Lightbulb } from 'lucide-react';
import aboutData from '../data/aboutData.json';

const About: React.FC = () => {
    return (
        <div className="min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        A passionate developer eager to make an impact through data-driven solutions and robust backend systems
                    </p>
                </div>

                {/* Personal Story */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h2>
                        <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            {/* TODO: update narrative */}
                            <p>
                                My fascination with data began during my undergraduate internship when I discovered how
                                raw numbers could tell compelling stories and drive important decisions. What started as
                                curiosity quickly became a passion for building systems that transform data into actionable insights.
                            </p>
                            <p>
                                I've been focusing on developing my skills in data analytics and
                                backend development through personal projects, online courses, and volunteering. I believe in learning by doing and constantly challenging myself with new technologies.
                            </p>
                            <p>
                                I'm particularly drawn to the intersection of data science and software engineering, where
                                I can combine analytical thinking with technical implementation to create meaningful solutions.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Facts</h2>
                        <div className="space-y-4">
                            {[
                                { icon: MapPin, label: 'Location', value: 'London, UK' },
                                { icon: GraduationCap, label: 'Education', value: 'MSc Business Analytics, 2023' },
                                { icon: Calendar, label: 'Experience', value: '2+ Years' },
                                { icon: Code2, label: 'Focus Areas', value: 'Data Analytics & Backend Dev' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <div className="bg-blue-50 dark:bg-blue-900 p-2 rounded-lg">
                                        <item.icon className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-900 dark:text-white">{item.label}:</span>
                                        <span className="ml-2 text-gray-600 dark:text-gray-300">{item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills & Interests */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Technical Skills</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Database,
                                title: 'Data & Analytics',
                                skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Excel']
                            },
                            {
                                icon: Code2,
                                title: 'Backend Development',
                                skills: ['Node.js', 'Python', 'Flask', 'FastAPI', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Docker']
                            },
                            {
                                icon: BarChart3,
                                title: 'Tools & Platforms',
                                skills: ['Git', 'Linux', 'AWS', 'Tableau', 'Power BI', 'Apache Kafka', 'Redis', 'Postman']
                            }
                        ].map((category, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <category.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Values & Goals */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">What Drives Me</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Target,
                                title: 'Continuous Learning',
                                description: 'I believe in staying curious and constantly expanding my knowledge through new technologies, courses, and challenging projects.'
                            },
                            {
                                icon: Users,
                                title: 'Collaboration',
                                description: 'Great software is built by great teams. I value mentorship, knowledge sharing, and learning from experienced developers.'
                            },
                            {
                                icon: Lightbulb,
                                title: 'Problem Solving',
                                description: 'I love tackling complex problems and finding elegant solutions that create real value for users and businesses.'
                            }
                        ].map((value, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-blue-50 dark:bg-blue-900 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <value.icon className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education & Experience */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education & Experience</h2>
                    <div className="space-y-8">
                        {aboutData.map((item, index) => (
                            <div key={index} className="flex space-x-4">
                                <div className="flex-shrink-0 w-24 text-blue-600 font-semibold text-sm">
                                    {item.year}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.type === 'education'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-blue-100 text-blue-800'
                                            }`}>
                                            {item.type}
                                        </span>
                                    </div>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{item.organization}</p>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;