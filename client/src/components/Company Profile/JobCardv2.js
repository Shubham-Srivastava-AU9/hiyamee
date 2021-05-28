import React from "react";
import { Link } from "react-router-dom";


function JobCardv2 (props) {
    return(
        <div class="job-card">
            <div class="job-card-row">
                <div class="job-card-col job-card-left">
                    <h6 class="job-card-header">{props.jobname}</h6>
                </div>
                <div class="job-card-col job-card-right">
                <div class="btn-group">
                    <button type="button" class="btn btn-success active-dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>Active</span>
                    </button>
                    <div class="dropdown-menu active-dropdown-menu">
                        <a class="dropdown-item" href="#">Close Job</a>
                        <a class="dropdown-item" href="#">Close & Archive</a>
                    </div>
                </div>
                    <h6 class="job-card-h5">{props.timePosted}</h6>
                </div>
            </div>
            <hr className="job-card-hr" />

            <div class="job-card-row">
                <div class="job-card-col job-card-left">
                    <p>{props.location}</p>
                    <p>Experience:{props.experience}</p>
                    <p>{props.package}</p>
                </div>
                <div class="job-card-col job-card-right job-card-bottom-right">
                    <h6 class="job-card-h5">{props.timePostedBody}</h6>
                    <p class="job-card-bottom-p" >{props.totalapplicants}</p>
                    <div class="job-card-btn">
                    <Link to='/total-applicants' className="header-navbar-item sign-in"><button className= "jobcardv2-btn">View Applicants</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCardv2;