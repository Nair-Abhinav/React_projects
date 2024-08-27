import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"


function App() {
 

  return (
    <>
    {/* to keep header and footer at every page we use outlet */}
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
