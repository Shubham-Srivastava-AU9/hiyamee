import React from 'react';
import AuthDBHeader from '../../components/dashboard/AuthDBHeader';
import Footer from '../../components/Home/Footer';
import "./Settings.css";
import { Link } from "react-router-dom";

const Settings = () => {

    return(
        <div style={{backgroundColor: '#F4F4F4'}}>
            <AuthDBHeader />

            <div id= "Settings-scroll" className="Settings-container">
                <h4>Settings</h4>
                
                <div className="settings-div">
                    <Link to="/notifications"><h6 className="settings-heading">Notifications</h6></Link>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>

                     <hr />
                    <Link to="/"><h6 className="settings-heading">Change Password</h6> </Link><hr />
                    <Link to="/"><h6 className="settings-heading">Contact Us</h6> </Link><hr />
                    <Link to="/"><h6 className="settings-heading">Deactivate Account</h6> </Link><hr />
                </div>

            </div>

            <Footer />
        </div>
    )
}



export default Settings;