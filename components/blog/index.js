import Image from "next/image";
const requirejpg = require.context("../../img5", true, /^\.\/.*\.jpg$/);
const jpg = requirejpg.keys().map(requirejpg);

export default function ImageBox5(){
    const arr = []
    for(let i = 0 ; i <jpg.length ; i++){
        arr.push(<Image src={jpg[i]} alt={`img${i}`} key={i}/>)
    }
    return(
        <section className="box1">
            {arr}
        </section>
      
    )
}