import React from 'react'
import Tech from './Tech'
import { techStack } from '@/myutils/techStack'
import { AnimateableComponentProps } from './AnimateOnView'
import { backOut, motion } from 'framer-motion'

type SkillCategoryProps = AnimateableComponentProps & {
    category: string,
    skillList: string[],
    iconBg?: boolean
}

export default function SkillCategory({ category, skillList, iconBg = false, animationControls }: SkillCategoryProps) {
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
                                        width={3.5}
                                        height={3.5}
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