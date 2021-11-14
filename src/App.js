import React, {useEffect} from 'react';
import Aos from 'aos';
import './assets/scss/portofilo.scss';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="App">
      <Header />
      <Skills />
      <Footer />
    </div>

  );
}

export default App;
