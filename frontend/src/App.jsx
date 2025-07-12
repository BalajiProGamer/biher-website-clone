import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/navbar/Navbar";
import SecondaryNavbar from "./Components/SecondaryNavbar";
import MOU from "./Components/Navbaroption/MOU"; // Import the MOU component
import LMS from "./Components/Navbaroption/LMS";
import IQAC from "./Components/Navbaroption/IQAC";
import Alumni from "./Components/Navbaroption/Alumni";
import Career from "./Components/Navbaroption/Carrer";
import Overview from "./Components/About/Overview";
import Leadership from "./Components/About/Leadership";
import ExecutiveCouncilMembers from "./Components/About/Goverence/ExecutiveCouncilMembers"; // Import the Executive Council Members component
import AcademicCouncil from "./Components/About/Goverence/AcademicCouncil"; // Import the Academic Council component
import FinanceCommittee from "./Components/About/Goverence/FinanceCommittee";
import Planningmonitoring from "./Components/About/Goverence/Planningmonitoring";

import Marquee from "./Components/Marquee";
import Footer from "./Components/Footer";
import LmsForm from "./Components/Navbaroption/Form";
import AeronauticalEngineering from "./Components/Academics/AeronauticalEngineering";  
import Agriculture from "./Components/Academics/Agriculture";
import Architecture from "./Components/Academics/Architecture";
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
import Nursing from "./Components/Academics/Nursing"; /* Import Nursing page */
/* Import Research pages */
import FIST from "./Components/Research/FIST";
import AcademicsResearch from "./Components/Research/AcademicsResearch"; /* Import AcademicsResearch page */
import Innovation from "./Components/Research/Innovation";
import FundedResearch from "./Components/Research/FundedResearch";
import Publication from "./Components/Research/publication";

/* Import campuslife pages*/
import NCC from "./Components/Campuslife/Ncc";
import NSS from "./Components/Campuslife/NSS";
import RRC from "./Components/Campuslife/RRC";
import Transport from "./Components/Campuslife/Transport";
import Hostel from "./Components/Campuslife/Hostel"; 
import Library from "./Components/Campuslife/Library";


 
import Home from "./Components/ui/Home"; // Import the Home component
import ImageSlide from "./Components/ImageSlider";
import Admissions from "./Components/International/Admissions";
import StudyAbroad from "./Components/Pages/StudyAbroad";
import Collaboration from "./Components/International/Collaboration"; 
import { Visitor } from './Components/International/Visitor';
import OtherActivities from "./Components/International/OtherActivites";
import HigherStudies from "./Components/International/HigherStudies";
import Events from "./Components/International/Events";
import ResearchDevelopment from "./Components/Research/ResearchDevelopment";
import Section from './Components/ui/Section';
import InfoLayout from "./Components/ui/InfoLayout";
import PageLayout from "./Components/Pages/PageLayout";
import UniversityPage from "./Components/ui/UniversityPage";
import CampusDashboard from "./Components/ui/CampusDashboard";
import FeaturedMedia from "./Components/ui/FeaturedMedia";
import FixedLandingSection from "./Components/ui/FixedLandingSection";

import AboutAlumni from "./Components/Navbaroption/AboutAlumni";
import Banner from './Components/Banner';
import Query from "./Components/Pages/Query";
import StudentAward from "./Components/Pages/StudentAward";
import StaffAward from './Components/Pages/StaffAward';
import NewsSlider from "./Components/Pages/NewsSlider";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* Conditionally render Banner only on specific routes */}
      {location.pathname === '/specific-page' && <Banner />}
      
     
     <Navbar/>
     <SecondaryNavbar/>
     <Marquee/>
     
    
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/mou" element={<MOU />} />
        <Route path="/lms" element={<LMS />} />
        <Route path="/iqac" element={<IQAC />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/career" element={<Career />} />
         <Route path="/achievements/staff-award" element={<StaffAward />} />
        <Route path="/achievements/student-award" element={<StudentAward />} />
        /* About pages*/
        <Route path="/about/overview" element={<Overview />} />
        <Route path="/about/leadership" element={<Leadership />} />
        <Route path="/about/governance/statutory/ExecutiveCouncilMember" element={< ExecutiveCouncilMembers/>} />
        <Route path="/about/governance/statutory/academiccouncil" element={< AcademicCouncil/>} />
        <Route path="/about/governance/statutory/financecommittee" element={< FinanceCommittee/>} />
        <Route path="/about/governance/statutory/ExecutiveCouncilMember" element={< ExecutiveCouncilMembers/>} />
         <Route path="/about/governance/statutory/planningmonitoring" element={< Planningmonitoring/>} />
        
         

        <Route path="/form" element={<LmsForm />} />
        <Route path="/academics/aeronautical-engineering" element={<AeronauticalEngineering />} />
        <Route path="/academics/agriculture" element={<Agriculture />} />
        <Route path="/academics/architecture" element={<Architecture />} />
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
        <Route path="/academics/nursing" element={<Nursing />} />
        <Route path="/research/fist" element={<FIST />} />
        <Route path="/research/academics-research" element={<AcademicsResearch />} /> {/* Added route */}
        <Route path="/research/Innovation" element={<Innovation />} />
        <Route path="/research/funded-research" element={<FundedResearch/>}/>
        <Route path="/research/publication" element={<Publication/>} />

        <Route path="/campuslife/Ncc" element={<NCC/>}/>
        <Route path="/campuslife/NSS" element={<NSS/>}/>
        <Route path="/campuslife/RRC" element={<RRC/>}/>
        <Route path="/campuslife/Hostel" element={<Hostel/>}/>
        <Route path="/campuslife/Library" element={<Library/>}/>
        <Route path="/campuslife/Transport" element={<Transport/>}/>
        <Route path="/international/admissions" element={<Admissions/>}/>
        <Route path="/international/Collaboration" element={<Collaboration/>}/>
        <Route path="/international/Higher-Studies" element={<HigherStudies/>}/>
        <Route path="/international/other-activities" element={<OtherActivities/>}/>
        <Route path="/international/visitor" element={<Visitor/>}/>
        <Route path="/international/Events" element={<Events/>}/>
      </Routes>
    </div>
  );
}

export default App;