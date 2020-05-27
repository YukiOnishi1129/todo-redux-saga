import { connect } from "react-redux";
import Actions from "../actions/actions";
import TodoDetail from "../components/TodoDetail";

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

export default connect(masStateToProps, mapDispatchToProps)(TodoDetail);
