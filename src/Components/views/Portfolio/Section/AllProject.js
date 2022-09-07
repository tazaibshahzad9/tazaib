import React, { useState } from 'react'
import { Image} from 'react-bootstrap';

function AllProject({projects}) {
    
    return (
        <div className='container my-3'>
            <div className="row">
               

               {projects.map((project, index) =>{
                            return (
                            <div className="col-12 mx-auto mx-md-0 col-md-4 my-3 px-md-4">
                                <div class=' p-2 d-flex flex-column perject-info-div' style={{minHeight:'23.5rem', position:'relative'}}>
                                     <Image src={project.img} style={{height:'220px', width:'inherit'}} />
                                     <strong className='mt-3'>{project.ProjName}</strong>
                                     <text className='my-1'>{project.tech}</text>
                                     <text className='mb-2 mb-md-3 d-flex justify-content-end mr-md-2'> <a href={project.href} target='_blank'>View Project</a>   </text>
                                     
                                </div>
                            </div>
                            )
               })}

              
            </div>
        </div>
    )
}

export default AllProject
