import React from 'react';
import { motion } from 'framer-motion';

const ClosingStatement = () => {
    return (
        <section className="h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-6">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050a12] to-black" />

            {/* Cinematic Spotlight */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                transition={{ duration: 2 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-bmw-gold/20 via-transparent to-transparent pointer-events-none"
            />

            <div className="relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-4xl md:text-7xl font-thin tracking-tighter mb-12 max-w-4xl italic"
                >
                    Beyond Luxury.<br />Beyond Familiar.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="space-y-4"
                >
                    <p className="text-bmw-gold tracking-[0.5em] uppercase text-xs">The BMW 5 Series Long Wheelbase</p>
                    <div className="h-[1px] w-48 bg-bmw-gold/30 mx-auto" />
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-20 px-12 py-5 border border-bmw-gold/20 hover:bg-bmw-gold hover:text-black transition-all duration-500 text-[10px] tracking-[0.4em] uppercase font-bold"
                >
                    Begin Your Journey
                </motion.button>
            </div>

            {/* Footer Info */}
            <div className="absolute bottom-12 left-0 w-full px-12 flex flex-col md:flex-row justify-between items-center gap-8 opacity-20 text-[8px] tracking-[0.3em] uppercase">
                <div className="flex gap-8">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Legal Notice</a>
                    <a href="#">Cookie Policy</a>
                </div>
                <p>© 2026 BMW India. Cinematic Landing Concept.</p>
                <div className="flex gap-8">
                    <a href="#">Instagram</a>
                    <a href="#">X (Twitter)</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
        </section>
    );
};

export default ClosingStatement;
