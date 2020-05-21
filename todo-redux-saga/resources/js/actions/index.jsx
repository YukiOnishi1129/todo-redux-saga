// ActionCreatorの定義
export const addTodo = (id, title) => ({
    type: "ADD",
    payload: {
        id,
        title
    }
});

export const searchTodo = text => ({
    type: "SEARCH",
    payload: {
        text
    }
});

export const updateTodo = (id, title) => ({
    type: "UPDATE",
    payload: {
        id,
        title
    }
});

export const deleteTodo = id => ({
    type: "DELETE",
    payload: {
        id
    }
});
