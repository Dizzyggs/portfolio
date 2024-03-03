import React from 'react';
import './ComingSoon.scss';
import Container from '../Container/Container';
import TopNavMenu from '../TopNavMenu/TopNavMenu';
import { useWindowSize } from '../../Hooks/useWindowSize';
import SideMenu from '../SideMenu/SideMenu';

const ComingSoon = () => {
  const isMobile = useWindowSize();
  return (
    <Container type='full' bg="#282c34">
      {
        !isMobile ? <TopNavMenu/> :
        <SideMenu/>
      }
    <div class="comingsoon">
      <h2>🛠️🚧 This part of the portfolio is under construction! 🚧🛠️</h2>
      <p>Coming soon.</p>
      {isMobile && <a href='/devportfolio'>Go back to Home</a>}
    </div>
    </Container>
  );
};

export default ComingSoon;