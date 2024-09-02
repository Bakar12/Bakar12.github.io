import React from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Modules from './pages/Modules';

function App() {
    return (
        <>
            <Navbar/>
            <Header/>
            <About/>
            <Portfolio/>
            <Modules/>
            <Contact/>
            <Footer/>
        </>

    );
}

export default App;
