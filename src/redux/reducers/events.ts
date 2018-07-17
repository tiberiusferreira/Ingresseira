import {IAction, IState} from "../interfaces";

const initialState :IState= {
    availableEvents: [
        {
            date: "Sab 30 de Jun",
            description: "Some cool string\n really nice",
            id: 1,
            imageAlt: "Image Alt 1",
            imageUrl: "https://s3-us-west-2.amazonaws.com/pixel-solutions/event/banner/99e98ab25482f8eaae5742a9d94e91ed.jpg",
            place: "Casa da Tia Rita",
            price: 35.0,
            salesPlace: "Venda: Bandejao UNICAMP, Casa da Tia Rita",
            title: "Sample Title 1",
            toggled: false,

        },{
            date: "Dom 10 de Jun",
            description: "This is just...\n Fabulous",
            id: 2,
            imageAlt: "Image Alt 2",
            imageUrl: "https://s3-us-west-2.amazonaws.com/pixel-solutions/event/banner/9c7b64df134cbe3417426040c5118384.jpg",
            place: "Casa da Tia Rita",
            price: 55.0,
            salesPlace: "Venda: Bandejao UNICAMP, Casa da Tia Rita",
            title: "Sample Title 2",
            toggled: false,
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
