import { connect } from "react-redux";
import Actions from "../actions/actions";
import TodoList from "../components/TodoList";

// アロー関数にするとthisのスコープが変わるため、functionの記法にしている
const searchResult = function(todo) {
    const regexp = new RegExp("^" + this.searchKeyWord, "i");
    return todo.title.match(regexp);
};

// mapStateToProps
const mapStateToProps = state => {
    return {
        // state.reducer名.プロパティ
        todos: state.reducer.tasksReducer.searchKeyWord
            ? state.reducer.tasksReducer.todos.filter(
                  searchResult,
                  state.reducer.tasksReducer
              )
            : state.reducer.tasksReducer.todos,
        uniqueId: state.reducer.tasksReducer.uniqueId,
        isApiError: state.reducer.tasksReducer.isApiError,
        isLoading: state.reducer.tasksReducer.isLoading
    };
};

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
    return {
        initTodos: () => {
            dispatch(Actions.init());
        },
        onClickDelete: id => {
            dispatch(Actions.delete(id));
        },
        onResetTodo: () => {
            dispatch(Actions.resetTodo());
        }
    };
};

// connect(state, action)(component)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
