import React, { useState } from 'react';
import NavTabs from './NavTabs/index';
import About from './pages/About/index';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume/index';
import Contact from './pages/Contact/index';

function PortfolioNav() {
  // Using useState, set the default value for currentPage to 'About'
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default PortfolioNav;
