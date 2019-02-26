import * as React from 'react';
import {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Nav} from "../Nav/Nav"
import {IEvent, State} from "../redux/interfaces";
import {saveEvent, toggleEvent} from "../redux/actions"
import {default as EventBanner} from "./EventBanner";
import "./EventsFeed.css"

// Component<{Props}, {State}>
class EventsFeed extends Component<{events: IEvent[], onClick: (eventId: number) => void,
    onSaveClicked: (eventId: number) => void}, {}> {
    constructor(props: {events: IEvent[], onClick: (eventId: number) => void,
        onSaveClicked: (eventId: number) => void}) {
        super(props);
    }
    public render() {
        return (
            <Fragment>
                <Nav/>
                <div className={"event-posts-container"}>
                    {
                        this.props.events.map(event =>
                            <EventBanner
                                key={event.id}
                                event={event}
                                onEventClicked={this.props.onClick}
                                onSaveClicked={this.props.onSaveClicked}
                            />
                        )
                    }
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state: State) => ({
    events: state.availableEvents
});


const mapDispatchToProps = (dispatch: any, ownProps: any) => (
    {
        onClick: (eventId: number) => {
            dispatch(toggleEvent(eventId))
        },
        onSaveClicked: (eventId: number) => {
            dispatch(saveEvent(eventId))
        }
    }
);

export {
    EventsFeed as UnconnectedEventsFeed
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventsFeed);

