import React from "react";
import JobCardv2 from "../../components/Company Profile/JobCardv2";
import AuthDBHeader from "../../components/dashboard/AuthDBHeader";
import Footer from "../../components/Home/Footer";
import "./PostedJobs.css";




function PostedJobs() {
  return (
<div className="posted-jobs" style={{backgroundColor: '#F6F6F6'}}>
    <AuthDBHeader />
    <div className="all-jobs">
        <div class="bottom-container">
            <div>
                <h2 class="bottom-container-heading"> Posted Jobs</h2>
            </div>

            <div className="bottom-container-jobcard-row">
                <div className="bottom-container-jobcard-col">

                <JobCardv2 
                    jobname= "Badvanced Software Developer"
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
                    jobname= " Advanced Software Developer"
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


        </div>
      
    </div>
    <Footer />
</div>
    
  );
}

export default PostedJobs;