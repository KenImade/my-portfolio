import React from 'react'
import skillsData from '../data/skillsData.json';
import IconMapper from './IconMapper';


const Skills: React.FC = () => {
    return (
        <section className="py-20 bg-gray-200 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">What I Do</h2>
                <div className="grid md:grid-col-3 gap-8">
                    {
                        skillsData.map((item, index) => {

                            return (
                                <div
                                    key={index}
                                    className="text-center group hover:transform hover:scale-105 transition-all duration-200 bg-gray-50 dark:bg-gray-700 p-8 rounded-xl"
                                >
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-200">
                                        <IconMapper name={item.icon} size={32} color='white' />
                                        {/* {IconComponent ? <IconComponent className="h-8 w-8 text-white" /> : null} */}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{item.description}</p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {item.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills