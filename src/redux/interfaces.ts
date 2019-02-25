export const ADD_EVENT = 'ADD_EVENT';
export const TOGGLE_EVENT = 'TOGGLE_EVENT';

export interface IAddEvent {
    type: typeof ADD_EVENT;
    event: IEvent
}


export interface IToogleEvent {
    type: typeof TOGGLE_EVENT;
    eventId: number
}


export type EventActions = IAddEvent | IToogleEvent
// export interface DeleteEvent {
//     readonly type: ActionType.DeleteEvent;
//     event: IEvent
// }
//
// export interface ErrorLoading {
//     readonly type: ActionType.ErrorLoading;
// }


export interface IEvent {
    date: string,
    description: string,
    id: number,
    image_url: string,
    image_alt: string,
    place: string,
    price: number,
    sales_place: string,
    title: string,
    toggled: boolean
}

export interface User {
    isOrganizer: boolean
    id: number,
    name: string,
}

export enum LoadingState {
    DoneLoading = 0,
    ErrorLoading = 1,
    NotLoading = 2,
}

export interface State {
    user: User,
    loading_state: LoadingState
    availableEvents: IEvent[],
}




