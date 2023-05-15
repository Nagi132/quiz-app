import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Quiz App
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">Home</Button>
        <Button color="inherit" component={RouterLink} to="/quiz">Quiz</Button>
        <Button color="inherit" component={RouterLink} to="/leaderboard">Leaderboard</Button>
        <Button color="inherit" component={RouterLink} to="/add-question">Add Question</Button>
        <Button color="inherit" component={RouterLink} to="/signout">Sign Out</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
