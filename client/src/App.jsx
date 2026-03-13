import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Partners from './pages/Partners';
import Resources from './pages/Resources';
import Footer from './components/Footer';

function App() {

  return (
    <div className=''>
      {/* px-2 sm:px-[2vw] */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
