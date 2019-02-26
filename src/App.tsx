import * as React from 'react';
import {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Dispatch} from "redux";
import "./App.css"
import BoughtTickets from "./BoughtTickets/BoughtTickets"
import {ManageEvents} from "./ManageEvents/ManageEvents";
import {IAddEventAction, IEvent} from "./redux/interfaces";
import {addEvent} from "./redux/actions";
import {Settings} from "./Settings/Settings";
import EventsFeed from "./Home/EventsFeed";

const SERVER_EVENTS_URL: string = "http://localhost:1024/api/events";


function getEvents(addEvent: ((event: IEvent) => IAddEventAction)) {
    fetch(SERVER_EVENTS_URL)
        .then((response: Response) => response.json())
        .then((events: IEvent[]) => (events.map(
                event => addEvent(event)
            ))
        );
}

class App extends Component <{addEvent: ((event: IEvent) => IAddEventAction) },{}>{
    constructor(props: {addEvent: ((event: IEvent) => IAddEventAction)}){
        super(props);
        getEvents(props.addEvent)
    }
    public render() {
        return (
            <Router>
                <Fragment>
                    <Route exact={true} path="/" component={EventsFeed}/>
                    <Route exact={true} path="/BoughtTickets" component={BoughtTickets}/>
                    <Route exact={true} path="/ManageEvents" component={ManageEvents}/>
                    <Route exact={true} path="/Settings" component={Settings}/>
                    <div className={"footer"}/>
                </Fragment>
            </Router>
        );
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addEvent: (event: IEvent) => dispatch(addEvent(event))
    }
};
export default connect(null, mapDispatchToProps)(App);