import React from 'react'
// import Img from '../../../Images/logo2.png'
import Img from '../../../Images/yyy.png'
import { Image } from 'react-bootstrap';
import './Section/Footer.css'
import { useState } from 'react';
function Footer() {
    const [icons, setIcons] = useState([
        {
            link: 'https://www.facebook.com/shahbaz.naseer.73/',
            icon: <i class="fab fa-facebook-f"></i>
        },
        {
            link: 'https://twitter.com/Muhamma79165585',
            icon: <i class="fab fa-twitter"></i>
        },
        {
            link: 'skype:mshahbaz858..,,!!?userinfo',
            icon: <i class="fab fa-skype"></i>
        },
        {
            link: 'https://api.whatsapp.com/send?phone=03335179911',
            icon: <i class="fab fa-whatsapp" aria-hidden="true"></i>
        }
    ])
    return (
        <div id='Footer_area' className='container-fluid Footer_area mt-5 mb-0' >
            <div className="row d-flex justify-content-center flex-column m-auto">
                <div className="col-12 col-md-4 d-flex justify-content-center flex-column m-auto text-center align-items-center">
                    {/* <Image src={Img} style={{ height: 'fit-content', width: 'fit-content' }} /> */}
                    <div className='logo-style'>LOGO</div>
                    <div className="d-flex justify-content-center Footer-links py-5">
                        <a href="#home" className='px-3'>Home</a>
                        <a href="#contact" className='px-3'>Contact</a>
                    </div>

                    <div className="social-icons ">
                        {
                            icons.map((item, index) => {
                                return <a key={index} href={item.link} target="_blank" className='px-3'> {item.icon}</a>
                            })
                        }
                    </div>

                    <p className='pt-5'>Copyright ©2021 All rights reserved | For more <i class="fas fa-heart"> </i> <p>Tazaib Shahzad</p>  </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
