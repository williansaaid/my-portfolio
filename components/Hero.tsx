import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BgCircles from './BgCircles';
import Image from 'next/image';
import Link from 'next/link';

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
            <div className='w-32 h-32 rounded-full overflow-hidden relative my-4'>
                <Image
                    src={"https://res.cloudinary.com/ds41xxspf/image/upload/v1672698557/IMG_20220906_170236-01_abwwcc.jpg"}
                    alt="Profile Image"
                    fill={true}
                />
            </div>
            <div className='z-20 px-4'>
                <h2 className='uppercase text-sm md:text-lg text-customYellow tracking-[15px] mb-4'>
                    Full Stack Developer
                </h2>
                <h1 className='text-3xl lg:text-6xl md:text-5xl font-semibold'>
                    <span>{text}</span>
                    <Cursor cursorColor='#EFF291'/>
                </h1>
                <div className='flex items-center justify-center'>
                    <Link href={"#about"}>
                        <button className='buttonMain'>About</button>
                    </Link>
                    <Link href={"#projects"}>
                        <button className='buttonMain'>Projects</button>
                    </Link>
                    <Link href={"#skills"}>
                        <button className='buttonMain'>Skills</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero