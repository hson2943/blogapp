import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Question from "./pages/question/Question";
import SingleQuestion from "./pages/singleQuestion/SingleQuestion";
import Posts from "./components/posts/Posts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route path="/single">
          <Single />
        </Route>
        <Route path="/singleQuestion">
          <SingleQuestion />
        </Route>
        <Route path="/question">
          <Question />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
