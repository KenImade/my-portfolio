import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Database, BarChart3, Server, AlertTriangle, ArrowRight, Mail } from 'lucide-react';
import useDashboardStore from '../store/dashboardStore';

const NotFoundPage: React.FC = () => {
    const { isDarkMode } = useDashboardStore();
    const [animateBars, setAnimateBars] = useState(false);

    // Simulated error logs
    const errorLogs = [
        { timestamp: '2024-01-15 14:23:45', level: 'ERROR', message: 'Route not found: /unknown-path' },
        { timestamp: '2024-01-15 14:23:45', level: 'WARN', message: 'Attempting fallback routing...' },
        { timestamp: '2024-01-15 14:23:46', level: 'INFO', message: 'Redirecting to 404 handler' },
        { timestamp: '2024-01-15 14:23:46', level: 'DEBUG', message: 'Loading error recovery page' },
    ];

    const dataPoints = [
        { label: 'Home', value: 40, color: 'bg-blue-500' },
        { label: 'Projects', value: 25, color: 'bg-green-500' },
        { label: 'Blog', value: 20, color: 'bg-purple-500' },
        { label: 'About', value: 15, color: 'bg-orange-500' },
        { label: 'Contact', value: 10, color: 'bg-indigo-500' },
        { label: '404 Errors', value: 5, color: 'bg-red-500' },
    ];

    const popularPages = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Projects', path: '/projects', icon: BarChart3 },
        { name: 'Blog', path: '/blog', icon: Database },
        { name: 'About', path: '/about', icon: Server },
        { name: 'Contact', path: '/contact', icon: Mail }
    ];

    // Animation sequence
    useEffect(() => {
        setAnimateBars(true);
    }, []);

    return (
        <div className={`min-h-screen py-12 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-blue-100 via-blue-50 to-gray-100'}`}>
            <div className='max-w-6xl mx-auto px-6'>
                <div className='text-center mb-16'>
                    <div className='relative mb-8'>
                        <div className='absolute inset-0 overflow-hidden'>
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`absolute animate-bounce opacity-20 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
                                    style={{
                                        left: `${20 + i * 15}%`,
                                        top: `${10 + (i % 2) * 20}%`,
                                        animationDelay: `${i * 0.5}s`,
                                        animationDuration: '3s'
                                    }}
                                >
                                    {i % 3 === 0 ? <Database className='h-8 w-8' /> :
                                        i % 3 === 1 ? <BarChart3 className='h-8 w-8' /> :
                                            <Server className='h-8 w-8' />}
                                </div>
                            ))}
                        </div>

                        <div className='relative z-10'>
                            <div className='flex items-center justify-center space-x-4 mb-6'>
                                <div className={`text-8xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent animate-pulse`}>
                                    4
                                </div>
                                <div className='relative'>
                                    <div className={`w-20 h-20 rounded-full border-4 ${isDarkMode ? 'border-blue-400' : 'border-blue-600'} animate-spin`}>
                                        <div className={`absolute inset-2 rounded-full ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} opacity-20`}></div>
                                    </div>
                                    <AlertTriangle className={`absolute inset-0 m-auto h-8 w-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} animate-bounce`} />
                                </div>
                                <div className={`text-8xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent animate-pulse`}>
                                    4
                                </div>
                            </div>

                            <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                Page Not Found
                            </h1>
                            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                The requested endpoint returned null results
                            </p>
                            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                <code className={`px-2 py-1 rounded text-sm ${isDarkMode ? 'bg-gray-800 text-red-400' : 'bg-gray-100 text-red-600'}`}>
                                    HTTP 404: Resource not found in database
                                </code>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='max-w-6xl mx-auto px-6'>
                    <div className='grid lg:grid-cols-2 gap-12 mb-16'>
                        <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-blue-200'}`}>
                            <h2 className={`text-2xl font-bold mb-6 flex items-center space-x-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                <BarChart3 className="h-6 w-6 text-blue-600" />
                                <span>Page Analytics</span>
                            </h2>

                            <div className='space-y-4'>
                                {dataPoints.map((point, index) => (
                                    <div key={point.label} className='flex items-center space-x-4'>
                                        <div className={`w-20 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            {point.label}
                                        </div>
                                        <div className={`flex-1 h-8 rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                            <div
                                                className={`h-full ${point.color} transition-all duration-1000 ease-out flex items-center justify-end pr-2`}
                                                style={{
                                                    width: animateBars ? `${point.value * 2}%` : '0%',
                                                    transitionDelay: `${index * 200}ms`
                                                }}
                                            >
                                                <span
                                                    className={`text-white text-xs font-semibold transition-opacity duration-500`}
                                                    style={{
                                                        opacity: animateBars ? 1 : 0,
                                                        transitionDelay: `${index * 200 + 500}ms`, // delay so percentage fades in after bar grows
                                                    }}
                                                >
                                                    {`${point.value}%`}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    <strong>Analysis:</strong> This page accounts for a small percentage of traffic.
                                    Consider implementing better navigation or search functionality.
                                </p>
                            </div>
                        </div>

                        <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-blue-200'}`}>
                            <h2 className={`text-2xl font-bold mb-6 flex items-center space-x-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                <Server className='h-6 w-6 text-green-600' />
                                <span>Server Logs</span>
                            </h2>

                            <div className={`font-mono text-sm space-y-2 p-4 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} max-h-64 overflow-y-auto`}>
                                {
                                    errorLogs.map((log, index) => (
                                        <div
                                            key={index}
                                            className={`opacity-0 animate-fade-in flex space-x-2 ${log.level === 'ERROR' ? 'text-red-400' :
                                                log.level === 'WARN' ? 'text-yellow-400' :
                                                    log.level === 'INFO' ? 'text-blue-400' :
                                                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                                }`}
                                            style={{ animationDelay: `${index * 500}ms` }}
                                        >
                                            <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>[{log.timestamp}]</span>
                                            <span className='font-semibold'>{log.level}</span>
                                            <span>{log.message}</span>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className={`mt-4 p-3 rounded-lg ${isDarkMode ? 'bg-blue-900' : 'bg-blue-50'} border-l-4 border-blue-500`}>
                                <p className={`text-sm ${isDarkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                                    <strong>System Status:</strong> All services operational. Error handled gracefully.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-1 gap-8 mb-16'>
                        {/* <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-blue-200'}`}>
                            <h3 className={`text-xl font-bold mb-4 flex items-center space-x-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                <Search className='h-5 w-5 text-purple-600' />
                                <span>Search Database</span>
                            </h3>
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder='Search for pages, projects, or articles...'
                                    className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${isDarkMode
                                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                                        : 'bg-blue-50 border-gray-300 text-gray-900 placeholder-gray-500'
                                        }`}
                                />
                                <Search className={`absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            </div>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Try searching for content or use the navigation below
                            </p>
                        </div> */}

                        <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-blue-200'}`}>
                            <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                Popular Destinations
                            </h3>
                            <div className='space-y-3'>
                                {
                                    popularPages.map((page, index) => (
                                        <Link
                                            key={index}
                                            to={page.path}
                                            className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group ${isDarkMode
                                                ? 'hover:bg-gray-700 text-gray-300 hover:text-white'
                                                : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                                                }`}
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-200">
                                                <page.icon className="h-4 w-4 text-white" />
                                            </div>
                                            <span className="flex-1 text-left font-medium">{page.name}</span>
                                            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className={`text-center p-8 rounded-xl shadow-lg ${isDarkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-blue-200'}`}>
                        <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Let's Get You Back on Track
                        </h3>
                        <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Explore my projects, read my blog, or learn more about my journey in data analytics and backend development
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <Link
                                to="/"
                                className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 group'
                            >
                                <Home className='h-5 w-5 group-hover:scale-110 transition-transform duration-200' />
                                <span>Return Home</span>
                            </Link>
                            <Link
                                to="/projects"
                                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 group ${isDarkMode
                                    ? 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900'
                                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                                    }`}
                            >
                                <BarChart3 className='h-5 w-5 group-hover:scale-110 transition-transform duration-200' />
                                <span>View Projects</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
