import React, { useState } from 'react';
import { TextField, Button, RadioGroup, FormControlLabel, Radio, FormLabel, FormControl, Grid, Box } from '@mui/material';
import axios from 'axios';


const AddQuestion = () => {
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState('');


  const handleOptionChange = (e, index) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const quizData = {
        question,
        category,
        correctAnswer,
        options,
    };

    axios.post('https://yqwocy6uomxdn7al444e75q7f40nykop.lambda-url.us-east-1.on.aws/', quizData)
        .then(response => console.log(response.data))
        .catch(error => console.error('Error:', error));
};

  return (
    <Box mt={3}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <Box p={2} bgcolor="white">
              <TextField label="Question" value={question} onChange={(e) => setQuestion(e.target.value)} required fullWidth />
              <TextField label="Category" value={category} onChange={(e) => setCategory(e.target.value)} required fullWidth />

              <FormLabel component="legend">Options</FormLabel>
              <TextField label="Correct Answer Index" value={correctAnswerIndex} onChange={(e) => setCorrectAnswerIndex(e.target.value)} required fullWidth />
              <RadioGroup name="options" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)}>
                {options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={index.toString()}
                    control={<Radio />}
                    label={
                      <TextField
                        required
                        value={option}
                        onChange={(e) => handleOptionChange(e, index)}
                        label={`Option ${index + 1}`}
                      />
                    }
                  />
                ))}
              </RadioGroup>

              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddQuestion;
