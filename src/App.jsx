import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Landing, Error, Register } from './page'
import { AddJob, AllJobs, Profile, SharedLayout, Stats } from './page/dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Stats />,
      },
      {
        path: '/all-jobs',
        element: <AllJobs />,
      },
      {
        path: '/add-job',
        element: <AddJob />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
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
