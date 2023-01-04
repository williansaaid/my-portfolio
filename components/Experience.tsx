import { motion } from 'framer-motion';
import React from 'react';
import ExperienceCards from './ExperienceCards';

type Props = {}

function Experience({}: Props) {
    return (
        <motion.div
            className='h-screen w-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-center items-center mx-auto'
            initial={{
                opacity: 0,
                y: 500
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: true
            }}
            transition={{
                duration: 1.5
            }}
        >
            <h3 className='absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-customGray text-2xl'>
                Experience
            </h3>
            <div>
                <ExperienceCards/>
                <ExperienceCards/>
                <ExperienceCards/>
            </div>
        </motion.div>
    )
}

export default Experience