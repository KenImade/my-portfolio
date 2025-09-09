import React, { useState, useEffect } from "react";
import { BookOpen } from "lucide-react";

const SubscribeCard: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => setSubmitted(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [submitted]);

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const encode = (data: Record<string, string>) =>
        Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            return;
        }

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "subscribe", email }),
            });

            setError("");
            setSubmitted(true);
            setEmail("");
        } catch (err) {
            console.error("Netlify form submission failed:", err);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                More Posts Coming Soon!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm constantly learning and working on new projects. Subscribe to get
                notified when I publish new posts about data analytics, backend
                development, and my journey as a developer.
            </p>

            {!submitted ? (
                <form
                    name="subscribe"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
                >
                    {/* Required hidden inputs */}
                    <input type="hidden" name="form-name" value="subscribe" />

                    {/* Honeypot field (hidden from users) */}
                    <p className="hidden">
                        <label>
                            Don’t fill this out: <input name="bot-field" />
                        </label>
                    </p>

                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                    >
                        Subscribe
                    </button>
                </form>
            ) : (
                <p className="mt-4 text-green-600 font-medium">
                    🎉 Thanks for subscribing! You'll hear from me soon.
                </p>
            )}

            {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
        </div>
    );
};

export default SubscribeCard;
