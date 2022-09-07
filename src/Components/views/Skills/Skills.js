import React from 'react'
import './Section/Skills.css'
import Banner from '../../../Hoc/Banner'
import SkillList from './Section/SkillList'
function Skills() {
    return (
        <section id='skills' className='skills_area mt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5">
                    <Banner title="Skills" msg="" heading="OUR AFFORDABLE SKILLS" work="" details="" socialIcon=''
                        Fsize="40px" Mtop='1rem'>
                    </Banner>
                    </div>
                </div>
            </div>
            <SkillList/>
        </section>
    )
}

export default Skills
