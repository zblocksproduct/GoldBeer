import logo from "./logo.svg";
import "./App.css";
import TokenClaim from "./pages/token-claim";
import HeinekenExperience from "./pages/heineken-experince";
import UEFA from "./pages/uefa";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TokenClaim />} />
        <Route path="/experience" element={<HeinekenExperience/>} />
        <Route path="/UEFA" element={<UEFA/>} />
      </Routes>
    </Router>
  );
}

export default App;
