import React from 'react'

const ContactHeader: React.FC = () => {
    return (
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                I'm actively seeking opportunities to contribute to innovative projects and grow as a developer.
                Let's discuss how we can work together!
            </p>
        </div>
    )
}

export default ContactHeader;