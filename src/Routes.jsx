import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Learning from './Pages/Learning';
import Moblie from './Pages/Moblie';
import News from './Pages/News';
import About from './Pages/About';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Watch from './Pages/Watch';
import Company from './Pages/Company';
import Partnership from './Pages/Partnership';
import NewsMore from './components/News/NewsMore';
import Profile from './Pages/Profile';
import Test from './components/SignUp/Login.jsx';
import Event from './Pages/Event.jsx';
import ResetPassword from './components/home/ResetPassword.jsx';
import Certification from './components/Dashboard/Certification.jsx';
import Certifications from './Pages/Certifications.jsx';
import GoogleLogin from "./pages/GoogleLogin.jsx";

const AppRoutes = () => {
        return (
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/mobile-app" element={<Moblie />} />
                    <Route path="/products/dashboard" element={<Dashboard />} />
                    <Route path="/products/smart-watch" element={<Watch />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/partnership" element={<Partnership />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/news/:slug" element={<NewsMore />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/reset-password/:token" element={<Home />} />
                    <Route path="/event" element={<Event />} />
                    <Route path='/google/callback' element={<GoogleLogin />} />
                    <Route path="/Test" element={<Test />} />
                    {/* <Route path="/Certifications" element={<Certifications/>} /> */}
            </Routes>
        );
}


export default AppRoutes;
