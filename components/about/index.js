import Image from "next/image";
const requirejpg = require.context("../../img2", true, /^\.\/.*\.jpg$/);
const jpg = requirejpg.keys().map(requirejpg);

export default function ImageBox2(){
    const arr = []
    for(let i = 0 ; i <jpg.length ; i++){
        arr.push(<Image src={jpg[i]} alt={`img${i}`} key={i} priority={true}/>)
    }
    return(
        <section className="box1">
            {arr}
        </section>
      
    )
}