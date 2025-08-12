import React from "react";

interface HomePageProps {
    setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
    return (
        <div className="min-h-screen">

            <section>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center">
                        <div className="mb-8">
                            {/* #TODO: change picture later */}
                            <img
                                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                                alt="Kenneth Imade"
                                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage;