import React ,{useContext , useEffect ,useState} from "react";
import JobContext from '../../context/jobs/jobsContext'
import AuthContext from '../../context/auth/authContext';


import AuthDBHeader from '../../components/dashboard/AuthDBHeader';
import Footer from '../../components/Home/Footer';
import ReactStars from "react-rating-stars-component";
import "./AboutCompany.css"
import JobCard from '../../components/Home/JobCard';


const AboutRatings = {
    size: 50,
    count: 5,
    color: "rgb(176,199,255)",
    activeColor: "rgb(55,113,255)",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i style={{fontSize: "25px"}} className="far fa-star fa-xs" />,
    halfIcon: <i style={{fontSize: "25px"}} className="fa fa-star-half-alt fa-xs" />,
    filledIcon: <i style={{fontSize: "25px"}} className="fa fa-star fa-xs" />,
    onChange: newValue => {
      console.log(`Example 2: new value is ${newValue}`);
    }
  };
const AboutCompany = () => {
    const authContext = useContext(AuthContext);
    const jobContext = useContext(JobContext)


  const { user} = authContext;
  const {jobs,getJob} = jobContext;
  const [showJobs,setShowJobs] = useState([])


  useEffect(() => {
      getJob()
      },[])

  useEffect(()=>{
      setShowJobs(jobs.jobs)
      console.log(jobs.jobs,'molu')
  
  },[jobs])

    return (
        <div style={{backgroundColor: "F6F6F6"}}>
            <AuthDBHeader />
                <div className="job-desc-container">
                    <div className="row company-header-row">
                        <div class="col-lg-2 col-md-12 col-sm-12 company-header-col">
                            <div className="company-dp-div">
                                <img className="img-responsive img-circle company-dp" src="assets/img/home/jobs_company/2.png"></img>
                            </div>
                          </div>
                          
                        <div class="col-lg-5 col-md-12 col-sm-12">
                            <div className="company-title">
                                <h3>{user.name}</h3>
                            </div>

                        </div>
                        <div class="col-lg-5 col-md-12 col-sm-12">
                        <form >
                            <div id="react-stars">
                                <ReactStars {...AboutRatings} />
                            </div>
                        </form>
                        
                        </div>
                    </div>

                    <div className="row company-art-row">
                        <div className="col-lg-12">
                            <img className="company-art" src="assets/img/about-company/companyart.jpg"></img>
                        </div>
                    </div>

                    <div className="row company-header-row">
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <div className="row">
                                <div className="col-lg-9 col-md-10 col-sm-12">
                                    <p className="headings">ABOUT US</p>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12">
                                    <a className= "text-right">EDIT INFO</a>
                                </div>
                            </div>
                            <div>
                                <p>About us At Honeywell, we are blending physical products with software solutions to link people and businesses to the information they need to be more efficient, more productive, and more connected.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12">
                            
                        </div>
                    </div>

                    <div className="row headquarters-row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <p className="headings">HEADQUARTERS</p>
                            <p>Charlotte, North Carolina</p>
                        </div>

                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <p className="headings">EMPLOYEES</p>
                            <p>10,000</p>
                        </div>

                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <p className="headings">INDUSTRY</p>
                            <p>Industrial Manufacturing</p>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <p className="headings">REVENUE</p>
                            <p>more than $500B</p>
                        </div>
                    </div>


                    <div className="row company-media-row">
                        <div className="col-lg-6 col-md-6 col-sm-12 media-col">
                            <div className="row">
                                <div className="col-lg-7 col-md-7 col-sm-12">
                                    <p>INTRO VIDEO- WITH A TAGLINE</p>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12">
                                    <a className="text-right">EDIT/UPLOAD NEW</a>
                                </div>
                            </div>
                            <div>
                                <img width="95%" className="img-responsive img-fluid" src="assets/img/about-company/companyart.jpg"></img>
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 media-col">
                            <div className="row">
                                <div className="col-lg-7 col-md-7 col-sm-12">
                                    <p>TAKE A PEEK AT OUR WORLD</p>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12">
                                    <a className="text-right">EDIT/UPLOAD NEW</a>
                                </div>
                            </div>
                            
                            

                            <div class="grid">
                                <div><img className="company-media-img" src="assets/img/about-company/companyart.jpg"></img></div>
                                <div><img className="company-media-img" src="assets/img/about-company/companyart.jpg"></img></div>
                                <div><img className="company-media-img" src="assets/img/about-company/companyart.jpg"></img></div>
                                <div><img className="company-media-img" src="assets/img/about-company/companyart.jpg"></img></div>
                            </div>
                        </div>
                    </div>
                    <div className="company-social-media ">
                               
                                <div>
                                <p>OUR SOCIAL MEDIA</p>
                                </div>
                                
                                <div>
                                <button className="linkedin-btn">
                                    <i class="fab fa-linkedin"></i>Linked in</button>
                                </div>
                                <div>
                                <button className="linkedin-btn">
                                <i class="fab fa-facebook"></i>Facebook</button>
                                </div>

                                <a class="edit-social">Edit</a>
                            </div>

                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div class="submit-button-prof-edit-div">
                                <button class="post-job-div submit-button-prof-edit" type="submit">Save and Continue</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12 col-md-12 col-sm-12 about-company-job-card'>
                    
                    <h3 className="headings"> JOB LISTING</h3>
                    <br />
                    <br />
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
                      logo={'/assets/img/home/premium_jobs/1.png'}
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

            <Footer />
        </div>
    );
};




export default AboutCompany;

