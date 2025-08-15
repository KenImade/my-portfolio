import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const ContactInfoCard = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
        <div className="space-y-6">
            <InfoItem icon={<Mail className="h-6 w-6 text-blue-600" />} label="Email" value="kenneth.imade@yahoo.com" />
            {/* <InfoItem icon={<Phone className="h-6 w-6 text-blue-600" />} label="Phone" value="+1 (555) 987-6543" /> */}
            <InfoItem icon={<MapPin className="h-6 w-6 text-blue-600" />} label="Location" value="London, UK" />
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Connect Online</h3>
            <div className="flex space-x-4">
                <SocialLink href="https://www.linkedin.com/in/kenneth-imade/" icon={<Linkedin className="h-5 w-5" />} bgColor="bg-blue-600" hover="hover:bg-blue-700" />
                <SocialLink href="https://github.com/KenImade" icon={<Github className="h-5 w-5" />} bgColor="bg-gray-800" hover="hover:bg-gray-900" />
            </div>
        </div>
    </div>
);

const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-center space-x-4">
        <div className="bg-blue-50 p-3 rounded-lg">{icon}</div>
        <div>
            <p className="font-semibold text-gray-900 dark:text-white">{label}</p>
            <p className="text-gray-600 dark:text-gray-300">{value}</p>
        </div>
    </div>
);

const SocialLink = ({ href, icon, bgColor, hover }) => (
    <a
        href={href}
        target='_blank'
        className={`${bgColor} text-white p-3 rounded-lg ${hover} transition-colors duration-200`}
    >
        {icon}
    </a>
);

export default ContactInfoCard;
