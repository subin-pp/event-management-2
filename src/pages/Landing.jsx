import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'url(https://th.bing.com/th/id/R.363d52b9e01c9f3411b4a5a7bafdfb7f?rik=%2fo%2bf71u6H03pDg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2ffuIWAn6.jpg&ehk=R7POkHMnSasykzdFDS423MhxOc%2ffBuW6Haan9QwS8fs%3d&risl=&pid=ImgRaw&r=0)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          position: 'relative',
        }}
      >

        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>EventEase</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px' }}>
            Simplify event planning with streamlined staff management.
          </p>
          <div className="d-flex gap-3">
  <Link to="/staff">
    <button
      style={{
        marginTop: '20px',
        padding: '12px 30px',
        width: '160px', 
        fontSize: '18px',
        fontWeight: 'bold',
        borderRadius: '50px',
        border: '2px solid white',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', 
        color: 'white', 
        cursor: 'pointer',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)', 
        backdropFilter: 'blur(10px)', 
        transition: 'all 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        e.target.style.transform = 'scale(1.05)';
        e.target.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.3)'; 
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
      }}
    >
      Get Start
    </button>
  </Link>

  
   </div>
      </div>
      </div>

      <div style={{ padding: '40px', textAlign: 'center', backgroundColor: 'black' }}>
  <h2 style={{ fontSize: '36px', marginBottom: '20px', color: '#ffffff' }}>
    Staff Management Features
  </h2>
  <p style={{ fontSize: '18px', color: '#ddd', marginBottom: '40px' }}>
    Efficiently manage your staff details for events. Add, update, and delete staff data with ease.
  </p>
  <div
    style={{
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'center',
      gap: '140px',
      flexWrap: 'wrap',
    }}
  >
    {/* Card 1: Staff Details Add */}
    <div
      style={{
        width: '300px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#2e7d32', // Darker green
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h3 style={{ fontSize: '24px', margin: '10px 0' }}>Add Staff Details</h3>
      <p>Efficiently add new staff details for your events.</p>
    </div>

    {/* Card 2: Staff Details Update */}
    <div
      style={{
        width: '300px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#f57c00', // Darker orange
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h3 style={{ fontSize: '24px', margin: '10px 0' }}>Update Staff Details</h3>
      <p>Quickly update existing staff information for your events.</p>
    </div>

    {/* Card 3: Staff Details Delete */}
    <div
      style={{
        width: '300px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#d32f2f', // Darker red
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h3 style={{ fontSize: '24px', margin: '10px 0' }}>Delete Staff Details</h3>
      <p>Remove staff details when no longer needed for your events.</p>
    </div>
  </div>
</div>




    </div>
  );
};

export default Landing;
