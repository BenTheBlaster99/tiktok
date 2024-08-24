import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import VideoFeed from "./Components/VideoFeed";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={VideoFeed} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
