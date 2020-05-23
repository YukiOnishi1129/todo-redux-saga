import { connect } from "react-redux";
import { updateTodo } from "../actions";
import TodoEdit from "../components/TodoEdit";

const masStateToProps = (state, ownProps) => {
    return {
        todos: state.reducer.tasksReducer.todos.filter(
            todo => todo.id === Number(ownProps.todoId)
        )
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateTodo: (id, title, content) => {
            dispatch(updateTodo(id, title, content));
        }
    };
};

export default connect(masStateToProps, mapDispatchToProps)(TodoEdit);
