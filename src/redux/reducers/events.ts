import {IAction, IState} from "../interfaces";


const initialState :IState= {
    availableEvents: [
        {
            id: 1,
            title: "Sample Title 1",
            toggled: false
        },{
            id: 2,
            title: "Sample Title 2",
            toggled: false
        }
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
        default:
            return initialState
    }
};

export default eventsReducer
