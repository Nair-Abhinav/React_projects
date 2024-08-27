import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import { Route } from 'react-router-dom'
import Github, { getGithubData } from './components/Github/Github.jsx'
import Login from './components/Login/Login.jsx'


// 1st method for routing..
// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <App />,
//       children : [
//         {
//           path: '',
//           element: <Home/>
//         },
//         {
//           path:"about",
//           element: <About/>
//         },
//         {
//           path:"contactUs",
//           element: <ContactUs/>
//         }
//       ]
//     }
//   ]
// )

// 2nd method for routing
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App/>}>
        <Route path="" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="contactUs" element={<ContactUs/>}></Route>
        <Route
          loader={getGithubData}
          path="github" 
          element={<Github/>}></Route>
        <Route path="login" element={<Login/>}>
        </Route>
      </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
