import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";
import HOSTURL from '../Services/Url'


const hosturl=HOSTURL.url
// Register User


export const registerUser = (userData) => dispatch => {
    axios.
    post(hosturl+'/api/user/create', userData)
    .then(res => console.log("login")) // re-direct to login on successful register
    .catch(err =>
      console.log(err)
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios.
    post(hosturl+'/api/login',userData)
    .then(res =>{
      const  token  = res.data.loginToken;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      console.log(err)
    )
};


// export const forget = data => {
//   axios
//     .post("/api/users/forgetPassword", data)
//     .then(res => {
//     res.json('sucess','sucess')
//     })
//     .catch((error ,success)=>{
//       if (error && error.length > 0) { 
//         console.log(error)
//        } 
//        else if(success && success.length > 0) { 
//          console.log(success)
//        }
//     });
// };

// //reset
// export const reset= data =>  
//   {
//       axios.post('/api/users/reset/',data).then(res=>{
//         console.log('ok')
        
//       })
//   //   // console.log(response);
//   //   if (response.message === 'password reset link a-ok') {
//   //     this.setState({
//   //       username: response.username,
//   //       updated: false,
//   //       isLoading: false,
//   //       error: false,
//   //     });
//   //   }
//   // } 
//   // catch (error) {
//   //   console.log(error.response.data);
//   //   this.setState({
//   //     updated: false,
//   //     isLoading: false,
//   //     error: true,
//   //   });
  
// }
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
