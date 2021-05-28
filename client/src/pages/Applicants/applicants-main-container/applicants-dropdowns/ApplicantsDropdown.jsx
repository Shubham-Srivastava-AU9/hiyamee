import React from "react";
import "./ApplicantsDropdown.css"




function ApplicantsDropdown() {
  return (
    <div className="applicants-header">
        <h2> Applicants- Job Title</h2>

            <div className= "applicants-dropdowns">
                <div className= "applicants-dropbtn-col">
                        <div class="applicants-dropdown">
                            <button class="applicants-dropbtn">People Applied</button>
                            <div class="applicants-dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                </div>

                <div className= "applicants-dropbtn-col">
                        <div class="applicants-dropdown2">
                            <button class="applicants-dropbtn2">Filter by Status</button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                </div>
            </div>
      
    </div>
    
  );
}

export default ApplicantsDropdown;