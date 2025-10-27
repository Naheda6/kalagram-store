import React from 'react';
import TopBar from './TopBar';
import MainHeader from './MainHeader';
import Navigation from './Navigation';

const BacolaHeader = ({ cartCount = 0, wishlistCount = 0 }) => {
  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <MainHeader cartCount={cartCount} wishlistCount={wishlistCount} />
      <Navigation />
    </header>
  );
};

export default BacolaHeader;