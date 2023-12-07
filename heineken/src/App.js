import logo from "./logo.svg";
import "./App.css";
import TokenClaim from "./pages/token-claim";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeinekenExperience from "./pages/heineken-experince";
import UEFA from "./pages/uefa";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HeinekenExperience />} /> */}

        {/* <Route path="/" element={<TokenClaim />} /> */}
        <Route path="/" element={<UEFA />} />
      </Routes>
    </Router>
  );
}

export default App;
