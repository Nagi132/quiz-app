import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
      <div>
        <h1>Quiz App</h1>
        <Link to="/quiz">Start Quiz</Link>

      </div>
    );
  };
  

  export default HomePage;
