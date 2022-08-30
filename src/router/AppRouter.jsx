import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Dashboard from '../pages/dashboard/Dashboard'
import Detail from '../pages/detail/Detail'
import Register from '../pages/register/Register'
import Signin from '../pages/signin/Signin'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/detail' element={<Detail />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/signin' element={<Signin />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter