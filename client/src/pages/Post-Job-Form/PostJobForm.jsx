import ReactTagInput from "@pathofdev/react-tag-input";
import React, {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import AuthDBHeader from "../../components/dashboard/AuthDBHeader";
import Footer from "../../components/Home/Footer";
import "./PostJobForm.css"


const KeySkills = () => {
    return(
            <div class="post-job-form-span">
                <label for="key-skills3">Key Skills</label>
                <input class="post-job-input" type="text" name="key-skills" ></input>
            </div>

    )
}


const PostJobForm = () => {

    const [isPreviewShown, setPreviewShown] = useState(false);
    const [annualSalaryTags, setannualSalaryTags] = useState(["7-8 LPA"])

    const handlePreview=(e)=>{
        e.preventDefault();

        setPreviewShown(true); // Here we change state

    }
    

    return(
    <div style={{backgroundColor: 'rgb(246,246,246)'}}>
        <AuthDBHeader />
            <div class="job-desc-container">
                <div class="post-job">
                    <h4>Post a Job</h4>

                    <form>

                    <div class="post-job-form-row">
                        <div class="post-job-form-col">

                            <div class="post-job-form-span">
                                <label for="job-title">Job Title</label>
                                <input class="post-job-input" type="text" name="job-title" placeholder="Enter Title"></input>
                            </div>
                            <br />
                            <div class="key-skills">
                                <label for="key-skills1">Key Skills 1</label>
                                {/*<input class="post-job-input" type="text" name="key-skills1" ></input>*/}
                                <ReactTagInput 
                                    tags={annualSalaryTags} 
                                    removeOnBackspace={true}
                                    onChange={(newTags) => setannualSalaryTags(newTags)}
                                    placeholder="&nbsp;"
                                />
                            
                            
                            
                            </div>

                            <br />
                            <div class="post-job-form-span">
                                <label for="key-skills2">Key Skills 2</label>
                                <input class="post-job-input" type="text" name="key-skills2" ></input>
                            </div>

                            <br />
                            <div class="post-job-form-span">
                                <label for="key-skills3">Key Skills 3</label>
                                <input class="post-job-input" type="text" name="key-skills3" ></input>
                            </div>

                            <br />

                            
                            {isPreviewShown && <KeySkills />}
                            

                            <p onClick={handlePreview} class="add-more-tags">+ Add more skills</p>
                        </div>

                        <div class="post-job-form-col">

                            <div class="post-job-form-span">
                                <label for="role-desc">Role Description</label>
                                <input class="post-job-input textarea-post-job" name="role-desc" placeholder="Job Description" ></input>
                            </div>

                            <br />
                            <div class="post-job-form-span">
                                <label>Experience Needed</label>
                                <input class="post-job-double-input" name="min-exp" placeholder="" ></input>
                                <input class="post-job-double-input" name="max-exp" placeholder="" ></input>
                            
                            </div>

                            <br />
                            <div class="post-job-form-span">
                                <label>Job Location</label>
                                <input class="post-job-input" name="job-location" placeholder="Enter Location" ></input>

                            </div>

                            <br />
                            <div class="post-job-form-span" >
                                <label>Job Type</label>
                                <input class="post-job-input" name="job-type" placeholder="Enter Job Type" ></input>

                            </div>

                            <br />
                            <div >
                                <label>Compensation</label>
                                <input class="post-job-double-input" name="min-comp" placeholder="" ></input>
                                <input class="post-job-double-input" name="max-comp" placeholder="" ></input>

                            </div>

                            
                        </div>
                    </div> 

                    <div class="post-job-div">
                    
                    <Link to="/job-posting-successful"><button class="post-job-btn" type="submit">POST JOB</button></Link>


                    </div>

                    
                </form>
                </div>
                
            </div>


        <Footer />
    </div>
    )
}

export default PostJobForm;