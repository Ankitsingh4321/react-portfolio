import React from 'react'
import { DiHtml5 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { DiJsBadge } from 'react-icons/di'
import { DiReact } from 'react-icons/di'
import { BsBootstrap } from 'react-icons/bs'
import { DiJqueryLogo } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import { LiaNodeJs } from 'react-icons/lia'
import { motion } from 'framer-motion'


const iconVariants = (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10, -10],
        transition:{
            duration:duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    }
})


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0, y:-100}}
         transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>

            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiHtml5 className='text-7xl text-orange-500'/>
            </motion.div>

            <motion.div
              variants={iconVariants(2.7)}
              initial="initial"
              animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiCss3 className='text-7xl text-blue-400'/>
            </motion.div>

            <motion.div
             variants={iconVariants(3.0)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJsBadge className='text-7xl text-yellow-400'/>
            </motion.div>

            <motion.div
             variants={iconVariants(3.3)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BsBootstrap className='text-7xl text-violet-400'/>
            </motion.div>

            <motion.div
             variants={iconVariants(3.5)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJqueryLogo className='text-7xl text-blue-600'/>
            </motion.div>

            <motion.div
             variants={iconVariants(3.7)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss className='text-7xl text-cyan-600'/>
            </motion.div>

            <motion.div 
             variants={iconVariants(3.4)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiReact className='text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div
             variants={iconVariants(2.4)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <LiaNodeJs className='text-7xl text-green-500'/>
            </motion.div>

        </motion.div>
      
    </div>
  )
}

export default Technologies
