import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Game from "./Game"
import Intro from "./Settings"
import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/game">
          <Game></Game>
        </Route>
        <Route path = "/settings">
          <Intro></Intro>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
