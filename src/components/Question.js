import React from 'react';
import { Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const Question = ({ question, options, handleChange, currentAnswer, category }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom color="black">
        {category}
      </Typography>
      <Typography variant="h5" gutterBottom color="black">
        {question}
      </Typography>
      <RadioGroup
        aria-label="quiz"
        name="quiz"
        value={currentAnswer}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={index}
            control={<Radio />}
            label={<Typography color="black">{option}</Typography>}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default Question;
