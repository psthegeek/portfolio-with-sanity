import React from 'react'
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap,MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import Footer from './Footer';
import './Footer.scss'



const TestFooter = () => {
  return (
    <div>
      Footer
    </div>
  )
}

export default (AppWrap,MotionWrap(TestFooter,'app__footer'),'contact','app__whitebg')
