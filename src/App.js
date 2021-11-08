import "./App.css";
import { Route, Switch } from "react-router-dom";
import Skills from "./components/page/Skills";
import Slider from "./components/SideBar";
import About from "./components/page/About";
import ProjectsList from "./components/page/ProjectsList";

function App() {
  return (
    <div className="App">
      <Slider />
      {/* <ProjectsList /> */}
      <div className="container">
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={ProjectsList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
