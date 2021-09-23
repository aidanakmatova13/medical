import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Projects from "./Views/Projects";
import Calendar from "./Views/Calendar";
import Works from "./Views/Works";
import Possibilities from "./Views/Possibilities";
import Layout from "./Components/Layout";
import ProjectsList from "./Components/ProjectsList";
import Map from "./Views/Map";


function App() {
    return (
        <Router>
            <Switch>
                <Layout>
                    <Route exact path='/'><Redirect to='/projects'/></Route>
                    <Route path='/projects'><Projects/></Route>
                    <Route path='/projects'><Redirect to='/projects/list'/></Route>
                    <Route path='/calendar'><Calendar/></Route>
                    <Route path='/works'><Works/></Route>
                    <Route path='/possibilities'><Possibilities/></Route>
                    <Route path='/projects/list'><ProjectsList/></Route>
                    <Route path='/projects/map'><Map/></Route>
                </Layout>
            </Switch>
        </Router>
    );
}

export default App;
