import { connect } from "react-redux";
import TodoDetail from "../components/TodoDetail";

const masStateToProps = (state, ownProps) => {
    return {
        todos: state.reducer.tasksReducer.todos.filter(
            todo => todo.id === Number(ownProps.todoId)
        )
    };
};

export default connect(masStateToProps)(TodoDetail);
