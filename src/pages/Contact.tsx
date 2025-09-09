import React, { useState } from 'react';
import ContactHeader from '../components/contact/ContactHeader';
import ContactInfoCard from '../components/contact/ContactInfoCard';
import LookingForCard from '../components/contact/LookingForCard';
import QuickResponseNote from '../components/contact/QuickResponseNote';
import ContactForm from '../components/contact/ContactForm';
import WhyWorkWithMe from '../components/contact/WhyWorkWithMe';
import SEOHead from '../components/SEOHead';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });


    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen py-12">
            <SEOHead
                title='contact'
                description='Contact Kenneth Imade for your projects, job opportunities, open source contribution or anything else.'
                url='https://kennethimade.dev/contact'
            />
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
                        />
                    </div>
                </div>

                <WhyWorkWithMe />
            </div>
        </div>
    );
};

export default Contact;
