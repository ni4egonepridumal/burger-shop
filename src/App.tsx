import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CartPage } from "./pages/Cart";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div style={{ flexDirection: "column", display: "flex", height: "100vh" }}>
      <Header />
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
