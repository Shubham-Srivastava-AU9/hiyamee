import React from "react";
import AuthDBHeader from "../../components/dashboard/AuthDBHeader";
import Footer from "../../components/Home/Footer";
import CompanyName from "./company-name-container";
import JobStat from "./job-stats-container";
import BottomContainer from "./posted-jobs-container";
import TwoButtons from "./two-buttons/TwoButtons";



function CompanyProfile() {
  return (
    <div className="company-profile" style={{backgroundColor: '#F6F6F6'}}>
        <AuthDBHeader />
        <CompanyName />
        <TwoButtons />
        <JobStat />
        <BottomContainer />
        <Footer />
      
    </div>
    
  );
}

export default CompanyProfile;