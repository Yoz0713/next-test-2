import Menu from "../config/menu";


export default function Layout({children}){

    return(
        <>
            <Menu />
            <main>
                {children}
            </main>
        </>
    )
}