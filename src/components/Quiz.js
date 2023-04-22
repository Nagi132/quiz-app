import React, { useState, useEffect } from 'react';
import Question from './Question';
import api from '../services/api';
import { Container, Box, Typography, Button, Select, MenuItem } from '@mui/material';
import theme from '../theme';
import ReviewMode from './ReviewMode';


const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    async function getQuestions() {
      try {
        // Uncomment the following line and remove the mock data when your API is ready.
        // const response = await api.get('/questions');
        const response = {
          data: [
            {
              question: 'What is the capital of France?',
              options: ['Paris', 'London', 'Berlin', 'Madrid'],
              correctAnswer: 0,
              category: 'Module 1'
            },
            {
              question: 'Which planet is closest to the Sun?',
              options: ['Earth', 'Venus', 'Mercury', 'Mars'],
              correctAnswer: 2,
              category: 'Module 2'
            }
          ]
        };
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    }

    getQuestions();
  }, []);

  const handleChange = (e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = parseInt(e.target.value);
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const filteredQuestions = selectedCategory === 'All' ? questions : questions.filter(question => question.category === selectedCategory);
  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const score = submitted
    ? answers.reduce((correct, answer, index) => (answer === filteredQuestions[index].correctAnswer ? correct + 1 : correct), 0)
    : null;

 
      
  
  if (submitted) {
    return (
      <Container>
        <Typography variant="h4" gutterBottom color="textPrimary">
          Quiz Results
        </Typography>
        <Typography variant="body1" color="textPrimary">
          You scored {score} out of {filteredQuestions.length} ({(score / filteredQuestions.length) * 100}%)
        </Typography>
            <ReviewMode filteredQuestions={filteredQuestions} answers={answers} />
      </Container>
    );
  }

  return (
    <Container sx={{ bgcolor: theme.palette.background.default }}>
      {filteredQuestions.length > 0 && currentQuestion ? (
        <>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="body1" gutterBottom color="textPrimary">
              Filter by category:
            </Typography>
            <Select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Module 1">Module 1</MenuItem>
              <MenuItem value="Module 2">Module 2</MenuItem>
              <MenuItem value="Module 3">Module 3</MenuItem>
              <MenuItem value="Module 4">Module 4</MenuItem>
            </Select>
          </Box>

          <Question
            question={currentQuestion.question}
            options={currentQuestion.options}
            handleChange={handleChange}
            currentAnswer={answers[currentQuestionIndex]}
            category={currentQuestion.category}
          />
          <Box display="flex" justifyContent="center" alignItems="center" marginTop={2}>
            <Button onClick={handlePrevious} disabled={currentQuestionIndex === 0} color="primary">
              Previous
            </Button>
            {currentQuestionIndex === filteredQuestions.length - 1 ? (
              <Button onClick={handleSubmit}>Submit</Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </Box>
        </>
      ) : (
        <Typography variant="h4" gutterBottom>Loading...</Typography>
      )}
    </Container>
  );
};

export default Quiz;

