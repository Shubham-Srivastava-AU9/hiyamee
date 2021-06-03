import React,{useContext,useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "./CompanyName.css";
import AuthContext from "../../../context/auth/authContext"




const CompanyName =()=> {
  const authContext = useContext(AuthContext)
  const {user} = authContext;
  // console.log(user);
//   const [showUser,setUser] = useState([])

  



  return (
    <div className="company-name">
        <div className="company-name-row row">
            <div className="col-lg-2 company-profile-dp">
                    <img className="company-profile-pic" src="assets/img/home/jobs_company/4.png"></img>
            </div>

            <div className="col-lg-6 company-profile-title">
                <h3>{user.name}</h3>
                <label>{user.email}</label>
                <br />
                <Link to="about-company" >View/ Edit Profile</Link>
            </div>

            <div className="col-lg-4">
                <img className="company-profile-side-img" src="assets/img/company-profile/companyimage.png" ></img>
            </div>
            
        </div>
      
    </div>
    
  );
}

export default CompanyName;