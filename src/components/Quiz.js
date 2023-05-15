import React, { useState, useEffect } from 'react';
import Question from './Question';
import api from '../services/api';
import { Container, Box, Typography, Button, Select, MenuItem } from '@mui/material';
import theme from '../theme';
import Results from './Results';
import ReviewMode from './ReviewMode';
import NavBar from './Navbar';
import axios from 'axios';


const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [submitted, setSubmitted] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [quizzes, setQuizzes] = useState([]);


  // useEffect(() => {
  //   async function getQuestions() {
  //     try {
  //       // Uncomment the following line and remove the mock data when your API is ready.
  //       // const response = await api.get('/questions');
  //       const response = {
  //         data: [
  //           {
  //             question: 'What is the capital of France?',
  //             options: ['Paris', 'London', 'Berlin', 'Madrid'],
  //             correctAnswer: 0,
  //             category: 'Module 1'
  //           },
  //           {
  //             question: 'Which planet is closest to the Sun?',
  //             options: ['Earth', 'Venus', 'Mercury', 'Mars'],
  //             correctAnswer: 2,
  //             category: 'Module 2'
  //           }
  //         ]
  //       };
  //       setQuestions(response.data);
  //     } catch (error) {
  //       console.error('Error fetching questions:', error);
  //     }
  //   }

  //   getQuestions();
  // }, []);

  useEffect(() => {
    axios.get('https://575gr24cmt6vxzvjjpplbjfate0omuor.lambda-url.us-east-1.on.aws/')
        .then(response => setQuizzes(response.data))
        .catch(error => console.error('Error:', error));
}, []);


  const handleChange = (questionIndex) => (e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = parseInt(e.target.value);
    setAnswers(updatedAnswers);
  };
 

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSubmit = () => {
    if (reviewMode) {
      setReviewMode(false);
    }
    setSubmitted(true);
  };

  const filteredQuestions = selectedCategory === 'All' ? questions : questions.filter(question => question.category === selectedCategory);
  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const score = submitted
    ? answers.reduce((correct, answer, index) => (answer === filteredQuestions[index].correctAnswer ? correct + 1 : correct), 0)
    : null;

 
    const retryIncorrect = () => {
      setReviewMode(true);
      setSubmitted(false);

    };
  
    if (submitted && !reviewMode) {
      return <Results
        questions={filteredQuestions}
        answers={answers}
        setQuestions={setQuestions}
        setAnswers={setAnswers}
        retryIncorrect={retryIncorrect}
      />;
    }
    
    if (reviewMode) {
      return (
        <Container sx={{ bgcolor: theme.palette.background.default }}>
          <ReviewMode
            questions={filteredQuestions}
            answers={answers}
            setAnswers={setAnswers}
            exitReviewMode={() => setReviewMode(false)}
          />
        </Container>
      );
    }
    

  return (
    <Container sx={{ bgcolor: theme.palette.background.default }}>
      {filteredQuestions.length > 0 ? (
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
          
          {filteredQuestions.map((question, index) => (
            <Question
              key={index}  
              question={question.question}
              options={question.options}
              handleChange={handleChange(index)}  
              currentAnswer={answers[index]}  
              category={question.category}
            />
          ))}

          <Box display="flex" justifyContent="center" alignItems="center" marginTop={2}>
            <Button onClick={handleSubmit}>Submit</Button>
          </Box>
        </>
      ) : (
        <Typography variant="h5" gutterBottom>Loading...</Typography>
      )}
    </Container>
);

};

export default Quiz;

