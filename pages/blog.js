import ImageBox5 from '../components/blog'
import { motion } from "framer-motion";
export default function Blog(){
    return(
        <motion.section className='blog'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}>
            <ImageBox5/>
        </motion.section>
     
    )
}