import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/About'
import Dashboard from '../pages/dashboard/Dashboard'
import Detail from '../pages/detail/Detail'
import Register from '../pages/register/Register'
import Login from '../pages/login/Login'
import PirvateRouter from './PrivateRouter'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/about' element={<About/>}/>
                <Route path='/detail' element={<PirvateRouter/>}>
                    <Route path='' element={<Detail />} />
                </Route>
                <Route path='/Register' element={<Register />} />
                <Route path='/login' element={<Login />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter