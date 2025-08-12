import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction: React.FC = () => {
  return (
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-blue-100 mb-8">
            I'm actively seeking opportunities to contribute to innovative projects and grow as a developer.
          </p>
          <Link
            to='/contact'
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            Let's Connect
          </Link>
        </div>
      </section>
  )
}

export default CallToAction