import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home, Message, Compass } from "./pages";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Modal>
        <h1>Hello</h1>
      </Modal>

      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message" element={<Message />} />
          <Route path="/compass" element={<Compass />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
