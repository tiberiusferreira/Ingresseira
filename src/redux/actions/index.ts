import {ADD_EVENT, TOGGLE_EVENT, SAVE_EVENT, IAddEventAction, IEvent, IToggleEventAction, ISaveEventAction} from '../interfaces'

export function addEvent(event: IEvent): IAddEventAction {
    return {
        type: ADD_EVENT,
        event: event
    }
}


export function toggleEvent(event_id: number): IToggleEventAction {
    return {
        type: TOGGLE_EVENT,
        eventId: event_id
    }
}

export function saveEvent(event_id: number): ISaveEventAction {
    return {
        type: SAVE_EVENT,
        eventId: event_id
    }
}



