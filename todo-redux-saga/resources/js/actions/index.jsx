// ActionCreatorの定義
export const addTodo = (id, title, content) => ({
    type: "ADD",
    payload: {
        id,
        title,
        content
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
