import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {}

const Skills = (props: Props) => {
    return (
        <motion.div
            className='h-screen w-screen flex flex-col text-center justify-center items-center relative mx-auto flex-shrink-0'
            initial={{
                opacity: 0,
                y:100
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
            <h3 className='absolute top-24 uppercase tracking-[20px] text-customGray text-2xl'>
                Skills
            </h3>
            <div
                className='grid grid-cols-3 md:grid-cols-4 gap-3'
            >
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>
        </motion.div>
    )
}

export default Skills