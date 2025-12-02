import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import { Link  , useNavigate} from "react-router-dom"; // used to redirect after successful signup
import axios from "axios";

function Signup() {
    const navigate = useNavigate();  // redirect helper

    const [ form , setForm] = useState({ name : "", email : "" , password : ""})

    const [showPassword, setShowPassword] = useState(false)

    //loading + error state for submit btn and messages
    const [ loading , setLoading] = useState(false);
    const [ error , setError] = useState("");


      const handleClickShowPassword = () => setShowPassword((show) => !show);  //password visibility handlers 

      const handleMouseDownPassword = (event) => {   //  prevent focus loss when clicking the icon (standard pattern)
        event.preventDefault();
      };

      const handleMouseUpPassword = (event) => {       // optional: keep same behavior on mouseUp (not strictly necessary)
        event.preventDefault();
      };

      // generic handler for all inputs (name, email, password)
      const handleChange = (event) => {
         const { name, value } = event.target;
              setForm(prev => (
                { ...prev, [name]: value }
              ));
         
          // clear previous error when user types
          if (error) setError("");
        };


    

        const handleSubmit = async (e) =>{
            e.preventDefault()            // prevent default HTML form submit
            console.log(form)
        
               // ------------- client-side validation -------------
               // returns null if valid, otherwise returns an error message
            const validate = () => {
              if (!form.name) return "Name is required";
              if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email))
                return "Please enter a valid email address";
              if (form.password.length > 6) return "Password must be at least 6 characters";
              return null;
            };


        //client validation before sending
        const validationError = validate();
        if(validationError){
          setError(validationError)
          return;
        }

        // start loading UI
            setLoading(true);
            setError("");

        try {
          axios.post("https://zerodha-backend-6i13.onrender.com/auth/signup" , form); // form has name , email, password.
            console.log(form);

          // if success + navigate user
          setLoading(false);
          navigate("/signin")

        } catch(err){
          setLoading(false);

              // If backend sent an error response (like 400, 409)
              if (err.response) {
                setError(err.response.data.message || "Signup failed");
              } else {
                // If request never reached server (network offline etc.)
                setError("Network error — check your connection");
              }
            }
        

            };

  return (
    <div className="container border-bottom mb-5" >
        <div className="text-center mt-5 p-3" >
            <h2 className=" p-2 mt-4" style={{fontSize:"35px"}}>Open a free demat & trading account online </h2>
            <h3 className="text-muted mt-3 fs-5" style={{fontWeight:"400"}} >
                Start investing brokerage free and join a community of 1.5+ crore investors and traders
            </h3>
        </div>
        <div className="row mt-3">
        <div className="col-6">
             <img src="media/images/account_open.svg" className="p-3 mt-3" style={{width:"80%" , marginLeft:"110px"}} alt="" />
        </div>
         <div className="col-6">
            <form onSubmit={handleSubmit} >
                     <h3 className="mt-5" style={{opacity:"80%"}}>Signup now</h3>
                     <p className="text-muted" style={{marginTop:"-5px"}}>Or track your existing application</p>
                     <TextField className='mt-2' id="outlined-basic" label="Name" variant="outlined" name="name" value={form.name} onChange={handleChange} required/>  
                      <TextField className='mt-2 mx-5' id="outlined-basic" label="E-Mail" variant="outlined" name="email" value={form.email} onChange={handleChange}   required/>
                      <FormControl className='mt-4' sx={{  width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                name='password'
                                value={form.password}
                                onChange={handleChange}
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                         </FormControl>
                         <br />
                                { error && (
                                  <div  style={{ color: "crimson", marginTop: 8, marginBottom: 8 }} >{error}</div>
                                )}


                          <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-4"
          style={{ width:"200px", margin: "0 auto" }}
        >
          {" "}
         Sign up 
        </button>
                     
            </form>
            <p style={{marginTop:"-30px"}}>Already have an account ?
              <Link style={{textDecoration: "none"}} to="/signin">
                Login
              </Link>
               </p>
           
         </div>
      </div>
      </div>
  );
}

export default Signup;
