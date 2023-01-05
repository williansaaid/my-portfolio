import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCards({}: Props) {
    return (
        <div
            className='snap-center flex flex-col rounded-lg items-center justify-start flex-shrink-0 w-52 h-2/3 max-h-2/3 md:w-[600px] md:h-[600px] xl:w-[800px] bg-customGray/10 hover:opacity-100 opacity-30 cursor-pointer transition-opacity duration-300 overflow-y-auto mt-32 py-10 px-6'
        >
            <div
                className='flex flex-col px-0 md:px-10 gap-4 justify-center items-center'
            >
                <div
                    className='w-32 h-32 xl:w-[200px] xl:h-[200px] rounded-full overflow-hidden relative my-4'
                >
                    <Image
                        src={"https://res.cloudinary.com/ds41xxspf/image/upload/v1672935479/henryLogo2_gqejpq.jpg"}
                        alt={"Henry Logo"}
                        fill={true}
                        objectFit="cover"
                    />
                </div>
                <h4 className='text-4xl font-light text-center'>Title</h4>
                <p className='font-bold text-2xl text-center'>HENRY</p>
                <div
                    className='flex gap-2 flex-wrap'
                >
                    <div
                        className='h-10 w-10 rounded-full overflow-hidden relative'
                    >
                        <Image
                        src={"https://res.cloudinary.com/ds41xxspf/image/upload/v1672935479/henryLogo2_gqejpq.jpg"}
                        alt={"Henry Logo"}
                        fill={true}
                        objectFit="cover"
                        />
                    </div>
                    <div
                        className='h-10 w-10 rounded-full overflow-hidden relative'
                    >
                        <Image
                        src={"https://res.cloudinary.com/ds41xxspf/image/upload/v1672935479/henryLogo2_gqejpq.jpg"}
                        alt={"Henry Logo"}
                        fill={true}
                        objectFit="cover"
                        />
                    </div>
                    <div
                        className='h-10 w-10 rounded-full overflow-hidden relative'
                    >
                        <Image
                        src={"https://res.cloudinary.com/ds41xxspf/image/upload/v1672935479/henryLogo2_gqejpq.jpg"}
                        alt={"Henry Logo"}
                        fill={true}
                        objectFit="cover"
                        />
                    </div>
                </div>
                <p className='uppercase'>From -- To -- </p>
                <ul className='list-dic space-y-4 text-lg'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis atque sunt dolor quo illum dolorem, porro a assumenda labore repellendus ea iusto iure quos tempora itaque voluptatum, id sit earum.</li>
                    <li>Summary Points Summary Points Summary Points Summary Points</li>
                    <li>Summary Points Summary Points Summary Points Summary Points</li>
                </ul>
            </div>
        </div>
    )
}

export default ExperienceCards