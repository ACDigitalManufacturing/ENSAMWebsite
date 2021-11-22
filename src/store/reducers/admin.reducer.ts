import { adminTypes } from "store/actionsTypes"
import { Admin } from "types/Admin"

export interface AdminState {
  isLoggedIn: boolean
  auth_token: string
  admin: Admin | null
}

interface ActionInterface {
  type: string | number
  payload: AdminState
}

const initialAdminState: AdminState = {
  isLoggedIn: false,
  auth_token: "",
  admin: null,
}

export const AdminReducer = (
  state: AdminState = initialAdminState,
  action: ActionInterface
): AdminState => {
  switch (action.type) {
    case adminTypes.adminLoggedIn:
      return { ...state, ...action.payload }
    case adminTypes.adminUpdateFields:
      return { ...state, ...action.payload }
    case adminTypes.adminLoggedOut:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
