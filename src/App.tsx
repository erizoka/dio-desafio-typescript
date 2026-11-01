import {
  ChakraProvider,
  defaultSystem,
} from "@chakra-ui/react";
import { Card } from "./components/Card";


function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Card />
    </ChakraProvider>
  );
}

export default App;
