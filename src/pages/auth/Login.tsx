import { useState } from "react"

import AuthLayout from "layouts/AuthLayout"
import open_eye from "assets/icons/open_eye"
import closed_eye from "assets/icons/closed_eye"
import lock from "assets/icons/lock"
import user from "assets/icons/user"

import { CustomError } from "types/api"
import { LoginAPI } from "api/home"
import { useDispatch } from "react-redux"
import { admin_logged_in } from "store/actions"
import ShowErrors from "components/common/ShowErrors"
import styles from "./styles/login.module.scss"

const Login = function (): JSX.Element {
  const [state, setState] = useState({
    username: "",
    password: "",
    passwordInputType: "password",
  })
  // eslint-disable-next-line
  const [errors, setErrors] = useState<CustomError[]>([])

  const dispatch = useDispatch()
  const handleChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setState({ ...state, [name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { response, errors } = await LoginAPI({
      username: state.username,
      password: state.password,
    })
    if (errors) {
      return setErrors(errors)
    }
    if (!response) {
      return setErrors([{ message: "server do not respond" }])
    }
    dispatch(admin_logged_in(response.admin, response.auth_token))
  }
  return (
    <AuthLayout>
      <div className={styles.loginFormWrapper}>
        <header>
          <div className={styles.logoWrapper}>
            <img src="/images/ensam-logo.png" alt="ensam-casa" />
          </div>
          <h1>Authentication Admin</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <ShowErrors errors={errors} />
          <div className={styles.inputWrapper}>
            <label htmlFor="username">Nom d'utilisateur</label>
            <div className={styles.inputContainer}>
              <span>{user}</span>
              <input
                type="text"
                id="username"
                onChange={handleChange("username")}
                value={state.username}
              />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="password">Mot de passe</label>
            <div className={styles.inputContainer}>
              <span>{lock}</span>
              <input
                type={state.passwordInputType}
                id="password"
                value={state.password}
                onChange={handleChange("password")}
              />
              <span
                className={styles.passwordInputEye}
                onClick={() =>
                  handleChange("passwordInputType")({
                    target: {
                      value:
                        state.passwordInputType === "password"
                          ? "text"
                          : "password",
                    },
                    // eslint-disable-next-line
                  } as any)
                }
              >
                {state.passwordInputType === "password" ? open_eye : closed_eye}
              </span>
            </div>
          </div>
          <button type="submit">se connecter</button>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login
