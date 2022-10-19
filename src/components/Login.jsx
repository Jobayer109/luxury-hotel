import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BookingContext } from '../Contexts/HotelContext';

const Login = () => {
  const {userLogIn} = useContext(BookingContext)
  const [error, setError] = useState(null)

  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
    
  const navigate = useNavigate()
    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
      const password = form.password.value;
 

      userLogIn(email, password)
        .then(result => {
          console.log(result.user);
          navigate(from, {replace:true})          
        })
        .catch(error => {
       setError(error.message)
        })     
      
    }




    return (
        <div>
               <div className="hero min-h-screen bg-gray-900">
  <div className="hero-content">
            <h2 className='text-3xl font-bold text-white'>Sign in</h2>
    <div className="text-center">
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                  </label>
                  <p className='text-red-500 font-bold'>{ error}</p>
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-primary">Sign in</button>
        </div>
        <small>Didn't have a account ? <Link className='hover:underline font-bold' to='/register'>Register</Link></small>
      </form>
    </div>
  </div>
</div>
     </div>
    );
};

export default Login;