import React, { useContext, useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import {loginUser} from "../../services/authService.js"
import { Link } from 'react-router-dom';
import { getDashboardRoute } from "../../utils/roleRedirect";

const LoginForm = () => {
  const navigate = useNavigate();

  const {login,user} = useContext(AuthContext)
  
  useEffect(() => {
    if (user) {
      navigate(getDashboardRoute(user.Role));
    }
  }, [user]);
  const [data,setData] = useState({
    email:"",
    password:""
  })

const handleChange = (e)=>{
  setData({...data,[e.target.name]: e.target.value})
}

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await loginUser(data);

    login(res.data);

    const redirectPath = getDashboardRoute(res.data.Role);
    navigate(redirectPath);

  } catch {
    alert("Invalid credentials");
  }
};
 
return (

    <div className="container-fluid">

      <div className="row min-vh-100">

 

        {/* LEFT SIDE */}

        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center auth-left">

          <div className="text-center px-4">

            <h1 className="fw-bold text-emerald">Therapy Center</h1>

            <p className="mt-3 text-mute">

              Empowering children with care & therapy

            </p>

          </div>
   </div>

 

        {/* RIGHT SIDE */}

        <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center auth-right">

          <div className="auth-card p-4">

 

            <h3 className="text-center mb-3">Welcome Back</h3>

 

            <form onSubmit={handleSubmit}>

              <div className="mb-3">

                <input

                  type="email"

                  name="email"

                  className="form-control"

                  placeholder="Email Address"

                  onChange={handleChange}

                  required

                />

              </div>

 

              <div className="mb-3">

                <input

                  type="password"

                  name="password"

                  className="form-control"

                  placeholder="Password"

                  onChange={handleChange}

                  required

                />

              </div>

 

              <button className="btn btn-emerald w-100 py-2">

                Login

              </button>

 

              <p className="text-center mt-3 text-mute">

                Don’t have an account?{" "}

                <Link to="/register" className="auth-link">

                  Register

                </Link>

              </p>

            </form>

 

          </div>

        </div>

 

      </div>

    </div>

  );


}

export default LoginForm