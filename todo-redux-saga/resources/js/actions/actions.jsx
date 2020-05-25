export default {
    init: () => {
        return { type: "INIT" };
    },
    initSuccess: todos => {
        return { type: "INIT_SUCCEEDED", todos: todos };
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
    apiError: () => {
        return { type: "API_ERROR", error: true };
    },
    resetError: () => {
        return { type: "RESET_ERROR", error: false };
    }
};
