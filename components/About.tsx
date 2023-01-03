import React from 'react'

type Props = {}

const About = (props: Props) => {
    return (
        <div className='h-screen w-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-customGray text-2xl'>
                About
            </h3>
        </div>
    )
}

export default About