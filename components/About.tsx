import React from 'react'

type Props = {}

export default function About({ }: Props) {
    return (
        <div className='h-screen snap-center'>
            
            {/* Main Flex Container */}
            <div className='h-full p-24 flex flex-col items-center justify-center space-x-12 md:flex-row'>
                
                {/* About Section */}
                <section className='w-1/2 flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-bold text-gray-600'>About</h1>
                    <p className='max-w-sm'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </section>

                {/* Experience/Education Section */}
                <section className='relative w-1/2 flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-bold text-gray-600'>Experience</h1>
                    <div className='flex flex-row items-center justify-center'>
                        <div className='experience-line'></div>
                        <p className=''>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}