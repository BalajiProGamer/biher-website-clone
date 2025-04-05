import React from 'react'
import patentImg from "../../assets/patent.jpg"; // Adjust path if needed
import Footer from '../Footer';
import ResearchDevelopment from './ResearchDevelopment';


const Innovation= () => {
  return (
    <div>
           <img src={patentImg} alt="Patent" width="100%" height="100%" />
           <ResearchDevelopment/>
        <>
        <Footer/> 
        </>
      
    </div>
  )
}

export default Innovation