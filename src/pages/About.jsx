import React, { useRef, useState } from 'react';

import schoolVideo from '../assets/schoolpic/schoolvid.mp4';
import vidCover from '../assets/schoolpic/vidcover.png';

export default function About() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      if (total > 0) {
        setProgress((current / total) * 100);
      }
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current && videoRef.current.duration) {
      const seekTime = (e.target.value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
      setProgress(e.target.value);
    }
  };

  return (
    <div className="page-container" style={{ padding: '1rem', width: '100%', boxSizing: 'border-box' }}>
      {/* Header Section */}
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>पीएमश्री जि.प. कन्या शाळा, नळेगाव</h1>
        <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}>गुणवत्तापूर्ण शिक्षण आणि उज्ज्वल भविष्याची भक्कम पायाभरणी</p>
      </div>

      {/* Video Section */}
      <div style={{ margin: '1.5rem 0', display: 'flex', justifyContent: 'center', width: '100%' }}>
        <div 
          className="glass-card" 
          style={{ 
            width: '100%', 
            maxWidth: '900px', 
            borderRadius: '1rem', 
            overflow: 'hidden', 
            padding: '0.75rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            boxSizing: 'border-box'
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-color, #1e293b)', fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}>
            📹 शाळा परिचय व्हिडियो (School Overview Video)
          </h2>

          {/* Player Frame */}
          <div 
            style={{ 
              position: 'relative', 
              width: '100%', 
              height: 'clamp(300px, 50vh, 480px)', 
              backgroundColor: '#000000', 
              borderRadius: '0.75rem', 
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Rotated Video Container */}
            <div style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <video 
                ref={videoRef}
                onTimeUpdate={handleTimeUpdate}
                poster={vidCover}
                playsInline
                style={{ 
                  width: '100%',
                  height: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  transform: 'rotate(-90deg)',
                  transformOrigin: 'center center'
                }}
              >
                <source src={schoolVideo} type="video/mp4" />
                आपला ब्राऊझर व्हिडियो प्ले करण्यास सक्षम नाही.
              </video>
            </div>

            {/* Flat Horizontal Custom Controls Bar */}
            <div 
              style={{ 
                height: '50px', 
                backgroundColor: 'rgba(15, 23, 42, 0.95)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                padding: '0 1rem',
                zIndex: 10
              }}
            >
              <button 
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  padding: '0.25rem'
                }}
              >
                {isPlaying ? '❚❚' : '▶'}
              </button>

              <input 
                type="range" 
                min="0" 
                max="100" 
                value={progress || 0} 
                onChange={handleSeek}
                style={{ flex: 1, cursor: 'pointer', accentColor: '#2563eb' }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Responsive Cards Grid */}
      <div 
        className="cards-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}
      >
        <div className="card glass-card" style={{ padding: '1.25rem', borderRadius: '1rem' }}>
          <div className="card-icon" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
          <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>आमचे उद्दिष्ट (Our Mission)</h3>
          <p className="card-desc" style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.5' }}>
            प्रत्येक विद्यार्थिनीला दर्जेदार शिक्षण देऊन तिच्यातील सुप्त गुणांचा विकास करणे आणि तिला स्वावलंबी व सक्षम बनवणे.
          </p>
        </div>

        <div className="card glass-card" style={{ padding: '1.25rem', borderRadius: '1rem' }}>
          <div className="card-icon" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👁️</div>
          <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>आमचा दृष्टिकोन (Our Vision)</h3>
          <p className="card-desc" style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.5' }}>
            आधुनिक तंत्रज्ञान, मूल्यशिक्षण आणि नावीन्यपूर्ण उपक्रमांच्या माध्यमातून गुणवत्तेचे केंद्र म्हणून ओळख निर्माण करणे.
          </p>
        </div>

        <div className="card glass-card" style={{ padding: '1.25rem', borderRadius: '1rem' }}>
          <div className="card-icon" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⭐</div>
          <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>मूल्ये (Core Values)</h3>
          <p className="card-desc" style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.5' }}>
            प्रमाणिकपणा, उत्कृष्टता, समानता, नवोपक्रम आणि प्रत्येक विद्यार्थिनीच्या शैक्षणिक प्रवासाचा आदर.
          </p>
        </div>
      </div>
    </div>
  );
}