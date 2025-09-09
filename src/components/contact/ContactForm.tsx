import React, { useState } from "react";

interface ContactFormProps {
    formData: {
        name: string;
        email: string;
        company: string;
        subject: string;
        message: string;
    };
    handleInputChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => void;
}

const encode = (data: Record<string, string>) =>
    Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");

const ContactForm: React.FC<ContactFormProps> = ({ formData, handleInputChange }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...formData }),
            });

            setIsSubmitting(false);
            setSubmitStatus("success");
            (e.target as HTMLFormElement).reset();

            setTimeout(() => setSubmitStatus("idle"), 5000);
        } catch (error) {
            console.error("Form submission error:", error);
            setIsSubmitting(false);
            setSubmitStatus("error");
        }
    };

    const baseInputStyles =
        "peer w-full rounded-md border border-gray-300 dark:border-gray-600 " +
        "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 " +
        "placeholder-transparent p-3 pt-5 " +
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
        "transition";

    const floatingLabelStyles =
        "absolute left-3 top-3 text-gray-500 dark:text-gray-400 " +
        "transition-all text-sm " +
        "peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base " +
        "peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 dark:peer-focus:text-blue-400";

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 sm:p-10 max-w-2xl mx-auto">
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-8 relative"
            >
                <input type="hidden" name="form-name" value="contact" />

                {/* Name */}
                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder=" "
                        required
                        className={baseInputStyles}
                    />
                    <label className={floatingLabelStyles}>Name</label>
                </div>

                {/* Email */}
                <div className="relative">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder=" "
                        required
                        className={baseInputStyles}
                    />
                    <label className={floatingLabelStyles}>Email</label>
                </div>

                {/* Company */}
                <div className="relative">
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder=" "
                        className={baseInputStyles}
                    />
                    <label className={floatingLabelStyles}>Company</label>
                </div>

                {/* Subject */}
                <div className="relative">
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder=" "
                        className={baseInputStyles}
                    />
                    <label className={floatingLabelStyles}>Subject</label>
                </div>

                {/* Message */}
                <div className="relative">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder=" "
                        required
                        rows={5}
                        className={baseInputStyles + " resize-none"}
                    />
                    <label className={floatingLabelStyles}>Message</label>
                </div>

                {/* Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md 
                     hover:bg-blue-700 dark:hover:bg-blue-500 transition 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     disabled:opacity-50"
                >
                    {isSubmitting ? "Submitting..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                    <p className="text-green-600 dark:text-green-400 mt-2">
                        ✅ Thanks! Your message has been sent.
                    </p>
                )}
                {submitStatus === "error" && (
                    <p className="text-red-600 dark:text-red-400 mt-2">
                        ❌ Something went wrong. Please try again.
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
