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
            Simplify event planning with streamlined staff and auditorium management.
          </p>
          <div className="d-flex gap-3">
  <Link to="/staff">
    <button
      style={{
        marginTop: '20px',
        padding: '12px 30px',
        width: '160px', // Ensures both buttons have the same width
        fontSize: '18px',
        fontWeight: 'bold',
        borderRadius: '50px',
        border: '2px solid white', // Border color set to white
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white for blur effect
        color: 'white', // Text color set to white
        cursor: 'pointer',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)', // Adds shadow
        backdropFilter: 'blur(10px)', // Blurs the button background
        transition: 'all 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        e.target.style.transform = 'scale(1.05)';
        e.target.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.3)'; // Enhanced shadow on hover
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
      }}
    >
      Staff
    </button>
  </Link>

  <Link to="/auditorium">
    <button
      style={{
        marginTop: '20px',
        padding: '12px 30px',
        width: '160px', // Ensures both buttons have the same width
        fontSize: '18px',
        fontWeight: 'bold',
        borderRadius: '50px',
        border: '2px solid white', // Border color set to white
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white for blur effect
        color: 'white', // Text color set to white
        cursor: 'pointer',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)', // Adds shadow
        backdropFilter: 'blur(10px)', // Blurs the button background
        transition: 'all 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        e.target.style.transform = 'scale(1.05)';
        e.target.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.3)'; // Enhanced shadow on hover
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
      }}
    >
      Auditorium
    </button>
  </Link>
</div>





        </div>
      </div>

            <div style={{ padding: '40px', textAlign: 'center', backgroundColor: 'black' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px', color: '#ffffff' }}>Features</h2>
        <div
          style={{
            marginTop: '30px',
            display: 'flex',
            justifyContent: 'center',
            gap: '140px',
            flexWrap: 'wrap',
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              width: '300px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              backgroundColor: 'white',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              src="https://i.pinimg.com/originals/dd/52/4a/dd524a2a08b5ca9fb9fc89d985e629b3.jpg"
              alt="Staff Management Icon"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <h3 style={{ fontSize: '24px', margin: '10px 0' }}>Staff Management</h3>
              <p>Keep track of your event staff effortlessly.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              width: '300px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              backgroundColor: 'white',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              src="https://i2.wp.com/visit-twincities.com/wp-content/uploads/2016/08/0511_Meet004.jpg?fit=1500%2C998"
              alt="Auditorium Management Icon"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <h3 style={{ fontSize: '24px', margin: '10px 0' }}>Auditorium Management</h3>
              <p>Manage auditorium availability for your events.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{
              width: '300px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              backgroundColor: 'white',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              src="https://www.baliweddingprices.com/wp-content/uploads/2023/04/stress-free-wedding-celebration.jpg"
              alt="Streamlined Operations Icon"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <h3 style={{ fontSize: '24px', margin: '10px 0' }}>Streamlined Operations</h3>
              <p>All your event management needs in one place.</p>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Landing;
