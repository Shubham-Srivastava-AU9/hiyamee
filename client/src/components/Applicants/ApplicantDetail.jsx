import React from "react";
import "./ApplicantDetail.css";
import { Link } from "react-router-dom";
import { MdMessage } from 'react-icons/md';



export default function ApplicantDetail() {
    return(
        <div className="applicant-detail">
            <div className="applicant-box">
            <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-12">
                    <div className="row">
                    <div class="col-lg-2 col-md-12 col-sm-12">
                          <div className="total-applicant-candidate_dp">
                            <img className="applicant-face browsed-candidate-face total-applicant-face" src="assets/img/applicants/face3.png"></img>
                          </div>
                        </div>
                        <div class="col-lg-8 col-md-12 col-sm-12 active-candidates-title">
                          <div className="applicant-title">
                            <h3>John Doe</h3>
                            <p className="active-last-active">Last Active: 35 Mins Ago</p>
                          </div>
                        </div>
                    </div>

                    <div className="">
                        <p><span>Key Skills:</span> Lorem upsim</p>
                        <p><span>Current Job Title:</span> Software Developer</p>
                        <p><span>Experience:</span> 3 Years 5 Months</p>

                        <div className="applicant--p row">
                        <p className="col-lg-6 col-md-12 col-sm-12"><span>Notice Period:</span> 30 Days</p>
                        <p className="col-lg-6 col-md-12 col-sm-12"><span>Current CTC:</span> 5 LPA</p>
                        </div>

                    </div>
                </div>

                <div className="col-lg-5 col-md-12 col-sm-12">
                    <Link to="/applicant-profile"><button className="btn-applied-cand applicant-button"> View Profile </button>
                    </Link>
                    <Link to="/applicant-profile"><button className="btn-applied-cand applicant-message"><MdMessage /> Message </button>
                    </Link>
                </div>
                        
            </div>
            </div>

            <hr className="applicant-name-hr"></hr>
        </div>
    )
}