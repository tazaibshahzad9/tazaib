import React, { useState } from 'react'
import './Section/Home.css'
import { Link } from 'react-router-dom'
import Banner from '../../../Hoc/Banner'
import Img from '../../../Images/banner/home-right.png'
import { Image } from 'react-bootstrap';
import ProjectHistory from './Section/ProjectHistory'

function Home() {
    const [socialIcon, setSocialIcon] = useState(true)
    const [history, setHistory] = useState([
        {
            React_Project: ' React Project',
            Project_Num: 3

        },
        {
            React_Project: 'Mern Project',
            Project_Num: 2
        },
        {
            React_Project: 'Project Pending',
            Project_Num: 1

        }]
    )
    return (
        <section id="home" className="home_banner_area">
            <div className="banner_inner">
                <div className="container w-100 d-flex align-items-center" style={{ minHeight: 'inherit' }}>
                    <div className="row w-100 d-flex align-items-center mx-auto" style={{ minHeight: 'inherit' }}>
                        <div className="col-sm-10 col-md-7 mx-auto d-flex flex-column justify-content-between" style={{ minHeight: 'inherit' }}>
                            <div className="d-flex my-auto">
                                <div>
                                    <Banner title="" msg="hey there!!" heading="I Am Tazaib Shahzad" work="Physical Trainer" socialIcon={socialIcon} Fsize='50px' >
                                        <Link to="/portfolio" className="" style={{ color: 'white' }}>
                                            Download CV
                                        </Link>
                                    </Banner>
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className='ProjectCart-section d-flex justify-content-start my-4' style={{ justifyContent: 'start', padding: '60px 60px 0px 0px !important' }}>
                                {
                                    history.map((project, index) => {
                                        return <ProjectHistory key={index} project={project} />

                                    })
                                }

                            </div>
                        </div>
                        <div className="col-md-5 d-none d-md-block" style={{ padding: '4rem' }} >
                            <Image src={Img} fluid />
                        </div>
                    </div>
                </div>
            </div>

        </section>


    )

}

export default Home
