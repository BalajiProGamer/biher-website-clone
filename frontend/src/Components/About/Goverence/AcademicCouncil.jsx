import React from 'react'
import patternImage from '../../../assets/pattern.jpg'; // Adjust path if needed

const AcademicCouncil = () => {
    
      const sectionStyle = {
        width: '100%',
        height: '100vh', // 100% of the viewport height
        backgroundImage: `url(${patternImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
  return (
    <div>
      <div style={sectionStyle}></div>
    </div>
  )
}

export default AcademicCouncil
