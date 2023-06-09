import React from 'react';

import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';

import All from './Pages/All/index.jsx';
import CalendarPage from './Pages/Calendar/index.jsx';
import TodayPage from './Pages/Today/index.jsx';
import { TaskProvider } from './context/TaskContext.jsx';
import ErrorPage from './error/error-page.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<All/>,
    errorElement: <ErrorPage />, 
  },      
  {
    path:"today",
    element:<TodayPage/>,
    errorElement: <ErrorPage />, 
  },
  {
    path:"calendar",
    element:<CalendarPage/>,
    errorElement: <ErrorPage />, 
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider>
        <RouterProvider router={router}/>
        <App/>
    </TaskProvider>
  </React.StrictMode>,
)
