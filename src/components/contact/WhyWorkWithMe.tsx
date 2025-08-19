import type { ReactNode } from 'react';
import { Coffee, MessageSquare, Calendar } from 'lucide-react';

interface CardProps {
    icon: ReactNode;
    title: string;
    desc: string;
}

const WhyWorkWithMe = () => (
    <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-90 dark:text-white mb-6 text-center">Why Work With Me?</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <Card icon={<Coffee className="h-8 w-8 text-blue-600" />} title="Reliable & Dedicated" desc="I'm passionate about continuous learning and staying up-to-date with the latest technologies and best practices." />
            <Card icon={<MessageSquare className="h-8 w-8 text-blue-600" />} title="Strong Communicator" desc="I believe in clear communication and documentation, making complex technical concepts accessible to all stakeholders." />
            <Card icon={<Calendar className="h-8 w-8 text-blue-600" />} title="Reliable & Dedicated" desc="I'm committed to delivering quality work on time and taking ownership of my contributions to the team." />
        </div>
    </div>
);

const Card: React.FC<CardProps> = ({ icon, title, desc }) => (
    <div className="text-center">
        <div className="bg-blue-200 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            {icon}
        </div>
        <h3 className="text-lg dark:text-white font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-white">{desc}</p>
    </div>
);

export default WhyWorkWithMe;
