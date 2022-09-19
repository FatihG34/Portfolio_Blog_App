import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'


const PirvateRouter = () => {
    // const { currentUser } = useContext(AuthUserContext)
    const currentUser = true
    return currentUser ? <Outlet /> : <Navigate to='/login' replace />
}

export default PirvateRouter