import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/home/HomeIndex';
import Company from './components/pages/company/CompanyIndex';
import NewProject from './components/pages/newProject/NewProject';
import Contact from './components/pages/contact/ContactIndex';
import Project from './components/pages/project/Project';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';

import Container from './components/layout/container/container';

function App() {
  return (
    <Router>
      <Navbar />
   
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/newProject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
