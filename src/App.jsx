import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Landing, Error, Register, Dashboard } from './page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/landing',
    element: <Landing />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <Error />,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App
