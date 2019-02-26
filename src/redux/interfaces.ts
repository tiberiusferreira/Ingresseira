export const ADD_EVENT = 'ADD_EVENT';
export const TOGGLE_EVENT = 'TOGGLE_EVENT';
export const SAVE_EVENT = 'SAVE_EVENT';

export interface IAddEventAction {
    type: typeof ADD_EVENT;
    event: IEvent
}


export interface IToggleEventAction {
    type: typeof TOGGLE_EVENT;
    eventId: number
}

export interface ISaveEventAction {
    type: typeof SAVE_EVENT;
    eventId: number
}


export type EventActions = IAddEventAction | IToggleEventAction | ISaveEventAction


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
    toggled: boolean,
    saved: boolean
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




