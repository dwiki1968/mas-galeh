import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import { Box, Center, Heading, Text } from "@chakra-ui/react";

const App = () => {
  const MyRouter = () => (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<Detail />} />
        <Route
          path="*"
          element={
            <Center h="80vh">
              <Text>404 | Not Found</Text>
            </Center>
          }
        />
      </Routes>
    </div>
  ); // TODO: replace this

  return (
    <div className="App">
      {/* Navbar */}
      <Box w="100vw" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      {/* Route */}
      <MyRouter />
    </div>
  );
};

export default App;
