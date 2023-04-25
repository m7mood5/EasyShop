import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from './pages/Layout'
import ErrorB from './pages/Error'
import Home from './pages/Home'
import Items from './pages/Items'
import "./index.css"
import { Provider } from 'react-redux'
import { store, persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import ShoppingCart from './pages/shoppingCart'
import About from './pages/About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorB />,
    children: [
      {
        index: true,
        element: <Home />
      },

      {
        path: "about",
        element: <About />
      },
      {
        path: "/:prefix/items",
        element: <Items />
      },
      {
        path: "shopping-cart",
        element: <ShoppingCart />
      },


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
)
