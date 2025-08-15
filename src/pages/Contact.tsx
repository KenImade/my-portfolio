import React, { useState } from 'react';
import ContactHeader from '../components/contact/ContactHeader';
import ContactInfoCard from '../components/contact/ContactInfoCard';
import LookingForCard from '../components/contact/LookingForCard';
import QuickResponseNote from '../components/contact/QuickResponseNote';
import ContactForm from '../components/contact/ContactForm';
import WhyWorkWithMe from '../components/contact/WhyWorkWithMe';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                company: '',
                subject: '',
                message: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-6">
                <ContactHeader />

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 space-y-8">
                        <ContactInfoCard />
                        <LookingForCard />
                        <QuickResponseNote />
                    </div>

                    <div className="lg:col-span-2">
                        <ContactForm
                            formData={formData}
                            handleInputChange={handleInputChange}
                            handleSubmit={handleSubmit}
                            isSubmitting={isSubmitting}
                            submitStatus={submitStatus}
                        />
                    </div>
                </div>

                <WhyWorkWithMe />
            </div>
        </div>
    );
};

export default Contact;
