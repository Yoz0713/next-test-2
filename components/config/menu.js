import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router'
export default function Menu(){

    const list = ["HOME","ABOUT","PORTFOLIO","NEWS",'BLOG','CONTACT']
    const router = useRouter()
    let h = router.pathname
    let path = list.map((item)=>{
        item = item.toLowerCase()
        
        return item
    })
    path[0] = "/"
    console.log(path)
    return(
   
        <section className="menu" >
            <ul>
            <AnimatePresence exitBeforeEnter>
            {list.map((item,i)=>{
                 return(
                <Link href={`/${path[i]}`} key={i}>
                    <li>{item}</li>
                </Link>
                 )
            })}
                 </AnimatePresence>
            </ul>
        </section>
   
    )
}