import React from 'react'
import './Section/Portfolio.css'
import Banner from '../../../Hoc/Banner'
import Projects from './Section/Projects'
function Portfolio() {
    return (
        <section id='portfolio' className='portfolio_area mt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5">
                    <Banner title="Portfolio" msg="" heading="My All projects " work="" details="" socialIcon=''
                        Fsize="40px" Mtop='1rem'>
                    </Banner>
                    </div>
                </div>
                <Projects/>
            </div>
        </section>
    )
     }

export default Portfolio
