import React from "react";
import { Link } from "react-router-dom";
import "./CompanyName.css";



function CompanyName() {
  return (
    <div className="company-name">
        <div className="company-name-row row">
            <div className="col-lg-2 company-profile-dp">
                    <img className="company-profile-pic" src="assets/img/home/jobs_company/4.png"></img>
            </div>

            <div className="col-lg-6 company-profile-title">
                <h3>ACME Corporation</h3>
                <label>@ACMEcorp</label>
                <br />
                <Link to="about-company" >View/ Edit Profile</Link>
            </div>

            <div className="col-lg-4">
                <img className="company-profile-side-img" src="assets/img/company-profile/companyimage.png" ></img>
            </div>
            
        </div>
      
    </div>
    
  );
}

export default CompanyName;