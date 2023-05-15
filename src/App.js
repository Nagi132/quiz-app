import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './components/Quiz';
import HomePage from './components/Homepage';
import theme from './theme';
import Login from './components/Login';
import AddQuestion from './components/AddQuestion';
import Navbar from './components/Navbar'
import Leaderboard from './components/Leaderboard';
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/add-question" element={<AddQuestion />} />
          <Route path="/leaderboard" element={<Leaderboard />}  />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;

