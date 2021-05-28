import React from 'react'

const ProfessionalSkillset = ({ title, experience, skilllevel }) => {
  const skillbar = []
  for (var i = 1; i <= 10; i++) {
    console.log(i)
    if (i <= skilllevel) {
      skillbar.push(<span key={i} className='active'></span>)
    } else {
      skillbar.push(<span key={i}></span>)
    }
  }
  return (
    <div className='experience_card'>
      <div className=''>
        <span></span>
      </div>

      <div className='skill_set_info'>
        <h3>{title}</h3>
        <p>{experience}</p>
        <div className='experience_bar '>{skillbar}</div>
      </div>
      {/* <div className='edit-btn-holder'>
        <span className='btn'>
          <i className='fa fa-edit'></i>
        </span>
      </div> */}
    </div>
  )
}

export default ProfessionalSkillset
