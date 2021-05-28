import React from "react";
import { Link } from "react-router-dom";
import JobCardv2 from "../../../components/Company Profile/JobCardv2";
import "./BottomContainer.css";


function BottomContainer () {
    return(
        <div class="bottom-container">
            <div>
                <h4 class="bottom-container-heading"> Posted Jobs</h4>
            </div>

            <div className="bottom-container-jobcard-row">
                <div className="bottom-container-jobcard-col">
                <JobCardv2 
                    jobname= "Advanced Software Developer"
                    status= "Active"
                    timePostedBody= "Posted 3 days Ago"
                    location= "Banglore, Karnataka"
                    experience= "3-4 Years"
                    package= "$10000-$10000 a year"
                />
                </div>
                <div className="bottom-container-jobcard-col">
                <JobCardv2 
                    jobname= "Advanced Software Developer"
                    status= "Active"
                    timePostedBody= "Posted 3 days Ago"
                    location= "Banglore, Karnataka"
                    experience= "3-4 Years"
                    package= "$10000-$10000 a year"
                />
                </div>
                <div className="bottom-container-jobcard-col">
                <JobCardv2 
                    jobname= "Advanced Software Developer"
                    status= "Active"
                    timePostedBody= "Posted 3 days Ago"
                    location= "Banglore, Karnataka"
                    experience= "3-4 Years"
                    package= "$10000-$10000 a year"
                />
                </div>
                <div className="bottom-container-jobcard-col">
                <JobCardv2 
                    jobname= "Advanced Software Developer"
                    status= "Active"
                    timePostedBody= "Posted 3 days Ago"
                    location= "Banglore, Karnataka"
                    experience= "3-4 Years"
                    package= "$10000-$10000 a year"
                />
                </div>
            </div>

            <div>
            <Link to='/posted-jobs' className="header-navbar-item sign-in"><h4 className="bottom-container-txt-btm">View All Jobs Posted</h4></Link>
            </div>
        </div>
    )
}

export default BottomContainer;