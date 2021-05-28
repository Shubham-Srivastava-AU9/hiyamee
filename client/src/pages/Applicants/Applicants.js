import React from "react";
import AuthDBHeader from "../../components/dashboard/AuthDBHeader";
import Footer from "../../components/Home/Footer";
import ApplicantsContainer from "./applicants-main-container";



function Applicants() {
  return (
    <div className="applicants-page" style={{backgroundColor: '#F6F6F6'}}>
        <AuthDBHeader />
        <ApplicantsContainer />
        <Footer />
    </div>
    
  );
}

export default Applicants;
