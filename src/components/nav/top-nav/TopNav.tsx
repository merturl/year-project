import React from 'react';

import './TopNav.css';

interface Props {
  
}

const TopNav: React.FC<Props> = props => {
  return (
    <div className='top-nav'>
      <p>Style Trasnfer by cycleGAN</p>
    </div>
  )
}

export default TopNav;
