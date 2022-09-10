import React from 'react'
import Socail_ICONS from '../Components/views/Home/Section/Socail_ICONS'
import TEXT from '../Styled_Component/styledHero'
import StyledHeading from '../Styled_Component/styledHeading'

function Banner({ children, title, msg, heading, work, socialIcon, details, Fsize, Mtop }) {

  let issocial = socialIcon;
  console.log(issocial);

  const renderAuthButton = () => {
    if (issocial) {
      return <Socail_ICONS />;
    } else {
      return <p></p>;
    }
  }
  return (
    <div className="banner d-flex flex-column  align-items-start">
      <p className='Sub_heading'>{title} <span></span></p>
      <TEXT Lspacing='2px' Lcase='uppercase' > {msg} </TEXT>
      <StyledHeading Fsize={Fsize}>{heading} </StyledHeading>
      <TEXT Lcase='camelCase' Mtop={Mtop}> {details} </TEXT>
      <h5 className='work'>{work}</h5>
      {renderAuthButton()}
      {children && <button className='primary_btn' style={{}}>
        {children}
      </button>}


    </div>
  )
}
Banner.defaultProps = {
  socialIcon: false
};

export default Banner
