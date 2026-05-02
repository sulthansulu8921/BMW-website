import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shield, Wifi, Heart, Star, Leaf, Facebook, Instagram, Youtube, Linkedin,
    ChevronDown, MapPin, Phone, BookOpen, Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterDashboard = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const experiences = [
        { icon: <Shield />, title: "BMW SAFETY", text: "Intelligent systems that protect what matters most." },
        { icon: <Wifi />, title: "BMW CONNECTED", text: "Stay connected with seamless digital integration." },
        { icon: <Heart />, title: "PREMIUM CARE", text: "Exclusive service and complete peace of mind." },
        { icon: <Star />, title: "DRIVING PLEASURE", text: "Engineered for unmatched control and performance." },
        { icon: <Leaf />, title: "SUSTAINABLE FUTURE", text: "Driving towards a cleaner, smarter tomorrow." }
    ];

    const footerLinks = {
        MODELS: ["BMW 3 Series", "BMW 5 Series", "BMW 7 Series", "BMW X Series", "BMW M Series"],
        COMPANY: ["About BMW", "BMW Group", "Careers", "Sustainability", "News & Media"],
        OWNERSHIP: ["BMW Service", "BMW Financial Services", "BMW Warranty", "BMW ConnectedDrive", "Roadside Assistance"],
        "GET IN TOUCH": [
            { icon: <MapPin className="w-3 h-3" />, text: "Find a Dealer" },
            { icon: <BookOpen className="w-3 h-3" />, text: "Book a Test Drive" },
            { icon: <Phone className="w-3 h-3" />, text: "Contact Us" },
            { icon: <Phone className="w-3 h-3" />, text: "1800 102 5959" }
        ]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="bg-bmw-black pt-20 md:pt-40 border-t border-white/5">
            <div className="container mx-auto px-5 md:px-6 lg:px-20">

                {/* Thank You Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="mb-20 md:mb-40"
                >
                    <motion.h2 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-black mb-6 md:mb-8 tracking-tighter text-bmw-warm-white uppercase">THANK YOU</motion.h2>
                    <motion.p variants={itemVariants} className="text-bmw-gold tracking-[0.6em] uppercase text-[10px] mb-8 font-bold">For exploring the future of driving.</motion.p>
                    <motion.div variants={itemVariants} className="max-w-xl">
                        <p className="text-bmw-silver/40 text-sm font-light leading-relaxed mb-12">
                            The BMW 5 Series Long Wheelbase is crafted for those who demand more—more luxury, more intelligence, more performance.
                        </p>
                        <div className="w-12 h-[2px] bg-bmw-gold mb-8" />
                        <p className="text-bmw-warm-white tracking-[0.3em] font-medium text-[9px] uppercase italic">Beyond luxury. Beyond limits.</p>
                    </motion.div>
                </motion.div>

                {/* Experience Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 lg:p-20 mb-16 md:mb-20 backdrop-blur-3xl"
                >
                    <div className="text-center mb-10 md:mb-16">
                        <h3 className="text-xl md:text-2xl font-light uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4">The BMW Experience</h3>
                        <div className="w-12 h-[1px] bg-bmw-gold mx-auto mb-6" />
                        <p className="text-bmw-silver/20 text-[10px] font-light tracking-widest uppercase">Innovation meets ambition.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
                        {experiences.map((exp, i) => (
                            <motion.div key={i} variants={itemVariants} className="flex flex-col items-center text-center group cursor-default">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-bmw-gold group-hover:bg-bmw-gold/20 transition-all duration-500">
                                    {React.cloneElement(exp.icon, { strokeWidth: 1.2 })}
                                </div>
                                <h4 className="text-[9px] font-bold tracking-widest text-bmw-warm-white uppercase mb-3">{exp.title}</h4>
                                <p className="text-[9px] text-bmw-silver/30 leading-relaxed font-light">{exp.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Dashboard */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-white/10 border border-white/10 mb-20 md:mb-40 overflow-hidden rounded-3xl group">
                    {/* Left: Branding & Locator Mockup */}
                    <div className="bg-white/[0.03] p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden backdrop-blur-md">
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-2 mb-10 shadow-2xl">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" alt="BMW" className="w-full h-full object-contain" />
                            </div>
                            <h2 className="text-4xl font-extralight mb-6 uppercase tracking-tighter text-bmw-warm-white">Stay in Touch</h2>
                            <p className="text-[11px] text-bmw-silver/40 font-light mb-12 max-w-xs leading-relaxed uppercase tracking-widest">Subscribe to get the latest updates on the BMW 5 Series LWB.</p>

                            <div className="flex gap-8">
                                {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                                    <Icon key={i} className="w-4 h-4 text-bmw-silver/30 hover:text-bmw-gold transition-all duration-300 cursor-pointer hover:scale-110" />
                                ))}
                            </div>
                        </div>

                        {/* High-Tech Locator Visual */}
                        <div className="absolute right-[-20%] bottom-[-20%] opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110">
                            <div className="relative w-96 h-96 border border-bmw-gold/20 rounded-full flex items-center justify-center">
                                <div className="absolute inset-0 border border-bmw-gold/10 rounded-full animate-ping [animation-duration:4s]" />
                                <div className="w-64 h-64 border border-bmw-gold/15 rounded-full flex items-center justify-center">
                                    <div className="w-32 h-32 bg-bmw-gold/10 blur-[60px] rounded-full" />
                                    <MapPin className="w-12 h-12 text-bmw-gold/40" strokeWidth={1} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-white/[0.04] p-12 lg:p-20 backdrop-blur-md">
                        {!isSubmitted ? (
                            <motion.form
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                onSubmit={handleSubmit}
                            >
                                <div className="space-y-8 md:col-span-1">
                                    <div className="relative flex flex-col group">
                                        <input type="text" required placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-xs tracking-widest outline-none focus:border-bmw-gold transition-colors text-white placeholder:text-bmw-silver/20" />
                                    </div>
                                    <div className="relative flex flex-col group">
                                        <input type="text" required placeholder="Phone Number" className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-xs tracking-widest outline-none focus:border-bmw-gold transition-colors text-white placeholder:text-bmw-silver/20" />
                                    </div>
                                </div>
                                <div className="space-y-8 md:col-span-1">
                                    <div className="relative flex flex-col group">
                                        <input type="email" required placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-xs tracking-widest outline-none focus:border-bmw-gold transition-colors text-white placeholder:text-bmw-silver/20" />
                                    </div>
                                    <div className="relative flex flex-col group">
                                        <select className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-xs tracking-widest outline-none focus:border-bmw-gold transition-colors text-bmw-silver/60 appearance-none cursor-pointer">
                                            <option className="bg-bmw-black">I'm interested in</option>
                                            <option className="bg-bmw-black">Test Drive</option>
                                            <option className="bg-bmw-black">Pricing Quote</option>
                                            <option className="bg-bmw-black">360 Virtual Tour</option>
                                        </select>
                                        <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-white/20" />
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <textarea placeholder="Your Message" rows={4} className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-xs tracking-widest outline-none focus:border-bmw-gold transition-colors resize-none text-white placeholder:text-bmw-silver/20" />
                                </div>
                                <div className="md:col-span-2 pt-6">
                                    <button type="submit" className="w-full py-5 border border-bmw-gold/40 text-bmw-gold hover:bg-bmw-gold hover:text-black transition-all text-[11px] font-bold tracking-[0.5em] uppercase active:scale-95">
                                        Send Message
                                    </button>
                                </div>
                            </motion.form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center p-10"
                            >
                                <div className="w-20 h-20 rounded-full border border-bmw-gold flex items-center justify-center mb-8">
                                    <Check className="text-bmw-gold w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-light uppercase tracking-[0.3em] mb-4">Request Sent</h3>
                                <p className="text-xs text-bmw-silver/40 tracking-widest leading-relaxed">Our relationship executive will contact you shortly.</p>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-16 md:mb-32">
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="group/grid">
                            <h5 className="text-[10px] font-bold tracking-[0.5em] text-white uppercase mb-10 pb-4 border-b border-white/5 inline-block pr-12 group-hover/grid:border-bmw-gold transition-all">{title}</h5>
                            <div className="flex flex-col gap-5">
                                {links.map((link, i) => (
                                    <Link
                                        key={i}
                                        to={`/page/${(typeof link === 'object' ? link.text : link).toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                        className="text-[10px] text-bmw-silver/30 hover:text-bmw-gold hover:translate-x-1 transition-all duration-300 tracking-widest flex items-center gap-4 uppercase"
                                    >
                                        {typeof link === 'object' ? (
                                            <>
                                                <span className="text-bmw-gold opacity-40">{link.icon}</span>
                                                {link.text}
                                            </>
                                        ) : link}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex items-center gap-6 group cursor-pointer">
                        <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center p-2 group-hover:bg-white transition-all">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" alt="BMW" className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-[9px] text-bmw-silver/20 tracking-[.5em] font-bold uppercase italic group-hover:text-bmw-silver transition-colors">Sheer Driving Pleasure</p>
                    </div>

                    <div className="flex gap-10 text-[9px] text-bmw-silver/20 tracking-widest uppercase font-medium">
                        <Link to="/page/privacy-policy" className="hover:text-bmw-gold transition-colors">Privacy Policy</Link>
                        <Link to="/page/terms-of-use" className="hover:text-bmw-gold transition-colors">Terms of Use</Link>
                        <Link to="/page/legal" className="hover:text-bmw-gold transition-colors">Legal</Link>
                    </div>

                    <p className="text-[9px] text-bmw-silver/10 tracking-widest uppercase font-medium">© 2024 BMW India. All Rights Reserved.</p>
                </div>
            </div>

            {/* Sticky Back to Top */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-10 right-10 z-[100] w-12 h-12 glass rounded-full flex items-center justify-center group hover:border-bmw-gold transition-all"
            >
                <div className="rotate-180">
                    <ChevronDown className="w-4 h-4 text-bmw-silver group-hover:text-bmw-gold" />
                </div>
            </button>
        </section>
    );
};

export default FooterDashboard;
