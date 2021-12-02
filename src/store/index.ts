import {
  applyMiddleware,
  compose,
  createStore,
  EmptyObject,
  Store,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducer, { rootStateType } from "./reducers";

// middlewares
import logger from "redux-logger";

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

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store: Store<
  EmptyObject & rootStateType,
  // eslint-disable-next-line
  any
> = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);

const ReduxStore = { store, persistor };

export default ReduxStore;
