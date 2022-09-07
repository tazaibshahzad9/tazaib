import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../../Hoc/Banner'
import About_Left_Section from './Section/About_Left_Section'
import About_Right_Section from './Section/About_Right_Section'
import './Section/About.css'
function About() {
    const [socialIcon, setSocialIcon] = useState(false)

    return (
        <section id='about' className="about_area mb-1">
            <div className="container">
                <div className="row">
                    <About_Left_Section />
                    <About_Right_Section data=''>
                        <Banner title="about me" msg="" heading="React Frontend Developer" work="" details="My name is Muhammad Tazaib Shahzad. I am FrontEnd React Developer.
                        My primary focus is development of UI components and implementing them following well-known ReactJS workflowsFunctional Components,LifeCyles,Hooks,Redux." socialIcon={socialIcon}
                            Fsize="40px" Mtop='1rem'
                        >
                            <a href='' style={{ color: 'white' }}>See My Work</a>
                        </Banner>
                    </About_Right_Section>
                </div>

            </div>

        </section>
    )
}

export default About
