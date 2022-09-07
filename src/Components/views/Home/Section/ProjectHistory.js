import { Divider, FormHelperText } from '@material-ui/core';
import React from 'react'
import { CardColumns } from 'react-bootstrap';

function ProjectHistory({project}) {
    
    console.log(project);
    return (
       <div className="d-flex flex-column align-item-center historyStyling" >
           <strong className='msg' style={{fontWeight:'800'}}> 
               {project.Project_Num}
           </strong>
           <p className='msg' style={{ fontSize:'14px'}}>
               {project.React_Project}
           </p>

       </div>
    )
}

export default ProjectHistory
