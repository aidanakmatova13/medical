import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Projects from "./Views/Projects";
import Calendar from "./Views/Calendar";
import Works from "./Views/Works";
import Possibilities from "./Views/Possibilities";
import Layout from "./Components/Layout";
import ProjectsList from "./Views/ProjectsList";
import Map from "./Views/Map";

function App() {
  return (
    <Router>
      <Layout>
          <Route exact path='/'><Redirect to='/projects'/></Route>
          <Route path='/projects'><Projects/></Route>
          <Route path='/calendar'><Calendar/></Route>
          <Route path='/works'><Works/></Route>
          <Route path='/possibilities'><Possibilities/></Route>
          <Route path='/projects/list'><ProjectsList/></Route>
          <Route path='/projects/map'><Map/></Route>
      </Layout>
    </Router>
  );
}

export default App;
