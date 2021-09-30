import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Gnb from "./component/global/Gnb";
import Header from "./component/global/Header";
import MainPage from "./pages/main";
import Watch from './pages/watch';

const App = () => {
  return (
    <div className="App">
        <Header />
      <Router basename="/">
        <Gnb />
        <div className="board" >
          <Switch>
            <Route exact path="/" component={MainPage} />
            {/* <Route path="/hautecouture" component={hautecouture} />
            <Route path="/passion" component={passion} />
            <Route path="/highjewely" component={highjewely} />
            <Route path="/finejewely" component={finejewely} /> */}
            <Route path="/watch" component={Watch} />
            {/* <Route path="/eyewear" component={eyewear} />
            <Route path="/fragment" component={fragment} />
            <Route path="/makeup" component={makeup} />
            <Route path="/skincare" component={skincare} />
            <Route path="/introduceChanel" component={introduceChanel} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
