import {
  applyMiddleware,
  compose,
  createStore,
  EmptyObject,
  Store,
} from "redux";
import { persistStore } from "redux-persist";
import { PersistPartial } from "redux-persist/lib/persistReducer";

// middlewares
import logger from "redux-logger";

import reducer, { rootStateType } from "./reducers";

declare global {
  interface Window {
    // eslint-disable-next-line
    __REDUX_DEVTOOLS_EXTENSION__: (...a: any) => any | undefined;
  }
}

const middlewares = [logger];

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  : applyMiddleware(...middlewares);

// eslint-disable-next-line
export const store: Store<EmptyObject & rootStateType & PersistPartial, any> =
  createStore(reducer, enhancer);

export const persistor = persistStore(store);

const ReduxStore = { store, persistor };

export default ReduxStore;
