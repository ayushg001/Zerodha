import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
  import FormControl from '@mui/material/FormControl';
  import { Link} from 'react-router-dom';
  import axios from "axios";

function Signin() {
    const [showPassword, setShowPassword] = useState(false)
    const [ form , setForm ] = useState({ email : "" , password : ""})

    // error message
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = async (e) =>{
    e.preventDefault();
    console.log(form);
    try {
      const res = await axios.post( "https://zerodha-backend-6i13.onrender.com/auth/login" , form);
      console.log(res)
      const token = res.data.jwtToken;
      console.log("token found")
      if (!token) {
        setError("Token missing in response");
        return;
      }
      //stores the token locally
      localStorage.setItem("jwtToken" , token);

      //redirect to dashboard 
      window.location.href = "http://localhost:5174/";
      
    }  catch(err){
            if (err.response && err.response.data.message) {
              setError(err.response.data.message);
            } else {
              setError("Something went wrong");
            }
    }
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
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
            <form onSubmit={handleLogin} action="">
                     <h3 className="mt-5" style={{opacity:"80%"}}>Login now</h3>
                     <p className="text-muted" style={{marginTop:"-5px"}}>Or track your existing application</p>
                     {/* <TextField className='mt-2' id="outlined-basic" label="Name" variant="outlined"  required/>   */}
                  <TextField className='mt-2 mx-5' id="outlined-basic" label="E-Mail" variant="outlined" name="email" onChange={handleChange}  value={form.email} required/>
                      <br />
                      <FormControl className='mt-4' sx={{  width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                name="password"
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
                          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
                         <br />
                          <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-4"
          style={{ width:"200px", margin: "0 auto" }}
        >
          {" "}
         Log in 
        </button>
                     
            </form>
            <p style={{marginTop:"-30px"}}>Don&apos;t have an account?
               <Link style={{textDecoration: "none"}} to="/signup">
              Sign up
              </Link>
            </p>
           
         </div>
      </div>
      </div>
  );
}

export default Signin;
