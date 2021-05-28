import React from "react";
import AuthDBHeader from "../../../components/dashboard/AuthDBHeader";
import Footer from "../../../components/Home/Footer";
import { Link } from "react-router-dom"

export default function ProfileComplete () {
    return(

        <div>
        <AuthDBHeader />
        <div className="profile-complete" >

            <div className="profile-complete-row" > 
                <div className="profile-complete-col profile-complete-left-col">
                    <img className="profile-complete-img" src="assets/img/alerts/profileComplete.png"></img>
                </div>

                <div className="profile-complete-col profile-complete-right-col">
                    <h1>Your Profile is now <span><br/> Complete!</span></h1>
                    <p>Post your Candidate Requirements and show it in front of the best talents
                    and hire the most suitable person for your company.</p>
                    <div className="profile-complete-btn">
                    <Link to="post-job" ><button type='submit' className='btn btn-post-job btn-blue'>
                        Post Job
                      </button> </Link>
                    </div>
                </div>
            </div>
        </div>
    <Footer />
</div>


    )
}