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
                        <Banner title="about me" msg="" heading="Personal Trainer" work="" details="My name is Tazaib Shahzad. I am Physical Trainer.
                        Great Trainers are great listeners, analysts and motivators who put their clients results first and foremost. Great Trainers recognise and adapt to the needs of the client and are flexible and creative enough to deal with any goal, barrier, aspiration and dream. We have delivered more than one million hours of personal training as a company. We know how to get results from everybody." socialIcon={socialIcon}
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
