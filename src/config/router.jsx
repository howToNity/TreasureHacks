import { createBrowserRouter } from "react-router-dom"

import GettingStarted from "../pages/GettingStarted"
import Dashboard from "../pages/Dashboard"
import Games from "../pages/Games"
import TicTacToe from "../pages/TicTacToe"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GettingStarted />
  },
  {
    path: "/me",
    element: <Dashboard />
  },
  {
    path: "/games",
    element: <Games />
  },
    {
    path: "/games/tictactoe",
    element: <TicTacToe />
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>
  }
])