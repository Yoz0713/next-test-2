import Head from 'next/head'
import Image from 'next/image'
import ImageBox from '../components/home'
import { motion } from "framer-motion";
export default function Home(){
    return(
        <motion.section className='home'
        initial={{ opacity: 0,y:"10vw"  }}
        animate={{ opacity: 1 ,y:0}}
        exit={{ opacity: 0,y:"10vw" }}
        transition={{ duration: 2 }}>
            <ImageBox/>
        </motion.section>
     
    )
}