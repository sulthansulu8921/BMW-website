import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { carsData } from '../data/cars';
import Navbar from '../components/Navbar';
import FooterDashboard from '../components/FooterDashboard';
import { ArrowRight } from 'lucide-react';

const ModelsPage = () => {
    return (
        <div className="min-h-screen bg-bmw-black flex flex-col">
            <Navbar />

            <section className="flex-grow pt-40 pb-32">
                <div className="container mx-auto px-6 lg:px-20 text-center mb-32">
                    <h1 className="text-bmw-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">The Complete Lineup</h1>
                    <h2 className="text-4xl md:text-6xl font-thin tracking-tighter text-white uppercase">Choose Your Ultimate</h2>
                </div>

                <div className="flex flex-col">
                    {carsData.map((car, index) => (
                        <div key={car.id} className="relative group border-t border-white/5 py-32 even:bg-white/[0.01]">
                            <div className="container mx-auto px-6 lg:px-20">
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                                    <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <div className="absolute inset-0 bg-bmw-gold/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0 pointer-events-none" />
                                        <motion.img
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 1 }}
                                            src={car.heroImg}
                                            alt={car.name}
                                            className={`w-full h-auto object-contain drop-shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-700 ${index % 2 === 1 ? 'scale-x-[-1] group-hover:scale-x-[-1.05]' : ''}`}
                                        />
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1 lg:items-end lg:text-right' : ''}`}
                                    >
                                        <p className="text-bmw-gold tracking-[0.4em] uppercase text-[10px] mb-4 font-bold">{car.type}</p>
                                        <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase mb-6">{car.name}</h3>
                                        <p className="text-bmw-silver/60 text-lg tracking-widest max-w-xl font-light italic mb-10">"{car.tagline}"</p>

                                        <div className={`flex gap-12 mb-12 border-b border-white/10 pb-10 inline-block`}>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-bmw-silver/40 mb-2">Starting At</p>
                                                <p className="text-2xl font-light text-white tracking-widest">{car.price}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-bmw-silver/40 mb-2">Power</p>
                                                <p className="text-2xl font-light text-white tracking-widest">{car.specs.hp}</p>
                                            </div>
                                        </div>

                                        <Link to={`/models/${car.id}`} className="group/btn flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-white hover:text-bmw-gold transition-colors inline-flex w-fit">
                                            Configure Masterpiece
                                            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover/btn:border-bmw-gold transition-colors">
                                                <ArrowRight className="w-4 h-4 text-white group-hover/btn:text-bmw-gold group-hover/btn:translate-x-1 transition-transform" />
                                            </div>
                                        </Link>
                                    </motion.div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <FooterDashboard />
        </div>
    );
};

export default ModelsPage;
