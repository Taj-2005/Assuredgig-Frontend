"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles, MessageSquare, Headphones } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {useRouter} from 'next/navigation'
const faqs = [
  {
    question: 'How do I get started as a freelancer?',
    answer: 'Sign up for an account, complete your profile, and start browsing available gigs. You can also set up your portfolio to attract potential clients.'
  },
  {
    question: 'How does the payment system work?',
    answer: 'We use an escrow system where client payments are held securely until the work is completed and approved. This ensures both parties are protected.'
  },
  {
    question: 'What if I have a dispute with a client?',
    answer: 'Our support team is available 24/7 to help resolve any disputes. We review all cases carefully and work to find a fair solution for both parties.'
  }
];

export default function ContactPage() {
  const navigate = useRouter()
  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      <Button
                variant="secondary"
                className="border-[#23272e] text-[#f0f6fc] hover:bg-[#23272e] w-40 fixed top-2 left-3 z-10"
                onClick = {(e) => {
                  e.preventDefault();
                  navigate.push('/')
                }}
              >
                Back To Home
            </Button>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-black">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/40"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-8"
            >
              <Sparkles className="w-8 h-8 text-indigo-400" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Get in
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent"> Touch</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#161b22] border border-[#30363d] rounded-lg p-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="bg-[#0d1117] border-[#30363d] text-[#f0f6fc] placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-[#0d1117] border-[#30363d] text-[#f0f6fc] placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="min-h-[150px] bg-[#0d1117] border-[#30363d] text-[#f0f6fc] placeholder:text-gray-400"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:opacity-90">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-indigo-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <p className="mt-1 text-gray-400">support@assuredgig.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-indigo-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Phone</h3>
                      <p className="mt-1 text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-indigo-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Location</h3>
                      <p className="mt-1 text-gray-400">
                        123 Innovation Street<br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Business Hours</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions about our platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MessageSquare className="w-6 h-6 text-white mr-4 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                        <p className="text-gray-400">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Headphones className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Need Immediate Support?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Our support team is available 24/7 to help you with any questions or concerns.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200">
              Start Live Chat
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black border-t border-indigo-900/60 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">Assured Gig</span>
          <span className="text-sm text-gray-500 mb-2">Empowering Freelancers & Clients</span>
          <span className="text-xs text-gray-600">&copy; {new Date().getFullYear()} Assured Gig. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}