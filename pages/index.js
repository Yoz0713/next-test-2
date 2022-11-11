import Head from 'next/head'
import Image from 'next/image'
import ImageBox from '../components/home'
import { motion } from "framer-motion";
export default function Home(){
    return(
        <motion.section className='home'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}>
            <ImageBox/>
        </motion.section>
     
    )
}