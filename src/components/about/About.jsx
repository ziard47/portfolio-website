import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" className='imageSize'/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>70+ Completed</small>
            </article>
          </div>

          <p>
            Hello, I'm Mohomed Ziard, a UI Designer and Software Developer with three years of experience in UI design and one year of experience in software development. Currently pursuing a BSc Hons in Software Engineering, I am passionate about creating visually appealing interfaces that prioritize user-friendly experiences. With a strong attention to detail and a commitment to delivering high-quality work, I bridge the gap between aesthetics and functionality. I'm eager to contribute my skills to innovative projects in the field of software engineering.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  );
};

export default About;
