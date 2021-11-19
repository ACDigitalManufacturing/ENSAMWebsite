import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { AdminReducer, AdminState } from "./admin.reducer";

export interface rootStateType {
  admin: AdminState;
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userState"],
};

const rootReducer = combineReducers({
  admin: AdminReducer,
});

export default persistReducer(persistConfig, rootReducer);
