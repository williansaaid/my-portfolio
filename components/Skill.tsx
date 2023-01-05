import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
    directionLeft?: boolean;
}

const Skill = ({ directionLeft }: Props) => {
    return (
        <motion.div
            initial={{
                x: directionLeft ? -50 : 50,
                opacity: 0
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            className='group relative flex cursor-pointer md:mt-0 w-20 h-20 overflow-hidden rounded-full object-cover lg:w-32 lg:h-32 border border-customGray filter hover:grayscale transition duration-300 ease-in-out'
        >
            <div
                className='w-24 h-24 overflow-hidden rounded-full object-cover lg:w-32 lg:h-32'
            >
                <Image
                        src={"https://res.cloudinary.com/ds41xxspf/image/upload/v1672852249/avento_rxmls7.gif"}
                        alt="Gif Programmer"
                        fill
                        objectFit="cover"
                />
            </div>
            <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-customGray h-20 w-20 lg:w-32 lg:h-32 z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-xl font-bold opacity-100 text-customGreen'>React</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Skill