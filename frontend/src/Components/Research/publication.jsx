import React from "react";
import publicImg from "../../assets/R-PUBLICATION (1).jpg"; // Ensure the image path is correct
import Footer from '../Footer';

const publication = () => {
  return (
    <div>
      <img src={publicImg} alt="publication" width="100%" height="100%" /> 
      <Footer/>
      
    </div>
  );
};

export default publication;