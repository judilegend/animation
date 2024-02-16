import { useState } from 'react'
import './App.css'
import React from "react";
import { motion } from "framer-motion";
import { ThreeDCardDemo } from './components/ThreeDCardDemo';
import { SVGMaskEffectDemo } from './components/svgMaskDemo';
import { HeroParallaxDemo } from './components/HeroParallaxDemo';
function App() {

  return (
    <>
    <ThreeDCardDemo/>
    <SVGMaskEffectDemo/>
    <HeroParallaxDemo/>
    </>
  )
}

export default App
