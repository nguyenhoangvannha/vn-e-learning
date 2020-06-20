import React, { useState } from 'react'
import skillsData from '../data/mock/skills-mock-data'

const SkillsContext = React.createContext()


const SkillsProvider = (props) => {

    const [skills, setSkills] = useState(skillsData)

    return (
        <SkillsContext.Provider
            value={{ skills, setSkills }}>
            {props.children}
        </SkillsContext.Provider>
    )
}

export {SkillsContext, SkillsProvider}