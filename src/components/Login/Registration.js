import React ,{useState}from 'react'
import { AiFillEye, AiFillEyeInvisible, AiFillUnlock } from "react-icons/ai";
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom'
import axios from 'axios'
import Avatar from '@mui/material/Avatar';
const Register=()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setValidateError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [emailExistError, setEmailExistError] = useState("");
    const [isHide, setIsHide] = useState(false);
    const [isHide2, setIsHide2] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [check, setcheck] = useState("");
    
  //   const { FRONTEND_VALIDATOR } = config;
  
    const onSubmit = async (e) => {
          const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("profile", profile);
      formData.append("mobile",mobile)
      if (passwordError === "" && confirmPasswordError === "") {
        setIsLoading(true);
  
        const response = await axios
          .post(" http://localhost:8080/api/api/register", formData)
          .catch((err) => console.log(err));
        setIsLoading(false);
  
        if (response.data.message === "already exists") {
          setEmailExistError("Email already exists! try login.");
        } else {
          // signedHandler();
        }
      } else {
        console.log("not submitted");
      }
    };
  
    const checkConfirmPassword = (confirmPassword) => {
      if (password === confirmPassword) {
        setConfirmPasswordError("");
      } else {
        setConfirmPasswordError("Passwords not match.");
      }
    };
  
    const checkPassword = (password) => {
      const validatePassword =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
      var result = validatePassword.test(password);
      checkConfirmPassword(confirmPassword);
      if (result) {
        setValidateError("");
      } else {
        setValidateError(
          "Password must include atleast a number, a special character and 8-16 characters."
        );
      }
    };
  
    const focusHandler = () => {
      setEmailExistError("");
    };
    const validate=()=>{
      if(mobile=="" ){
         setcheck("")
      }
      else if(mobile.length<10){
        setcheck("Enter 10 digit mobile number");
      }
      else if(!(isNaN(mobile))&&mobile.length===10){
        setcheck("")
           
      }
    }
    
    return(
        <>
        <div className="bg-white h-full w-full flex justify-center items-center absolute z-10 bg-cl ">
        
        <div className="min-h-full  bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <Link to="/"><CloseIcon className=" absolute z-10 top-4"/></Link> 
  <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-2/img/logo.36f34a9f.svg"  alt="Workflow"/>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register  your account</h2>
     
    </div>
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
    
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div className='relative'>
          
          <input 
            id="firstname"
            type="text"
            name="firstname"
            autocomplete="given-name"
       
           required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name"
           onChange={(e) =>{ 
            var regex= /[^a-zA-Z\s]/gi;
            e.target.value= e.target.value.replace(regex,"");
           setName(e.target.value)}}
           />
           <div className=" absolute right-1 top-1">
          <Avatar alt="Remy Sharp" 
       sx={{ width: 30, height: 30 }}
      src="https://i.ytimg.com/vi/WV_0WylRdNo/maxresdefault.jpg"/>
              </div>
        </div>
        <div>
          
          <input          
       
           required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mobile"
           id="mobile"
           name="mobile"
           maxlength="10"
           value={mobile}      
           
           onChange={(e) =>{ 
             var regex= /[^0-9]/gi;
            e.target.value= e.target.value.replace(regex,"");
             setMobile(e.target.value)}}
           />
        </div>

        {/* <div>
          <label for="email-address " className="sr-only">Email address</label>
          <input id="email-address" name="email" 
          type="email" autocomplete="email"
       
           required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div> */}
        <div>
          
          <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"
           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
              id="email"
              type="email"
              name="email"
              autocomplete="email"
            
              required
              onChange={(e) => setEmail(e.target.value)}
           />
        </div>
        <div>
          
        
            <div className="relative">
              {isHide ? (
                <AiFillEyeInvisible
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={() => setIsHide(false)}
                />
              ) : (
                <AiFillEye
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={() => setIsHide(true)}
                />
              )}
              <input
                id="password"
                type={isHide ? "text" : "password"}
                name="password"
                autocomplete="new-password"
                placeholder=" Password"
                className="appearance-none rounded-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                required
                onChange={(e) => setPassword(e.target.value)}
                onKeyUp={(e) => checkPassword(e.target.value)}
              />
            </div>
           
           
        </div>
        <div>
          
        
            <div className="relative">
            {isHide2 ? (
                <AiFillEyeInvisible
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={() => setIsHide2(false)}
                />
              ) : (
                <AiFillEye
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={() => setIsHide2(true)}
                />
              )}
              <input
                id="password-confirm"
                type={isHide2 ? "text" : "password"}
                name="password-confirm"
                autocomplete="new-password"
                placeholder="Confirm Password"
                className="appearance-none rounded-none rounded-b-md   block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                onKeyUp={(e) => checkConfirmPassword(e.target.value)}
              />
            </div>
           
           
        </div>
       
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
          <label for="remember-me" className="ml-2 block text-sm text-gray-900"> Read the Team and condition carefully </label>
        </div>

      </div>

      <div>
      {
            ((name.length!=0 )&&(email.length!=0)&&(password===confirmPassword)&&(password.length!=0&&confirmPassword.length!=0)&&(mobile.length===10)&&!(isNaN(mobile)))?
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
        : 
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>}
        <div className="flex items-center justify-between">
       

        <div className="text-sm">
        <Link to="/Login">

          <p className="font-medium text-indigo-600 hover:text-indigo-500" > Already registered </p>
        </Link>
        </div>
      </div>
      </div>
    </form>
  </div>
</div>
</div>
        </>
    )
}
export default Register

