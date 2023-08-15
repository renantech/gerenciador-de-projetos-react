import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';

import Container from './components/layouts/Container';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import ProjectPage from './components/pages/ProjectPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass='min-height' >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/company' element={<Company />} />
          <Route path='/newproject' element={<NewProject />} />
          <Route path='/projects/:id' element={<ProjectPage />} />
        </Routes>
      </Container>
      
      <Footer />
    </Router>
  );
}

export default App;
