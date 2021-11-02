import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/page/Home";
import Slider from "./components/Slider";
import About from "./components/page/About";
import Projects from "./components/page/Projects";

function App() {
  return (
    <div className="App">
      <Slider />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
