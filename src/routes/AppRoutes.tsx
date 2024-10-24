import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing_page from '../pages/Landing_page';
import Services from '../pages/Services';
import Blog from '../pages/Blog';
import AboutPage from '../pages/AboutPage';
import Pricing from '../pages/Pricing';
import ContactPage from '../pages/ContactPage';
import Portfolio from '../pages/Portfolio';
import CareerPage from '../pages/CareerPage';
import ServicesMainPage from '../pages/ServicesMainPage';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/services_Details" element={<ServicesMainPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
