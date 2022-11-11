import ImageBox3 from '../components/portfolio'
import { motion } from "framer-motion";
export default function Portfolio(){
    return(
        <motion.section className='portfolio'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}>
            <ImageBox3/>
        </motion.section>
     
    )
}