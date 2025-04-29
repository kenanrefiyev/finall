import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import { useState } from "react"
import Order from "./pages/Order"
import FilterData from "./pages/FilterData"
import Details from "./pages/Details"
import Blog from "./components/Blog"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import TrackOrder from "./pages/TrackOrder"
import DeliveryReturns from "./pages/DeliveryReturns"
import Login from "./components/Login"

function App() {
  const [order, setOrder] = useState(null)

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
          <Route path="/order-confirmation" element={<Order order={order} />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/delivery-returns" element={<DeliveryReturns />} />
          <Route path="/filter-data" element={<FilterData />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
