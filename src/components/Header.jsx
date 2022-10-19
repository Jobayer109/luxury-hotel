import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookingContext } from '../Contexts/HotelContext';

const Header = () => {
  const { user, logOut } = useContext(BookingContext)
  console.log(user)

  const handleSignOut = () => {
    logOut()
      .then(() => {
      
      })
      .catch(() => {
      
    })
  }



    return (
        <>
            <div className="navbar shadow-lg px-24 bg-slate-900 h-3">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-2xl text-yellow-400 font-bold border border-yellow-200">Hotel Luxury</Link>
  </div>
  <div className="flex-none font-semibold">
    <ul className="menu menu-horizontal p-0">
      <li><Link className='text-white hover:text-yellow-500' to='/home'>Home</Link></li>
      <li><Link className='text-white hover:text-yellow-500' to='/book'>Book</Link></li>
      <li><Link className='text-white hover:text-yellow-500' to='/wallet'>Wallet</Link></li>
      <li><Link className='text-white hover:text-yellow-500' to='/profile'>Profile</Link></li>
      <li><Link className='text-white hover:text-yellow-500' to='/about'>About</Link></li>
             
              {
              user?.uid ?
                  
                    
                    <li><Link><button onClick={handleSignOut} className='btn btn-warning btn-outline'>Sign Out</button></Link></li>
                
                  : <>
                    <li><Link to='/login'><button className='btn btn-info btn-outline'>Sign in</button></Link></li>
                    <li><Link to='/register'><button className='btn btn-success btn-outline'>Register</button></Link></li>
                
                </>
              }

          { user?.email &&  <li><Link className='text-white hover:text-yellow-500'>{ user?.email}</Link></li>}
              {user?.displayName &&<li><Link className='text-white hover:text-yellow-500'>{ user?.displayName}</Link></li>}
    </ul>   
          </div>
</div>
        </>
    );
};

export default Header;