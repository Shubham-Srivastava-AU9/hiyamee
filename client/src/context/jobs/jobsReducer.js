import {
    GET_JOBS,
    ADD_JOB,
    JOB_ERROR,
    SET_CURRENT,
    CLEAR_CURRENT,
    GET_JOB
    
    
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_JOBS:
        return {
          ...state,
          jobs: action.payload
          
        };
      case ADD_JOB:
        return {
          ...state.jobs,
          jobs: action.payload 
          
        };
        
   
      case SET_CURRENT:
        return {
          ...state,
          current: action.payload
        };
      // case CLEAR_CURRENT:
      //   return {
      //     ...state,
      //     current: null
      //   };
    //   case FILTER_JOBS:
    //     return {
    //       ...state,
    //       filtered: state.contacts.filter(contact => {
    //         const regex = new RegExp(`${action.payload}`, 'gi');
    //         return contact.name.match(regex) || contact.email.match(regex);
    //       })
    //     };
    //   case CLEAR_FILTER:
    //     return {
    //       ...state,
    //       filtered: null
    //     };
      // case JOB_ERROR:
      //   return {
      //     ...state,
      //     error: action.payload
      //   };
        default:
          return state;
      
    }
  };
  