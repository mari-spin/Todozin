import React from 'react';

import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';

import All from './Pages/All/index.jsx';
import Calendar from './Pages/Calendar/index.jsx';
import TodayPage from './Pages/Today/index.jsx';
import { DateProvider } from './context/DateContext.jsx';
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
    element:<Calendar/>,
    errorElement: <ErrorPage />, 
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider>
      <DateProvider>
        <RouterProvider router={router}/>
        <App/>
      </DateProvider>
    </TaskProvider>
  </React.StrictMode>,
)
