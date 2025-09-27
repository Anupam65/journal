import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './App.jsx';
import Login from './login.jsx';
import Reg from './registration.jsx';

const route = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reg" element={<Reg />} />

            </Routes>
        </BrowserRouter>
    )
}

export default route;