import React from "react";
import AuthDBHeader from "../../components/dashboard/AuthDBHeader";
import Footer from "../../components/Home/Footer";
import ApplicantName from "./applicant-name-component";




function ApplicantProfilePage() {
  return (
    <div className="applicant-prof-page" style={{backgroundColor: '#F6F6F6'}}>
        <AuthDBHeader />
        <ApplicantName />
        <Footer />
      
    </div>
    
  );
}

export default ApplicantProfilePage;