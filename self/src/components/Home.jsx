import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div className="home container" initial={{opacity:0}} animate={{opacity:1}}>
    <motion.h2 initial={{x: '-100vw'}} animate={{x:0 }} transition={{delay:0.5,  type:'spring', stiffness:200, duration:2}}>
      Welcome to Pizza Joint
    </motion.h2>
    <Link to="/base">
      <motion.div className="button" initial={{x:'100vw'}} animate={{x:0}} transition={{delay:0.5, duration:2, type:'spring', stiffness:200}}>

      <motion.button 
      whileHover={{scale: 1.2,
        textShadow: "0px 0px 8px rgb(255, 255, 255)",
        boxShadow: "0px 0px 8px rgb(255, 255, 255)"
      }}>
        Create Your Pizza
      </motion.button>
      </motion.div>
    </Link>
  </motion.div>
  )
}

export default Home
