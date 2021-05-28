import React, { useState } from "react";
import { Link } from "react-router-dom"
import ApplicantDetail from "../../components/Applicants/ApplicantDetail";
import AuthDBHeader from "../../components/dashboard/AuthDBHeader";
import Footer from "../../components/Home/Footer";
import "./TotalApplicants.css"
import { BsArrowUpDown } from "react-icons/bs";
import { HiFilter } from "react-icons/hi";



const TotalApplicants = () => {

    const [experienceInput, setexperienceInput] = useState(0)
    const [AnnualSalaryInput, setAnnualSalaryInput] = useState(0)
    const [NoticePeriodInput, setNoticePeriodInput] = useState(0)



    const AnnualSalaryHandler = (e) => {
        const annualsalaryvalue = e.target.value
        setAnnualSalaryInput(annualsalaryvalue)
        // rangeV.innerHTML = `<span>${range.value}</span>`;
        // rangeV.style.left = `calc(${newValue}% +
        const annualsalary = document.getElementById('annualsalary')
        const annualsalaryV = document.getElementById('annualsalaryV')
    
        const newValue = Number(
          ((annualsalary.value - annualsalary.min) * 100) /
            (annualsalary.max - annualsalary.min)
        )
        const newPosition = 10 - newValue * 0.2
        annualsalaryV.innerHTML = `<span>${annualsalary.value}</span>`
        annualsalaryV.style.left = `calc(${newValue}% + (${newPosition}px))`
    }

    const ExperienceHandler = (e) => {
        const experiencevalue = e.target.value
        setexperienceInput(experiencevalue)
        // rangeV.innerHTML = `<span>${range.value}</span>`;
        // rangeV.style.left = `calc(${newValue}% +
        const experience = document.getElementById('experience')
        const experienceV = document.getElementById('experienceV')
    
        const newValue = Number(
          ((experience.value - experience.min) * 100) /
            (experience.max - experience.min)
        )
        const newPosition = 10 - newValue * 0.2
        experienceV.innerHTML = `<span>${experience.value} </span>`
        experienceV.style.left = `calc(${newValue}% + (${newPosition}px))`
      }

      const NoticePeriodHandler = (e) => {
        const noticeperiodvalue = e.target.value
        setNoticePeriodInput(noticeperiodvalue)
        // rangeV.innerHTML = `<span>${range.value}</span>`;
        // rangeV.style.left = `calc(${newValue}% +
        const noticeperiod = document.getElementById('noticeperiod')
        const noticeperiodV = document.getElementById('noticeperiodV')
    
        const newValue = Number(
          ((noticeperiod.value - noticeperiod.min) * 100) /
            (noticeperiod.max - noticeperiod.min)
        )
        const newPosition = 10 - newValue * 0.2
        noticeperiodV.innerHTML = `<span>${noticeperiod.value} </span>`
        noticeperiodV.style.left = `calc(${newValue}% + (${newPosition}px))`
      }

    return (
        <div style={{backgroundColor: "#F6F6F6"}}>
            <AuthDBHeader />
                <div className= "row">
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        
                        <div className='job-sidebar total-applicants-sidebar'>
                        
                        <div className='input range'>
                        <h3 className='sidebar-title'>Total Experience</h3>
                        <div className='range-holder'>
                            <input
                            type='range'
                            name=''
                            min='0'
                            max='20'
                            value={experienceInput}
                            onChange={ExperienceHandler}
                            id='experience'
                            />
                            <div class='range-value' id='experienceV'></div>
                        </div>
                        <span className='min total-candidate-min_max'>Fresher</span>
                        <span className='max total-candidate-min_max'>20+ Years</span>
                        </div>


                        <div className='input range'>
                        <h3 className='sidebar-title'>Annual Salary</h3>
                        <div className='range-holder'>
                            <input
                            type='range'
                            name=''
                            min='1'
                            max='40'
                            value={AnnualSalaryInput}
                            onChange={AnnualSalaryHandler}
                            id='annualsalary'
                            />
                            <div class='range-value' id='annualsalaryV'></div>
                        </div>
                        <span className='min total-candidate-min_max'>1 LPA</span>
                        <span className='max total-candidate-min_max'>40+ LPA</span>
                        </div>

                        <div className='input range'>
                        <h3 className='sidebar-title'>Notice Period</h3>
                        <div className='range-holder'>
                            <input
                            type='range'
                            name=''
                            min='1'
                            max='6'
                            value={NoticePeriodInput}
                            onChange={NoticePeriodHandler}
                            id='noticeperiod'
                            />
                            <div class='range-value' id='noticeperiodV'></div>
                        </div>
                        <span className='min total-candidate-min_max'>1</span>
                        <span className='max total-candidate-min_max'>6 Months</span>
                        </div>


                    
                </div>
                </div>

                <div className="col-lg-9 col-md-12 col-sm-12">
                        <div className="total-applicants-container">
                            <div className="total-applicants-content">
                                <div className= "row">
                                    <div className="col-lg-5 col-md-12 col-sm-12 job-title-heading">
                                        <h4>Applicants- Job Title</h4>
                                    </div>
                                    <div className="row col-lg-7 col-md-12 col-sm-12">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className='filter-holder relevance-dropdown total-applicants-dropdowns'>
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

                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className='filter-holder relevance-dropdown total-applicants-dropdowns'>
                                        <div className='filter'>
                                            <div className='input-group mb-3 input-group-sm'>
                                                <div className='input-group-prepend'>
                                                    <span className='input-group-text arrow-background'>
                                                    <span class="arrowup"><HiFilter /></span>
                                                    </span>
                                                </div>
                                                    <select name='' id='' className='form-control'>
                                                    <option value=''>All Candidates</option>
                                                    <option value=''>In Conversation</option>
                                                    <option value=''>Current Job Title</option>
                    
                                                    <option value=''>Current CTC</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <ApplicantDetail />
                                <ApplicantDetail />
                                <ApplicantDetail />
                            
                        </div>
                    </div>
                </div>
            <Footer />

        </div>
    )
}

export default TotalApplicants