
import React from 'react';

const Leadership = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>LEADERSHIP</h2>
      <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '20px' }}>Welcome to BIHER</h3>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: 1, marginRight: '20px', fontSize: '1rem', lineHeight: '1.6' }}>
          <p>
            I am happy that you are joining our Institute for pursuing the course of study of your choice. This introduction to our Institution speaks of those features that reaffirm our faith in, and commitment to, the essential task of helping you transform yourself into a careerist in dental, medical, engineering and technology. I am sure you will make the best use of the programmes offered, facilities provided and opportunities created here in your interest. I am quite confident that you will address yourself to the tasks of learning with a tremendous sense of involvement and come out successful with flying colours in your cherished endeavour. Let me greet you at the beginning of an academic journey towards the goal of a rewardingly prosperous career.
          </p>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img src="/path/to/image.jpg" alt="Chairman and Founder - BIHER" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>S. Jagathrakshakan</h4>
            <p style={{ fontSize: '1rem', color: 'gray' }}>Chairman and Founder - BIHER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;