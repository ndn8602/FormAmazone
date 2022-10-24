import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./layouts/Footer/Footer";
import Register from "./layouts/Register/Register";
import Signin from "./layouts/SignIn/Signin";
function App() {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center flex-column "
    >
      <div className="logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Container>
  );
}

export default App;
