import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss'
import './assets/scss/style.scss'
import { HomePage } from './pages/HomePage';
import { ToDo } from './models/todo-item';
import { ItemDescription } from './pages/ItemDescription';
import { ToDoListPage } from './pages/ToDoListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { NotFound } from './pages/404';

const todos: ToDo[] = [
  {
    id: 0,
    text: 'First task',
    isDone: false
  },

  {
    id: 1,
    text: 'Second task',
    isDone: true
  },

  {
    id: 2,
    text: 'Third task',
    isDone: false,
  },

  {
    id: 3,
    text: 'Fourth task',
    isDone: true,
  }
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage todos={todos} />
      },
      {
        path: '/todo',
        element: <ToDoListPage />
      },
      {
        path: '/list/:id',
        element: <ItemDescription todos={todos} />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  } 
],
  // {
  //   basename: '/app/'
  // }
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


