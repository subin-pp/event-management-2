import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: 'black', // Optional: Background color for the navbar
    display: 'flex',
    alignItems: 'center',
    padding: '0px 20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for the navbar
  };

  const logoStyle = {

    fontSize: '44px', // Font size for the text logo
    fontWeight:'1000',
    color: 'white', // Text color for the logo
    cursor: 'pointer',
    fontFamily: '"Tangerine", serif'
  }
  return (
    <div style={headerStyle}>
      <div
        style={logoStyle}
        onClick={() => window.location.href = '/'} 
      >
        EventEase
      </div>
    </div>
  );
};

export default Header;
