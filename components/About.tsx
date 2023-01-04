import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {}

const About = (props: Props) => {
    return (
        <motion.div
            className='h-screen w-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-center gap-4 items-center mx-auto'
            initial={{
                opacity: 0,
                y:500
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
                About
            </h3>
            <motion.div
                initial={{
                    x: -200,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}
                transition={{
                    duration: 1.5
                }}
                className='mt-32 md:mt-0 w-36 h-36 overflow-hidden relative rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[400px]'
            >
                <Image
                        src={"https://res.cloudinary.com/ds41xxspf/image/upload/v1672852249/avento_rxmls7.gif"}
                        alt="Gif Programmer"
                        fill
                        objectFit="cover"
                />
            </motion.div>
            <motion.div
                className='px-2 md:pl-8 w-50 md:w-2/3'
                initial={{
                    x: 200,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}
                transition={{
                    duration: 1.5
                }}
            >
                <h4 className='text-2xl md:text-4xl font-semibold text-customGray pb-4'>
                    A little introduction about <span className='underline decoration-customBrown'>ME</span>
                    <span className='text-customBrown animate-pulse'>!</span>
                </h4>
                <p className='text-sm md:text-lg xl:text-xl'>
                    An enthusiast Full Stack Web Developer that loves to learn new technologies and think out of the box to solve problems.
                    It motivates me to be part of a team that allows me to share, through my knowledge and soft skills, solutions to problems or specific market needs.
                </p>
            </motion.div>
        </motion.div>
    )
}

export default About