import React from 'react'
import Skill from './Skill'

type SkillCategoryProps = {
    category: string,
    skillIconDir: string,
    skillList: string[][]
}

export default function SkillCategory({ category, skillIconDir, skillList }: SkillCategoryProps) {
    return (
        <div>
            <div className='flex flex-row space-x-4'>
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