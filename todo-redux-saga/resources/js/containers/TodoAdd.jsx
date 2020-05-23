import { connect } from "react-redux";
import { addTodo } from "../actions";
import TodoAdd from "../components/TodoAdd";

const masStateToProps = state => {
    return {
        uniqueId: state.reducer.tasksReducer.uniqueId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateTodo: (id, title, content) => {
            dispatch(addTodo(id, title, content));
        }
    };
};

export default connect(masStateToProps, mapDispatchToProps)(TodoAdd);
