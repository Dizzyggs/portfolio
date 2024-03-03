import React, { useEffect } from 'react';
import './LandingPage.scss';
import Container from './Container/Container';
import { motion } from "framer-motion"
import SideMenu from './SideMenu/SideMenu';
import Selfie from '../assets/images/selfie1.jpg';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import Icons from './Icons/Icons';
import { useWindowSize } from '../Hooks/useWindowSize';
import TopNavMenu from './TopNavMenu/TopNavMenu';

const LandingPage = () => {
  const isMobile = useWindowSize();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    })
  })

  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach((e) => observer.observe(e))

  return (
    <Container type='full' bg="#282c34">
      {!isMobile &&
        <TopNavMenu/>
      }
      <SideMenu/>
      <Container type="narrow">
        <motion.div
          className='content'
        >
          <div className="greetings">
            <div class="greetings-text">
              <h1>Front-End Developer</h1>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >Hi👋🏻, I'm <span style={{color: '#00f0b3'}}>Freddy Lundell</span>. A passionate Front-end developer based in Sweden, Norrköping.</motion.p>
              <div className='socials'>
               <Icons icon='linkedin' type='light'/>
               <Icons icon='github' type='light' spacingLeft/>
              </div>
              <br/>
              <p style={{color: '#00f0b3'}}>Tech Stack</p>
              <motion.div className='techstack'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Icons icon='javascript' type='light'/>
                <Icons icon='react' type='light'/>
                <Icons icon='ts' type='light'/>
                <Icons icon='html' type='light'/>
                <Icons icon='sass' type='light'/>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              // className='myAvatar'
            >
              <img src={Selfie} className='selfie1'/>
              {/* <Avatar size='2xl' name='Segun Adebayo' src={Selfie}/> */}
            </motion.div>
          </div>
      </motion.div>
      </Container>
    </Container>
  );
};

export default LandingPage;