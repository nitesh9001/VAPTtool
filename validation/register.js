const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.phoneNumber = !isEmpty(data. phoneNumber) ? data.phoneNumber : "";
  data.CompanyName = !isEmpty(data.CompanyName) ? data.CompanyName : "";
  data.yourPostion = !isEmpty(data.yourPostion) ? data.yourPostion : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.pincode = !isEmpty(data.pincode) ? data.pincode : "";
  const checkPassword=(str)=>
  {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(str);
  }
  const ceheckemial=(str)=>{
    var ree =/^(\W|^)[\w.+\-]*@gmail\.com(\W|$)/;
    var ree =/^(\W|^)[\w.+\-]*@yahoo\.com(\W|$)/;
    var ree =/^(\W|^)[\w.+\-]*@protonmail\.com(\W|$)/;
    return ree.test(str);
  }
// Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = " First name is required";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name is required";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (ceheckemial(data.email)) {
    errors.email = "Enter Company mail";
  }
  
  if (Validator.isEmpty(data.password)) {
    errors.password= "Password is required";
  }else if (!Validator.isLength(data.password, { min: 6})) {
    errors.password = "Password must be at least 6 characters";
  }else if(!checkPassword(data.password)) {
    errors.password="Password must contains at least one digit/lowercase/uppercase/specialSymbol letter "
  }

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Phone number is required";
  }else 
  
   if (!Validator.isMobilePhone(data.phoneNumber )) {
     errors.phoneNumber = "Invalid phone number";
  }
   
  if (Validator.isEmpty(data.CompanyName)) {
    errors.CompanyName = "Company Name is required";
  }
  
  if (Validator.isEmpty(data.yourPostion)) {
    errors.yourPostion = "Postion is required";
  }
  
  if (Validator.isEmpty(data.country)) {
    errors.country = "country is required";
  }
  
  if (Validator.isEmpty(data.city)) {
    errors.city = "city is required";
  }
  
  if (Validator.isEmpty(data.pincode)) {
    errors.pincode = "Pincode is required";
  }else if(!Validator.isNumeric(data.pincode)){
    errors.pincode = "Pincode must be number";
  }
 

return {
    errors,
    isValid: isEmpty(errors)
  };
};