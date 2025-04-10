 import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SecondaryNavbar from "./Components/SecondaryNavbar";
import CertificationVerification from "./Components/Pages/CertificationVerification";
import MOU from "./Components/Pages/MOU";
import LMS from "./Components/Pages/LMS";
import IQAC from "./Components/Pages/IQAC";
import Alumni from "./Components/Pages/Alumni";
import Career from "./Components/Pages/Career";
import Overview from "./Components/Pages/Overview";
import Leadership from "./Components/Pages/Leadership";
import Goverence from "./Components/Pages/Goverence";
import Marquee from "./Components/Marquee";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LmsForm from "./Components/Pages/Form";
import Admission from "./Components/Pages/Admission";
import AdmissionContent from "./Components/Pages/Admissioncontent";
import AdmissionPage from "./Components/Pages/AdmissionPage";
import AeronauticalEngineering from "./Components/Academics/AeronauticalEngineering";  
import Agriculture from "./Components/Academics/Agriculture";
import Architecture from "./Components/Academics/Architecture";
import AlliedHealthSciences from "./Components/Academics/AlliedHealthSciences";
import Arts from "./Components/Academics/Arts";
import BasicSciences from "./Components/Academics/BasicSciences";
import Computing from "./Components/Academics/Computing";
import BioEngineering from "./Components/Academics/BioEnigneering"; /* Import BioEngineering page */
import CivilInfrastructure from "./Components/Academics/CivilInfrastructure"; /* Import CivilInfrastructure page */
import Dentistry from "./Components/Academics/Dentistry"; /* Import Dentistry page */
import Law from "./Components/Academics/Law"; /* Import Law page */
import ElectricalEngineering from "./Components/Academics/ElectricalEngineering"; /* Import ElectricalEngineering page */
import Medicine from "./Components/Academics/Medicine"; /* Import Medicine page */
import Pharamacy from "./Components/Academics/Pharmacy"; /* Import Pharamacy page */
import MechanicalEngineering from "./Components/Academics/MechanicalEngineering"; /* Import MechanicalEngineering page */
import ManagementCommerce from "./Components/Academics/ManagementCommerce"; /* Import ManagementCommerce page */
import FIST from "./Components/Research/FIST";
import AcademicsResearch from "./Components/Research/AcademicsResearch"; /* Import AcademicsResearch page */
import Innovation from "./Components/Research/Innovation";
import FundedResearch from "./Components/Research/FundedResearch";
import Publication from "./Components/Research/publication";
import NCC from "./Components/Campuslife/Ncc";
import NSS from "./Components/Campuslife/NSS";
import RRC from "./Components/Campuslife/RRC";
import Library from "./Components/Campuslife/Library";
import Scholarship from "./Components/Campuslife/Scholarship";
import UBA from "./Components/Campuslife/UBA";

import Home from "./Components/ui/Home"; // Import the Home component
import ImageSlide from "./Components/ImageSlider";
import Admissions from "./Components/International/Admissions";
import StudyAbroad from "./Components/Pages/StudyAbroad";
import Collaboration from "./Components/International/Collaboration"; 
import HigherStudies from "./Components/International/HigherStudies";
import ResearchDevelopment from "./Components/Research/ResearchDevelopment";

function App() {
  return (
    <>
    <Navbar/>
    <SecondaryNavbar/>
    

      <Marquee />
    
      
    <Routes>
      <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/certificate-verification" element={<CertificationVerification />} />
        <Route path="/mou" element={<MOU />} />
        <Route path="/lms" element={<LMS />} />
        <Route path="/iqac" element={<IQAC />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about/overview" element={<Overview />} />
        <Route path="/about/leadership" element={<Leadership />} />
        <Route path="/about/governance" element={<Goverence />} />
        <Route path="/form" element={<LmsForm />} />
        <Route path="/admission" element={<Admission />} /> 
        <Route path="/academics/aeronautical-engineering" element={<AeronauticalEngineering />} />
        <Route path="/academics/agriculture" element={<Agriculture />} />
        <Route path="/academics/architecture" element={<Architecture />} />
        <Route path="/academics/alliedhealthsciences" element={<AlliedHealthSciences />} />
        <Route path="/academics/arts" element={<Arts />} /> 
        <Route path="/academics/Basic-Sciences" element={<BasicSciences />} /> 
        <Route path="/academics/computing" element={<Computing />} />
        <Route path="/academics/Bio-Engineering" element={<BioEngineering />} />
        <Route path="/academics/civil-infrastructure" element={<CivilInfrastructure />} />
        <Route path="/academics/dentistry" element={<Dentistry />} />
        <Route path="/academics/law" element={<Law />} />
        <Route path="/academics/Electrical-Engineering" element={<ElectricalEngineering />} />
        <Route path="/academics/medicine" element={<Medicine />} />
        <Route path="/academics/pharmacy" element={<Pharamacy />} />
        <Route path="/academics/mechanical-engineering" element={<MechanicalEngineering />} />
        <Route path="/academics/management-commerce" element={<ManagementCommerce />} />
        <Route path="/research/fist" element={<FIST />} />
        <Route path="/research/academics-research" element={<AcademicsResearch />} /> {/* Added route */}
        <Route path="/research/Innovation" element={<Innovation />} />
        <Route path="/research/funded-research" element={<FundedResearch/>}/>
       <Route path="/research/publication" element={<Publication/>} />
       <Route path="/campuslife/Ncc" element={<NCC/>}/>
       <Route path="/campuslife/NSS" element={<NSS/>}/>
       <Route path="/campuslife/RRC" element={<RRC/>}/>
       <Route path="/campuslife/Library" element={<Library/>}/>
       <Route path="/campuslife/Scholarship" element={<Scholarship/>}/>
        <Route path="/campuslife/UBA" element={<UBA/>}/>
       <Route path="/international/admissions" element={<Admissions/>}/>
       <Route path="/international/Collaboration" element={<Collaboration/>}/>
       <Route path="/international/Higher-Studies" element={<HigherStudies/>}/>




        
      </Routes>
    </>
  );
}

export default App;