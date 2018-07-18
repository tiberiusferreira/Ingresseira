import * as React from 'react';
import {Component, Fragment} from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Dispatch} from "redux";
import "./App.css"
import {BoughtTickets} from "./BoughtTickets/BoughtTickets"
import {default as HomeSection} from "./Home/Home"
import {ManageEvents} from "./ManageEvents/ManageEvents";
import {IEvent} from "./redux/interfaces";
import {Settings} from "./Settings/Settings";


function getEvents(dispatch: any) {

    // Invert control!
    // Return a function that accepts `dispatch` so we can dispatch later.
    // Thunk middleware knows how to turn thunk async actions into actions.


    return fetch('http://localhost:8000/api/events')
        .then((response: Response) => response.json())
        .then((events: IEvent[]) => (events.map(
            event => dispatch({
                event,
                type: 'AddEvent',
            })
        )));
}

class App extends Component <{dispatch: Dispatch},{}>{
    constructor(props: {dispatch: Dispatch}){
        super(props);
        getEvents(this.props.dispatch)
    }
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
// const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
//     dispatch
// })
export default connect()(App);