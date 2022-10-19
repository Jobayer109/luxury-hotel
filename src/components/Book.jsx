import React, { useContext } from 'react';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { BookingContext } from '../Contexts/HotelContext';
import BookDetails from './BookDetails';

const Book = ({children}) => {
    const books = useLoaderData()

    
  
    
    return (
        <div>                    
                    <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1510007129229-582b9b1c6aad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}>
                    <h2  className='py-12 ml-16 text-yellow-400 font-extrabold text-4xl'>Book Your <br /> Desired Package below</h2>
                <div className='grid grid-cols-3 gap-12 pb-40 w-[90%] mx-auto'>
                    {
                        books.map(book => <BookDetails
                            key={book.id}
                            book={book}
                        ></BookDetails>)
                    }
         
                </div>
                </div>            
       </div>
    );
};

export default Book;