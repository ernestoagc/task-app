import axios from "axios";

import {uiLoadingRequest,uiLoadingSuccess,uiShowMessage} from '../actions/uiAction'
import {store} from '../store/store' 
  
  const {dispatch} = store;
  let headers = {};
   
  export const axiosInstance = axios.create({
    headers,
  });

  axiosInstance.interceptors.request.use( request =>{
    //const dispatch = useDispatch();
   console.log("REQUEST INTERCEPTOR");
   dispatch(uiLoadingRequest());
  //  dispatch(uiLoadingRequest());
      return request;
}, function (error) {
  return Promise.reject(error);
})



axiosInstance.interceptors.response.use( (response) =>{

    console.log("RESPONSE INTERCEPTOR"); 
    dispatch(uiLoadingSuccess());
      return response;
    
}, function (error) {  
    if (!error.response) {
      return new Promise((resolve, reject) => {

        dispatch(uiShowMessage("error servicio","error"));
        reject(error);
      });
    }


  })

 