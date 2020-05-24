// 初期状態の設定
const initialState = {
    todos: [],
    isLoading: false, // API接続中
    isApiError: false, // APIエラー発生の有無
    uniqueId: 2, // todoが初期値で2つあるため、todo追加した際のidの採番を3から開始する
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
        case "INIT":
            return Object.assign({}, state, {
                isLoading: true
            });
        case "INIT_SUCCEEDED":
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
        case "ADD":
            return Object.assign({}, state, {
                todos: state.todos.concat({
                    id: action.payload.id,
                    title: action.payload.title,
                    content: action.payload.content
                }),
                uniqueId: action.payload.id
            });
        //   spread operatorの記述方法
        //   return {
        //     ...state,
        //     todos: [
        //       ...state.todos,
        //       {
        //         id: action.payload.id,
        //         title: action.payload.title,
        //         editFlg: false,
        //       },
        //     ],
        //     uniqueId: action.payload.id,
        //   };

        case "SEARCH":
            return Object.assign({}, state, {
                searchKeyWord: action.payload.text
            });

        case "UPDATE":
            return Object.assign({}, state, {
                todos: UpdateTodo(
                    state.todos,
                    action.payload.id,
                    action.payload.title,
                    action.payload.content
                )
            });
        //   return Object.assign({}, state, {
        //     todos: state.todos.map((todo) => {
        //       if (todo.id === action.payload.id) {
        //         return Object.assign({}, todo, {
        //           title: action.payload.title,
        //         });
        //       }
        //       return todo;
        //     }),
        //   });

        case "DELETE":
            return Object.assign({}, state, {
                todos: removeTodo(state.todos, action.payload.id)
            });

        default:
            return state;
    }
}
