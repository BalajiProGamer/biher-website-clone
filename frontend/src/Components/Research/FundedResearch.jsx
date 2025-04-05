import React from 'react'
import FoundedImg from "../../assets/FER.jpg"; // Adjust path if needed
import Footer from '../Footer';
import ResearchDevelopment from './ResearchDevelopment';


const FundedResearch = () => {
  return (
    <div>
           <img src={FoundedImg} alt="Founded" width="100%" height="100%" />
           <ResearchDevelopment/>
        <>
        <Footer/> 
        </>
      
    </div>
  )
}

export default FundedResearch