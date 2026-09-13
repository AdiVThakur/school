import React from 'react';

// Import facility images
import digitalLabImg from '../assets/facilities/digital_lab.png';
import scienceLabImg from '../assets/facilities/science_lab.png';
import sangit from '../assets/facilities/sangit.png';
import sportsImg from '../assets/facilities/sports.png';
// import nutritionImg from '../assets/facilities/nutrition.png';
// import cctvImg from '../assets/facilities/cctv.png';

export default function Facilities() {
  const facilities = [
    { 
      icon: "💻", 
      imageSrc: digitalLabImg,
      title: "डिजिटल वर्गखोल्या व संगणक कक्ष (Digital Labs)", 
      desc: "ज्ञानरचनावादी शिक्षण व डिजिटल साक्षरतेसाठी आधुनिक संगणक आणि एल.ई.डी. स्क्रीन सुविधा." 
    },
    { 
      icon: "🔬", 
      imageSrc: scienceLabImg,
      title: "विज्ञान व गणित प्रयोगशाळा (Science & Math Lab)", 
      desc: "विद्यार्थिनींच्या प्रत्यक्ष प्रयोगांद्वारे शिकण्यासाठी सुसज्ज विज्ञान व गणित पेटी सुविधा." 
    },
    { 
      icon: "🎵", 
      imageSrc: sangit,
      title: "संगीत व कला कक्ष (Music & Arts Room)", 
      desc: "विद्यार्थिनींमधील सुप्त कलागुणांना वाव देण्यासाठी संगीत आणि गायन-वादन सुविधा." 
    },
    { 
      icon: "🏆", 
      imageSrc: sportsImg,
      title: "क्रीडा व क्रीडांगण (Sports Facilities)", 
      desc: "खो-खो, लंगडी, धावणे व विविध मैदानी खेळांसाठी सुरक्षित व भव्य क्रीडांगण." 
    },
    // { 
    //   icon: "🥛", 
    //   imageSrc: nutritionImg,
    //   title: "पोषण आहार व स्वच्छता (Nutrition & Cleanliness)", 
    //   desc: "ताजा, पौष्टिक मध्यान्ह भोजन (PM POSHAN) आणि शुद्ध पिण्याच्या पाण्याची सोय." 
    // },
    // { 
    //   icon: "📹", 
    //   imageSrc: cctvImg,
    //   title: "सुरक्षित परिसर व CCTV (Safe Campus)", 
    //   desc: "विद्यार्थिनींच्या सुरक्षेसाठी संपूर्ण परिसर CCTV कॅमेऱ्यांच्या देखरेखीत." 
    // }
  ];

  return (
    <div className="page-container" style={{ padding: '1rem', width: '100%', boxSizing: 'border-box' }}>
      {/* Header Section */}
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '0.5rem' }}>
          शालेय सुविधा (Campus Facilities)
        </h1>
        <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', color: '#475569' }}>
          पीएम.श्री. जिल्हा परिषद कन्या प्राथमिक शाळा, नळेगाव
        </p>
      </div>

      {/* Responsive Grid */}
      <div 
        className="cards-grid" 
        style={{ 
          marginTop: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {facilities.map((item, idx) => (
          <div 
            className="card glass-card" 
            key={idx} 
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              padding: '1.25rem', 
              borderRadius: '1rem',
              height: '100%',
              boxSizing: 'border-box'
            }}
          >
            {/* Display Image if available, else fallback to Emoji */}
            {item.imageSrc ? (
              <div 
                style={{ 
                  width: '100%', 
                  height: 'clamp(180px, 30vh, 240px)', 
                  borderRadius: '0.75rem', 
                  overflow: 'hidden', 
                  backgroundColor: '#0f172a',
                  marginBottom: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={item.imageSrc} 
                  alt={item.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain' 
                  }} 
                />
              </div>
            ) : (
              <div 
                className="card-icon" 
                style={{ 
                  height: 'clamp(180px, 30vh, 240px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem', 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '0.75rem',
                  marginBottom: '0.85rem' 
                }}
              >
                {item.icon}
              </div>
            )}

            <h3 className="card-title" style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)', marginBottom: '0.4rem' }}>
              {item.title}
            </h3>
            <p className="card-desc" style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.5' }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}