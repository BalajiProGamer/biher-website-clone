import React from 'react'
import FistImg from "../../assets/FIST.png"; // Adjust path if needed
import Footer from '../Footer';
import ResearchDevelopment from './ResearchDevelopment';


const FIST = () => {
  return (
    <div>
           <img src={FistImg} alt="FIST" width="100%" height="100%" />
           
      
        <ResearchDevelopment/>
        <>
        
        <Footer/> 
        </>
      
    </div>
  )
}

export default FIST
