import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import local images from src/assets/schoolpic/
import schoolBuilding from '../assets/schoolpic/building.png';
import ailab from '../assets/schoolpic/ailab.jpeg';
import rocket from '../assets/schoolpic/rocket.png';

// Import Headmaster & Faculty images (Adjust paths/filenames as needed)
import headmasterPic from '../assets/schoolpic/headmaster.png';
import facultyGroupPic from '../assets/schoolpic/faculty_group.png';

export default function Home() {
  // Array of local school images for the slider
  const heroImages = [
    {
      url: schoolBuilding,
      caption: "शाळा इमारत व भव्य परिसर"
    },
    {
      url: ailab,
      caption: "डिजिटल वर्ग अध्यापन"
    },
    {
      url: rocket,
      caption: "रॉकेट तंत्रज्ञान"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div style={{ minHeight: '100vh', padding: '1.5rem 1rem', background: 'linear-gradient(135deg, #fff7ed 0%, #f8fafc 50%, #fef3c7 100%)', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Responsive Hero Section */}
        <section style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', padding: '1rem 0' }}>

          {/* Left Hero Content */}
          <div style={{ flex: '1 1 300px', width: '100%' }}>
            <span style={{ display: 'inline-block', backgroundColor: '#ffedd5', color: '#c2410c', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem', border: '1px solid #fed7aa' }}>
              ✨ गुणवत्तेची नवी दिशा | पीएमश्री शाळा
            </span>

            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '800', color: '#0f172a', lineHeight: '1.2', margin: '0.5rem 0' }}>
              <span style={{ display: 'block', color: '#ea580c', fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}>
                पीएमश्री
              </span>
              जि.प. कन्या प्राथमिक शाळा, नळेगाव
            </h1>

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: '600', color: '#92400e', marginBottom: '1rem' }}>
              ता. चाकूर, जि. लातूर
            </p>

            <p style={{ color: '#475569', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: '1.6', marginBottom: '2rem' }}>
              मुलींच्या सर्वांगीण विकासासाठी, आधुनिक तंत्रज्ञानावर आधारित गुणवत्तेचे
              आणि संस्कारक्षम शिक्षणाचे पवित्र केंद्र.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to="/about"
                style={{ flex: '1 1 140px', textAlign: 'center', padding: '0.8rem 1.8rem', borderRadius: '9999px', backgroundColor: '#ea580c', color: '#ffffff', fontWeight: '600', textDecoration: 'none', boxShadow: '0 4px 14px rgba(234, 88, 12, 0.35)' }}
              >
                शाळेची माहिती
              </Link>
              <Link
                to="/facilities"
                style={{ flex: '1 1 140px', textAlign: 'center', padding: '0.8rem 1.8rem', borderRadius: '9999px', backgroundColor: '#ffffff', color: '#ea580c', fontWeight: '600', textDecoration: 'none', border: '2px solid #ea580c' }}
              >
                सुविधा व उपक्रम
              </Link>
            </div>
          </div>

          {/* Right Image Slider Card */}
          <div style={{ flex: '1 1 300px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '450px',
              height: 'clamp(240px, 40vh, 340px)',
              position: 'relative',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
              border: '4px solid #ffffff'
            }}>

              {/* Sliding Images */}
              {heroImages.map((img, index) => (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: index === currentIndex ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out',
                    pointerEvents: index === currentIndex ? 'auto' : 'none'
                  }}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {/* Image Gradient & Caption Overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.5rem 1rem 1rem',
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85), transparent)',
                    color: '#ffffff',
                    textAlign: 'center'
                  }}>
                    <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: '600' }}>{img.caption}</p>
                  </div>
                </div>
              ))}

              {/* Navigation Dots */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
                zIndex: 10
              }}>
                {heroImages.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => setCurrentIndex(dotIndex)}
                    aria-label={`Go to slide ${dotIndex + 1}`}
                    style={{
                      width: dotIndex === currentIndex ? '20px' : '8px',
                      height: '8px',
                      borderRadius: '9999px',
                      backgroundColor: dotIndex === currentIndex ? '#ea580c' : 'rgba(255, 255, 255, 0.7)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>

            </div>
          </div>

        </section>

        {/* Headmaster & Faculty Leadership Section */}
        <section style={{ marginTop: '3.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: '700', color: '#0f172a', margin: '0 0 0.5rem 0' }}>
              मार्गदर्शन व शिक्षक वृंद
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', margin: 0 }}>
              आमचे प्रेरणास्थान आणि समर्पित शिक्षक संघ
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.75rem', justifyContent: 'center' }}>

            {/* Headmaster Card */}
            <div
              style={{
                flex: '1 1 320px',
                maxWidth: '400px',
                backgroundColor: '#ffffff',
                borderRadius: '1.25rem',
                padding: '1.5rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              {/* Rounded Photo Frame */}
              <div style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid #ea580c',
                boxShadow: '0 4px 12px rgba(234, 88, 12, 0.2)',
                marginBottom: '1rem',
                backgroundColor: '#f8fafc'
              }}>
                <img
                  src={headmasterPic}
                  alt="मुख्याध्यापक"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%' // Adjust vertical alignment as needed
                  }}
                />
              </div>

              <span style={{ backgroundColor: '#fff7ed', color: '#c2410c', fontSize: '0.75rem', fontWeight: '700', padding: '0.2rem 0.6rem', borderRadius: '0.375rem', marginBottom: '0.5rem' }}>
                मुख्याध्यापक
              </span>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', margin: '0 0 0.25rem 0' }}>
                श्री. सावंत अंगद सुधाकरराव
              </h3>

              <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#ea580c', margin: '0 0 0.75rem 0' }}>
                मुख्याध्यापक, पीएमश्री जि.प. कन्या शाळा
              </p>

              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>
                "विद्यार्थिनींच्या सर्वांगीण विकासासाठी आणि गुणात्मक शिक्षणासाठी आम्ही सदैव तत्पर आहोत."
              </p>
            </div>
            {/* Faculty Group Card */}
            <div
              style={{
                flex: '2 1 400px',
                backgroundColor: '#ffffff',
                borderRadius: '1.25rem',
                padding: '1.5rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span style={{ backgroundColor: '#ffedd5', color: '#c2410c', fontSize: '0.75rem', fontWeight: '700', padding: '0.2rem 0.6rem', borderRadius: '0.375rem', marginBottom: '0.5rem', display: 'inline-block' }}>
                  शिक्षक वृंद
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', margin: '0 0 0.5rem 0' }}>
                  आमचा समर्पित शिक्षक वर्ग (School Faculty)
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: '1.5', marginBottom: '1rem' }}>
                  शाळेतील प्रत्येक विद्यार्थिनीच्या सर्वांगीण विकासासाठी व व्यक्तिमत्त्व घडवण्यासाठी अनुभव व आपुलकीने कार्यरत असणारा आमचा शिक्षक वर्ग.
                </p>
              </div>

              <div style={{ width: '100%', height: '220px', borderRadius: '0.75rem', overflow: 'hidden', backgroundColor: '#f1f5f9' }}>
                <img
                  src={facultyGroupPic}
                  alt="Faculty Group"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}