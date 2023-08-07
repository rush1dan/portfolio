import React from 'react'
import Tech from './Tech'
import { techStack } from '@/myutils/techStack'
import { AnimateableComponentProps } from './AnimateOnView'
import { motion } from 'framer-motion'
import { MediaQueryDefault } from '@/myutils/defaultMediaQueries'

type SkillCategoryProps = AnimateableComponentProps & {
    category: string,
    skillList: string[],
    mediaQuery: MediaQueryDefault,
    iconBg?: boolean
}

export default function SkillCategory({ category, skillList, mediaQuery, iconBg = false, animationControls }: SkillCategoryProps) {
    const iconSize: number = mediaQuery.lg ? 3.5 : (mediaQuery.md ? 3 : 2.5);
    const categoryHeaderSizeClass: string = mediaQuery.lg ? 'text-2xl' : (mediaQuery.md ? 'text-xl' : 'text-base');

    return (
        <div>
            <div className='flex flex-row space-x-4 items-center'>
                <p className={`uppercase font-medium ${categoryHeaderSizeClass} w-[6.5rem] lg:w-40 md:w-32`}>{category + ":"}</p>
                <div className='flex flex-row space-x-6'>
                    {
                        skillList?.map((skill, index) => {
                            return (
                                <motion.div key={index}
                                    variants={{
                                        hidden: {
                                            scale: 0,
                                        },
                                        visible: {
                                            scale: 1,
                                        }
                                    }}
                                    initial="hidden"
                                    animate={animationControls}
                                    transition={{ delay: 0.125 * index, duration: 0.25, ease: 'backOut' }}
                                >
                                    <Tech
                                        iconSrc={techStack[skill].icon}
                                        hoverIconSrc={techStack[skill].iconWithTitle}
                                        altText={techStack[skill].altText}
                                        width={iconSize}
                                        height={iconSize}
                                        background={iconBg}
                                    />
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}