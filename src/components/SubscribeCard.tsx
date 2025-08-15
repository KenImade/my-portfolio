import React from "react";
import { BookOpen } from "lucide-react";

const SubscribeCard: React.FC = () => {
    return (
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                More Posts Coming Soon!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm constantly learning and working on new projects. Subscribe to get
                notified when I publish new posts about data analytics, backend
                development, and my journey as a junior developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default SubscribeCard;
