import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Login from '../pages/Login'
import Information from '../sharedpage/Information'
import Destination from '../sharedpage/Destination'
import Register from '../extrapages/Register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },

      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/details/:id',
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/information/${params.id}`)
        },
        element: <Information></Information>,
      },
      {
        path: '/category/:id',
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/hotel/${params.id}`)
        },
        element: <Destination></Destination>,
      },
    ],
  },
])
