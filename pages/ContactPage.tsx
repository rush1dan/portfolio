'use client'

import AnimateOnView, { AnimateableComponentProps } from '@/components/AnimateOnView'
import HeadingLine from '@/components/HeadingLine'
import React from 'react'

type ContactPageProps = {}

export default function ContactPage({ }: ContactPageProps) {
    return (
        <AnimateOnView Component={ContactPageContent} />
    )
}

function ContactPageContent({ animationControls }: AnimateableComponentProps) {
    return (
        <div className='h-screen snap-center'>
            <div className='h-24'></div>
            <div className="h-[calc(100%-6rem)] relative">
                <HeadingLine
                    animationControls={animationControls}
                    heading='CONTACT'
                    marginPadding='mt-4'
                    lineWidth='w-[20vw]'
                />
                {/* Contact Form */}
                <div className="absolute top-0 w-full h-[calc(100%-11rem)]">
                    <ContactFormSection />
                </div>
                {/* Footer */}
                <div className="absolute bottom-0 w-full h-44">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

type ContactFormProps = {}

function ContactFormSection({ }: ContactFormProps) {
    return (
        <section className='absolute w-full top-1/2 -translate-y-1/2'>
            <div className="max-w-2xl mx-auto px-12">
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                        <input type="email" id="email" className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white shadow-sm-light" placeholder="" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white shadow-sm-light" placeholder="" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">Your message</label>
                        <textarea id="message" rows={6} className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder=""></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center bg-slate-600 text-white rounded-lg sm:w-fit hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </section>
    )
}

type FooterProps = {}

function Footer({ }: FooterProps) {
    return (
        <div className='h-full w-full bg-[rgb(46,47,49)]'></div>
    )
}