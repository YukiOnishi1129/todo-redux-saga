import { connect } from "react-redux";
import { searchTodo } from "../actions";
import TodoAdd from "../components/TodoAdd";

const masStateToProps = state => {
    return {
        uniqueId: state.reducer.tasksReducer.uniqueId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateTodo: todo => {
            dispatch();
        }
    };
};

export default connect(masStateToProps, mapDispatchToProps)(TodoAdd);
