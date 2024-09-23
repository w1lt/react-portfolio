import { BrowserRouter as Router } from "react-router-dom";
import { Container, MantineProvider } from "@mantine/core";
import AnimatedRoutes from "./routes";
import "./App.css"; // Import your CSS file

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Container>
        <Router>
          <Header />
          <AnimatedRoutes />
          <Footer />
        </Router>
      </Container>
    </MantineProvider>
  );
};

export default App;
