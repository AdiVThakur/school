import React from 'react';

import tripBanner from '../assets/program/trip.png';
import eventBanner from '../assets/program/anand.png';
import yogaBanner from '../assets/program/yogaday.png';

// Import image assets for other activities
import lokmatImg from '../assets/program/lokmat.png';
import festivalImg from '../assets/program/festival.png';
import vocationalImg from '../assets/program/vocational.png';
import womenSafetyImg from '../assets/program/women_safety.png';

// Import new images
import flowerCraftImg from '../assets/program/flower_craft.png';
import crownCraftImg from '../assets/program/crown_craft.png';
import umbrellaCraftImg from '../assets/program/umbrella_craft.png';
import ecoClubImg from '../assets/program/eco_club.png';

export default function Programs() {
  const mainPrograms = [
    {
      id: 1,
      tag: "शैक्षणिक उपक्रम",
      title: "शैक्षणिक सहल २०२५-२६ (Educational Trip)",
      subtitle: "गाडी क्र. १ | नळेगाव ता. चाकूर जि. लातूर",
      description: "पीएम.श्री. जिल्हा परिषद कन्या प्राथमिक शाळा नळेगाव तर्फे आयोजित आनंददायी व अभ्यासपूर्ण शैक्षणिक सहल.",
      imageSrc: tripBanner,
      altText: "Educational Tour Banner"
    },
    {
      id: 2,
      tag: "विशेष महोत्सव",
      title: "बाल आनंद महोत्सव (Bal Anand Mahotsav)",
      subtitle: "वार्षिक बालजत्रा व उपक्रम",
      description: "विद्यार्थिनींच्या नेतृत्वगुण, व्यवहार ज्ञान आणि कला-कौशल्यांना वाव देणारा विशेष खाद्य व संस्कृती महोत्सव.",
      imageSrc: eventBanner,
      altText: "Bal Anand Mahotsav Banner"
    },
    {
      id: 3,
      tag: "आरोग्य व क्रीडा",
      title: "आंतरराष्ट्रीय योग दिन (International Yoga Day)",
      subtitle: "शारीरिक व मानसिक स्वास्थ्य उपक्रम",
      description: "शाळेच्या प्रांगणात विद्यार्थिनी आणि शिक्षकांनी एकत्र येऊन केलेले योगासन व प्राणायाम प्रात्यक्षिक.",
      imageSrc: yogaBanner,
      altText: "International Yoga Day Banner"
    }
  ];

  // Karyanubhav Showcase Cards (4 Items Grid)
  const karyanubhavItems = [
    {
      id: 101,
      tag: "कार्यानुभव - कागदकला",
      title: "रंगीबेरंगी कागदी फुले (Paper Flower Craft)",
      subtitle: "हस्तकला व सृजनशीलता",
      description: "रंगीत कागदांपासून विविध प्रकारची आकर्षक व सुंदर फुले बनवून हस्तकलेचे प्रात्यक्षिक दाखवताना विद्यार्थिनी.",
      imageSrc: flowerCraftImg,
      altText: "Paper Flower Crafting Activity"
    },
    {
      id: 102,
      tag: "कार्यानुभव - मुकुट निर्मिती",
      title: "सुशोभित मुकुट निर्मिती (Crown Making Craft)",
      subtitle: "सजावट व कला कौशल्य",
      description: "मोती, टिकल्या आणि सोनेरी कागदाचा वापर करून बनवलेला आकर्षक मुकुट/मुकुट कलाकृती.",
      imageSrc: crownCraftImg,
      altText: "Handmade Decorated Crown Craft"
    },
    {
      id: 103,
      tag: "कार्यानुभव - छत्री कला",
      title: "कागदी छत्र्या निर्मिती (Mini Paper Umbrellas)",
      subtitle: "ओरिगामी व डिझायनिंग",
      description: "विविध रंग आणि नक्षीकामाचा वापर करून तयार केलेल्या लहान कागदी छत्र्यांचे कलात्मक प्रदर्शन.",
      imageSrc: umbrellaCraftImg,
      altText: "Handmade Mini Paper Umbrellas"
    },
    {
      id: 104,
      tag: "पर्यावरण व क्लब",
      title: "इको क्लब स्थापना व उपक्रम (Eco Club Launch)",
      subtitle: "पर्यावरण संवर्धन व जागरूकता",
      description: "शाळेत 'ECO CLUB' ची स्थापना करून पर्यावरण संवर्धन व स्वच्छतेचा संदेश देणारे शिक्षक व विद्यार्थिनी.",
      imageSrc: ecoClubImg,
      altText: "Eco Club Launch and Awareness"
    }
  ];

  const otherActivities = [
    {
      id: 4,
      tag: "स्पर्धा व सहभाग",
      title: "लोकमत स्पर्धेत सहभाग",
      subtitle: "कला व विविध स्पर्धा",
      description: "विद्यार्थिनींच्या कलागुणांना वाव देण्यासाठी लोकमत तर्फे आयोजित विविध स्पर्धांमध्ये उत्स्फूर्त सहभाग.",
      imageSrc: lokmatImg,
      altText: "Lokmat Competition Participation"
    },
    {
      id: 5,
      tag: "सांस्कृतिक वारसा",
      title: "संस्कृतीचे जतन करण्यासाठी सण साजरे करणे",
      subtitle: "सांस्कृतिक व पारंपरिक उपक्रम",
      description: "भारतीय संस्कृती व परंपरांचे मूल्य रुजवण्यासाठी शाळेत विविध सण व उत्सव उत्साहात साजरे केले जातात.",
      imageSrc: festivalImg,
      altText: "Cultural Festival Celebration"
    },
    {
      id: 6,
      tag: "कौशल्य विकास",
      title: "व्यवसाय शिक्षणासाठी प्रयत्न",
      subtitle: "व्यावहारिक व कौशल्य आधारित शिक्षण",
      description: "विद्यार्थिनींना स्वावलंबी बनवण्यासाठी व व्यावहारिक ज्ञान देण्यासाठी विविध व्यवसाय शिक्षण उपक्रम.",
      imageSrc: vocationalImg,
      altText: "Vocational Training Efforts"
    },
    {
      id: 7,
      tag: "सुरक्षा व स्वावलंबन",
      title: "महिला व मुलींची सुरक्षा प्रात्यक्षिके (Women Safety & Self Defense)",
      subtitle: "लाठी-काठी आणि आत्मसंरक्षण प्रशिक्षण",
      description: "विद्यार्थिनींमध्ये आत्मविश्वास, शारीरिक ताकद आणि आत्मसंरक्षणाचे कौशल्य वाढवण्यासाठी लाठी-काठी प्रात्यक्षिक व सुरक्षा मार्गदर्शन.",
      imageSrc: womenSafetyImg,
      altText: "Women Safety Self Defense Demonstration"
    }
  ];

  return (
    <div className="page-container" style={{ padding: '1rem', width: '100%', boxSizing: 'border-box' }}>
      {/* Page Header */}
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '0.5rem' }}>
          उपक्रम व उपक्रम दालन (Programs & Events)
        </h1>
        <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', color: '#475569' }}>
          पीएम.श्री. जिल्हा परिषद कन्या प्राथमिक शाळा, नळेगाव
        </p>
      </div>

      {/* Main Events Showcase Grid */}
      <div 
        className="cards-grid" 
        style={{ 
          marginTop: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {mainPrograms.map((card) => (
          <div 
            className="card glass-card" 
            key={card.id}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              padding: '1.25rem',
              borderRadius: '1rem',
              height: '100%',
              boxSizing: 'border-box'
            }}
          >
            <span 
              style={{ 
                display: 'inline-block', 
                alignSelf: 'flex-start',
                backgroundColor: 'rgba(37, 99, 235, 0.1)', 
                color: '#2563eb', 
                padding: '0.25rem 0.75rem', 
                borderRadius: '9999px', 
                fontSize: '0.8rem', 
                fontWeight: 'bold',
                marginBottom: '0.75rem' 
              }}
            >
              {card.tag}
            </span>

            <div 
              style={{ 
                width: '100%', 
                height: 'clamp(180px, 30vh, 240px)', 
                borderRadius: '0.75rem', 
                overflow: 'hidden', 
                backgroundColor: '#0f172a',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img 
                src={card.imageSrc} 
                alt={card.altText} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain' 
                }} 
              />
            </div>

            <h3 className="card-title" style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)', marginBottom: '0.25rem' }}>
              {card.title}
            </h3>
            <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#64748b', marginBottom: '0.5rem' }}>
              {card.subtitle}
            </p>
            <p className="card-desc" style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.5' }}>
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Karyanubhav Showcase Section */}
      <div style={{ marginTop: '3.5rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: 'clamp(1.25rem, 3vw, 1.6rem)', color: 'var(--text-color, #1e293b)' }}>
          🎨 कार्यानुभव उपक्रम (Karyanubhav / Work Experience Activities)
        </h2>

        <div 
          className="cards-grid"
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {karyanubhavItems.map((card) => (
            <div 
              className="card glass-card" 
              key={card.id}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                padding: '1.25rem',
                borderRadius: '1rem',
                height: '100%',
                boxSizing: 'border-box'
              }}
            >
              <span 
                style={{ 
                  display: 'inline-block', 
                  alignSelf: 'flex-start',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)', 
                  color: '#059669', 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '9999px', 
                  fontSize: '0.8rem', 
                  fontWeight: 'bold',
                  marginBottom: '0.75rem' 
                }}
              >
                {card.tag}
              </span>

              <div 
                style={{ 
                  width: '100%', 
                  height: 'clamp(180px, 30vh, 240px)', 
                  borderRadius: '0.75rem', 
                  overflow: 'hidden', 
                  backgroundColor: '#0f172a',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={card.imageSrc} 
                  alt={card.altText} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain' 
                  }} 
                />
              </div>

              <h3 className="card-title" style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)', marginBottom: '0.25rem' }}>
                {card.title}
              </h3>
              <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#64748b', marginBottom: '0.5rem' }}>
                {card.subtitle}
              </p>
              <p className="card-desc" style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.5' }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Other Activities Section */}
      <div style={{ marginTop: '3.5rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: 'clamp(1.25rem, 3vw, 1.6rem)', color: 'var(--text-color, #1e293b)' }}>
          🌟 इतर उपक्रम (Other Activities)
        </h2>

        <div 
          className="cards-grid"
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {otherActivities.map((card) => (
            <div 
              className="card glass-card" 
              key={card.id}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                padding: '1.25rem',
                borderRadius: '1rem',
                height: '100%',
                boxSizing: 'border-box'
              }}
            >
              <span 
                style={{ 
                  display: 'inline-block', 
                  alignSelf: 'flex-start',
                  backgroundColor: 'rgba(37, 99, 235, 0.1)', 
                  color: '#2563eb', 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '9999px', 
                  fontSize: '0.8rem', 
                  fontWeight: 'bold',
                  marginBottom: '0.75rem' 
                }}
              >
                {card.tag}
              </span>

              <div 
                style={{ 
                  width: '100%', 
                  height: 'clamp(180px, 30vh, 240px)', 
                  borderRadius: '0.75rem', 
                  overflow: 'hidden', 
                  backgroundColor: '#0f172a',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={card.imageSrc} 
                  alt={card.altText} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain' 
                  }} 
                />
              </div>

              <h3 className="card-title" style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)', marginBottom: '0.25rem' }}>
                {card.title}
              </h3>
              <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#64748b', marginBottom: '0.5rem' }}>
                {card.subtitle}
              </p>
              <p className="card-desc" style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.5' }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}