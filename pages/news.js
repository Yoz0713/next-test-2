import ImageBox4 from '../components/news'
import { motion } from "framer-motion";
export default function News(){
    return(
        <motion.section className='news'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}>
            <ImageBox4/>
        </motion.section>
     
    )
}