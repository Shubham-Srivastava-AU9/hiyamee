import React from "react";
import { Link } from "react-router-dom";
import JobContext from '../../context/jobs/jobsContext';
// import jobsReducer from "../../context/jobs/jobsReducer";

const JobCardv2 = ({job}) =>{
   console.log(job,'mou');
    return(
        <>
        {job?.map((item)=>{
            console.log(item,'shs')

            return(
                <div class="job-card">
                <div class="job-card-row">
                <div class="job-card-col job-card-left">
                    <h6 class="job-card-header">{item.title}</h6>
                    
                </div>
                <div class="job-card-col job-card-right">
                <div class="btn-group">
                    <button type="button" class="btn btn-success active-dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>{item.status}</span>
                    </button>
                    <div class="dropdown-menu active-dropdown-menu">
                        <a class="dropdown-item" href="#">Close Job</a>
                        <a class="dropdown-item" href="#">Close & Archive</a>
                    </div>
                </div>
                    <h6 class="job-card-h5"></h6>
                    {/* // */}
                </div>
            </div>
            <hr className="job-card-hr" />

            <div class="job-card-row">
                <div class="job-card-col job-card-left">
                    <p>{item.locations}</p> 
                    <p>Experience: {`${item.experience.minimum} - ${item.experience.maximum}`} years</p>
                    <p>{item.salary_offered.minimum}-{item.salary_offered.maximum} /-</p>
                </div>
                <div class="job-card-col job-card-right job-card-bottom-right">
                    {/* <h6 class="job-card-h5">{props.timePostedBody}</h6> */}
                    {/* <p class="job-card-bottom-p" >{props.totalapplicants}</p> */}
                    <div class="job-card-btn">
                    <Link to='/total-applicants' className="header-navbar-item sign-in"><button className= "jobcardv2-btn">View Applicants</button></Link>
                    </div>
                </div>
            </div>
        </div>
            )
        })}
        
    </>
    )
}

export default JobCardv2;