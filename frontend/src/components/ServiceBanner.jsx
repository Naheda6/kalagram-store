import React from 'react';

const ServiceBanner = () => {
  const badgeStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.5rem',
    backgroundColor: '#ddd4caff',
    borderRadius: '12px',
    border: '2px solid transparent',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      padding: '3rem 1rem',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      {/* Free Delivery */}
      <div 
        style={badgeStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = '2px solid #D4A574';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(123, 75, 36, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = '2px solid transparent';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{
          minWidth: '60px',
          height: '60px',
          backgroundColor: '#e9884dff',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 17H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1" />
            <path d="M17 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        </div>
        <div>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#3B2A1B',
            marginBottom: '0.25rem',
          }}>
            Free Delivery
          </h3>
          <p style={{
            fontSize: '0.875rem',
            color: '#6B5B4F',
          }}>
            For all orders over ₹3500
          </p>
        </div>
      </div>

      {/* Safe Payment */}
      <div 
        style={badgeStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = '2px solid #D4A574';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(123, 75, 36, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = '2px solid transparent';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{
          minWidth: '60px',
          height: '60px',
          backgroundColor: '#e9884dff',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <div>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#3B2A1B',
            marginBottom: '0.25rem',
          }}>
            Safe Payment
          </h3>
          <p style={{
            fontSize: '0.875rem',
            color: '#6B5B4F',
          }}>
            100% secure payment
          </p>
        </div>
      </div>

      {/* Shop With Confidence */}
      <div 
        style={badgeStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = '2px solid #D4A574';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(123, 75, 36, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = '2px solid transparent';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{
          minWidth: '60px',
          height: '60px',
          backgroundColor: '#e9884dff',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" stroke="white" fill="none" />
            <path d="m9 12 2 2 4-4" stroke="white" />
          </svg>
        </div>
        <div>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#3B2A1B',
            marginBottom: '0.25rem',
          }}>
            Shop With Confidence
          </h3>
          <p style={{
            fontSize: '0.875rem',
            color: '#6B5B4F',
          }}>
            Safe and Secure Environment
          </p>
        </div>
      </div>

      {/* Dedicated Help Center */}
      <div 
        style={badgeStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = '2px solid #D4A574';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(123, 75, 36, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = '2px solid transparent';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{
          minWidth: '60px',
          height: '60px',
          backgroundColor: '#e9884dff',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
          </svg>
        </div>
        <div>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#3B2A1B',
            marginBottom: '0.25rem',
          }}>
            Dedicated Help Center
          </h3>
          <p style={{
            fontSize: '0.875rem',
            color: '#6B5B4F',
          }}>
            IST 9:30 AM to 6:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;