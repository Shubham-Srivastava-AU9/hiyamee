import React from 'react';
import "./TwoButtons.css";
import { Link } from "react-router-dom";



export default function TwoButtons() {

  return (
    <div className= "two-buttons-div">
      <div>
       <Link to ="/post-job"><button href= "/post-a-job-form" variant="contained" size="large" color="primary" className="two-buttons-grp button-one">
          POST A JOB
        </button></Link> 
        
      </div> 
      <div className="button-two-div">
        <Link to='/no-access-to-community'><button variant="contained" size="large" color="primary" className="two-buttons-grp button-two">
          BROWSE CANDIDATES
        </button></Link>
        
      </div> 
    </div>
  );
}