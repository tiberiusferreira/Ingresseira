import {IAction, IState} from "../interfaces";

const initialState :IState= {
    availableEvents: [
    ],
    user: {
        id: 0,
        isOrganizer: true,
        name: "Teta",
    },
};

const eventsReducer = (state: IState = initialState, action: IAction): IState => {
    switch (action.type) {
        case "ToggleEvent":
            return {...state, availableEvents: state.availableEvents.map(event =>
                event.id === action.eventId ? {...event, toggled: !event.toggled}:
                    event
            )};
        case "AddEvent":
            return {...state, availableEvents: [...state.availableEvents, action.event]};
        default:
            return initialState
    }
};

export default eventsReducer
