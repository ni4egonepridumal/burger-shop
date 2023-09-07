import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CartPage } from "./pages/Cart";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BurgerPage } from "./components/Burger";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/burger" element={<BurgerPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
