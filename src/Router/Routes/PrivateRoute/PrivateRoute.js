import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()


    if (loading) {
        return <h1 className='text-center text-3xl font-bold'>Loading.....</h1>
    }
    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;