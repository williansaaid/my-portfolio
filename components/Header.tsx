import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {}

function Header({}: Props) {
    return (
        <header className='sticky top-0 flex items-center justify-between max-w-7xl mx-auto z-20 py-4 px-8'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex items-center'
            >
                <SocialIcon
                    url='https://www.linkedin.com/in/williansaaid/'
                    fgColor='#A8BBBF'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://github.com/williansaaid'
                    fgColor='#A8BBBF'
                    bgColor='transparent'
                />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex items-center cursor-pointer border pr-4 pl-1 rounded-3xl border-customGreen hover:border-customYellow/40 transition duration-500'
            >
                <SocialIcon
                    network='email'
                    fgColor='#A8BBBF'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-customGray font-semibold'>
                    Contact Me
                </p>
            </motion.div>
        </header>
    )
}

export default Header