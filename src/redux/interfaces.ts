export type IAction = IAddEvent | IDeleteEvent | IToogleEvent;

export interface IAddEvent {
    type: 'AddEvent';
    event: IEvent
}

export interface IToogleEvent {
    type: 'ToggleEvent';
    eventId: number
}

export interface IDeleteEvent {
    type: 'DeleteEvent';
    event: IEvent
}


export interface IEvent {
    date: string,
    description: string,
    id: number,
    imageUrl: string,
    imageAlt: string,
    place: string,
    price: number,
    salesPlace: string,
    title: string,
    toggled: boolean
}​

export interface IUser {
    isOrganizer: boolean
    id: number,
    name: string,
}​


export interface IState {
    user: IUser,
    availableEvents: IEvent[],
}




