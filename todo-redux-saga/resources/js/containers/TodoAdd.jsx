import { connect } from "react-redux";
import { addTodo } from "../actions";
import Actions from "../actions/actions";
import TodoAdd from "../components/TodoAdd";

const masStateToProps = state => {
    return {
        isApiError: state.reducer.tasksReducer.isApiError,
        isLoading: state.reducer.tasksReducer.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateTodo: (title, content, history) => {
            // sagaにてhistory.pushを使用するため、historyを渡している
            dispatch(Actions.create(title, content, history));
        },
        onResetErrorFlg: () => {
            dispatch(Actions.resetError());
        }
    };
};

export default connect(masStateToProps, mapDispatchToProps)(TodoAdd);
