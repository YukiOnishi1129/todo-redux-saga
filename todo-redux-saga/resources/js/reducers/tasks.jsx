// 初期状態の設定
const initialState = {
    todos: [
        {
            id: 1,
            title: "Task1",
            content: "Task1 content"
        },
        {
            id: 2,
            title: "Task2",
            content: "Task2 content"
        }
    ],
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
        case "ADD":
            // stateを変更する際は再描画させるため
            // stateの前後で変更があったことを通知する必要がある。
            // state = action.payload.dataなど、直接代入させると変更が通知されない
            // (参照渡しであるため)
            // よって、Object.assigまたはspread構文で更新する
            // 現在のstateとactionの値をマージして新しいstateを返す

            // Object.assignの記述方法
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
