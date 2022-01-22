import './App.css';
import { Flex, Box } from 'reflexbox'

function App() {
  return (
    <Flex p={2} align='center'>
      <Box px={2} w={1/2}>Box A</Box>
      <Box px={2} w={1/2}>Box B</Box>
    </Flex>
  );
}

export default App;
