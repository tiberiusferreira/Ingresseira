import * as React from 'react';
import {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Nav} from "../Nav/Nav"
import {IEvent, State} from "../redux/interfaces";
import {toggleEvent} from "../redux/actions"
import {default as EventBanner} from "./EventBanner";
import "./Home.css"

// Component<{Props}, {State}>
class HomeSection extends Component<{events: IEvent[], onClick: (eventId: number) => void}, {}> {
    constructor(props: {events: IEvent[], onClick: (eventId: number) => void}) {
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
                                onClick={this.props.onClick}
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


const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onClick: (eventId: number) => {
        dispatch(toggleEvent(eventId))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeSection);

