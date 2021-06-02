import React ,{useContext , useEffect ,useState} from "react";
import JobContext from '../../../context/jobs/jobsContext'
import { Link } from "react-router-dom";
import "./BottomContainer.css";



const BottomContainer = ()=> {
    const jobContext = useContext(JobContext)
    const {jobs,getJob} = jobContext;
    // console.log(jobs);
    const [showJobs,setShowJobs] = useState([])


    useEffect(() => {
        getJob()
        },[])

    useEffect(()=>{
        setShowJobs(jobs.jobs)
        console.log(jobs.jobs,'molu')
    
    },[jobs])



    return(
        <>
        <div class="bottom-container">
        <div>
            <h4 class="bottom-container-heading"> Posted Jobs</h4>
        </div>
        
                
            <div className="bottom-container-jobcard-row">

            {showJobs?.map((item)=>{
                return (
                <div className="bottom-container-jobcard-col">
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
        </div>
                )
            })}
                


        </div>
        
            
        
        <div>
            <Link to='/posted-jobs' className="header-navbar-item sign-in"><h4 className="bottom-container-txt-btm">View All Jobs Posted</h4></Link>
            </div>
        </div>
        </>
        )
        
        
        
        
    
}

export default BottomContainer;