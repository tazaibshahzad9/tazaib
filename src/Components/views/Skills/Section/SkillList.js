import React from "react";
import ReactDOM from "react-dom";
import Carousel, { consts } from "react-elastic-carousel";
import 'react-multi-carousel/lib/styles.css';
import Item from "../../../../Styled_Component/styledCrousal";
import { Image} from 'react-bootstrap';
import Img from '../../../../Images/services/s1.png'
import Img2 from '../../../../Images/services/s3.png'

import TEXT from '../../../../Styled_Component/styledHero'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },    
  ];
const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? '<' : '>'
    return (
      <button style={{borderRadius:'50%' , height:'auto'}} onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }
  
const skillsData = [
    {
        img: Img,
        skill: 'Web Development',
        detail: 'Design a website is a most important part of building a online business & I do it professionally',
        href:'#'
    },
    {
        img: Img2,
        skill: 'React JS',
        detail: 'React makes it painless to create interative UIs. Design view for each state in your application',
        href:'#'
    },
    {
        img: Img,
        skill: 'PSD to React',
        detail: 'Slicing PSD to React with proper way is a very important thing & I do it most efficient way.',
        href:'#'
    },
    {
        img: Img,
        skill: 'Material UI Styles',
        detail: 'Material UI styling is inspired by many other styling libraries such as styled-components and emotion',
        href:'#'
    },
    {
        img: Img,
        skill: 'Js Media Query',
        detail: 'Using media queries are a popular technique of delivering a Responsive style sheet to any screen (such as iPhone and Android phones).',
        href:'#'
    },
    {
        img: Img,
        skill: 'Flexbox-Grid',
        detail: 'Flexbox & Grid Layout module makes it easier to design flexible responsive layout structure without using float or positioning.',
        href:'#'
    },
    {
        img: Img,
        skill: 'Mern Stack Projects',
        detail: 'The MERN stack is becoming increasingly popular and is a powerful stack to work in. MERN consists of different open-source components: MongoDB, Express, React, and Node..',
        href:'#'
    },
    {
        img: Img,
        skill: 'Firebaase Database',
        detail: 'The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client.',
        href:'#'
    },
    {
        img: Img,
        skill: 'Mongo Db',
        detail: 'a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is a source-available cross-platform document-oriented database program',
        href:'#'
    },
]
function SkillList() {
    return (
        <div className="container-fluid px-md-5  skil-list-area">
           <div className="row skills mt-0 px-md-5" >
                <Carousel breakPoints={breakPoints}  transitionMs='1500' renderArrow={myArrow}>
                    {
                        skillsData.map((item, index) => {
                            return <Item key={index} className="skills_DIV">
                                    <div className='skills_box'>
                                        <Image src={item.img} fluid />
                                        <h4 className="mt-3 mt-md-5">{item.skill}</h4>
                                        <TEXT Mtop='13px' className="text" style={{color:'#797979', lineHeight:'1.5'}}>{item.detail}</TEXT>
                                        <a href={item.href} className='primary_btn2 mt-4'>Learn more</a>
                                    </div>
                            </Item>
                        })
                    }
                    
                </Carousel>
            </div>
        </div>
    )
}

export default SkillList
