import * as React from 'react';
import {Component, Fragment} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css"
import {BoughtTickets} from "./BoughtTickets/BoughtTickets"
import {default as HomeSection} from "./Home/Home"
import {ManageEvents} from "./ManageEvents/ManageEvents";
import {Settings} from "./Settings/Settings";

class App extends Component {
    public render() {
        return (
            <Router>
                <Fragment>
                    <Route exact={true} path="/" component={HomeSection}/>
                    <Route exact={true} path="/BoughtTickets" component={BoughtTickets}/>
                    <Route exact={true} path="/ManageEvents" component={ManageEvents}/>
                    <Route exact={true} path="/Settings" component={Settings}/>
                    <div className={"footer"}/>
                </Fragment>
            </Router>
        );
    }
}


export default App;