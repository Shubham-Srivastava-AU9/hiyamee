import React from 'react'
import Header from '../components/Home/Header'
import Footer from '../components/Home/Footer'
import JobCard from '../components/Home/JobCard'
import { Link, Router } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className='main_banner'>
          <div className='custom-container'>
            <div className='row'>
              <div className='col-sm-6 align-self-center'>
                <div className='banner-content'>
                  <h1>
                    <span className='quote-start'>
                      <img
                        src='/assets/img/home/quote.png'
                        className='img img-responsive quote-image'
                        alt='custom-photo'
                      />
                    </span>
                    <b>Coolest Community</b>
                    for the Hottest Talent.{' '}
                    <span className='quote-end'>
                      <i>"</i>
                    </span>
                  </h1>
                  <h3>Join the Community Now </h3>
                  <div className="homepage-body-content">
                    <a href='#' className='btn btn-blue'>
                      Let's Go <i style={{marginLeft: "5px", fontSize: "17px"}} className='fas fa-arrow-alt-circle-right'></i>
                    </a>

                    <p>
                      Already Signed Up? <Link to='/login'>Login</Link>
                    </p>
                    <p>
                      Are you a Recruiter? <Link to="/signup" >Find Candidates Now</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 align-self-center'>
                <img
                  src='/assets/img/home/banner_image.png'
                  className='img img-responsive banner_image'
                  alt='custom-photo'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='trending_platforms'>
          <div className='custom-container'>
            <div className='row'>
              <div className='col-lg-3  col-md-12 align-self-center'>
                <div className='title_container'>
                  <h1 className='title'>
                    Trending communities in our platform
                  </h1>
                </div>
              </div>
              <div className='col-lg-9  col-md-12 align-self-center'>
                <div className='trending_platforms_container'>
                    <div className='trending_platform_card'>
                      <img
                        src='/assets/img/dashboard/platforms/html.png'
                        alt='custom-photo'
                      />
                      <p>Front End Development</p>
                      <p className='count'>200 + Members</p>
                      
                      <div className="trending-job-btn-div">
                        <button className="trending-job-btn">Join Now</button>
                      </div>
                    </div>
                    <div className='trending_platform_card'>
                      <img
                        src='/assets/img/dashboard/platforms/php.png'
                        alt='custom-photo'
                      />
                      <p>Back End Development</p>
                      <p className='count'>150 + Members</p>
                      
                      <div className="trending-job-btn-div">
                        <button className="trending-job-btn">Join Now</button>
                      </div>
                    </div>
                    <div className='trending_platform_card'>
                      <img
                        src='/assets/img/dashboard/platforms/react.png'
                        alt='custom-photo'
                      />
                      <p>Full Stack Development</p>
                      <p className='count'>50 + Members</p>
                      
                      <div className="trending-job-btn-div">
                        <button className="trending-job-btn">Join Now</button>
                      </div>
                    </div>
                    <div className='trending_platform_card'>
                      <img
                        src='/assets/img/dashboard/platforms/mysql.png'
                        alt='custom-photo'
                      />
                      <p>
                        Ui Ux <br className="trend-br"/><br className="trend-br"/>
                      </p>
                      
                      <p className='count'>75 + Members</p>
                      <div className="trending-job-btn-div">
                        <button className="trending-job-btn">Join Now</button>
                      </div>
                    </div>
                    <div className='trending_platform_card'>
                      <img
                        src='/assets/img/dashboard/platforms/angular.png'
                        alt='custom-photo'
                      />
                      <p>
                        Java<br className="trend-br"/><br className="trend-br"/>
                      </p>
                      <p className='count'>300 + Members</p>
                    <div className="trending-job-btn-div">
                        <button className="trending-job-btn">Join Now</button>
                      </div>
                    </div>
                    <div className='trending_platform_card'>
                      <img
                        src='/assets/img/dashboard/platforms/html.png'
                        alt='custom-photo'
                      />
                      <p>
                        Python<br className="trend-br"/><br className="trend-br"/>
                      </p>
                      <p className='count'>500 + Members</p>
                    <div className="trending-job-btn-div">
                        <button className="trending-job-btn">Join Now</button>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='title_container'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12 text-center'>
                <h1>Companies recruiting in Hiyamee</h1>
              </div>
            </div>
          </div>
        </div>

        <div className='company_logos'>
          <div className='custom-container'>
            <div className='row'>
              <div className='company_logo_container'>
                <img
                  src='/assets/img/home/jobs_company/1.png'
                  className='img img-responsive company_logo'
                  alt='custom-photo'
                />
                <img
                  src='/assets/img/home/jobs_company/2.png'
                  className='img img-responsive company_logo'
                  alt='custom-photo'
                />
                <img
                  src='/assets/img/home/jobs_company/3.png'
                  className='img img-responsive company_logo'
                  alt='custom-photo'
                />
                <img
                  src='/assets/img/home/jobs_company/4.png'
                  className='img img-responsive company_logo'
                  alt='custom-photo'
                />
                <img
                  src='/assets/img/home/jobs_company/5.png'
                  className='img img-responsive company_logo'
                  alt='custom-photo'
                />
                <img
                  src='/assets/img/home/jobs_company/6.png'
                  className='img img-responsive company_logo'
                  alt='custom-photo'
                />
                <img
                  src='/assets/img/home/jobs_company/7.png'
                  className='img img-responsive company_logo'
                  alt='custom-photo'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='premium_jobs'>
          <div className='custom-container'>
            <div className='row'>
              <div className='col-lg-3 col-md-12 col-sm-12'>
                <div className='premium_job_title_holder'>
                  <h1 className='title'>
                    Premium <br /> Jobs
                  </h1>
                </div>
              </div>
              <div className='col-lg-9 col-md-12 col-sm-12'>
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

        <div className='testimonials'>
          <div className='custom-container'>
            <div className='row'>
              <div className='col-sm-12 text-center'>
                <h1 className='title'>Testimonials</h1>
              </div>
            </div>

            <div className='testi_container'>
              <div className='row'>
                <div className='col-sm-1 align-self-center text-center'>
                  <div className='arrow-holder'>
                    <span className='arrow customPreviousBtn'>
                      <i className='far fa-arrow-alt-circle-left testi_arrow_left'></i>
                    </span>
                  </div>
                </div>
                <div className='col-sm-10 align-self-center'>
                  <div className='owl-carousel' id='testimonial-carousel'>
                    <div className='testimonial_holder item'>
                      <div className='row'>
                        <div className='col-sm-12 align-self-center'>
                          <div className='row'>
                            <div className='col-sm-5 align-self-center'>
                              <div className='avatar'>
                                <div className='image-holder'>
                                  <img
                                    src='https://placeimg.com/300/300/people'
                                    className='img img-responsive'
                                  />
                                  <span className='dot'></span>
                                </div>

                                <p className='name'>John Doe</p>
                                <span className='job_desc'>
                                  Software Engineer
                                </span>
                              </div>
                            </div>
                            <div className='col-sm-7 align-self-center'>
                              <p className='testimonial_content'>
                                Ma quande lingues coalesce, li grammatica del
                                resultant lingue es plu simplic e regulari quam
                                ti del coalescent lingues. Li nov lingua franca
                                va esser plu simplic e regulari quam li existent
                                Europan lingues. It va esser tam simplic quam
                                Occidental in fact, it va esser Occidental. Lor
                                separat existentie es un myth. Por scientie,
                                musica, sport etc, litot Europa usa li sam
                                vocabular. Li lingues differe solmen.”
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='testimonial_holder item'>
                      <div className='row'>
                        <div className='col-sm-12 align-self-center'>
                          <div className='row'>
                            <div className='col-sm-5 align-self-center'>
                              <div className='avatar'>
                                <div className='image-holder'>
                                  <img
                                    src='https://placeimg.com/300/300/people'
                                    className='img img-responsive'
                                  />
                                  <span className='dot'></span>
                                </div>

                                <p className='name'>John Doe</p>
                                <span className='job_desc'>
                                  Software Engineer
                                </span>
                              </div>
                            </div>
                            <div className='col-sm-7 align-self-center'>
                              <p className='testimonial_content'>
                                Ma quande lingues coalesce, li grammatica del
                                resultant lingue es plu simplic e regulari quam
                                ti del coalescent lingues. Li nov lingua franca
                                va esser plu simplic e regulari quam li existent
                                Europan lingues. It va esser tam simplic quam
                                Occidental in fact, it va esser Occidental. Lor
                                separat existentie es un myth. Por scientie,
                                musica, sport etc, litot Europa usa li sam
                                vocabular. Li lingues differe solmen.”
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='testimonial_holder item'>
                      <div className='row'>
                        <div className='col-sm-12 align-self-center'>
                          <div className='row'>
                            <div className='col-sm-5 align-self-center'>
                              <div className='avatar'>
                                <div className='image-holder'>
                                  <img
                                    src='https://placeimg.com/300/300/people'
                                    className='img img-responsive'
                                  />
                                  <span className='dot'></span>
                                </div>

                                <p className='name'>John Doe</p>
                                <span className='job_desc'>
                                  Software Engineer
                                </span>
                              </div>
                            </div>
                            <div className='col-sm-7 align-self-center'>
                              <p className='testimonial_content'>
                                Ma quande lingues coalesce, li grammatica del
                                resultant lingue es plu simplic e regulari quam
                                ti del coalescent lingues. Li nov lingua franca
                                va esser plu simplic e regulari quam li existent
                                Europan lingues. It va esser tam simplic quam
                                Occidental in fact, it va esser Occidental. Lor
                                separat existentie es un myth. Por scientie,
                                musica, sport etc, litot Europa usa li sam
                                vocabular. Li lingues differe solmen.”
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='testimonial_holder item'>
                      <div className='row'>
                        <div className='col-sm-12 align-self-center'>
                          <div className='row'>
                            <div className='col-sm-5 align-self-center'>
                              <div className='avatar'>
                                <div className='image-holder'>
                                  <img
                                    src='https://placeimg.com/300/300/people'
                                    className='img img-responsive'
                                  />
                                  <span className='dot'></span>
                                </div>

                                <p className='name'>John Doe</p>
                                <span className='job_desc'>
                                  Software Engineer
                                </span>
                              </div>
                            </div>
                            <div className='col-sm-7 align-self-center'>
                              <p className='testimonial_content'>
                                Ma quande lingues coalesce, li grammatica del
                                resultant lingue es plu simplic e regulari quam
                                ti del coalescent lingues. Li nov lingua franca
                                va esser plu simplic e regulari quam li existent
                                Europan lingues. It va esser tam simplic quam
                                Occidental in fact, it va esser Occidental. Lor
                                separat existentie es un myth. Por scientie,
                                musica, sport etc, litot Europa usa li sam
                                vocabular. Li lingues differe solmen.”
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='testimonial_holder item'>
                      <div className='row'>
                        <div className='col-sm-12 align-self-center'>
                          <div className='row'>
                            <div className='col-sm-5 align-self-center'>
                              <div className='avatar'>
                                <div className='image-holder'>
                                  <img
                                    src='https://placeimg.com/300/300/people'
                                    className='img img-responsive'
                                  />
                                  <span className='dot'></span>
                                </div>

                                <p className='name'>John Doe</p>
                                <span className='job_desc'>
                                  Software Engineer
                                </span>
                              </div>
                            </div>
                            <div className='col-sm-7 align-self-center'>
                              <p className='testimonial_content'>
                                Ma quande lingues coalesce, li grammatica del
                                resultant lingue es plu simplic e regulari quam
                                ti del coalescent lingues. Li nov lingua franca
                                va esser plu simplic e regulari quam li existent
                                Europan lingues. It va esser tam simplic quam
                                Occidental in fact, it va esser Occidental. Lor
                                separat existentie es un myth. Por scientie,
                                musica, sport etc, litot Europa usa li sam
                                vocabular. Li lingues differe solmen.”
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-sm-1 align-self-center text-center'>
                  <div className='arrow-holder'>
                    <span className='arrow customNextBtn'>
                      <i className='far fa-arrow-alt-circle-right '></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
