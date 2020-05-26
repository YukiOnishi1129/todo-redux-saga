export default {
    init: () => {
        return { type: "INIT" };
    },
    initSuccess: todos => {
        return { type: "INIT_SUCCEEDED", todos: todos };
    },
    show: id => {
        return { type: "SHOW", id: id };
    },
    showSuccess: todo => {
        return { type: "SHOW_SUCCEEDED", todo: todo };
    },
    create: (title, content, history) => {
        return {
            type: "CREATE",
            title: title,
            content: content,
            history: history
        };
    },
    createSuccess: createFlg => {
        return { type: "CREATE_SUCCEEDED", createFlg: createFlg };
    },
    update: (id, title, content, history) => {
        return {
            type: "UPDATE",
            id: id,
            title: title,
            content: content,
            history: history
        };
    },
    updateSuccess: updateFlg => {
        return { type: "UPDATE_SUCCEEDED", updateFlg: updateFlg };
    },
    apiError: () => {
        return { type: "API_ERROR", error: true };
    },
    resetError: () => {
        return { type: "RESET_ERROR", error: false };
    }
};
