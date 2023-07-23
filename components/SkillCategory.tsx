import React from 'react'
import Skill from './Skill'

type SkillCategoryProps = {
    category: string,
    skillIconDir: string,
    skillList: string[][],
    iconBg?: boolean
}

export default function SkillCategory({ category, skillIconDir, skillList, iconBg=false }: SkillCategoryProps) {
    return (
        <div>
            <div className='flex flex-row space-x-4 items-center'>
                <p>{category + ":"}</p>
                <div className='flex flex-row space-x-6'>
                    {
                        skillList?.map((skillSrcAlt, index) =>
                        {
                            return (
                                <div key={index}>
                                    <Skill
                                        iconSrc={skillIconDir + skillSrcAlt[0]}
                                        altText={skillSrcAlt[1]}
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