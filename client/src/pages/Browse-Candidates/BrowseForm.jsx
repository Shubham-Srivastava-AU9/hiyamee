import { React, useState } from "react";
import BrowsedCandidates from "../../components/Browse-Candidate/BrowsedCandidates";
import AuthDBHeader from "../../components/dashboard/AuthDBHeader";
import Footer from "../../components/Home/Footer";
import "./BrowseForm.css"



const BrowseForm = () => {

    const [isPreviewShown, setPreviewShown] = useState(false);

    const handlePreview=(e)=>{
        e.preventDefault();

        setPreviewShown(true); // Here we change state
    }

    return(
        <div style={{backgroundColor: "#F6F6F6"}}>
            <AuthDBHeader />
                <div class="browse-candidate-container">
                    <div className="browse-candidate-body">
                        <div>
                            <h3>Browse Candidates</h3>
                        </div>
                        <form>
                            <div className="row browse-form-fields">
                                <div className="col-lg-2">
                                    <label>Job Title/Job Role</label>
                                </div>
                                <div className="col-lg-10">
                                    <input className="browse-input" type="text" placeholder="Key Words"></input>
                                </div>
                            </div>

                            <div className="row browse-form-fields">
                                <div className="col-lg-2">
                                    <label>Key Skills</label>
                                </div>
                                <div className="col-lg-10">
                                    <input className="browse-input" type="text" placeholder=""></input>
                                </div>
                            </div>

                            <div className="row browse-form-fields">
                                <div className="col-lg-2">
                                    <label>Experience Range</label>
                                </div>
                                <div className="col-lg-5">
                                    <div class="btn-group">
                                        MIN
                                        <button class="btn btn-secondary btn-sm dropdown-toggle exp-range-dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Years
                                        </button>
                                        <div class="dropdown-menu">
                                            
                                        </div>
                                    </div>
                                    <div class="btn-group">
                                        <button class="btn btn-secondary btn-sm dropdown-toggle exp-range-dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Months
                                        </button>
                                        <div class="dropdown-menu">
                                            ...
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="btn-group">
                                        Max
                                        <button class="btn btn-secondary btn-sm dropdown-toggle exp-range-dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Years
                                        </button>
                                        <div class="dropdown-menu">
                                            
                                        </div>
                                    </div>
                                    <div class="btn-group">
                                        <button class="btn btn-secondary btn-sm dropdown-toggle exp-range-dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Months
                                        </button>
                                        <div class="dropdown-menu">
                                            ...
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row browse-form-fields">
                                <div className="col-lg-2">
                                    <label>Location</label>
                                </div>

                                <div className="col-lg-3">
                                    <div class="btn-group">
                                        <button class="btn btn-secondary btn-sm dropdown-toggle exp-range-dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dummy Content
                                        </button>
                                        <div class="dropdown-menu">
                                            ...
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-7">
                                    <input type="checkbox" />
                                    <label>Also include candidates with Preffered Location</label>
                                </div>
                            </div>

                            <div className="row browse-form-fields">
                                <div className="col-lg-2">
                                    <label>Candidate Diversity</label>
                                </div>
                                <div className="col-lg-2">
                                    <input type="checkbox" />
                                    <label class="">All Candidates</label>
                                </div>
                                <div className="col-lg-2">
                                    <input type="checkbox" />
                                    <label class="">Male Candidates</label>
                                </div>
                                <div className="col-lg-2">
                                    <input type="checkbox" />
                                    <label class="">Female Candidates</label>
                                </div>
                                <div className="col-lg-2">
                                    <input type="checkbox" />
                                    <label class="">LGBTQ Candidates</label>
                                </div>
                            </div>

                            <div className="row browse-form-fields">
                                <div className="col-lg-2">
                                    <label>Notice Period</label>
                                </div>

                                <div className="col-lg-2">
                                    <div class="btn-group">
                                        <button class="btn btn-secondary btn-sm dropdown-toggle exp-range-dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dummy Content
                                        </button>
                                        <div class="dropdown-menu">
                                            ...
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="browse-candidate-btn-container">

                            <button type='submit' onClick={handlePreview} class="browse-candidate-btn">
                            <span class="search-icon-border"><i class="fas fa-search fa-lg"></i></span>
                            <span>SEARCH</span></button>

                            </div>
                        </form>
                    </div>
                    
                    {isPreviewShown && <BrowsedCandidates/>}
                </div>
                

            <Footer />
        </div>
    )
}

export default BrowseForm