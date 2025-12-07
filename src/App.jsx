import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BannerTicker from "./components/BannerTicker";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductCard from "./components/ProductCard";
import CraftSection from "./components/CraftSection";
import Review from "./components/Review";
import StorySection from "./components/StorySection";
import TrustPage from "./components/TrustPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Example routes */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<div>Search Page</div>} />
        <Route path="/wishlist" element={<div>Wishlist Page</div>} />
        <Route path="/account" element={<div>Account Page</div>} />
        <Route path="/cart" element={<div>Cart Page</div>} />
      </Routes>
      <ProductCard />
      <CraftSection />
      <Review />
      <StorySection />
      <TrustPage />
      <Footer />
    </Router>
  );
}

export default App;
