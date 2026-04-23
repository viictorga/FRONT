
import Link from "next/link"
import "./page.css"

 const Navigator1 = () =>{
    type NavigatorLink = {
        name: string,
        link: string
    }


    const links : NavigatorLink[] = [
        {
            link: "/home",
            name: "La Casita"
        },
        {
            link: "/characters",
            name: "Personajitos"
        },{
            link: "/locations",
            name: "Lugarcitos"
            
        },{
            link: "/episodes",
            name: "Episodios"
        }]
    return(
        <div className="navigatorContainer">
            {links.map((e)=>(
            <Link className="NavigateLink" key={e.link} href={e.link}>
                <p>{e.name}</p>
            
            </Link>))}


        </div>
    )
}
export default Navigator1;