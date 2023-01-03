import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-customGreen h-screen w-screen text-customGray snap-y snap-mandatory scroll-smooth overflow-y-scroll overflow-x-hidden z-0'>
      <Head>
        <title>Willians' Portfolio</title>
      </Head>

      <Header/>

      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      <section id='about' className='snap-center'>
        <About/>
      </section>

      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}

    </div>
  )
}
