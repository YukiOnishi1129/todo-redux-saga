import { connect } from "react-redux";
import Actions from "../actions/actions";
import TodoEdit from "../components/TodoEdit";

const masStateToProps = state => {
    return {
        todo: state.reducer.tasksReducer.todo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onShowTodo: id => {
            dispatch(Actions.show(id));
        }
    };
};

export default connect(masStateToProps, mapDispatchToProps)(TodoEdit);
