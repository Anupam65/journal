import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './App.jsx';
import Login from './login.jsx';
import Reg from './registration.jsx';
import Form from './form.jsx';
import Journals from './journals.jsx';
import Reviews from './review.jsx';
import Reviewlist from './reviews.jsx';
import Lhome from './home.jsx';

const route = () => {
    return (
        <BrowserRouter basename="/journal">
            <Routes>
                <Route path="/" element={<Lhome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reg" element={<Reg />} />
                <Route path="/form" element={<Form />} />
                <Route path="/journals" element={<Journals />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/reviewlist" element={<Reviewlist />} />

            </Routes>
        </BrowserRouter>
    )
}

export default route;