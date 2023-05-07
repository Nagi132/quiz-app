import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Quiz from './Quiz';
import HomePage from './Homepage';

function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
        </div>
    );
}

export default Main;
