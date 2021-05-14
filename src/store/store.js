import { applyMiddleware, combineReducers, createStore,compose } from "redux";
import thunk from 'redux-thunk';
import { taskReducer } from "../reducers/taskReducer";
import { uiReducer } from "../reducers/uiReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    task: taskReducer,
    ui:uiReducer

})


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);