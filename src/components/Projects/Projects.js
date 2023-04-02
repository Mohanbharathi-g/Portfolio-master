import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import editor from '../../Assets/Projects/codeEditor.png';
import chatify from '../../Assets/Projects/chatify.png';

import bitsOfCode from '../../Assets/Projects/blog.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title='Blog app'
              description='The ReactJS Blog App is a modern web application designed for bloggers to create and publish their content online. The application was built using ReactJS and JavaScript, allowing for a fast and responsive user experience. It includes a user-friendly dashboard that allows bloggers to create, edit, and manage their blog content with ease. The application also includes a robust text editor that allows bloggers to format their posts with headings, images, links, and more.'
              ghLink='https://github.com/Mohanbharathi-g/blog-app-react.git'
              demoLink='https://heartfelt-gaufre-75abae.netlify.app'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title='Food delivery App'
              description='The ReactJS Food Delivery App is a modern web application designed for users to order food online from their favorite restaurants. The application was built using ReactJS and JavaScript, allowing for a fast and responsive user experience. It includes a user-friendly interface that allows users to search for restaurants, browse menus,and place the orders with ease. and  i used firebase for backend'
              ghLink='https://github.com/Mohanbharathi-g/react-food-delivery.git'
              demoLink='https://animated-pavlova-88b338.netlify.app'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title='Nike e-commerce App'
              description='The ReactJS Nike E-commerce App is a modern web application designed for users to shop online for Nike products. The application was built using ReactJS and JavaScript, allowing for a fast and responsive user experience. It includes a user-friendly interface that allows users to browse products, add items to their cart, and make purchases securely. The application also includes a local storage functionality that allows users to save their cart items even if they close the app or switch devices.e'
              ghLink='https://github.com/Mohanbharathi-g/e-commerce-react-js.git'
              demoLink='https://aquamarine-valkyrie-990d6d.netlify.app'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
