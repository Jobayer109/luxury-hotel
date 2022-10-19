import React from 'react';
import { FaBed, FaDollarSign, FaHospitalUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const BookDetails = ({ book}) => {    
    const { img, bill, bed, person } = book;

  
    return (
        <div>
                       <div className="card w-96 bg-white shadow-xl image-full">
          <figure><img src={img} alt="" /></figure>
          <div className="card-body">
          <h2 className="card-title font-bold text-2xl text-yellow-400">{ book.title}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, consequuntur.</p>
                                
                <div className='flex items-center justify-around'>
                    <div className='flex items-center text-xl font-bold'>
                            < FaBed /> <p> { bed}</p>
                    </div>             
                    <div className='flex items-center text-xl font-bold'>
                        <FaHospitalUser/> <p>{person} </p>
                    </div>             
                    <div className='flex items-center text-xl font-bold'>
                            <FaDollarSign /> <p>{ bill}</p>
                    </div>             
                </div>
        
            <div className="card-actions justify-center">
              <Link className=' mt-4 text-center'  to='/wallet'><button className="btn btn-sm btn-outline btn-warning w-60">Book Now</button></Link>
            </div>
          </div>
        </div>
        </div>
    );
};

export default BookDetails;