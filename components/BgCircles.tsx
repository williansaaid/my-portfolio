import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

const BgCircles = (props: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                scale: [1, 2, 3, 0.5, 1],
                opacity: [0.1, 0.3, 0.8, 0.6, 1],
            }}
            transition={{
                duration: 2.5,
            }}
            className='relative flex justify-center items-center'
        >
            <div className='absolute border border-customBrown opacity-40 rounded-full animate-ping h-[200px] w-[200px] mt-64'/>
            <div className='absolute border border-customBrown opacity-20 rounded-full h-[300px] w-[300px] mt-64'/>
            <div className='absolute border border-customBrown opacity-20 rounded-full h-[500px] w-[500px] mt-64'/>
            <div className='absolute border border-customYellow opacity-10 rounded-full h-[700px] w-[700px] animate-pulse mt-64'/>
            <div className='absolute border border-customBrown opacity-10 rounded-full h-[850px] w-[850px] mt-64'/>
        </motion.div>
    )
}

export default BgCircles