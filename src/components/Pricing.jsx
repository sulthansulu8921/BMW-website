import React from 'react';
import { motion } from 'framer-motion';

const variants = [
    {
        name: 'Standard Luxury',
        price: '₹ 72,90,000',
        features: ['Vegan Leather', 'BMW Curved Display', 'Parking Assistant', 'Ambient Lighting']
    },
    {
        name: 'M Sport Edition',
        price: '₹ 77,50,000',
        features: ['M Aerodynamics Pack', '20" M Light Alloys', 'M Sport Steering', 'Shadowline Trim'],
        popular: true
    },
    {
        name: 'Executive LWB',
        price: '₹ 81,90,000',
        features: ['Executive Rear Seating', 'Sky Lounge', 'Bowers & Wilkins', 'Rear-seat Entertainment']
    }
];

const Pricing = () => {
    return (
        <section className="bg-bmw-black py-32 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-bmw-gold uppercase tracking-[0.4em] text-xs mb-6"
                    >
                        Choose Your Statement
                    </motion.h2>
                    <h3 className="text-4xl md:text-6xl font-thin tracking-tight capitalize">Tailored to Your Ambition</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {variants.map((variant, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`relative glass-card p-10 rounded-xl overflow-hidden ${variant.popular ? 'border-bmw-gold/40' : ''}`}
                        >
                            {variant.popular && (
                                <div className="absolute top-0 right-0 bg-bmw-gold text-black text-[9px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-lg">
                                    Most Preferred
                                </div>
                            )}

                            <h4 className="text-bmw-gold/60 text-[10px] tracking-widest uppercase mb-10">{variant.name}</h4>
                            <div className="mb-12">
                                <span className="text-sm font-light text-bmw-silver/40">Starts at</span>
                                <div className="text-3xl font-light tracking-tight mt-2">{variant.price}*</div>
                            </div>

                            <ul className="space-y-6 mb-12">
                                {variant.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-xs font-light text-bmw-silver/60">
                                        <div className="w-1 h-1 bg-bmw-gold rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 glass border-white/5 hover:bg-white/10 transition-colors text-[10px] uppercase tracking-[0.3em] font-medium text-bmw-gold">
                                Configure Now
                            </button>

                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-bmw-gold/5 blur-[80px] rounded-full group-hover:bg-bmw-gold/10 transition-colors" />
                        </motion.div>
                    ))}
                </div>
                <p className="text-center text-bmw-silver/20 text-[10px] tracking-widest mt-16 italic">
                    *Ex-showroom price inclusive of GST. Terms and conditions apply.
                </p>
            </div>
        </section>
    );
};

export default Pricing;
