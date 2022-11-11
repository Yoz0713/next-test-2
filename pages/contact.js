import ImageBox6 from '../components/contact'
import { motion } from "framer-motion";
export default function Contact(){
    return(
        <motion.section className='contact'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}>
            <ImageBox6/>
        </motion.section>
     
    )
}