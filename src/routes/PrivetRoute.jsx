import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { BookingContext } from '../Contexts/HotelContext';

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(BookingContext)
    
    const location = useLocation()

    if (loading) {
        return <progress className="progress w-full"></progress>
    }

    if (user && user?.uid) {
        return children;
    }

    return (
        <Navigate to='/login' state={{from: location}} replace/>
    );
};

export default PrivetRoute;