import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Results = ({ questions, answers, setQuestions, setAnswers, retryIncorrect }) => {
  const incorrectIndices = answers
    .map((answer, index) => (answer === questions[index].correctAnswer ? null : index))
    .filter((index) => index !== null);
  const incorrectQuestions = incorrectIndices.map((index) => questions[index]);

  const score = answers.reduce((correct, answer, index) => (answer === questions[index].correctAnswer ? correct + 1 : correct), 0);

  const handleRetryIncorrect = () => {
    setQuestions(incorrectQuestions);
    setAnswers(Array(incorrectQuestions.length).fill(null));
    retryIncorrect();
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom color="primary">
        Quiz Results
      </Typography>
      <Typography variant="body1" color="primary">
        You scored {score} out of {questions.length} ({(score / questions.length) * 100}%)
      </Typography>
      <Button onClick={handleRetryIncorrect} variant="conatined" color="primary">Retry Incorrect Questions</Button>
    </Container>
  );
};

export default Results;
