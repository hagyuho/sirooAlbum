import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Gnb from "./component/global/Gnb";
import Header from "./component/global/Header";
import MainPage from "./pages/main";
import Watch from "./pages/watch";

const App = () => {
  return (
    <div className="App">
      <Router basename="/">
        <Header />
        <Gnb />
        <div className="board">
          <Switch>
            <Route path="/baby" component={Watch} />
            <Route exact path="/" component={MainPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
