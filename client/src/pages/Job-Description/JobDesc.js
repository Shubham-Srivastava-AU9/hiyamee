import React, {useContext , useEffect, useState} from "react";
import JobContext from '../../context/jobs/jobsContext'
import AuthContext from '../../context/auth/authContext';

import AuthDBHeader from "../../components/dashboard/AuthDBHeader";
import Footer from "../../components/Home/Footer";
import Ratings from "../../components/Job-Description/rating/Ratings";
import "./JobDesc.css";
import { Link, useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

const jobDescRatings = {
  size: 50,
  count: 5,
  color: "rgb(176,199,255)",
  activeColor: "rgb(55,113,255)",
  value: 7.5,
  a11y: true,
  isHalf: true,
  emptyIcon: <i style={{fontSize: "20px"}} className="far fa-star fa-xs" />,
  halfIcon: <i style={{fontSize: "20px"}} className="fa fa-star-half-alt fa-xs" />,
  filledIcon: <i style={{fontSize: "20px"}} className="fa fa-star fa-xs" />,
  onChange: newValue => {
    console.log(`Example 2: new value is ${newValue}`);
  }
};


function JobDesc (){
  const params = useParams()

  const jobContext = useContext(JobContext)
  const authContext = useContext(AuthContext);

  const {jobs , getJob} = jobContext;
  console.log(jobs);
  const { user } = authContext;

  const [showJobs,setShowJobs] = useState([])
  const [skills,setSkills] = useState([])

  // console.log(jobs,'molu');
  useEffect(()=>{
    getJob()
  },[])

   useEffect(() => {
      setSkills(jobs?.jobs?.find(job=>{
        
       return job._id === params.id
      }))
      },[jobs])

  


  return (
    <div className="job-desc-page" style={{backgroundColor: 'rgb(246,246,246)'}}>
        <AuthDBHeader />
            <div className="job-desc-container">
            <div className="top-container">
        <div className="row job-desc-top">
          <div className="col-lg-9 col-md-12 col-sm-12">
            <div className="job-desc-title">
              <h5>{skills?.title}</h5>
              
              <div className="job-desc-title">
                <p>{user.name}</p>
                <form >
                    <div className="job-desc-star">
                      <ReactStars {...jobDescRatings} />
                    </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div class="top-container-dropdown">
                  <button class="top-container-dropbtn">{skills?.status}
                  <i style={{marginLeft: '30px'}} class="fas fa-chevron-down"></i></button>
                  <div class="top-container-dropdown-content">
                    {/*<a href="#">INACTIVE</a>*/}
                </div>
            </div>
          </div>
        </div>

        <div className="row job-desc-top">
          <div className="col-lg-7">
            <div className="btn-group job-desc-button">
                <div className="top-container-button">
                  <Link to="/total-applicants"><button className="top-container-btn">View Applicants</button></Link>
                </div>
                <div className="top-container-button">
                  <button className="top-container-btn edit">Edit</button>
                </div>
              </div>
          </div>

          <div className="col-lg-5">
            <div className= "share-icons">
                <p className= "share">SHARE</p>
                <a href="#">
                <i class="fas fa-paste" style= {{color:'#656565', marginLeft: '30px', opacity: '1'}}></i>
                </a>
                <a href="#">
                <i class="fab fa-linkedin-in" style= {{color:'#656565',marginLeft: '30px',opacity: '1'}}></i>
                </a>
                <a href="#">
                <i class="fab fa-facebook-f" style= {{color:'#656565',marginLeft: '30px',opacity: '1'}}></i>
                </a>
                <a href="#">
                <i class="fab fa-instagram" style= {{color:'#656565',marginLeft: '30px',opacity: '1'}}></i>
                </a>
                <a href="#">
                <i class="fab fa-twitter" style= {{color:'#656565',marginLeft: '30px',opacity: '1'}}></i>
                </a>
              </div>
          </div>
        </div>

        <hr className= "top-cont-hr" />
      
    </div>

    <div className="job-desc-component">
        <div>
            <h4> Job Description</h4>
            <p>{skills?.description}</p>
        </div>

        <div className="job-desc-row">
          <div className="job-desc-col">
            <h5>JOB FUNCTIONS</h5>
            <h6>Full Stack Developer</h6>
          </div>

          <div className="job-desc-col">
            <h5>EXPERIENCE NEEDED</h5>
            <h6> {`${skills?.experience?.minimum} - ${skills?.experience?.maximum}`} Years</h6>
          </div>

          <div className="job-desc-col">
            <h5>SALARY</h5>
            <h6>{skills?.salary_offered?.minimum} - {skills?.salary_offered?.maximum} /-</h6>
          </div>
        </div>

        <div className= "job-stat-row job-desc-stat-row">
            <div className= "job-stat-col job-desc-stat-col">
                <h1 className= "job-stat-h1">79</h1>
                <p>No. Of Candidates Applied</p>
            </div>

            <div className= "job-stat-col job-desc-stat-col">
                <h1 className= "job-stat-h1">96</h1>
                <p>Job Clicks</p>
            </div>

            <div className= "job-stat-col job-desc-stat-col">
                <h1 className= "job-stat-h1">96</h1>
                <p>No. Of Candidates Contacted</p>
            </div>
        </div>

      
    </div>
        </div>
            
      
        <Footer />
    </div>
    
  );
}

export default JobDesc;