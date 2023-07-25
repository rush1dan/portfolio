import React from 'react'
import Skill from './Skill'

type SkillCategoryProps = {
    category: string,
    skillIconDir: string,
    skillHoverIconDir: string,
    skillList: string[][],
    iconBg?: boolean
}

export default function SkillCategory({ category, skillIconDir, skillHoverIconDir, skillList, iconBg=false }: SkillCategoryProps) {
    return (
        <div>
            <div className='flex flex-row space-x-4 items-center'>
                <p className='uppercase text-2xl w-40'>{category + ":"}</p>
                <div className='flex flex-row space-x-6'>
                    {
                        skillList?.map((skillInfos, index) =>
                        {
                            return (
                                <div key={index}>
                                    <Skill
                                        iconSrc={skillIconDir + skillInfos[0]}
                                        altText={skillInfos[1]}
                                        hoverIconSrc={(skillInfos[4] ? skillIconDir : skillHoverIconDir) + skillInfos[2]}
                                        hoverIconAltText={skillInfos[3]}
                                        hoverTitle={skillInfos[4]}
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