import React, { useReducer } from 'react';
import axios from 'axios';
import JobsContext from './jobsContext'
import jobsReducer from './jobsReducer';
// import { v4 as uuidv4 } from 'uuid'
import {
  GET_JOBS,
  ADD_JOB,
  DELETE_JOB,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_JOB,
  FILTER_JOBS,
  CLEAR_JOBS,
  CLEAR_FILTER,
  JOB_ERROR
} from '../types';


const JobState = props => {
    const initialState = {
      jobs : [],
      current: null,
      filtered: null,
      error: null
      // jobs :[{
      //   id : 1,
      //   title : "Web Devoloper",
      //   description : "about my self",
      //   job_type :'Full-time',
      //   Skills_sets : [{
      //   name:"React Js",
      //   description:"frontend frame-work"
      //   }],
      //   experience:{
      //     minimum:5,
      //     maximum:6
      // },
      // status:"Active"
      // }],
      

    };


    const [state, dispatch] = useReducer(jobsReducer, initialState);


     // Get Contact
  const getJob = async () => {
    try {
      const res = await axios.get('/api/jobs');

      dispatch({
        type: GET_JOBS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        
      });
    }
  };



    // Add Job
    const addJob = async job => {
      // job.id = uuidv4()//
      // dispatch({type: ADD_JOB,payload: job})

        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
    
        try {
          const res = await axios.post('/api/jobs', job, config);
    
          dispatch({
            type: ADD_JOB,
            payload: res.data
          });
        } catch (err) {
          dispatch({
            // type: JOB_ERROR,
            // payload: err.response.message
          });
        }
      };
      //Set Current Job
      const setCurrent = job =>{
        dispatch({type : SET_CURRENT , payload:job})
      }

      //Clear Current
      const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
      };

      return (
        <JobsContext.Provider
          value={{
            jobs: state.jobs,
            current:state.current,
            // error:state.error,
            addJob,
            setCurrent,
            clearCurrent,
            getJob,
            
          }}
        >
          {props.children}
        </JobsContext.Provider>
      );

}
export default JobState