import React from "react";
import "./AwardsHobbies.css";

export default function AwardsHobbies () {
    return (
        <div className="awards-hobbies">
            <div className="awards-cert">
                <h4 className="awards-hobbies-heading">Awards & Certifications</h4>
                <h5 className= "hobbies-p" > Loreum ipsum bla blasadsad d asdsadinsai dsadsad </h5>
            </div>

            <div className="awards-cert-row">
                <div className="awards-cert-col">
                    <p className= "hobbies-p" >Loreum ipsum bla blasadsad</p>

                    <p className= "hobbies-p" >Loreum ipsum bla blasadsad<br />
                    Loreum ipsum bla blasadsad<br />
                    Loreum ipsum bla blasadsad<br />
                    Loreum ipsum bla blasadsad<br /></p>
                </div>

                <div className="awards-cert-col">
                    <p className= "hobbies-p" >Loreum ipsum bla blasadsad</p>
                    
                    <p className= "hobbies-p" >Loreum ipsum bla blasadsad<br />
                    Loreum ipsum bla blasadsad<br />
                    Loreum ipsum bla blasadsad<br />
                    Loreum ipsum bla blasadsad<br /></p>
                </div>
            </div>

            <hr className="applicant-name-hr"/>

            <div className="hobbies-interest">
                <h4 className="awards-hobbies-heading">Hobbies & Interests</h4>
                <h5> Loreum ipsum bla blasadsad d asdsadinsai dsadsad </h5>
            </div>

            <div className="hobbies-row">
                <div className="hobbies-col">
                    <p className= "hobbies-p" >Loreum ipsum bla blasadsad</p>

                    <p className= "hobbies-p">Loreum ipsum bla blasadsad<br />
                    Lsoreum ipsum bla blasadsad<br />
                    Loreum ipsum bla blasadsad<br />
                    Loreum ipsum bla blasadsad<br /></p>
                </div>

                <div className="hobbies-col">
                    <p className= "hobbies-p" >Loreum ipsum bla blasadsad</p>
                    
                    <p className= "hobbies-p">Loreum ipsum bla blasadsad<br />
                    Loreum ipsum bla blasadsad<br />
                    Loreum ipsum bla blasadsad<br />
                    Loreum ipsum bla blasadsad<br /></p>
                </div>
            </div>

            <hr className="applicant-name-hr"/>

            <div className="hobbies-interest social-account">

                <h4 className="awards-hobbies-heading">Social Accounts</h4>

                <p className= "hobbies-p" > LOremewqod wqd mwiqondwiqnd wq wqin dwoiq diwqdowqin</p>
                <button className="linkedin-social-btn"><i class="fab fa-linkedin fa-icon"></i>Sign In</button>

            </div>

        </div>
    
    )
}