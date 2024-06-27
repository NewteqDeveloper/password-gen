import { Container } from '@mui/material';
import PasswordGenerator from './components/PasswordGenerator';

const Home = () => {
  return (
    <Container>
      <h1>Password Generator</h1>
      <PasswordGenerator />
    </Container>
  );
};

export default Home;
