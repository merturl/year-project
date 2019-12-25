import React from 'react';
import { FaGithub } from "react-icons/fa";
import './TopNav.css';

interface Props {
  
}

const TopNav: React.FC<Props> = props => {
  return (
    <div className='top-nav'>
      <div className='top-nav-logo'>
        <FaGithub/>
      </div>
      <p>Style Trasnfer by cycleGAN</p>
    </div>
  )
}

export default TopNav;
