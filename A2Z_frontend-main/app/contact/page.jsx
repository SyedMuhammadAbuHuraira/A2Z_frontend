"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Phone, Mail, MapPin, Clock,
    MessageSquare, CheckCircle,
    ChevronDown, Check
} from "lucide-react";

export default function ContactPage() {

    const [formData, setFormData] = useState({
        name: "", email: "", phone: "",
        subject: "", message: "", service: "Buying"
    });

    const [sending, setSending] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [openFAQ, setOpenFAQ] = useState(null);

    const faq = [
        { q: "How fast do you reply?", a: "We typically respond within 15–45 minutes." },
        { q: "Is the consultation free?", a: "Yes! A2Z provides a free 30-minute consultation." },
        { q: "Can you help with loan approval?", a: "Yes, we guide you and connect you with trusted lenders." },
    ];

    const submitHandler = async (e) => {
        e.preventDefault();
        setSending(true);

        await new Promise(r => setTimeout(r, 1400));

        setSending(false);
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: "", email: "", phone: "",
                subject: "", message: "", service: "Buying"
            });
        }, 2500);
    };

    return (
        <div className="min-h-screen bg-gray-50 relative overflow-hidden">

            {/* Floating Blobs */}
            <div className="absolute -top-28 -left-20 w-96 h-96 bg-gray-200 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
            <div className="absolute top-40 right-0 w-80 h-80 bg-gray-300 rounded-full blur-[130px] opacity-30 pointer-events-none"></div>

            {/* Floating Shape Behind Form */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.35, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute left-1/2 -translate-x-1/2 top-[480px] w-96 h-96 bg-white rounded-full blur-[100px] opacity-20"
            />

            {/* HERO */}
            <section className="pt-16 pb-8 px-4 text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                >
                    Get in Touch with <span className="text-gray-600">A2Z Experts</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-600 mt-3 max-w-xl mx-auto"
                >
                    Premium real estate guidance tailored to your needs.
                </motion.p>

                {/* LIVE STATUS INDICATOR */}
                <div className="flex justify-center mt-4">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                        Agents are online now
                    </div>
                </div>
            </section>

            {/* MAIN SECTION */}
            <section className="container mx-auto px-4 py-6 md:py-12 grid lg:grid-cols-3 gap-8 relative z-10">

                {/* FORM CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl p-6 md:p-8"
                >
                    <div className="flex items-center gap-3 mb-7">
                        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                            <MessageSquare className="w-6 h-6 text-gray-700" />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>

                            {/* NEW CLEAN BADGE (NO MORE RED LINE EVER) */}
                            <div className="flex items-center gap-2 mt-1">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span className="text-gray-500 text-sm select-none">Online Support</span>
                            </div>
                        </div>
                    </div>


                    {submitted ? (
                        <div className="text-center py-10">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
                        </div>
                    ) : (
                        <form onSubmit={submitHandler} spellCheck={false} className="space-y-5">

                            <div className="grid md:grid-cols-2 gap-4">
                                <GlassInput label="Full Name" name="name" required value={formData.name} setFormData={setFormData} />
                                <GlassInput label="Email Address" name="email" type="email" required value={formData.email} setFormData={setFormData} />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <GlassInput label="Phone Number" name="phone" required value={formData.phone} setFormData={setFormData} />

                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">Service</label>
                                    <select
                                        className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur border border-gray-300 text-gray-700"
                                        value={formData.service}
                                        onChange={(e) => setFormData(p => ({ ...p, service: e.target.value }))}
                                    >
                                        {["Buying", "Selling", "Investing", "Commercial", "Other"].map((s, i) => (
                                            <option key={i}>{s}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <GlassInput label="Subject" name="subject" value={formData.subject} setFormData={setFormData} />

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">Message *</label>
                                <textarea
                                    required
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData(p => ({ ...p, message: e.target.value }))
                                    }
                                    className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur border border-gray-300 focus:ring-1 focus:ring-gray-600 text-gray-700 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition"
                            >
                                {sending ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    )}
                </motion.div>

                {/* RIGHT SIDE = IMAGE + FAQ */}
                <div className="space-y-6">

                    {/* LUXURY IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                            className="w-full h-52 md:h-64 object-cover"
                        />
                    </motion.div>

                    {/* FAQ */}
                    <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">FAQ</h3>
                        {faq.map((f, i) => (
                            <div key={i} className="border-b border-gray-200 pb-3 mb-3">
                                <button
                                    className="flex justify-between w-full text-left text-gray-800 font-medium"
                                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                                >
                                    {f.q}
                                    <ChevronDown className={`transition w-5 h-5 ${openFAQ === i ? "rotate-180" : ""}`} />
                                </button>
                                {openFAQ === i && (
                                    <p className="mt-2 text-gray-600 text-sm">{f.a}</p>
                                )}
                            </div>
                        ))}
                    </div>

                </div>

            </section>

            {/* CLEAN CTA */}
            <section className="py-10 md:py-14 bg-gray-100 text-center px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ready to Begin?</h2>
                <p className="text-gray-600 mt-2 mb-6">Talk to an expert today.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-gray-900 text-white rounded-xl">
                        <Phone className="inline w-5 h-5 mr-2" /> Call Now
                    </button>
                    <button className="px-8 py-3 border border-gray-900 text-gray-900 rounded-xl">
                        Schedule Meeting
                    </button>
                </div>
            </section>
        </div>
    );
}

/* Glass Input Component */
function GlassInput({ label, name, value, setFormData, type = "text", required }) {
    return (
        <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">{label}</label>
            <input
                type={type}
                required={required}
                value={value}
                onChange={(e) =>
                    setFormData((p) => ({ ...p, [name]: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur border border-gray-300 focus:ring-1 focus:ring-gray-600 text-gray-700"
            />
        </div>
    );
}
