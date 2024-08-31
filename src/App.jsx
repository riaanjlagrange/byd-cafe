import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
