import React from "react"
import links from "../links"

function createLink(data){
    return <Link 
    name= {data.name}
    url = {data.url}
    />
}

function NavBar(){

    return <ul>
        
        {links.map(createLink)}


    </ul>
}

export default NavBar;