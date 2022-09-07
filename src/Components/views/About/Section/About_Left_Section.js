import React from 'react'
import Img from '../../../../Images/about_us.png'
import { Image} from 'react-bootstrap';

function About_Left_Section() {
    return (
        <div className="col-10 mx-auto col-lg-5">
            <Image src={Img} fluid />
        </div>
    )
}

export default About_Left_Section
