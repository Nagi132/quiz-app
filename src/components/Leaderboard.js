import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const Leaderboard = () => {
  // Dummy leaderboard data for testing
  const leaderboardData = [
    { user: 'User 1', quiz: 'Quiz 1', score: 90, dateTime: '2022-01-01 10:00 AM' },
    { user: 'User 2', quiz: 'Quiz 2', score: 80, dateTime: '2022-01-02 02:30 PM' },
    { user: 'User 3', quiz: 'Quiz 3', score: 95, dateTime: '2022-01-03 09:15 AM' },
    { user: 'User 4', quiz: 'Quiz 4', score: 85, dateTime: '2022-01-04 04:45 PM' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Quiz</TableCell>
            <TableCell>Score</TableCell>
            <TableCell>Date and Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderboardData.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{entry.user}</TableCell>
              <TableCell>{entry.quiz}</TableCell>
              <TableCell>{entry.score}</TableCell>
              <TableCell>{entry.dateTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Leaderboard;
