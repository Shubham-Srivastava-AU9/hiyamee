import React from "react";

const FoundCandidates = () => {
    return (
        <div>
                      <div className="row">
                        <div class="col-lg-2">
                          <div>
                            <img className="applicant-face browsed-candidate-face" src="assets/img/applicants/face3.png"></img>
                          </div>
                        </div>
                        <div class="col-lg-6 active-candidates-title">
                          <div className="applicant-title">
                            <h3>John Doe <span>@johdeo05</span></h3>
                            <p className="active-last-active">Last Active: 35 Mins Ago</p>
                            <p className="active-last-desc">Lorem ipsumd dnsian dsnaidn wqlkndodn,d wiqndwq
                            dwqdinwq dniwoqdniw qndiowq</p>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <div className="view-resume-btn-div">
                          <button className="view-resume-btn">View Profile</button>
                          </div>
                        </div>

                      </div>

                      <div className="row active-candidates-row">
                        <div className= "col-lg-4 active-candidates-info">
                          <h5>Software Developer</h5>
                          <p>Vitasta Online Services Pvt Ltd</p>
                        </div>
                        <div className= "col-lg-5 active-candidates-info experience-active-cand">
                          <h5><span>Experience: </span>3 years 5 Months</h5>
                          <h5><span>Current Salary: </span>Rs. 12.5 Lakhs LPA</h5>
                        </div>
                        <div className= "col-lg-3 active-candidates-info">
                        <h5 className="skillset-found-app">Skillset</h5>
                        <p className="skillset-found-app">Java, C++, HTML</p>
                        </div>
                      </div>


                      <hr className="active-candidate-hr" />
                    </div>
    )
}

export default FoundCandidates