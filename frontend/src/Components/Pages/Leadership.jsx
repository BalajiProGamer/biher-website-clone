import React from 'react';
import './Leadership.css';
import FounderImg from '../../assets/Founder.png';
import DirectorPage from './DirectorPage';
import Footer from '../Footer';

const Leadership = () => {
  return (
    
    <div className="leadership-container">
      <main className="content">
        <h1>Welcome to <span className="highlight">BIHER</span></h1>
        <div>
          <hr />
          <p>
            I am happy that you are joining our Institute for pursuing the course of study of your choice. This introduction to our Institution speaks of those features that reaffirm our faith in, and commitment to, the essential task of helping you transform yourself into a careerist in dental, medical, engineering and technology I am sure you will make the best use of the programmes offered, facilities provided and opportunities created here in your interest. I am quite confident that you will address yourself to the tasks of learning with a tremendous sense of involvement and come out successful with flying colours in your cherished endeavour. Let me greet you at the beginning of an academic journey towards the goal of a rewardingly prosperous career.
          </p>
        </div>
      </main>
      <div className="flex-container">
        
          <div>
            <img src={FounderImg} alt="Chairman" className="chairman-img" />
            <h3>S. Jagathrakshakan</h3>
            <p>Chairman and Founder - BIHER</p>
            </div>
          
        
        <button className="admission-button">2025 Admission Open for UG/PG</button>
      </div>
      <DirectorPage /> 
      <>
      <Footer />
      
      </> 
      
    </div>
    
 
    
  );
};

export default Leadership;