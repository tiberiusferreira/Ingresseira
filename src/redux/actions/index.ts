import {ADD_EVENT, TOGGLE_EVENT, IAddEvent, EventActions, IEvent, IToogleEvent} from '../interfaces'

export function addEvent(event: IEvent): IAddEvent {
    return {
        type: ADD_EVENT,
        event: event
    }
}


export function toggleEvent(event_id: number): IToogleEvent {
    return {
        type: TOGGLE_EVENT,
        eventId: event_id
    }
}



