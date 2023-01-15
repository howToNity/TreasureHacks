import { createBrowserRouter } from "react-router-dom"

import GettingStarted from "../pages/GettingStarted"
import Dashboard from "../pages/Dashboard"

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
    path: "*",
    element: <h1>404 Not Found</h1>
  }
])