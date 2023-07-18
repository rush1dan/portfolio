import React from 'react'

type Props = {}

export default function About({ }: Props) {
    return (
        <div className='h-screen snap-center'>
            
            {/* Main Flex Container */}
            <div className='h-full p-24 flex flex-col items-center justify-start space-y-8'>
                
                {/* About Section */}
                <section className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-bold text-gray-600'>About</h1>
                    <p className='text-sm px-12'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </section>

                {/* Experience/Education Headings Section*/}
                <div className='w-full flex flex-col items-center justify-around md:flex-row'>
                    {/* Education Heading */}
                    <div>
                        <h1 className='text-3xl font-bold text-gray-600'>Education</h1>
                    </div>
                    {/* Experience Heading */}
                    <div>
                        <h1 className='text-3xl font-bold text-gray-600'>Experience</h1>
                    </div>
                </div>
                
                {/* Education/Experience Description Section */}
                <div className='bg-gray-600 w-1 h-[48rem] flex flex-col justify-around'>
                    <div className='bg-gray-600 w-12 h-1'>

                    </div>
                    <div className='bg-gray-600 w-12 h-1 -scale-x-100 -translate-x-12'>

                    </div>
                    <div className='bg-gray-600 w-12 h-1'>

                    </div>
                </div>
            </div>
        </div>
    )
}