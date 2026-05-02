import React from 'react';
import { motion } from 'framer-motion';
import { carsData } from '../data/cars';
import Navbar from '../components/Navbar';
import FooterDashboard from '../components/FooterDashboard';
import { PlayCircle, ThumbsUp, ThumbsDown, Star } from 'lucide-react';

const mockReviews = {
    "5-series-lwb": {
        pros: ["Unmatched rear legroom", "Cutting-edge curved display", "Silky smooth ride quality"],
        cons: ["Steering lacks some feedback", "Large footprint in city parking"],
        feedback: "The ultimate boss car. Being chauffeured has never felt this advanced, and the tech is straight out of the future."
    },
    "m5-competition": {
        pros: ["Mind-bending acceleration", "Incredible cornering grip", "Aggressive styling"],
        cons: ["Stiff ride on rough roads", "Lower fuel efficiency"],
        feedback: "A supercar disguised as a luxury sedan. It defies physics on the track and still takes you to the office in pure comfort."
    },
    "x5": {
        pros: ["Commanding road presence", "Spacious and luxurious cabin", "Excellent towing capacity"],
        cons: ["Heavy weight affects agility", "Optional extras are pricey"],
        feedback: "The definitive luxury SUV. It effortlessly handles long road trips and commands respect everywhere it goes."
    },
    "i7": {
        pros: ["Whisper quiet cabin", "Incredible EV range", "Theater screen in rear"],
        cons: ["Polarizing front design", "Very hefty curb weight"],
        feedback: "Electric forwardism. The rear theater screen completely changes the travel experience. It is virtually silent on the highway."
    },
    "z4-roadster": {
        pros: ["Classic roadster driving dynamics", "Beautiful drop-top design", "Punchy inline-six engine"],
        cons: ["Limited trunk space", "No manual transmission option"],
        feedback: "Pure joy. Dropping the top and listening to the B58 engine echo off canyon walls is an unmatched driving thrill."
    }
};

const ReviewsPage = () => {
    return (
        <div className="min-h-screen bg-bmw-black flex flex-col">
            <Navbar />

            <section className="flex-grow pt-40 pb-32">
                <div className="container mx-auto px-6 lg:px-20 text-center mb-24">
                    <h1 className="text-bmw-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Critical Acclaim</h1>
                    <h2 className="text-4xl md:text-6xl font-thin tracking-tighter text-white uppercase">Expert Reviews</h2>
                </div>

                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-1 gap-32">
                        {carsData.map((car, index) => {
                            const review = mockReviews[car.id];
                            return (
                                <motion.div
                                    key={car.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center"
                                >
                                    {/* Left: Video Preview & Car Hero */}
                                    <div className={`relative group cursor-pointer ${index % 2 === 1 ? 'xl:order-last' : ''}`}>
                                        <div className="absolute inset-0 bg-bmw-gold/5 opacity-0 group-hover:opacity-100 transition-opacity blur-[80px] rounded-3xl z-0" />
                                        <div className="glass rounded-3xl border border-white/5 overflow-hidden relative z-10 aspect-video flex flex-col items-center justify-center bg-black/40 shadow-2xl">
                                            <div className="absolute inset-0 z-0">
                                                <img src={car.heroImg} alt={car.name} className="w-full h-full object-contain scale-110 opacity-30 drop-shadow-2xl" />
                                            </div>
                                            <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-bmw-gold transition-colors z-10 drop-shadow-lg group-hover:scale-110 duration-500" />
                                            <p className="z-10 mt-6 text-[10px] uppercase tracking-widest font-bold text-white/80">Watch Full Review</p>
                                        </div>
                                    </div>

                                    {/* Right: Scores & Pros/Cons */}
                                    <div>
                                        <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-white uppercase mb-2">{car.name}</h3>
                                        <p className="text-bmw-gold tracking-[0.3em] uppercase text-[10px] mb-12 font-bold">{car.type}</p>

                                        {/* Scores */}
                                        <div className="grid grid-cols-3 gap-6 mb-12">
                                            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                                                <div className="flex items-center gap-2 mb-2 text-bmw-gold">
                                                    <Star className="w-4 h-4 fill-bmw-gold" />
                                                    <span className="text-xl font-bold text-white">{car.scores.luxury}</span>
                                                </div>
                                                <p className="text-[8px] tracking-widest text-bmw-silver/60 uppercase">Luxury</p>
                                            </div>
                                            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                                                <div className="flex items-center gap-2 mb-2 text-bmw-gold">
                                                    <Star className="w-4 h-4 fill-bmw-gold" />
                                                    <span className="text-xl font-bold text-white">{car.scores.performance}</span>
                                                </div>
                                                <p className="text-[8px] tracking-widest text-bmw-silver/60 uppercase">Performance</p>
                                            </div>
                                            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                                                <div className="flex items-center gap-2 mb-2 text-bmw-gold">
                                                    <Star className="w-4 h-4 fill-bmw-gold" />
                                                    <span className="text-xl font-bold text-white">{car.scores.comfort}</span>
                                                </div>
                                                <p className="text-[8px] tracking-widest text-bmw-silver/60 uppercase">Comfort</p>
                                            </div>
                                        </div>

                                        {/* Pros & Cons */}
                                        <div className="grid grid-cols-2 gap-8 mb-12">
                                            <div>
                                                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green-400 mb-4 border-b border-white/10 pb-2">
                                                    <ThumbsUp className="w-4 h-4" /> The Good
                                                </h4>
                                                <ul className="space-y-3">
                                                    {review.pros.map((pro, i) => (
                                                        <li key={i} className="text-xs text-bmw-silver/80">✓ {pro}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-4 border-b border-white/10 pb-2">
                                                    <ThumbsDown className="w-4 h-4" /> The Bad
                                                </h4>
                                                <ul className="space-y-3">
                                                    {review.cons.map((con, i) => (
                                                        <li key={i} className="text-xs text-bmw-silver/60">— {con}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Owner Quote */}
                                        <div className="pl-6 border-l-2 border-bmw-gold relative">
                                            <p className="text-sm tracking-wide leading-relaxed font-light italic text-bmw-warm-white mb-2">
                                                "{review.feedback}"
                                            </p>
                                            <p className="text-[10px] tracking-widest uppercase font-bold text-bmw-silver/40">
                                                — Verified Owner Feedback
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <FooterDashboard />
        </div>
    );
};

export default ReviewsPage;
