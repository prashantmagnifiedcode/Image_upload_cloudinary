const initialValue = []

const EventsReducer = (state=initialValue, action)=>{

    switch (action.type) {
    case "SHOW_EVENTS":
    return action.payload
    case "ADD_EVENT":
    return [
        ...state,
        action.payload
    ]

    
    case "DELETE_EVENT":
        const filteredEvents = state.filter(event => event.id !== action.payload.id);
    return [
        ...filteredEvents
    ]
    default:
        return state
}
}

export default EventsReducer