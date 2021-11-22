import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter as Router } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"

// ? redux
import { Provider } from "react-redux"
import { store, persistor } from "store"

import App from "./App"

import "styles/index.scss"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
