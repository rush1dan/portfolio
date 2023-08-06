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
            <div className="h-[calc(100%-6rem)]">
                <HeadingLine
                    animationControls={animationControls}
                    heading='CONTACT'
                    marginPadding='mt-4'
                    lineWidth='w-[20vw]'
                />
                {/* Contact Form */}
                <div className="h-[75%] bg-[rgb(20,20,20,0.5)]">
                    <ContactFormSection />
                </div>
                {/* Footer */}
                <div className="h-[25%] bg-[rgb(40,40,40,0.5)]">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

type ContactFormProps = {}

function ContactFormSection({ }: ContactFormProps) {
    return (
        <section>
            <div className="pt-2 pb-8 lg:pb-16 px-4 mx-auto max-w-screen-md">
                <p className="mt-12 mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center bg-slate-500 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </section>
    )
}

type FooterProps = {}

function Footer({ }: FooterProps) {
    return (
        <div></div>
    )
}