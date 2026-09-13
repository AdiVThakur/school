import React from 'react';
import { Link } from 'react-router-dom';

// Import logo from src/assets/logo.png
import schoolLogo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer 
      className="footer glass-card" 
      style={{ 
        width: '100%', 
        padding: '1.25rem 1rem 0.75rem 1rem', 
        boxSizing: 'border-box',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        background: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(12px)',
        marginTop: '3rem'
      }}
    >
      <div 
        className="footer-content"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          maxWidth: '1200px',
          margin: '0 auto',
          alignItems: 'center'
        }}
      >
        {/* Compact School Info Block */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
            <img 
              src={schoolLogo} 
              alt="School Logo" 
              style={{ width: '32px', height: '32px', objectFit: 'contain' }} 
            />
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700', color: '#f8fafc' }}>
              पीएमश्री जि.प. कन्या शाळा
            </h3>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.82rem', margin: 0, lineHeight: '1.4' }}>
            मुलींच्या सर्वांगीण विकासासाठी आणि उज्ज्वल भविष्यासाठी समर्पित.
          </p>
        </div>

        {/* Compact Contact Pill */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ 
            color: '#cbd5e1', 
            fontSize: '0.82rem', 
            margin: 0, 
            lineHeight: '1.4',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '0.5rem 0.85rem',
            borderRadius: '0.5rem',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            📍 <strong>पत्ता:</strong> नळेगाव, ता. चाकूर, जि. लातूर
          </p>
        </div>

        {/* Slim Horizontal Quick Links */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#38bdf8', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
            महत्त्वाचे दुवे
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.25rem' }}>
            <Link to="/about" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}>
              शाळेविषयी
            </Link>
            <Link to="/programs" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}>
              उपक्रम
            </Link>
            <Link to="/facilities" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}>
              सुविधा
            </Link>
            <Link to="/contact" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}>
              संपर्क व प्रवेश
            </Link>
          </div>
        </div>

      </div>

      {/* Subtle Copyright Bar */}
      <div 
        className="footer-bottom"
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          marginTop: '1rem',
          paddingTop: '0.6rem',
          textAlign: 'center',
          fontSize: '0.78rem',
          color: '#64748b'
        }}
      >
        © {new Date().getFullYear()} पीएमश्री जि.प. कन्या शाळा, नळेगाव. सर्व हक्क राखीव.
      </div>
    </footer>
  );
}