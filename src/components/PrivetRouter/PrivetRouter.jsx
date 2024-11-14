import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const PrivetRouter = ({children}) => {
    const {user} = useContext(authContext)
    if(user){
        return children;
    }
    return <Navigate to="/"></Navigate>
};

export default PrivetRouter;