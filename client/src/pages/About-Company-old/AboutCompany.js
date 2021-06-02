import React , { useState} from "react";
import JobCardv2 from "../../components/Company Profile/JobCardv2";
import AuthDBHeader from "../../components/dashboard/AuthDBHeader";
import Footer from "../../components/Home/Footer";
import JobCard from "../../components/Home/JobCard";
import "./AboutCompany.css";


const AboutCompany = () => {



    const [edit, setEdit] = useState("false");

    const editClickHandler = () => {
        return setEdit("true");
    }

    return (
        <div style= {{backgroundColor: '#F6F6F6'}}>
            <AuthDBHeader />
                <div class="job-desc-container">

                    <div class="about-company-top">
                        <img class="about-company-img" src="/assets/img/home/jobs_company/3.png"></img>
                        <h4>Honeywell</h4>
                    </div>

                    <div class="about-company-wide-pic">
                        <img class="about-company-art" src="/assets/img/about-company/companyart.jpg"></img>
                    </div>



                    <div class="about-company-about">
                        <div class="about-company-about-content">
                            <div>
                                <h5>About Us</h5>
                                <a href="#" onClick= {editClickHandler}>Edit</a>
                                

                            </div>

                            <p contenteditable={edit}>At honeywell, we are dmwqd wqi dnwqd widwonqdwqd iwnqdowinqdwqidn wqidn
                            dnwiqdnowqond iwnqodnwqndi iqwodn onwqdwqin dnwqdiwqnodwqi nidnwqin</p>
                        </div>

                        <div class="about-company-about-rating">
                            <span><img class="about-company-glassdoor" src="/assets/img/about-company/glassdoor.png"></img> 4.7</span>
                        </div>
                    </div>



                    <div class="about-company-row">
                        <div class="about-company-col">
                            <h5>HeadQuarters</h5>
                            <p>Charlotte, North Carolina</p>
                        </div>

                        <div class="about-company-col">
                            <h5>Employees</h5>
                            <p>10,000+</p>
                        </div>

                        <div class="about-company-col">
                            <h5>Industry</h5>
                            <p>Industrial Manufacturing</p>
                        </div>

                        <div class="about-company-col">
                            <h5>Revenue</h5>
                            <p>More than $5B</p>
                        </div>
                        
                    </div>

                    <div class="about-company-grids">
                        <div>
                        
                        <a href="#">Edit/Upload New</a>
                            <h5>INTRO VIDEO- WITH A TAGLINE</h5>

                            <video class="about-company-video" width="400" height="240" controls>
                                <source src="movie.mp4" type="video/mp4" />
                            </video>
                        </div>

                        {/*<div class="about-company-images">
                        
                        <a href="#">Edit/Upload New</a>
                            <h5>TAKE A PEEK AT OUR WORLD</h5>
                            
                        </div>*/}
                    </div>

                    {/*<div class="about-company-social">
                            <h5> OUR SOCIAL MEDIA</h5>
                            <button></button>
                            <button></button>
                            <a>Edit</a>
                    </div>

                    
                    <button>Save and Continue</button>*/}

                    <div className='premium_jobs'>
          <div className='custom-container'>
            <div className='row'>
                    <h5 class="current-job-listing-heading">Current Job Listing</h5>
              
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <div className='row'>
                  <div className='col-lg-4 col-md-6 col-sm-12 align-self-center'>
                    <JobCard
                      title={'Advanced Software Engr'}
                      company={'Honeywell'}
                      logo={'/assets/img/home/premium_jobs/1.png'}
                      location={'Banglaore, Karnataka'}
                      experience={' 3-4 Years'}
                      salary={'₹3,00,000 - ₹5,00,000'}
                      posted={'3 days'}
                      url={'#'}
                    />
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12 align-self-center'>
                    <JobCard
                      title={'Advanced Software Engr'}
                      company={'Honeywell'}
                      logo={'/assets/img/home/premium_jobs/2.png'}
                      location={'Banglaore, Karnataka'}
                      experience={' 3-4 Years'}
                      salary={'₹3,00,000 - ₹5,00,000'}
                      posted={'3 days'}
                      url={'#'}
                    />
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12 align-self-center'>
                    <JobCard
                      title={'Advanced Software Engr'}
                      company={'Honeywell'}
                      logo={'/assets/img/home/premium_jobs/3.png'}
                      location={'Banglaore, Karnataka'}
                      experience={' 3-4 Years'}
                      salary={'₹3,00,000 - ₹5,00,000'}
                      posted={'3 days'}
                      url={'#'}
                    />
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12 align-self-center'>
                    <JobCard
                      title={'Advanced Software Engr'}
                      company={'Honeywell'}
                      logo={'/assets/img/home/premium_jobs/1.png'}
                      location={'Banglaore, Karnataka'}
                      experience={' 3-4 Years'}
                      salary={'₹3,00,000 - ₹5,00,000'}
                      posted={'3 days'}
                      url={'#'}
                    />
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12 align-self-center'>
                    <JobCard
                      title={'Advanced Software Engr'}
                      company={'Honeywell'}
                      logo={'/assets/img/home/premium_jobs/2.png'}
                      location={'Banglaore, Karnataka'}
                      experience={' 3-4 Years'}
                      salary={'₹3,00,000 - ₹5,00,000'}
                      posted={'3 days'}
                      url={'#'}
                    />
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12 align-self-center'>
                    <JobCard
                      title={'Advanced Software Engr'}
                      company={'Honeywell'}
                      logo={'/assets/img/home/premium_jobs/3.png'}
                      location={'Banglaore, Karnataka'}
                      experience={' 3-4 Years'}
                      salary={'₹3,00,000 - ₹5,00,000'}
                      posted={'3 days'}
                      url={'#'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

                    
                </div>

            <br />
            
            <br />
            
            <br />
            
            <br />
            
            <br />
            
            <br />
            
            <br />

            
            <br />
            
            <br />
            
            <br />
            <Footer />
        </div>

    )
}

export default AboutCompany;