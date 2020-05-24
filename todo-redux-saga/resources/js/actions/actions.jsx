export default {
    init: () => {
        return { type: "INIT" };
    },
    initSuccess: todos => {
        return { type: "INIT_SUCCEEDED", todos: todos };
    },
    apiError: () => {
        return { type: "API_ERROR", error: true };
    },
    resetError: () => {
        return { type: "RESET_ERROR", error: false };
    }
};
