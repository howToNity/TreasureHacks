import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'tailwindcss/tailwind.css'

import TicTacToe from "./components/TicTacToe"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)