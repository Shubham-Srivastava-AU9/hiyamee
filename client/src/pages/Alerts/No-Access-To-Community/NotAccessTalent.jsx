import React from "react";
import AuthDBHeader from "../../../components/dashboard/AuthDBHeader";
import Footer from "../../../components/Home/Footer";
import "./NoAccessTalent.css";

export default function NoAccessTalent() {
    return(
        <div className="no-access-talent-page" style= {{backgroundColor: "#F6F6F6"}}>
                <AuthDBHeader />
                <div className="no-access-talent-container">
                    <div className="no-access-talent-content">
                        <div>
                            <img className="no-access-talent-img" src="assets/img/alerts/noaccess.png" />
                        </div>

                        <div className= "no-access-row">
                            <div className= "no-access-col no-access-right-col">
                                <h1>
                                    You do not have access to the Talent Community
                                </h1>
                                <p>
                                Want to search the most suitable 
                                candidates for your Job Position, 
                                Get access to our Talent Community.
                                Contact Hiyamee Sales Team Noow!
                                </p>
                            </div>

                            <div className="no-access-talent-contact-info no-access-col">
                                <div className="no-access-talent-bottom-container">
                                    <img className="no-access-talent-phno no-access-phno" src="assets/img/alerts/phone.png" />
                                    <p>+92139213321</p>

                                    <img className="no-access-talent-phno no-access-email" src="assets/img/alerts/mail.png" />
                                    <p>dsadsadas@gmail.com</p>
                                </div>
                                <div className = "another-container">
                                <img className="no-access-talent-phno no-access-phno" src="assets/img/alerts/phone.png" />
                                    <p>+92139213321</p>
                                    <img className="no-access-talent-phno no-access-email" src="assets/img/alerts/mail.png" />
                                    <p>dsadsadas@gmail.com</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
        </div>
    )
}