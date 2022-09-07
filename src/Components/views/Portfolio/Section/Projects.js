import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import AllProject from "./AllProject";
import { Image } from "react-bootstrap";
import RWImg1 from "../../../../Images/portfolio/p7.jpg";
import RWImg2 from "../../../../Images/portfolio/p9.jpg";
import RWImg3 from "../../../../Images/portfolio/p10.jpg";
import MSPImg1 from "../../../../Images/portfolio/p8.jpeg";
import MSPImg2 from "../../../../Images/portfolio/p9.jpg";

const projects = [
  {
    img: MSPImg1,
    tech: "Mern Stack Website",
    ProjName: "Mern Stack Ecommerce Website",
    href: "",
    slug: "Mern",
  },
  {
    img: RWImg2,
    tech: "ReactJs Website",
    ProjName: "Beach Resort (Room Booking)",
    href: "https://mshahbaz858.github.io/BeachResort/",
    slug: "React",
  },
  {
    img: RWImg1,
    tech: "ReactJs Website",
    ProjName: "Mobile Ecommerce Website",
    href: "https://mshahbaz858.github.io/store-recording/",
    slug: "React",
  },

  {
    img: RWImg3,
    tech: "ReactJs Website",
    ProjName: "IQ test Website",
    href: "#",
    slug: "React",
  },

  {
    img: MSPImg2,
    tech: "Mern Stack Website",
    ProjName: "Mern Ecommerce",
    href: "#",
    slug: "Mern",
  },
];

function Projects() {
  const [key, setKey] = useState("allProjects");
  const [reactProj, setReactProj] = useState([]);
  const [merntProj, setMernProj] = useState([]);

  React.useEffect(() => {
    console.log("harami");
    try {
      let tempreactProj = projects.filter(
        (project) => project.slug === "React"
      );
      setReactProj(tempreactProj);
      let tempmernProj = projects.filter((project) => project.slug === "Mern");
      setMernProj(tempmernProj);
    } catch (e) {
      console.log(e);
    }
  }, [projects]);

  return (
    <div className="row">
      <div className="col-12 col-md-12 px-md-5">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="allProjects" title="All Projects">
            <AllProject projects={projects} />
          </Tab>
          <Tab eventKey="React" title="React Projects">
            <AllProject projects={reactProj} />
          </Tab>
          <Tab eventKey="Mern" title="Mern Projects">
            <AllProject projects={merntProj} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Projects;
