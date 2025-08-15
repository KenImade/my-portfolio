import { Coffee, MessageSquare, Calendar } from 'lucide-react';

const LookingForCard = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What I'm Looking For</h2>
        <ListItem icon={<Coffee className="h-5 w-5 text-blue-600 mt-1" />} title="Entry to Mid Level Positions" desc="Developer roles in data analytics or backend development" />
        <ListItem icon={<MessageSquare className="h-5 w-5 text-blue-600 mt-1" />} title="Mentorship" desc="Learning opportunities from experienced developers" />
        <ListItem icon={<Calendar className="h-5 w-5 text-blue-600 mt-1" />} title="Collaboration" desc="Open source projects and team collaborations" />
    </div>
);

const ListItem = ({ icon, title, desc }) => (
    <div className="flex items-start space-x-3 mb-4">
        {icon}
        <div>
            <p className="font-semibold text-gray-900 dark:text-white">{title}</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
        </div>
    </div>
);

export default LookingForCard;
