import * as React from 'react';
import {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Nav} from "../Nav/Nav"
import {IEvent, IState} from "../redux/interfaces";
import {default as EventBanner} from "./EventBanner";
import "./Home.css"
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

const mapStateToProps = (state: IState): {events: IEvent[]} => {
    return {
        events: state.availableEvents
    }
}
​


const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onClick: (eventId: number) => {
        dispatch({
            eventId,
            type: 'ToggleEvent',
        })
    }
})
​
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeSection);

