import React, {  Fragment,  useContext, useEffect } from 'react'
import {Route,Switch, Redirect} from 'react-router-dom'

import Home from '../pages/Home'
import Logout from '../pages/Auth/Logout'
import GetStartedTwo from '../pages/GetStartedRecruiter/GetStartedTwo'
import GetStartedOne from '../pages/GetStartedRecruiter/GetStartedOne'
import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'
import ProfileComplete from '../pages/Alerts/Profile-Complete/ProfileComplete'
import Alerts from '../pages/Alerts/Alerts'
import CompanyProfile from '../pages/Company-Profile/CompanyProfile'
import PostedJobs from '../pages/Posted-Jobs/PostedJobs'
import NoAccessTalent from '../pages/Alerts/No-Access-To-Community/NotAccessTalent'
import Applicants from '../pages/Applicants/Applicants'
import ApplicantProfilePage from '../pages/Applicants-Profile/ApplicantProfilePage'
import JobDesc from '../pages/Job-Description/JobDesc'
import Notifications from '../pages/notifications/Notifications'
import Settings from '../pages/Settings/Settings'
import PostJobForm from '../pages/Post-Job-Form/PostJobForm'
import JobPostingSuccess from '../pages/Alerts/Job-Posting-Success/JobPostingSuccess'
import BrowseForm from '../pages/Browse-Candidates/BrowseForm'
import TotalApplicants from '../pages/Total-Applicants/TotalApplicants'
import AboutCompany from '../pages/About-Company/AboutCompany.jsx'

import NotFound from '../pages/Misc/NotFound'

import AuthContext from '../context/auth/authContext'

const  MainBuilder =()=>{
  const authContext = useContext(AuthContext)
  useEffect(()=>{
    authContext.loadUser()
    // eslint-disable-next-line
  },[])

  return (
    
    <Fragment>
      <Alerts/>
      <Switch>
        <Route exact path={`/`} component={Home} />

        <Route exact path={`/login`} component={Login} />
        <Route exact path={`/signup`} component={Signup} />


        <Route exact path={`/get-started`} component={GetStartedOne} />
        <Route exact path={`/get-started-two`} component={GetStartedTwo} />


        <Route exact path={`/profile-complete`} component={ProfileComplete} />

        
        <Route exact path={`/company-profile`} component={CompanyProfile} />
        <Route exact path={`/posted-jobs`} component={PostedJobs} />
        <Route exact path={`/no-access-to-community`} component={NoAccessTalent} />
        <Route exact path={`/applicants`} component={Applicants} />
        <Route exact path={`/applicant-profile`} component={ApplicantProfilePage} />
        <Route exact path={`/job-description`} component={JobDesc} />
        <Route exact path={`/notifications`} component={Notifications} />
        <Route exact path={`/settings`} component={Settings} />
        <Route exact path={`/post-job`} component={PostJobForm} />

        <Route exact path={`/job-posting-successful`} component={JobPostingSuccess} />
        {/*<Route exact path={`/about-company`} component={AboutCompany} />*/}
        <Route exact path={`/browse-candidates`} component={BrowseForm} />
        
        <Route exact path={`/total-applicants`} component={TotalApplicants} />
        <Route exact path={`/about-company`} component={AboutCompany} />
        
        <Route exact path='/404' component={NotFound} />

        {/* Empty redirects */}
        <Route
          exact
          path={`/login`}
          render={() => {
            return <Redirect to='/login' />
          }}
        />
        <Route
          exact
          path={`/sign-up`}
          render={() => {
            return <Redirect to='/signup' />
          }}
        />
        <Route exact path={`/logout`} component={Logout} />

        <Redirect to='/404' />
      </Switch>
      </Fragment>
      
  )
}

export default MainBuilder
