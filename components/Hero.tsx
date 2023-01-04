import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BgCircles from './BgCircles';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {}

function Hero({}: Props) {
    const [ text, count ] = useTypewriter({
        words: [
            "Welcome Visitor!",
            "I'm Willians Jimenez",
            "<TimeToCode/>"
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
            <BgCircles/>
            <motion.div
                className='w-32 h-32 rounded-full overflow-hidden relative my-4'
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}
                transition={{
                    duration: 2.5
                }}
            >
                <Image
                    src={"https://res.cloudinary.com/ds41xxspf/image/upload/v1672698557/IMG_20220906_170236-01_abwwcc.jpg"}
                    alt="Profile Image"
                    fill={true}
                />
            </motion.div>
            <motion.div
                className='z-20 px-4 w-full'
                initial={{
                    y: 500,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}
                transition={{
                    duration: 1.5
                }}
            >
                <h2 className='uppercase text-sm md:text-lg text-customYellow tracking-[15px] mb-4'>
                    Full Stack Developer
                </h2>
                <h1 className='text-3xl lg:text-6xl md:text-5xl font-semibold'>
                    <span>{text}</span>
                    <Cursor cursorColor='#EFF291'/>
                </h1>
                <div className='flex items-center justify-center flex-wrap w-full'>
                    <Link href={"#about"}>
                        <button className='buttonMain'>About</button>
                    </Link>
                    <Link href={"#experience"}>
                        <button className='buttonMain'>Experience</button>
                    </Link>
                    <Link href={"#skills"}>
                        <button className='buttonMain'>Skills</button>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero