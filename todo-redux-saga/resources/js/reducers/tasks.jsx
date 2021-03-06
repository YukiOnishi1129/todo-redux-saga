// 初期状態の設定
const initialState = {
    todos: [],
    todo: [], // 詳細画面、編集画面描画用のTodo
    isLoading: false, // API接続中
    isApiError: false, // APIエラー発生の有無
    searchKeyWord: "" //検索キーワード
};

// Todo更新用の関数
const UpdateTodo = (todos, targetId, title, content) => {
    return todos.map(todo => {
        if (todo.id === targetId) {
            return Object.assign({}, todo, {
                title: title,
                content: content
            });
        }
        return todo;
    });
};

// Todo削除用の関数
const removeTodo = (todos, targetId) => {
    return todos.filter(todo => todo.id !== targetId);
};

// Reducerの定義
export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case "SEARCH":
            return Object.assign({}, state, {
                searchKeyWord: action.payload.text
            });
        case "RESET_TODO":
            return Object.assign({}, state, {
                todo: []
            });
        case "INIT":
            return Object.assign({}, state, {
                isLoading: true
            });
        case "INIT_SUCCEEDED":
            return Object.assign({}, state, {
                todos: action.todos,
                isLoading: false
            });
        case "SHOW":
            return Object.assign({}, state, {
                isLoading: true
            });
        case "SHOW_SUCCEEDED":
            return Object.assign({}, state, {
                todo: action.todo,
                isLoading: false
            });
        case "CREATE":
            return Object.assign({}, state, {
                isLoading: true
            });
        case "CREATE_SUCCEEDED":
            return Object.assign({}, state, {
                isLoading: false
            });
        case "UPDATE":
            return Object.assign({}, state, {
                isLoading: true
            });
        case "UPDATE_SUCCEEDED":
            return Object.assign({}, state, {
                isLoading: false
            });
        case "DELETE":
            return Object.assign({}, state, {
                isLoading: true
            });
        case "DELETE_SUCCEEDED":
            return Object.assign({}, state, {
                todos: action.todos,
                isLoading: false
            });
        case "API_ERROR":
            return Object.assign({}, state, {
                isApiError: true,
                isLoading: false
            });
        case "RESET_ERROR":
            return Object.assign({}, state, {
                isApiError: false
            });

        default:
            return state;
    }
}
