import {
    ADD_EVENT,
    TOGGLE_EVENT,
    EventActions,
    State,
    IAddEventAction,
    IToggleEventAction,
    LoadingState,
    SAVE_EVENT, ISaveEventAction
} from "../interfaces";

const initialState: State = {
    availableEvents: [
        {
            date: "12 Jun",
            description: "Descrição ",
            id: 0,
            image_url: "https://s3-us-west-2.amazonaws.com/pixel-solutions/event/banner/99e98ab25482f8eaae5742a9d94e91ed.jpg",
            image_alt: "imagem do evento",
            place: "Casa da Tia Rita",
            price: 15,
            sales_place: "Bandejao UNICAMP",
            title: "Chopada da Gringos",
            toggled: false,
            saved: false
        }
    ],
    loading_state: LoadingState.NotLoading,
    user: {
        id: 0,
        isOrganizer: false,
        name: "Teta",
    },
};

const eventsReducer = (state: State = initialState, action: EventActions): State => {
    switch (action.type) {
        case TOGGLE_EVENT:
            return {
                ...state,
                availableEvents: state.availableEvents.map(
                    event =>
                        event.id === (action as IToggleEventAction).eventId ? {...event, toggled: !event.toggled} : event
                )};
        case SAVE_EVENT:
            return {
                ...state,
                availableEvents: state.availableEvents.map(
                    event => {
                        if (event.id === (action as ISaveEventAction).eventId){
                            event.saved = !event.saved;
                            return event
                        }else{
                            return event
                        }
                    })
            };
        case ADD_EVENT:
            return {...state, availableEvents: [...state.availableEvents, (action as IAddEventAction).event]};
        default:
            return initialState
    }
};

export default eventsReducer
