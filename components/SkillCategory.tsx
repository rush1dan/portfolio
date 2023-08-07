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
    const iconSize: number = mediaQuery.lg ? 3.5 : (mediaQuery.md ? 2.5 : 1.75)
    console.log(iconSize)

    return (
        <div>
            <div className='flex flex-row space-x-4 items-center'>
                <p className='uppercase text-2xl w-40'>{category + ":"}</p>
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