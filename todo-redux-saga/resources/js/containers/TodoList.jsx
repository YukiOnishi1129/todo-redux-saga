import { connect } from "react-redux";
import { updateTodo, deleteTodo } from "../actions";
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
        uniqueId: state.reducer.tasksReducer.uniqueId
    };
};

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
    return {
        onClickUpdate: (id, title) => {
            dispatch(updateTodo(id, title));
        },
        onClickDelete: id => {
            dispatch(deleteTodo(id));
        }
    };
};

// connect(state, action)(component)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);