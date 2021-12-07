import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Gnb from "./component/global/Gnb";
import Header from "./component/global/Header";
import MainPage from "./pages/main";
import Routine from "./pages/routine";

const App = () => {
  
  return (
    <div className="App">
      <Router basename="/">
        <Header />
        {/* <Gnb /> */}
        <div className="board">
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/routine" element={<Routine/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
