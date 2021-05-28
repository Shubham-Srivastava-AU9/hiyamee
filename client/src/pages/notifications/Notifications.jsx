import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import AuthDBHeader from '../../components/dashboard/AuthDBHeader'
import Footer from '../../components/Home/Footer'
import "./Notifications.css"


const Notifications = () => {
    return (
      <div className='gray-section'>
        <Helmet>
          <title>Notifications | Hiyamee</title>
        </Helmet>
        <AuthDBHeader />
  
        {/*  */}
  
        <div className='first-section '>
          <div className='custom-container'>
            <div className='row'>
              <div className='col-sm-9'>
                <div className='custom-card nopad'>
                  <div className='card-body-holder'>
                    <div className='notification_page'>
                      <div className='notification_title'>
                        <h3>Notifications </h3>
                      </div>
                      <div className='notifications'>
                        <div className='notification_holder unread'>
                          <div className='notification'>
                            <h3>New Job Notification</h3>
                            <p>
                              Congratulations John! You have cleared Round 1 of
                              Honeywell Application process and shortlisted for
                              Round 2. Gear up!
                            </p>
                          </div>
                        </div>
                        <div className='notification_holder '>
                          <div className='notification'>
                            <h3>New Job Notification</h3>
                            <p>
                              Congratulations John! You have cleared Round 1 of
                              Honeywell Application process and shortlisted for
                              Round 2. Gear up!
                            </p>
                          </div>
                        </div>
                        <div className='notification_holder '>
                          <div className='notification'>
                            <h3>New Job Notification</h3>
                            <p>
                              Congratulations John! You have cleared Round 1 of
                              Honeywell Application process and shortlisted for
                              Round 2. Gear up!
                            </p>
                          </div>
                        </div>
                        <div className='notification_holder '>
                          <div className='notification'>
                            <h3>New Job Notification</h3>
                            <p>
                              Congratulations John! You have cleared Round 1 of
                              Honeywell Application process and shortlisted for
                              Round 2. Gear up!
                            </p>
                          </div>
                        </div>
                        <div className='notification_holder '>
                          <div className='notification'>
                            <h3>New Job Notification</h3>
                            <p>
                              Congratulations John! You have cleared Round 1 of
                              Honeywell Application process and shortlisted for
                              Round 2. Gear up!
                            </p>
                          </div>
                        </div>
                        <div className='notification_holder '>
                          <div className='notification'>
                            <h3>New Job Notification</h3>
                            <p>
                              Congratulations John! You have cleared Round 1 of
                              Honeywell Application process and shortlisted for
                              Round 2. Gear up!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-3'>
                <h3></h3>
              </div>
            </div>
          </div>
        </div>
  
        <Footer />
      </div>
    )
  }
  
  export default Notifications