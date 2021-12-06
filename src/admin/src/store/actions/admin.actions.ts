import { adminTypes } from "store/actionsTypes";
import { AdminState } from "store/reducers/admin.reducer";
import { Admin } from "types/Admin";

interface AdminAction<T> {
  type: adminTypes;
  payload: T;
}

export const admin_logged_in = (
  admin: Admin,
  auth_token: string
): AdminAction<AdminState> => ({
  type: adminTypes.adminLoggedIn,
  payload: {
    isLoggedIn: true,
    auth_token,
    admin,
  },
});

export const admin_update = (
  admin: Admin,
  auth_token: string
): AdminAction<AdminState> => ({
  type: adminTypes.adminUpdateFields,
  payload: {
    isLoggedIn: true,
    auth_token,
    admin,
  },
});

export const admin_logged_out = (): AdminAction<AdminState> => ({
  type: adminTypes.adminLoggedOut,
  payload: {
    isLoggedIn: false,
    auth_token: "",
    admin: null,
  },
});
