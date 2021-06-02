import React,{Fragment, useContext , useEffect, useState} from "react";
import JobCardv2 from "../../components/Company Profile/JobCardv2";
import AuthDBHeader from "../../components/dashboard/AuthDBHeader";
import Footer from "../../components/Home/Footer";
import "./PostedJobs.css";
import JobContext from '../../context/jobs/jobsContext'

const PostedJobs =()=>{
    const jobContext = useContext(JobContext)
    const {jobs, getJob} = jobContext;
    console.log(jobs,"--->");
    const [showJobs,setShowJobs] = useState([])
    
   

    useEffect(() => {
        getJob()

        // getJob().then(()=>{
        //     console.log(jobs.jobs,'vishnu')
        //     setShowJobs(jobs.jobs)
        },[])
        useEffect(()=>{
           setShowJobs(jobs.jobs)
           console.log(jobs.jobs,'vishnu')

        },[jobs])

        

        
    // }, [])

    return (
        <>
        {showJobs?.map((item)=>{
            console.log(item,'shubham')
        })}
        <div className="posted-jobs" style={{backgroundColor: '#F6F6F6'}}>
        <AuthDBHeader />
    <div className="all-jobs">
        <div class="bottom-container">
            <div>
                <h2 class="bottom-container-heading"> Posted Jobs</h2>
            </div>

            <div className="bottom-container-jobcard-row">
                <div className="bottom-container-jobcard-col">
                <JobCardv2 job ={showJobs}
                />
                </div>
               
                
            </div>


        </div>
      
    </div>
    <Footer />
</div>
        </>
    )
      }
       




        

    




export default PostedJobs;