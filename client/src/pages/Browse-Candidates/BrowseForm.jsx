import React, {useState} from "react";
import AuthDBHeader from "../../components/dashboard/AuthDBHeader";
import Dropdown from "../../components/Browse-Candidates/Dropdown.js/Dropdown";
import Footer from "../../components/Home/Footer";
import "./BrowseForm.css";
import { Link } from "react-router-dom";
import BrowsedCandidates from "../../components/Browse-Candidate/BrowsedCandidates";


var minMonthsOptions = [
    {
        label: '1 Month', value: '1 Month'
    },{
        label: '2 Months', value: '2 Months'
    },{
        label: '3 Months', value: '3 Months'
    },{
        label: '4 Months', value: '4 Months'
    },{
        label: '5 Months', value: '5 Months'
    },{
        label: '6 Months', value: '6 Months'
    },{
        label: '7 Months', value: '7 Months'
    },{
        label: '8 Months', value: '8 Months'
    },{
        label: '9 Months', value: '9 Months'
    },{
        label: '10 Months', value: '10 Months'
    },{
        label: '11 Months', value: '11 Months'
    },{
        label: '12 Months', value: '12'
    }
];

var maxMonthsOptions = [
    {
        label: '1 Month', value: '1 Month'
    },{
        label: '2 Months', value: '2 Months'
    },{
        label: '3 Months', value: '3 Months'
    },{
        label: '4 Months', value: '4 Months'
    },{
        label: '5 Months', value: '5 Months'
    },{
        label: '6 Months', value: '6 Months'
    },{
        label: '7 Months', value: '7 Months'
    },{
        label: '8 Months', value: '8 Months'
    },{
        label: '9 Months', value: '9 Months'
    },{
        label: '10 Months', value: '10 Months'
    },{
        label: '11 Months', value: '11 Months'
    },{
        label: '12 Months', value: '12'
    }
];

var minYearsOptions = [
    {
        label: '1 Year', value: '1 Years'
    },{
        label: '2 Years', value: '2 Years'
    },{
        label: '3 Years', value: '3 Years'
    },{
        label: '4 Years', value: '4 Years'
    },{
        label: '5 Years', value: '5 Years'
    },{
        label: '6 Years', value: '6 Years'
    },{
        label: '7 Years', value: '7 Years'
    },{
        label: '8 Years', value: '8 Years'
    },{
        label: '9 Years', value: '9 Years'
    },{
        label: '10 + Years', value: '10 + Years'
    }
];

var maxYearsOptions = [
    {
        label: '1 Year', value: '1 Years'
    },{
        label: '2 Years', value: '2 Years'
    },{
        label: '3 Years', value: '3 Years'
    },{
        label: '4 Years', value: '4 Years'
    },{
        label: '5 Years', value: '5 Years'
    },{
        label: '6 Years', value: '6 Years'
    },{
        label: '7 Years', value: '7 Years'
    },{
        label: '8 Years', value: '8 Years'
    },{
        label: '9 Years', value: '9 Years'
    },{
        label: '10 + Years', value: '10 + Years'
    }
];


var locationOptions = [
    {
        label: '1 Year', value: '1 Years'
    },{
        label: '2 Years', value: '2 Years'
    },{
        label: '3 Years', value: '3 Years'
    },{
        label: '4 Years', value: '4 Years'
    },{
        label: '5 Years', value: '5 Years'
    },{
        label: '6 Years', value: '6 Years'
    },{
        label: '7 Years', value: '7 Years'
    },{
        label: '8 Years', value: '8 Years'
    },{
        label: '9 Years', value: '9 Years'
    },{
        label: '10 + Years', value: '10 + Years'
    }
];


var noticePeriodOptions = [
    {
        label: '1 Year', value: '1 Years'
    },{
        label: '2 Years', value: '2 Years'
    },{
        label: '3 Years', value: '3 Years'
    },{
        label: '4 Years', value: '4 Years'
    },{
        label: '5 Years', value: '5 Years'
    },{
        label: '6 Years', value: '6 Years'
    },{
        label: '7 Years', value: '7 Years'
    },{
        label: '8 Years', value: '8 Years'
    },{
        label: '9 Years', value: '9 Years'
    },{
        label: '10 + Years', value: '10 + Years'
    }
];
 
