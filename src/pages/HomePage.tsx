import React from 'react';
import TopNav from '~/components/nav/top-nav/TopNav';
import BottomNav from '~/components/nav/bottom-nav/BottomNav';
import TransferContainer from '~/components/transfer/Transfer';
import Main from '~/components/main/main';

const HomePage = () => {

  return (
    <>
      <TopNav />
      <Main>
        <TransferContainer />
        <ul>
          <li>
            <p>Explain Something</p>
          </li>
          <li>
            <p>Explain Something</p>
          </li>
          <li>
            <p>Explain Something</p>
          </li>
          <li>
            <p>Explain Something</p>
          </li>
          <li>
            <p>Explain Something</p>
          </li>
          <li>
            <p>Explain Something</p>
          </li>
        </ul>
      </Main>
      <BottomNav />
    </>
  );
}

export default HomePage 
