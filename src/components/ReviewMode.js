import React from 'react';
import { Typography } from '@mui/material';

const ReviewMode = ({ filteredQuestions, answers, retryIncorrect }) => {
  const sortedQuestions = filteredQuestions.sort((a, b) => {
    const aIndex = filteredQuestions.indexOf(a);
    const bIndex = filteredQuestions.indexOf(b);

    const aIsCorrect = answers[aIndex] === a.correctAnswer;
    const bIsCorrect = answers[bIndex] === b.correctAnswer;

    return aIsCorrect - bIsCorrect;
  });

  return (
    <div>
      {sortedQuestions.map((question, index) => {
        const answerIndex = filteredQuestions.indexOf(question);
        const isCorrect = answers[answerIndex] === question.correctAnswer;

        return (
          <div key={index}>
            <Typography variant="h4" gutterBottom color="cyan">
              {question.question}
            </Typography>
            <Typography variant="body1" color={isCorrect ? 'cyan' : 'error'}>
              <strong>Your answer:</strong> {question.options[answers[answerIndex]]}
            </Typography>
            <Typography variant="body1" color="cyan">
              <strong>Correct answer:</strong> {question.options[question.correctAnswer]}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewMode;
