import { connect } from "react-redux";
import TodoDetailArea from "../components/TodoDetailArea";

const masStateToProps = ownProps => {
    return {
        id: ownProps.reducer.tasksReducer.todo.id,
        title: ownProps.reducer.tasksReducer.todo.title,
        content: ownProps.reducer.tasksReducer.todo.content
    };
};

export default connect(masStateToProps)(TodoDetailArea);
