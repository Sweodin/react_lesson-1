import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Fun from './pages/Fun'

function App() {
  return (
    <Router>
   
      <div className="container">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fun" element={<Fun />} />
            </Routes>
        </main>

        <footer className='footer'>
          <div className='footer-content'>
            <p>&copy; 2024 Adult Toys. All rights reserved</p>
          </div>
        </footer>
        </div>
    </Router>
  );
}

export default App