const BrowseForm = () => {
    
    const [minMonthsSelected, setMinMonthsSelected] = useState(minMonthsOptions[0]);
    const [maxMonthsSelected, setMaxMonthsSelected] = useState(maxMonthsOptions[0]);
    
    const [minYearsSelected, setMinYearsSelected] = useState(minYearsOptions[0]);
    const [maxYearsSelected, setMaxYearsSelected] = useState(maxYearsOptions[0]);
    
    const [locationSelected, setLocationSelected] = useState(locationOptions[0]);

    const [noticePeriodSelected, setNoticePeriodSelected] = useState(noticePeriodOptions[0]);


    const [isPreviewShown, setPreviewShown] = useState(false);

    const handlePreview=(e)=>{
        e.preventDefault();

        setPreviewShown(true); // Here we change state
    }




    return(
        <div style={{backgroundColor: "#F6F6F6"}}>
            <AuthDBHeader />
            <div class="job-desc-container">
                <div class="browse-form">
                    <h4> Browse Candidates</h4>

                    <div>
                        <form>


                        <div class="browse-form-fields">
                            <label class="browse-form-labels">Job Title/Job Role</label>
                            <input class="browse-cand-input" type="text" placeholder="Lorem Sipsi" name="job-title"/>
                        </div>
                        <br />

                        

                        <div class="browse-form-fields">
                            <label class="browse-form-labels">Key Skills</label>
                            <input class="browse-cand-input" type="text" name="key-skills"/>
                        </div>

                        <br />

                        <div class="exp-range">
                            <label class="browse-form-labels">Experience Range</label>
                            
                            <br className="form-br"/>

                            <label class="browse-form-sublabel">Min</label>
                                <div className= "exp-dropdowns">

                                            <Dropdown 
                                            selected={minMonthsSelected} 
                                            onSelectedChange={setMinMonthsSelected}
                                            options={minMonthsOptions}
                                            />

                                            <Dropdown 
                                            selected={minYearsSelected} 
                                            onSelectedChange={setMinYearsSelected}
                                            options={minYearsOptions}
                                            />
                                </div>

                            <label class="browse-form-sublabel">Max</label>
                            <div className= "exp-dropdowns">
                                            <Dropdown 
                                            selected={maxMonthsSelected} 
                                            onSelectedChange={setMaxMonthsSelected}
                                            options={maxMonthsOptions}
                                            />

                                            <Dropdown 
                                            selected={maxYearsSelected} 
                                            onSelectedChange={setMaxYearsSelected}
                                            options={maxYearsOptions}
                                            />
                            </div>

                        </div>


                        
                        <br />

                        <div class="browse-form-fields">
                            <label class="browse-form-labels">Location:</label>
                                            <Dropdown 
                                            selected={locationSelected} 
                                            onSelectedChange={setLocationSelected}
                                            options={locationOptions}
                                            />
                                    
                            <br className="form-br"/>
                            <input class="preffered-location-input" type="radio" />
                            <label class="gender preffered-location-label">Also include candidates with Preffered Location</label>   
                        </div>

                        <br />

                        <div class="browse-form-fields">
                            <label class="browse-form-labels candidate-diversity">Candidate Diversity</label>
                            

                            <br className="form-br"/>
                            <input name="gender" for="all-candidates" type="radio" />
                            <label class="browse-form-labels gender candidate-diversity-label" value="all-gender" id="all-candidates">All Candidates</label>
                            <input name="gender" for="male" type="radio" />
                            <label class="browse-form-labels gender candidate-diversity-label" value="male-candidates" id="male-candidates">Male Candidates</label>
                            
                            <br className="form-br"/>
                            <input name="gender" for="female" type="radio" />
                            <label class="browse-form-labels gender candidate-diversity-label" value="female-candidates" id="female-candidates">Female Candidates</label>
                            <input name="gender" for="other-candidates" type="radio" />
                            <label class="browse-form-labels gender candidate-diversity-label" value="other-candidates" id="other-candidates">LGBTQ Candidates</label>
                        </div>


                        <br />

                        <div class="browse-form-fields">
                            <label class="browse-form-labels">Notice Period</label>
                                            <Dropdown 
                                            selected={noticePeriodSelected} 
                                            onSelectedChange={setNoticePeriodSelected}
                                            options={noticePeriodOptions}
                                            />
                        </div>

                            <div class="browse-candidate-btn-div">

                            <button type='submit' onClick={handlePreview} class="browse-candidate-btn">
                            <span class="search-icon-border"><i class="fas fa-search fa-lg"></i></span>
                            <span>SEARCH</span></button>

                            </div>
                        </form>
                    </div>
                    {isPreviewShown && <BrowsedCandidates/>}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default BrowseForm;