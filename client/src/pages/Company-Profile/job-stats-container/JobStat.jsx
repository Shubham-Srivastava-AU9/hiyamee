import React from 'react';
import "./JobStat.css";

export default function JobStat() {

  return (
    <div className= "job-stat">
        <div className="row job-title-dropdown-row">
            <div className="col-lg-6 col-md-6 col-sm-12 job-stat-title">
                <h5>Job Title</h5>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
                
                <div className='filter-holder company-profile-dropdown-holder'>
                        <div className='filter'>
                            <select name='' id='' className='form-control company-profile-dropdown'>
                                <option value=''>Product Manager</option>
                                <option value=''>Assistant Software Engineer </option>
                                <option value=''>Assistant Software Engineer </option>
                                <option value=''>Assistant Software Engineer </option>
                                <option value=''>Assistant Software Engineer </option>
                            </select>
                        </div>
                </div>
            </div>
        </div>

        <div className= "job-stat-row">
            <div className= "job-stat-col">
                <h1 className= "job-stat-h1">79</h1>
                <h5>No. Of Candidates Applied</h5>
            </div>

            <div className= "job-stat-col">
                <h1 className= "job-stat-h1">96</h1>
                <h5>Job Clicks</h5>
            </div>

            <div className= "job-stat-col">
                <h1 className= "job-stat-h1">96</h1>
                <h5 className= "job-stat-h5">No. Of Candidates Contacted</h5>
            </div>
        </div>
    </div>
  );
}