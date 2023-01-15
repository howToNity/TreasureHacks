import { createBrowserRouter } from "react-router-dom"

import GettingStarted from "../pages/GettingStarted"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GettingStarted />
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>
  }
])