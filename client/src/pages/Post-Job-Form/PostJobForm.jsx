import React, {useState , useEffect, useContext} from "react";
import { Link } from 'react-router-dom'

import AuthDBHeader from "../../components/dashboard/AuthDBHeader";
import Footer from "../../components/Home/Footer";
import "./PostJobForm.css"
import JobContext from '../../context/jobs/jobsContext'


const PostJobForm = props =>{
    const jobContext = useContext(JobContext)
    const {addJob , current } = jobContext


    
    useEffect(()=>{
        if(current !==null){
            SetJob(current);
        }else{
            SetJob({
            title :'',
            description:'',
            job_type:'',
            skills_sets:[
                {
                skills1:'',
                skills2:'',
                skills3:'',
                skills4:''
                },
            ],
            locations:'',
            experience:{
                minimum:'',
                maximum:''
            },
            salary_offered:{
                minimum:'',
                maximum:''
            }
            })
        }
    },[jobContext , current]);
    const [isPreviewShown, setPreviewShown] = useState(false);
    const [job , SetJob] = useState({
        
            title :'',
            description:'',
            job_type:'',
            skills_sets:[
                {
                skills1:'',
                skills2:'',
                skills3:'',
                skills4:''
                },
            ],
            locations:'',
            experience:{
                minimum:'',
                maximum:''
            },
            salary_offered:{
                minimum:'',
                maximum:''
            }
        })


    
    
    const onChange = e => SetJob({ ...job, [e.target.name]: e.target.value });

    const handlePreview=()=>{
        setPreviewShown(true); // Here we change state
    }
    
    const onSubmit = e =>{
        e.preventDefault();
        if(current === null){
            addJob(job);
        }
        props.history.push('/job-posting-successful')

    }
    return(
    <div style={{backgroundColor: 'rgb(246,246,246)'}}>
        <AuthDBHeader />
        <div class="job-form-card">
            <div class="job-form-title">
                <h2>Post a Job</h2>
            </div>
        <form onSubmit = {onSubmit}> 
            <div className="row job-form">
                <div className="col-lg-6">
                    <div className="row job-form-fields">
                        <div className= "col-lg-2">
                            <label>Job Title</label>
                        </div>
                        <div className= "col-lg-10">
                            <input className="form-input" type="text" name ='title' value={job.title} onChange = {onChange} 
                             placeholder = 'Possition' required />
                        </div>
                    </div>
                    <div className="row job-form-fields"   >
                        <div className= "col-lg-2">
                            <label>Key Skills 1</label>
                        </div>
                        
                        <div className= "col-lg-10">
                            <input className="form-input" type="text" value={job.skills_sets.skills1} onChange={(e)=>SetJob({...job,skills_sets:{...job.skills_sets,skills1:e.target.value}})}
                             placeholder="Enter Required Skills" required></input>
                        </div>
                    </div>

                    <div className="row job-form-fields">
                        <div className= "col-lg-2">
                            <label>Key Skills 2</label>
                        </div>
                        
                        <div className= "col-lg-10">
                            <input className="form-input" type="text" value={job.skills_sets.skills2} onChange={(e)=>SetJob({...job,skills_sets:{...job.skills_sets,skills2:e.target.value}})}
                             placeholder="Enter Required Skills" required></input>
                        </div>
                    </div>

                    <div className="row job-form-fields">
                        <div className= "col-lg-2">
                            <label>Key Skills 3</label>
                        </div>
                        
                        <div className= "col-lg-10">
                            <input className="form-input" type="text"   value={job.skills_sets.skills3} onChange={(e)=>SetJob({...job,skills_sets:{...job.skills_sets,skills3:e.target.value}})}
                             placeholder="Enter Required Skills" required></input>
                        </div>
                    </div>

                    {isPreviewShown && 
                    <div className="row job-form-fields">
                        <div className= "col-lg-2">
                            <label>Key Skills 4</label>
                        </div>
                        
                        <div className= "col-lg-10">
                            <input className="form-input" type="text"   value={job.skills_sets.skills4} onChange={(e)=>SetJob({...job,skills_sets:{...job.skills_sets,skills4:e.target.value}})}
                             placeholder="Enter Required Skills"></input>
                        </div>
                    </div>}

                    <p onClick={handlePreview} class="add-more-tags">+ Add more skills</p>
                </div>

                <div className="col-lg-6">
                    <div className="row job-form-fields">
                        <div className= "col-lg-2">
                            <label>Job Description</label>
                        </div>
                        <div className= "col-lg-10">
                            <textarea className="form-input form-input-textarea" type="text" name ='description' value={job.description} onChange= {onChange} 
                             placeholder="Job Description"></textarea>
                        </div>
                    </div>

                    <div className="row job-form-fields" >
                        <div className= "col-lg-2">
                            <label>Experience Needed</label>
                        </div>
                        <div className= "col-lg-10">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-12">
                                
                                    <input className="form-input-min" type="number" required  placeholder="Minimum" value={job.experience.minimum} onChange={(e)=>SetJob({...job,experience:{...job.experience,minimum:e.target.value}})}  ></input>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12">
                                    <input className="form-input-max" type="number" required placeholder="Maximum" value={job.experience.maximum} onChange={(e)=>SetJob({...job,experience:{...job.experience,maximum:e.target.value}})}  ></input>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="row job-form-fields">
                        <div className= "col-lg-2">
                            <label>Job Location</label>
                        </div>
                        <div className= "col-lg-10">
                            <input className="form-input" type="text" placeholder="Enter Location" required  value={job.locations} onChange={(e)=>SetJob({...job,locations:e.target.value})}></input>
                        </div>
                    </div>

                    <div className="row job-form-fields">
                        <div className= "col-lg-2">
                            <label>Job Type</label>
                        </div>
                        <div className= "col-lg-10">
                            <input className="form-input" type="text" name = 'job_type' required value={job.job_type} onChange = {onChange}
                            placeholder="Enter Job Type"></input>
                        </div>
                    </div>

                    <div className="row job-form-fields" >
                        <div className= "col-lg-2">
                            <label>Compensation</label>
                        </div>
                        <div className= "col-lg-10">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-12">
                                    <input className="form-input-min" type="number" required  placeholder="Minimum" value={job.salary_offered.minimum} onChange={(e)=>SetJob({...job,salary_offered:{...job.salary_offered,minimum:e.target.value}})} 
                                    ></input>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12">
                                    <input className="form-input-max" type="number" required placeholder="Maximum" value={job.salary_offered.maximum} onChange={(e)=>SetJob({...job,salary_offered:{...job.salary_offered,maximum:e.target.value}})} 
                                      ></input>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
                    <div class="post-job-btn">
                    
                <button className="post-job-button" type="submit">POST JOB</button>

                    </div>
        </form>
        </div>
        <Footer />
    </div>
    )
}

export default PostJobForm;