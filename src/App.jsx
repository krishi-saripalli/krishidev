import React from 'react'
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import MidSection from './components/MidSection';
import SocialBar from './components/SocialBar';
import { Canvas } from "@react-three/fiber";
import { Cedar } from './components/Cedar';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Footer from './components/Footer';





const App = () => (
    <div className="  font-slab font-light bg-gradient-to-r from-green-200 to-green-400">
       <div className="sticky top-0 mx-4 md:mx-20 z-40">
            <NavBar></NavBar>
        </div>
      <div id="fadeDiv" className=" three px-9 md:px-32 ">
        <div className="flex flex-col md:h-[80vh] md:flex-row md:pt-5">
        <HeroSection className=''></HeroSection>
        <Canvas className=' pb-32'>
            <ambientLight intensity={0.5}></ambientLight>
            <directionalLight position={[-1,15,1]} intensity={1}></directionalLight>
            <Suspense  fallback={null}>
              <Cedar></Cedar>
            </Suspense>
          </Canvas>
        </div>
        <div className=" md:px-32">
          <MidSection></MidSection>
        </div>
        <Footer ></Footer>
      </div>
        
    
      
      
    </div>
    

    
  );
  


export default App