import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookingContext } from '../Contexts/HotelContext';

const Register = () => {

    const {createUser, profile,verifyEmail} = useContext(BookingContext)
    const [error, setError] = useState('')
    
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
              const user = result.user;
              profile(name)
              form.reset('')
              console.log(user)
                toast.success('user created', {autoClose:2000})
            })
            .catch(error => {
              setError(error.message)        
            })
      
      //update name:
      // updateName(name)
      //   .then((result) => { 
      //     console.log(result.user);
      //   })
      //   .catch(error => { setError(error.message) })
      // setError('')
      
      //Verify email:
      verifyEmail()
        .then(() => {
          toast.warning('Verification sent your email address')
        })
      .catch(error=> setError(error.message))
    }















    return (
        <div>
        <div className="hero min-h-screen bg-gray-900">
<div className="hero-content">
     <h2 className='text-3xl font-bold text-white'>Register</h2>
<div className="text-center">
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<form onSubmit={handleRegister} className="card-body">
 <div className="form-control">
   <label className="label">
     <span className="label-text">Name</span>
   </label>
   <input type="text" name='name' placeholder="name" className="input input-bordered" />
 </div>
 <div className="form-control">
   <label className="label">
     <span className="label-text">Email</span>
   </label>
   <input type="email" name='email' placeholder="email" className="input input-bordered" />
 </div>
 <div className="form-control">
   <label className="label">
     <span className="label-text">Password</span>
   </label>
   <input type="password" name='password' placeholder="password" className="input input-bordered" />
   <label className="label">
     <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                  </label>
                  <p className='text-red-500 font-bold'>{ error}</p>
 </div>
 <div className="form-control mt-2">
   <button className="btn btn-primary">Sign Up</button>
 </div>
 <small>Didn't have a account ? <Link className='hover:underline font-bold' to='/login'>Login</Link></small>
</form>
</div>
</div>
</div>
</div>
    );
};

export default Register;