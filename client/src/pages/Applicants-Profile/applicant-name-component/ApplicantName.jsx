import React from "react";
import AwardsHobbies from "../awards-hobbies-components/AwardsHobbies";
import ProfessionalExp from "../professional-experience-component";
import "./ApplicantName.css";
import { Link } from "react-router-dom";
import ProgressBar from "../progress-bar-component/ProgressBar";





function ApplicantName() {
  return (
    <div className="applicant-name">
        <div className="applicant-profile-container">
            <div className="row applicant-row">
                <div class="col-md-2 col-sm-12">
                    <div>
                        <img className="applicant-face" src="assets/img/applicants/face3.png"></img>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 applicant-name-col">
                    <div className="applicant-title">
                        <h3>John Doe</h3>
                    </div>
                    
                    <div className="row contact-details-row">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <div className="contact-details-img">
                                <img src="assets/img/applicant-profile/phone.png"></img>&nbsp;&nbsp;&nbsp;&nbsp;+91-83 332 1323
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <div className="contact-details-img">
                                <img src="assets/img/applicant-profile/mail.png"></img>&nbsp;&nbsp;&nbsp;&nbsp;dwnqidda@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <div className="message-btn-div">
                        <button className="message-btn"><i className="far fa-comment-alt"></i>Message</button>
                    </div>
                </div>
            </div>

            <div className="row view-resume-row">
                <div class="col-lg-2 col-md-12 col-sm-12">
                    <div className="view-resume-btn-div">
                        <button className="view-resume-btn">View Resume</button>
                    </div>
                    
                </div>
                <div class="col-md-12 col-lg-7 col-sm-12">
                    <div className="applicant-name-desc">
                        <p>Lorem Ipsumd adsa dsad saLorem Ipsumd adsa dsad saLorem Ipsumd adsa dsad saLorem Ipsumd adsa dsad sa</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div class="col-lg-4 last-active-col">
                    <p>Last Active: 21 Hours Ago</p>
                </div>
                <div class="col-lg-4 last-active-col">
                    <p>Last Profile Modified: 6 Days Ago</p>
                </div>
            </div>

            <div className="row  details-candidate">
                <div class="col-lg-5">
                    <p><span style={{
                        fontFamily: "proxima-regular",
                        color: "#979797"
                    }}>
                    Current Designation:</span>&nbsp;&nbsp; Software Analyst & Testing</p>
                </div>
                <div class="col-lg-5">
                    <p><span style={{
                        fontFamily: "proxima-regular",
                        color: "#979797"
                    }}>Current Company:</span>&nbsp;&nbsp; Capegemini India</p>
                </div>
                <div class="col-lg-5">
                    <p><span style={{
                        fontFamily: "proxima-regular",
                        color: "#979797"
                    }}>Total Job Experience:</span>&nbsp;&nbsp; 6 Years 2 Months</p>
                </div>
                <div class="col-lg-5">
                    <p><span style={{
                        fontFamily: "proxima-regular",
                        color: "#979797"
                    }}>Current Job Location:</span>&nbsp;&nbsp; Bangalore</p>
                </div>
                <div class="col-lg-5">
                    <p><span style={{
                        fontFamily: "proxima-regular",
                        color: "#979797"
                    }}>Notice Period:</span>&nbsp;&nbsp; 30 Days</p>
                </div>
                <div class="col-lg-5">
                    <p><span style={{
                        fontFamily: "proxima-regular",
                        color: "#979797"
                    }}>Current CTC:</span>&nbsp;&nbsp; 5.25 LPA</p>
                </div>
                <div class="col-lg-5">
                    <p><span style={{
                        fontFamily: "proxima-regular",
                        color: "#979797"
                    }}>Top Skills:</span>&nbsp;&nbsp; Lorem Ipsum, dsaiod ,dsaodnoi</p>
                </div>
            </div>

            


        </div>

        <hr className="applicant-name-hr"/>

        
        <ProfessionalExp />
        <ProgressBar />
        <AwardsHobbies />

      
    </div>
    
  );
}

export default ApplicantName;