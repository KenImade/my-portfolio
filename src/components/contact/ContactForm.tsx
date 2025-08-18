import { Send, MessageSquare } from 'lucide-react';
import React from 'react';

interface ContactFormProps {
    formData: {
        name: string;
        email: string;
        company: string;
        subject: string;
        message: string;
    };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isSubmitting: boolean;
    submitStatus: 'idle' | 'success' | 'error';
}

const ContactForm: React.FC<ContactFormProps> = ({
    formData,
    handleInputChange,
    handleSubmit,
    isSubmitting,
    submitStatus,
}) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Send a Message
        </h2>

        {submitStatus === 'success' && (
            <div
                role="alert"
                className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
            >
                <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                    <p className="text-green-800 font-medium">
                        Thank you for your message! I'll get back to you soon.
                    </p>
                </div>
            </div>
        )}

        {submitStatus === 'error' && (
            <div
                role="alert"
                className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
            >
                <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-red-600" />
                    <p className="text-red-800 font-medium">
                        Something went wrong. Please try again.
                    </p>
                </div>
            </div>
        )}

        <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
                <label>
                    Don’t fill this out: <input name="bot-field" />
                </label>
            </p>

            <fieldset disabled={isSubmitting} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <InputField
                        label="Full Name *"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                    />
                    <InputField
                        label="Email Address *"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <InputField
                        label="Company/Organization"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                    />
                    <SelectField
                        label="Subject *"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select a topic</option>
                        <option value="job-opportunity">Job Opportunity</option>
                        <option value="internship">Internship</option>
                        <option value="collaboration">Project Collaboration</option>
                        <option value="mentorship">Mentorship</option>
                        <option value="freelance">Freelance Work</option>
                        <option value="other">Other</option>
                    </SelectField>
                </div>

                <TextareaField
                    label="Message *"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me about the opportunity, project details, or how I can help..."
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <Send className="h-5 w-5" />
                            <span>Send Message</span>
                        </>
                    )}
                </button>
            </fieldset>
        </form>
    </div>
);

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => (
    <div>
        <label
            htmlFor={props.name}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
            {label}
        </label>
        <input
            {...props}
            id={props.name}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors duration-200 dark:bg-gray-700 dark:text-white"
        />
    </div>
);

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    children: React.ReactNode;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, children, ...props }) => (
    <div>
        <label
            htmlFor={props.name}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
            {label}
        </label>
        <select
            {...props}
            id={props.name}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors duration-200 dark:bg-gray-700 dark:text-white"
        >
            {children}
        </select>
    </div>
);

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ label, ...props }) => (
    <div>
        <label
            htmlFor={props.name}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
            {label}
        </label>
        <textarea
            {...props}
            id={props.name}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors duration-200 resize-vertical dark:bg-gray-700 dark:text-white"
        />
    </div>
);


export default ContactForm;
