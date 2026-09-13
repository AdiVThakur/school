import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// Import your logo image
import schoolLogo from '../assets/logo.png';

export default function Navbar() {
  const getNavLinkStyle = ({ isActive }) => ({
    color: isActive ? '#4f46e5' : 'var(--text-color, #334155)',
    fontWeight: isActive ? '700' : '500',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'all 0.2s ease',
    padding: '0.35rem 0.65rem',
    borderRadius: '0.5rem',
    backgroundColor: isActive ? 'rgba(79, 70, 229, 0.1)' : 'transparent',
    border: isActive ? '1px solid rgba(79, 70, 229, 0.2)' : '1px solid transparent',
    whiteSpace: 'nowrap'
  });

  return (
    <header 
      style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <nav 
        className="navbar glass-card" 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          width: '100%',
          padding: '0.5rem 1rem',
          boxSizing: 'border-box',
          gap: '0.4rem'
        }}
      >
        {/* LINE 1: Logo & School Name + Compact Action Button */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            width: '100%',
            paddingBottom: '0.35rem',
            borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
          }}
        >
          {/* Logo + School Name Container */}
          <Link 
            to="/" 
            className="logo" 
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
          >
            <img 
              src={schoolLogo} 
              alt="School Logo" 
              style={{ width: '36px', height: '36px', objectFit: 'contain' }} 
            />
            <span style={{ fontSize: '1.15rem', fontWeight: '700', color: '#4f46e5' }}>
              पीएमश्री जि.प. कन्या शाळा
            </span>
          </Link>

          {/* Reduced Size Action Button */}
          <Link 
            to="/contact" 
            className="btn-primary" 
            style={{ 
              textDecoration: 'none', 
              whiteSpace: 'nowrap',
              padding: '0.25rem 0.65rem',
              fontSize: '0.78rem',
              borderRadius: '0.375rem',
              lineHeight: '1.2'
            }}
          >
            प्रवेश घ्या
          </Link>
        </div>

        {/* LINE 2: Horizontal Links Row with Wrapping */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            width: '100%'
          }}
        >
          <ul 
            className="nav-links" 
            style={{ 
              display: 'flex', 
              gap: '0.4rem 0.6rem', 
              listStyle: 'none', 
              margin: 0, 
              padding: '0.1rem 0',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <li><NavLink to="/" end style={getNavLinkStyle}>मुख्य पृष्ठ</NavLink></li>
            <li><NavLink to="/about" style={getNavLinkStyle}>शाळेविषयी</NavLink></li>
            <li><NavLink to="/programs" style={getNavLinkStyle}>उपक्रम</NavLink></li>
            <li><NavLink to="/facilities" style={getNavLinkStyle}>सुविधा</NavLink></li>
            <li><NavLink to="/contact" style={getNavLinkStyle}>संपर्क</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}