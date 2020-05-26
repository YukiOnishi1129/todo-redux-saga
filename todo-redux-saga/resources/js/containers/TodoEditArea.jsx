import { connect } from "react-redux";
import Actions from "../actions/actions";
import TodoEditArea from "../components/TodoEditArea";

const masStateToProps = ownProps => {
    return {
        id: ownProps.reducer.tasksReducer.todo.id,
        title: ownProps.reducer.tasksReducer.todo.title,
        content: ownProps.reducer.tasksReducer.todo.content
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateTodo: (id, title, content, history) => {
            dispatch(Actions.update(id, title, content, history));
        }
    };
};

export default connect(masStateToProps, mapDispatchToProps)(TodoEditArea);
