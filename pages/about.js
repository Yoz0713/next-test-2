import ImageBox2 from '../components/about'
import { motion } from "framer-motion";
export default function About(){
    return(
        <motion.section className='about'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}>
            <ImageBox2/>
        </motion.section>
     
    )
}