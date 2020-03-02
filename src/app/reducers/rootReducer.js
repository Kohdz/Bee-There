import { combineReducers } from "redux";
import testReducer from "../../features/TestArea/testReducer";

const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer;