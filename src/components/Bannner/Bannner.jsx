import HD1 from '../../assets/images/HD1.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTopcoder } from "react-icons/si";
import { Link } from 'react-router-dom';

export default function Bannner() {
    return (
        <div className="my-10 flex flex-col md:flex-row md:gap-10">
            <div className='w-full md:w-1/2'>
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                        <img src={HD1} alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center ">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Md. Noman Faysal Ridoy
                        </h4>
                        {/* <p
                        className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-black"> */}
                        <p
                            className='text-black'>
                            MERN Stack Developer
                        </p>
                    </div>
                    <div className="flex justify-center p-6 pt-2 gap-7">
                        <Link to={'https://www.linkedin.com/in/nfridoy/'} target='_blank'>
                            <FaLinkedin />
                        </Link>
                        <Link to={'https://github.com/NFRIDOY'} target='_blank'>
                            <FaGithub />
                        </Link>
                        <Link to={'https://profiles.topcoder.com/nfridoy'} target='_blank'>
                            <SiTopcoder />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <h1 className=''>
                    <span className='text-6xl'>
                        I&apos;m 
                    </span>
                    <br />
                    <span className='text-6xl relative left-20 font-semibold'>
                        MD NOMAN FAYSAL RIDOY
                    </span>
                </h1>
                <h2 className='text-xl italic underline my-6'>NF RIDOY</h2>
                <p className='text-2xl'>
                    Embark on a journey through pixels and code as a web developer! Dive into the art of crafting digital landscapes, where creativity meets technology. From sleek user interfaces to immersive experiences, this role brings websites to life, shaping the online realm. Explore the ever-evolving languages and tools, sculpting the internet of tomorrow. Join the adventure, where innovation and imagination converge in the world of web development!
                </p>
            </div>
        </div >
    )
}
