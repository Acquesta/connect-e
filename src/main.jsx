import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import PageNotFound from './pages/NotFound.jsx'
import Registrar from './pages/Registrar.jsx'
import Quizzes from './pages/Quizzes.jsx'
import Quiz from './pages/Quiz.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <Home />},
      {path: '/login', element: <Login />},
      {path: '/registrar', element: <Registrar />},
      {path: '/quizzes/:id', element: <Quizzes />},
      {path: '/quizzes', element: <Login />},
      {path: '/quiz/:user/:idQuiz', element: <Quiz />},
      {path: '*', element: <PageNotFound />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
