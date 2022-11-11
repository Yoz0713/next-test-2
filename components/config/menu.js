import Link from "next/link";
import { AnimatePresence } from "framer-motion";

export default function Menu(){

    const list = ["HOME","ABOUT","PORTFOLIO","NEWS",'BLOG','CONTACT']
    let path = list.map((item)=>{
        item = item.toLowerCase()
        
        return item
    })
    path[0] = "/"
    console.log(path)
    return(
        <AnimatePresence exitBeforeEnter>
        <section className="menu">
            <ul>
            {list.map((item,i)=>{
                 return(
                <Link href={`/${path[i]}`} key={i}>
                    <li>{item}</li>
                </Link>
                 )
            })}
            </ul>
        </section>
        </AnimatePresence>
    )
}