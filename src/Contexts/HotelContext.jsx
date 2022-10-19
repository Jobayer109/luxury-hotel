import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';


const auth = getAuth(app)
export const BookingContext = createContext()

const HotelContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(user);


   
    //create account
    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password);
}
    
    //sign out
    const logOut = () => {
        return signOut(auth);
    }
    
    //sign in
    const userLogIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //update name:
    const profile = (name) => {
        return updateProfile(auth.currentUser, {displayName: name})
    }

    //verification email:
    const verifyEmail = () => {
        setLoading(false)
       return sendEmailVerification(auth.currentUser)
    }

    //On state change:
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {    
          setUser(currentUser)
          setLoading(false)
      })
        return () => {
            unSubscribe()
        }
 },[])
    
   



    
    const bookInfo = {
        user,
        loading,
        createUser,
        logOut,
        userLogIn,
        profile,
        verifyEmail
    };

    return (
        <BookingContext.Provider value={bookInfo}>
            {children}
        </BookingContext.Provider>
    );
};

export default HotelContext;