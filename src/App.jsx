import React from 'react'
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import MidSection from './components/MidSection';
import Footer from './components/Footer';
import ProjSection from './components/ProjSection';





const App = () => (
    <div className="  font-slab font-light text-white bg-gradient-to-r  from-slate-800 to-blue-700">
       <div className="sticky top-0  z-40">
            <NavBar></NavBar>
        </div>
      <div id="fadeDiv" className=" three px-16 md:px-32 ">
        <div className=" md:px-32">
          <MidSection></MidSection>
          <ProjSection></ProjSection>
        </div>
        <Footer ></Footer>
      </div>
        
    
      
      
    </div>
    

    
  );
  


export default App