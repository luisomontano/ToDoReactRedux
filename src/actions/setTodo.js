export const setTodo = (toDo) => {
    return {
        type: "ADD_TODO",
        toDo: toDo,
    };
};  