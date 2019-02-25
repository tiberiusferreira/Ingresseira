import {ADD_EVENT, TOGGLE_EVENT, EventActions, State, IAddEvent, IToogleEvent, LoadingState} from "../interfaces";

const initialState: State= {
    availableEvents: [
    ],
    loading_state: LoadingState.NotLoading,
    user: {
        id: 0,
        isOrganizer: true,
        name: "Teta",
    },
};

const eventsReducer = (state: State = initialState, action: EventActions): State => {
    // if (isAddEventAction(action)){
    //     action.event
    // }
    switch (action.type) {
        case TOGGLE_EVENT:
            return {...state, availableEvents: state.availableEvents.map(event =>
                event.id === (action as IToogleEvent).eventId ? {...event, toggled: !event.toggled}:
                    event
            )};
        case ADD_EVENT:
            return {...state, availableEvents: [...state.availableEvents, (action as IAddEvent).event]};
        // case ActionType.ErrorLoading:
        //     return {...state, loading_state: LoadingState.ErrorLoading};
        default:
            return initialState
    }
};

export default eventsReducer
