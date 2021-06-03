import React from "react";
import { Link } from "react-router-dom";
import AuthDBHeader from "../../../components/dashboard/AuthDBHeader";
import Footer from "../../../components/Home/Footer";
import "./JobPostingSuccess.css";

export default function JobPostingSuccess (){ 
    return(
        <div className="job-posting-success" style= {{backgroundColor: "#F6F6F6"}}>
            <AuthDBHeader />

                <div className="job-posting-success-container">
                    <div className="job-posting-success-row">
                        <div className="job-posting-success-col">
                            <img className="job-posting-success-img" src= "assets/img//alerts/job-posting-tick.png" />
                        </div>
                        <div className="job-posting-success-col job-posting-success-heading">
                            <h1> Your Job Posting has been <span class="job-posting-span"><br></br>Successfully Completed!</span></h1>
                        </div>
                    </div>

                    <div className="job-posting-success-body">
                        <p className="job-posting-success-p">Thank you for Posting the job Requirement with Hiyamee. 
                        Be Assured to get the best fitted responses for the Posting. 
                        You can track the status in the <Link to="/posted-jobs"><a>Posted Jobs</a></Link> section.
                        <br />
                        <br />
                        Meanwhile you can keep <Link to="/post-job"><a>Post more Jobs</a></Link> According to your Requirement</p>
                    </div>

                    <hr className="job-posting-success-hr"/>

                    <div className="job-posting-success-btn">
                        <Link to="/company-profile" ><button className="job-posting-success-btn1">Go to Homepage</button></Link>
                        <Link to="/no-access-to-community"><button className="job-posting-success-btn1 browse-talent"> Browse Talent </button></Link>
                    </div>
                </div>
                

            <Footer />
        </div>
    )
}