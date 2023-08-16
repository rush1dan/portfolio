'use client'

import AnimateOnView, { AnimateableComponentProps } from '@/components/AnimateOnView'
import HeadingLine from '@/components/HeadingLine'
import React, { useRef, useState } from 'react'
import axios from 'axios'
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import lottieJson from '../public/loading_success_fail_lottie.json'
import Image from 'next/image'

type ContactPageProps = {}

export default function ContactPage({ }: ContactPageProps) {
    return (
        <AnimateOnView Component={ContactPageContent} />
    )
}

function ContactPageContent({ animationControls }: AnimateableComponentProps) {
    return (
        <div className='w-screen pt-24'>
            <HeadingLine
                animationControls={animationControls}
                heading='CONTACT'
                lineWidth='w-[20vw]'
            />
            {/* Contact Form */}
                <ContactFormSection />
            {/* Footer */}
                <Footer />
        </div>
    )
}

type ContactFormProps = {}

function ContactFormSection({ }: ContactFormProps) {

    type SegmentType = {
        [key: string]: [number, number]
    }

    const lottieSegements: SegmentType = {
        "loading": [420, 539],
        "success": [239, 396],
        "fail": [660, 826]
    };
    const [lottieState, setLottieState] = useState<string>("loading");
    const [playState, setPlayState] = useState(false);
    const [loopState, setLoopState] = useState(true);

    const [submissionState, setSubmissionState] = useState(false);
    const [emailData, setEmailData] = useState('');
    const [subjectData, setSubjectData] = useState('');
    const [messageData, setMessageData] = useState('');

    const formRef = useRef<HTMLFormElement>(null);

    function SendPostRequest(event: React.FormEvent) {
        event.preventDefault();
        setSubmissionState(true);

        setPlayState(true);
        setLoopState(true);
        setLottieState("loading");

        // Axios post:
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/db65f7d1b09d1dfeaf8edd5e1257832d', {
            // name: "FormSubmit",
            email: emailData,
            subject: subjectData,
            message: messageData
        })
            .then(response => {
                setLoopState(false);
                setLottieState("success");
                formRef.current?.reset();
            })
            .catch(error => {
                setLoopState(false);
                setLottieState("fail");
            });
    }

    return (
        <section className='md:py-32 py-16 w-full relative'>
            <div className={`max-w-2xl mx-auto px-12 ${submissionState ? 'hidden' : ''}`}>
                <form action="#" className="space-y-8" method='post' ref={formRef} onSubmit={(e) => SendPostRequest(e)}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                        <input type="email" id="email" name="email" className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 
                        placeholder-gray-400 text-white shadow-sm-light" placeholder="" required 
                            onChange={(event) => setEmailData(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                        <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 
                        placeholder-gray-400 text-white shadow-sm-light" placeholder="" required
                            onChange={(event) => setSubjectData(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">Your message</label>
                        <textarea id="message" name="message" rows={6} className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-gray-700 
                        border-gray-600 placeholder-gray-400 text-white" placeholder=""
                            onChange={(event) => setMessageData(event.target.value)}></textarea>
                    </div>
                    <input type="hidden" name="_captcha" value="false" />
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center bg-slate-600 text-white rounded-lg 
                     hover:bg-slate-500">Send message</button>
                </form>
            </div>

            {/* Feedback */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 ${submissionState ? '' : 'hidden'}`}>
                <Lottie
                    play={playState}
                    loop={loopState}
                    animationData={lottieJson}
                    segments={lottieSegements[lottieState]}
                    onComplete={(e) => setTimeout(() => {
                        setPlayState(false);
                        setSubmissionState(false);
                    }, 2000)}
                />
            </div>
        </section>
    )
}

type FooterProps = {}

function Footer({ }: FooterProps) {
    return (
        <div className='h-[10rem] w-full bg-[rgb(46,47,49)] relative'>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-start space-y-4'>
                <div className='flex flex-row items-center justify-center space-x-2'>
                    <div className='w-6 h-6 relative'>
                        <Image src="icons/profile.svg" alt="Profile Icon" fill />
                    </div>
                    <p className='font-medium text-navColor text-center'>Rushidan Islam</p>
                </div>
                <div className='flex flex-row items-center justify-center space-x-2'>
                    <div className='w-6 h-6 relative'>
                        <Image src="icons/location.svg" alt="Profile Icon" fill />
                    </div>
                    <p className='font-medium text-navColor text-center'>Dhaka, Bangladesh</p>
                </div>
            </div>
            {/* Scroll To Top Button */}
            <a href="/#home" className={`absolute bottom-1/2 md:right-12 right-5 translate-y-1/2 w-16 h-16 z-20`}>
                <Image src="/icons/arrow-up.png" alt="Up Arrow" fill />
            </a>
        </div>
    )
}