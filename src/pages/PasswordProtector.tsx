import { Lock, Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const PasswordProtector: React.FC = () => {
    const navigate = useNavigate();
    const login = useAuthStore(state => state.login);

    const EDITOR_PASSWORD = import.meta.env.VITE_APP_EDITOR_PASSWORD || '';

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        setTimeout(() => {
            if (password === EDITOR_PASSWORD) {
                login();               // mark user as authenticated globally
                navigate('/drafts');   // redirect to drafts
            } else {
                setError('Incorrect password, please try again.');
            }
            setIsLoading(false);
        }, 500);
    };

    return (
        <div className="min-h-screen py-12 flex items-center justify-center">
            <div className="max-w-md w-full mx-auto px-6">
                <div className="bg-blue-200 dark:bg-gray-800 rounded-xl shadow-lg p-8">
                    <div className="text-center mb-8">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Lock className="h-8 w-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Article Editor Access
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            Enter the password to access the article editor
                        </p>
                    </div>

                    <form onSubmit={handlePasswordSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="Enter password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-lg p-4">
                                <p className="text-red-800 dark:text-red-200 text-sm">{error}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                                    <span>Verifying...</span>
                                </>
                            ) : (
                                <>
                                    <Lock className="h-5 w-5" />
                                    <span>Access Editor</span>
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                        <button
                            onClick={() => navigate('/blog')}
                            className="w-full text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white font-medium transition-colors duration-200"
                        >
                            Back to Blog
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordProtector;
