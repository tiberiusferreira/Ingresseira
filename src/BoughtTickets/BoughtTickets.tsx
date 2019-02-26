import React from 'react';
import {State} from "../redux/interfaces";
import {saveEvent, toggleEvent} from "../redux/actions";
import {connect} from "react-redux";
import {UnconnectedEventsFeed} from "../Home/EventsFeed";


const mapStateToProps = (state: State) => ({
    events: state.availableEvents.filter((event) => {
        return event.saved;
    })
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedEventsFeed);

