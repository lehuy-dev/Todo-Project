import './App.css';
import { Container } from '@mui/material';
import Taskboard from '../../containers/Taskboard/Taskboard';
import GlobalLoading from '../../containers/GlobalLoading/GlobalLoading';
import Model from '../../containers/Model/model';
function App() {
  return (
    <Container>
      <Taskboard></Taskboard>
      <GlobalLoading></GlobalLoading>
      <Model></Model>
    </Container>
  );
}

export default App;
