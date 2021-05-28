import React from "react";
import ProfessionalSkillset from "../../../components/ProfessionalSkillset";
import SkillCard from "../../../components/ProfessionalSkillset";
import "./ProgressBar.css"

export default function ProgressBar () {
    return (
        <div className="progressbar-container">
        <div className='dashboard progressbar-container' style={{backgroundColor: 'white'}}>
          <div className=''>
            <div className='progressbar-header'>
              <h4 className='progress-bar-title'>Professional Skillset </h4>
            </div>
            <div className='custom-card professional-skill-set'>
              <div className='row'>
                <div className=''>
                  
                </div>
              </div>
              <div className='card-body-holder'>
                <div className='row'>
                  <div className='col-sm-6'>
                    

                    

                    <div className='form-group col-sm-12'>
                      
                      <div className='experience_selector'>
                        
                        
                      </div>
                    </div>

                    
                  </div>

                  <div className='col-sm-12 progress-bar-card'>
                    <div id= 'progress-card-card' className='experience_card_holder progress-bar-card' 
                    >

                    <div className='row'>

                    <div className='col-lg-4 cl-sm-12 progress-bar-col' style={{display: 'inline-flex', }}>
                      <ProfessionalSkillset
                        title={'Full Stack Developer'}
                        experience={'5 Year 2 Months'}
                        skilllevel={5}
                      />
                      </div>
                      <div className='col-lg-4 cl-sm-12 progress-bar-col' style={{display: 'inline-flex', }}>
                      <ProfessionalSkillset
                        title={'Full Stack Developer'}
                        experience={'5 Year 2 Months'}
                        skilllevel={5}
                      />
                      </div>
                      <div className='col-lg-4 cl-sm-12 progress-bar-col' style={{display: 'inline-flex', }}>
                      <ProfessionalSkillset
                        title={'Full Stack Developer'}
                        experience={'5 Year 2 Months'}
                        skilllevel={5}
                      />
                      </div>
                      <div className='col-lg-4 cl-sm-12' style={{display: 'inline-flex', }}>
                      <ProfessionalSkillset
                        title={'Full Stack Developer'}
                        experience={'5 Year 2 Months'}
                        skilllevel={5}
                      />
                      </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="applicant-name-hr" />
      </div>
        
    
    )
}