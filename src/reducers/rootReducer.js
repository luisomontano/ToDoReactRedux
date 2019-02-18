const initState = {
    toDo: []
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
            ...state,
            toDo: [...state.toDo, action.toDo]
            };
        default:
            return {...state};
        }
};

export default rootReducer;
