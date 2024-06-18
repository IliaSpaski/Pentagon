import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MostWanted from './components/MostWanted';
import Register from './components/Register';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import PersonDetails from './components/PersonDetails';
import About from './components/AboutUs';
import Investigate from './components/Investigate';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/investigate" element={<Investigate />} />
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <MostWanted />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/people/:id"
                        element={
                            <ProtectedRoute>
                                <PersonDetails />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
 