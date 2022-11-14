
import React, { useState ,useEffect} from "react";
import { AiFillEye, AiFillEyeInvisible, AiFillUnlock } from "react-icons/ai";
import axios from 'axios'

const Register = () => {
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

  const submit = async (e) => {
    e.preventDefault();
    // setEmailForVer(email);
    // setMobileForVer(mobile)
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profile", profile);
    formData.append("mobile",mobile)
    if (passwordError === "" && confirmPasswordError === "") {
      setIsLoading(true);

      const response = await axios
        .post("/api/register", formData)
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
  
// useEffect(() => {
//   validate()
// }, [mobile])
  return (
    <div>
      
      
      <div className="grid  place-items-center ">
        <div className="w-full py-4 bg-white sm:w-8/12 md:w-1/2
         lg:w-11/12 rounded-xl px-5">
          <h1 className="text-2xl text-custom-blue tracking-widest text-center mt-3">
            SIGN UP
          </h1>
          <p className="text-red-800 text-sm text-center pt-2 capitalize">
            {emailExistError}
          </p>
          <form className="mt-6" onSubmit={submit}>
            
            <div className="flex justify-between gap-3">
              <span className="w-full">
                <label
                  for="firstname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="firstname"
                  autocomplete="given-name"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-100 focus:shadow-inner"
                  required
                  onChange={(e) =>{ 
                     var regex= /[^a-zA-Z\s]/gi;
                     e.target.value= e.target.value.replace(regex,"");
                    setName(e.target.value)}}
                />
              </span>
            </div>

            <label
              for="email"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              onFocus={focusHandler}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
              id="email"
              type="email"
              name="email"
              autocomplete="email"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-100 focus:shadow-inner"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
                 <label
            for="email"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Mobile <span className="text-red-500">*</span>
          
          </label>
          <input
            id="mobile"
            name="mobile"
            maxlength="10"
            value={mobile}
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-100 focus:shadow-inner"
            required
            onChange={(e) =>{ 
              var regex= /[^0-9]/gi;
             e.target.value= e.target.value.replace(regex,"");
              setMobile(e.target.value)}}
          />
           <p className="text-red-800 text-xs pt-1">{check}</p>
            
            <label
              for="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Password
            </label>
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
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-100 focus:shadow-inner"
                required
                onChange={(e) => setPassword(e.target.value)}
                onKeyUp={(e) => checkPassword(e.target.value)}
              />
            </div>
            <p className="text-red-800 text-xs pt-1">{passwordError}</p>
            <label
              for="password-confirm"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Confirm password
            </label>
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
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-100 focus:shadow-inner"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                onKeyUp={(e) => checkConfirmPassword(e.target.value)}
              />
            </div>
            <p className="text-red-800 text-xs pt-1">{confirmPasswordError}</p>

          {
            ((name.length!=0 )&&(email.length!=0)&&(password===confirmPassword)&&(password.length!=0&&confirmPassword.length!=0)&&(mobile.length===10)&&!(isNaN(mobile)))?
           <button
           type="submit"
           className="theme_button  flex justify-center  items-center gap-1 w-full py-3 mt-6 font-medium tracking-widest uppercase  shadow-lg focus:outline-none rounded-md"
         >
           {/* <AiFillUnlock className="text-2xl" /> */}
           Sign up 
         </button>
         
         
         :






           <button
           type="submit"
           disabled
           className="bg-blue-300  flex justify-center  items-center gap-1 w-full py-3 mt-6 font-medium tracking-widest uppercase  shadow-lg  rounded-md"
         >
           {/* <AiFillUnlock className="text-2xl" /> */}
           Sign up
         </button>

          }
          
           

            <p
              className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black"
              // onClick={verifyHandler}
            >
              Already registered?
            </p>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Register
