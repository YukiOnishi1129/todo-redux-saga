export const INIT = "INIT";

// ActionCreatorの定義

// Todoデータを全取得
// APIリクエストをするアクション
export const init = () => {
    return {
        type: INIT,
        todos: []
    };
};

// Todoデータを全取得
// API接続成功したときのアクション
export const initSuccess = response => {
    return {
        type: INIT_SUCCEEDED,
        todos: response
    };
};

// API接続失敗した時のアクション
export const apiError = error => {
    return {
        types: API_ERROR,
        error: error
    };
};

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

export const updateTodo = (id, title, content) => ({
    type: "UPDATE",
    payload: {
        id,
        title,
        content
    }
});

export const deleteTodo = id => ({
    type: "DELETE",
    payload: {
        id
    }
});
