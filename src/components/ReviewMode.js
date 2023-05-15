import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import Question from './Question';

const ReviewMode = ({ questions, answers, setAnswers, exitReviewMode}) => {
  const handleChange = (index) => (e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = parseInt(e.target.value);
    setAnswers(updatedAnswers);
  };

  return (
    <div>
      {questions.map((question, index) => (
        <Box key={index} marginBottom={2}>
          <Question
            question={question.question}
            options={question.options}
            handleChange={handleChange(index)}
            currentAnswer={answers[index]}
            category={question.category}
          />
          <Button onClick={exitReviewMode} variant="contained" color="primary">Exit Review Mode</Button>
        </Box>
        
      ))}
    </div>
  );
};

export default ReviewMode;
