import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "../reducers/rootReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//Para poder utilizar varios middlewares en el store

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
