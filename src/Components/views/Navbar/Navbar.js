import React from 'react'
import { Navbar,Nav, NavDropdown, Image} from 'react-bootstrap';
import Scrollspy from 'react-scrollspy'
import './Section/Navbar.css'
import { makeStyles } from '@material-ui/core/styles';
// import logoNew from '../../../Images/logo.png'
import logoNew from '../../../Images/yyy.png'


// METERIAL Styling Applying
const useStyles = makeStyles({
  navbar:{
    display:'flex',
    justifyContent: 'space-between',
    backgroundColor:'red'
  },
  scrollUL:{
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media screen and (max-width: 768px)':{
        flexDirection: 'column',
        height: '70vh',
        justifyContent: 'space-around',
    }
},
scrollActive:{
    
    borderRadius:10,
    display:'flex',
    transition:'.5s ease-out'
}
})

function Navbar_com() {
  const classes = useStyles();
  return (
<header className=' header_area' id='navbar'>
           <div className='container'>

    <Navbar collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand href="#home" >
     <Image src={logoNew} />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="mr-auto">
    <Scrollspy items={ ['home','about','skills','portfolio','contact'] } 
                          currentClassName={classes.scrollActive} className={classes.scrollUL}
                          className="navbar-nav"
                          >   
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>

      
    </Scrollspy>

    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</div>
</header>
  )
}

export default Navbar_com
