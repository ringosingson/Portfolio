import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"

import styled from "styled-components"
import { projectsList } from "../components/projects/projectData"
import ProjectShowcase from "../components/projects/ProjectShowcase"
//import posed from 'react-pose';

const ProjectGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 3vmin;
  justify-items: center;
`

const Header = styled.div`
  grid-column: 1 / -1;
  margin-top: 1em;
  margin-bottom: 0.5em;
  font-size: 8vh;
  font-weight: bold;
  font-family: "Lato", "Cabin", "Ubuntu", sans-serif;

  @media only screen and (max-width: 976px) {
    margin-top: 2em;
  }

  @media only screen and (max-width: 554px) {
    margin-top: 2.7em;
    font-size: 4vh;
  }
`

class ProjectsPage extends React.Component {
  render() {
    return (
      <Layout>
        <ProjectGrid>
          <Header>Featured Projects</Header>

          {projectsList.map((project, i) => (
            <ProjectShowcase key={i} id={i} project={project} />
          ))}
        </ProjectGrid>
      </Layout>
    )
  }
}

export default ProjectsPage
