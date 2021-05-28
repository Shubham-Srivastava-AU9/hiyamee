import React from "react";
import ApplicantDetail from "../../../components/Applicants/ApplicantDetail";
import ApplicantsDropdown from "./applicants-dropdowns";
import "./ApplicantsContainer.css"




function ApplicantsContainer() {
  return (
    <div className="applicants-container">
        <ApplicantsDropdown />
        <ApplicantDetail /> 
        <ApplicantDetail />
        <ApplicantDetail /> 
        <ApplicantDetail />   
    </div>
    
  );
}

export default ApplicantsContainer;