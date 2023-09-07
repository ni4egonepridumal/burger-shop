import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CartPage } from "./pages/Cart";
import { Header } from "./components/Header";



function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <footer>Footer</footer>
    </div>
  )
}

export default App
