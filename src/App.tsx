import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from '@/components/ui/sonner';

// Pages (to be created)
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Transparency from './pages/Transparency';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/login" element={<Login />} />
              <Route path="/transparency" element={<Transparency />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster position="top-center" />
      </Router>
    </AuthProvider>
  );
}
