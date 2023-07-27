import React from 'react'
import Skill from './Skill'
import { techStack } from '@/myutils/techStack'

type SkillCategoryProps = {
    category: string,
    skillList: string[],
    iconBg?: boolean
}

export default function SkillCategory({ category, skillList, iconBg=false }: SkillCategoryProps) {
    return (
        <div>
            <div className='flex flex-row space-x-4 items-center'>
                <p className='uppercase text-2xl w-40'>{category + ":"}</p>
                <div className='flex flex-row space-x-6'>
                    {
                        skillList?.map((skill, index) =>
                        {
                            return (
                                <div key={index}>
                                    <Skill
                                        iconSrc={techStack[skill].icon}
                                        hoverIconSrc={techStack[skill].iconWithTitle}
                                        altText={techStack[skill].altText}
                                        background={iconBg}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}