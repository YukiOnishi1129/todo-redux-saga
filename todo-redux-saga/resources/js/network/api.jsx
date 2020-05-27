import axios from "axios";

const BASE_URL = "http://localhost:3000";

// Todoデータ全取得API
export const getTodosApi = () => {
    const url = `${BASE_URL}/api/todo`;
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
    const url = `${BASE_URL}/api/todo`;
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

// 対象のTodoデータを取得するAPI
export const showTodoApi = id => {
    const url = `${BASE_URL}//api/todo/${id}`;
    return axios
        .get(url)
        .then(response => {
            const todo = response.data.todo;
            return { todo };
        })
        .catch(error => {
            return { error };
        });
};

//対象のTodoを編集するAPI
export const updateTodoApi = (id, title, content) => {
    const url = `${BASE_URL}//api/todo/${id}`;
    return axios
        .patch(url, {
            title: title,
            content: content
        })
        .then(response => {
            const updateFlg = response.data.updateFlg;
            return { updateFlg };
        })
        .catch(error => {
            return { error };
        });
};

// 対象のTodoを削除するAPI
export const deleteTodoApi = id => {
    const url = `${BASE_URL}/api/todo/${id}`;
    return axios.destroy(url).catch(error => {
        return { error };
    });
};
