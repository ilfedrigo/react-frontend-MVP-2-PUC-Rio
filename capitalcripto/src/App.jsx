import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Bitcoin from './Bitcoin'
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="bitcoin" element={<Bitcoin />} />
            </Routes>
        </Router>
    )
}
export default App