import "./App.css";
import { Route, Switch } from "react-router-dom";
import Skills from "./components/page/Skills";
import SliderBar from "./components/SliderBar";
import About from "./components/page/About";
import ProjectsList from "./components/page/ProjectsList";
import _404 from "./components/page/_404";

function App() {
  return (
    <div className="App">
      <SliderBar />

      <div className="container">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={ProjectsList} />
          <Route exact path="/*" component={_404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
//https://iconape.com/github-octocat-logo-logo-icon-svg-png.html
