import axios from "axios";

// Todoデータ全取得API
export const getTodosApi = () => {
    const url = "/api/todo";
    return axios
        .get(url)
        .then(response => {
            const todos = response.data.todos;
            return { todos };
        })
        .catch(error => {
            return { error };
        });
};

// Todo新規作成API
export const createTodoApi = (title, content) => {
    const url = "api/todo";
    return axios
        .post(url, {
            title: title,
            content: content
        })
        .then(response => {
            const createFlg = response.data.createFlg;
            return { createFlg };
        })
        .catch(error => {
            return { error };
        });
};

//対象のTodoを編集するAPI
export const updateTodoApi = (id, title, content) => {
    const url = `api/todo/${id}`;
    return axios
        .put(url, {
            title: title,
            content: content
        })
        .catch(error => {
            return { error };
        });
};

// 対象のTodoを削除するAPI
export const deleteTodoApi = id => {
    const url = `api/todo/${id}`;
    return axios.destroy(url).catch(error => {
        return { error };
    });
};
