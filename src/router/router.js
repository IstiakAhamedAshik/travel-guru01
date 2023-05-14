import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import News from '../pages/News'
import Login from '../pages/Login'
import Information from '../sharedpage/Information'

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
        path: '/news',
        element: <News></News>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/details/:id',
        element: <Information></Information>,
      },
    ],
  },
])
