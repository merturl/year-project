import React from 'react';
import './Main.css';

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = props => {
  const { children } = props;

  return (
    <div className={"main"}>
      {children}
    </div>
  );
}

export default Main;
