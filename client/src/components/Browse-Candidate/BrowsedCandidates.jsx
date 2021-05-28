import React from "react";
import { Link } from "react-router-dom";
import ReactTagInput from "@pathofdev/react-tag-input";

import { BsArrowUpDown } from "react-icons/bs";

import "@pathofdev/react-tag-input/build/index.css";
import "./BrowsedCandidate.css"
import FoundCandidates from "./FoundApplicants";

const BrowsedCandidates = () => {

  const [functionalAreaTags, setfunctionalAreaTags] = React.useState(["Java", "C++"])
  const [candidateExpTags, setcandidateExpTags] = React.useState(["4.5 Years"])
  const [annualSalaryTags, setannualSalaryTags] = React.useState(["7-8 LPA"])
  const [locationTags, setlocationTags] = React.useState(["Bangalore", "Chennai"])
  const [jobTypeTags, setjobTypeTags] = React.useState(["Full Time"])

    return(
        <div>
            <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h4 className="found-active-text">Found <span>1523 Active Candidates</span></h4>
                    </div>

                    <div className="col-md-6 col-sm-12">
                    <div className='filter-holder relevance-dropdown active-cand-found-dropdown'>
                        <div className='filter'>
                            <div className='input-group mb-3 input-group-sm'>
                                <div className='input-group-prepend'>
                                    <span className='input-group-text arrow-background'>
                                    <span class="arrowup"><BsArrowUpDown /></span>
                                    </span>
                                </div>
                                    <select name='' id='' className='form-control'>
                                    <option value=''>Relevance</option>
                                    <option value=''>Last Active</option>
                                    <option value=''>Salary</option>
                                    <option value=''>Experience</option>
                                    <option value=''>Current Salary</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                    <div className='job-sidebar browsed-candidate-job-sidebar'>
                    <div className='input'>
                      <h3 className='sidebar-title'>Functional Area</h3>
                      {/*<input
                        type='text'
                        name=''
                        id=''
                        className='form-control'
                      />*/}
                    </div>

                    <ReactTagInput 
                        tags={functionalAreaTags} 
                        removeOnBackspace={true}
                        onChange={(newTags) => setfunctionalAreaTags(newTags)}
                        placeholder="&nbsp;"
                      />
                    
                    
                    <div className='input'>
                      <h3 className='sidebar-title'>Candidate Experience</h3>
                      {/*<input
                        type='text'
                        name=''
                        id=''
                        className='form-control'
                      />*/}

                      <ReactTagInput 
                        tags={candidateExpTags}
                        removeOnBackspace={true} 
                        onChange={(newTags) => setcandidateExpTags(newTags)}
                        placeholder="&nbsp;"
                      />

                    </div>
                    <div className='input'>
                      <h3 className='sidebar-title'>Annual Salary</h3>
                      {/*<input
                        type='text'
                        name=''
                        id=''
                        className='form-control'
                      />*/}

                      <ReactTagInput 
                        tags={annualSalaryTags} 
                        removeOnBackspace={true}
                        onChange={(newTags) => setannualSalaryTags(newTags)}
                        placeholder="&nbsp;"
                      />
                    </div>
                    <div className='input'>
                      <h3 className='sidebar-title'>Location</h3>
                      {/*<input
                        type='text'
                        name=''
                        id=''
                        className='form-control'
                      />*/}

                      <ReactTagInput 
                        tags={locationTags} 
                        removeOnBackspace={true}
                        onChange={(newTags) => setlocationTags(newTags)}
                        placeholder="&nbsp;"
                      />
                    </div>
                    <div className='input'>
                      <h3 className='sidebar-title'>Job Type</h3>
                      {/*<input
                        type='text'
                        name=''
                        id=''
                        className='form-control'
                      />*/}

                      <ReactTagInput 
                        tags={jobTypeTags} 
                        removeOnBackspace={true}
                        onChange={(newTags) => setjobTypeTags(newTags)}
                        placeholder="&nbsp;"
                      />
                    </div>
                  </div>
                  
                    </div>
                    <div className="col-lg-8 col-sm-12 found-applicants">
                  <FoundCandidates />
                  <FoundCandidates />
                  <FoundCandidates />

                  </div>
                </div>
        </div>
    )
}

export default BrowsedCandidates;
                    
                    
                    
                    
                    
                    