import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterDashboard from '../components/FooterDashboard';

const GenericPage = () => {
    const { slug } = useParams();
    const title = slug.replace(/-/g, ' ').toUpperCase();

    return (
        <div className="min-h-screen bg-bmw-black flex flex-col">
            <Navbar />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-grow container mx-auto px-6 py-40 max-w-4xl"
            >
                <Link to="/" className="inline-flex items-center text-[10px] text-bmw-silver/40 hover:text-bmw-gold uppercase tracking-widest mb-12 transition-colors">
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-6xl font-thin mb-12 text-bmw-warm-white tracking-widest uppercase pb-6 border-b border-white/5">
                    {title}
                </h1>

                <div className="space-y-8 text-bmw-silver/60 font-light leading-relaxed">
                    <p>
                        Welcome to the {title} page. This is a dedicated placeholder page for the requested section.
                    </p>
                    <p>
                        In a full production environment, this page would contain detailed information specific to {title.toLowerCase()}, such as comprehensive terms, advanced configuration details, or immersive media galleries showcasing the uncompromising luxury of the BMW 5 Series LWB.
                    </p>
                    <div className="w-12 h-[1px] bg-bmw-gold my-12" />
                    <p className="text-sm font-light tracking-widest uppercase text-bmw-gold/80 italic">
                        The Ultimate Driving Machine
                    </p>
                </div>
            </motion.div>

            <FooterDashboard />
        </div>
    );
};

export default GenericPage;
