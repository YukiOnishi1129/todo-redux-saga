import { connect } from "react-redux";
import { searchTodo } from "../actions";
import SearchTodo from "../components/SearchTodo";

// 空でいいので、mapStateToPropsを指定しないと、
// dispatchがないという理由で実行時にエラーが発生
const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        onKeyupSeatchText: text => {
            dispatch(searchTodo(text));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTodo);
