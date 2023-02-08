import "./App.css"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddItem from "./Components/AddItem"
import ViewItem from "./Components/ViewItem"
import AddMobile from "./Components/AddElectronics/AddMobile"
import AddLaptop from "./Components/AddElectronics/AddLaptop"
import VendorState from "./Context/Vendor/VendorState"
import AddDesktop from "./Components/AddElectronics/AddDesktop"

function App() {
  return (
    <VendorState>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/AddItem" element={<AddItem />}></Route>
            <Route exact path="/ViewItem" element={<ViewItem />}></Route>
            <Route exact path="/AddMobile" element={<AddMobile />}></Route>
            <Route exact path="/AddLaptop" element={<AddLaptop />}></Route>
            <Route exact path="/AddDesktop" element={<AddDesktop />}></Route>
          </Routes>
        </div>
      </Router>
    </VendorState>
  )
}

export default App
