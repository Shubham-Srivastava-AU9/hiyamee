import React from 'react'

const JobCard = ({
  title,
  company,
  logo,
  location,
  experience,
  salary,
  posted,
  url,
  gray,
}) => {
  return (
    <div className={`job_card ${gray}`}>
      <div className='company_info'>
        <div className='row'>
          <div className='col-sm-4 align-self-center'>
            <img src={logo} className='img img-responsive' alt='custom-photo' />
          </div>
          <div className='col-sm-8 align-self-center'>
            <p className='job_desc job-card-desc'>{title}</p>
            <p className='company_name'>{company}</p>
          </div>
        </div>
      </div>
      <hr className='job_card_divider' />
      <div className='job_info'>
        <div className='row'>
          <div className='col-sm-7 align-self-center'>
            <p>{location}</p>
            <p>Experience: {experience}</p>
            <p>{salary} a year</p>
          </div>
          <div className='col-sm-5 align-self-center'>
            <p>Posted {posted} Ago</p>
            <a href={url} className='btn btn-blue btn-view'>
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobCard
