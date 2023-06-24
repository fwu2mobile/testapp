import React from "react"
import links from "../links"

function createLink(data){
    return <Link 
    key = {data.id}
    name= {data.name}
    url = {data.url}
    />
}

function NavBar(){

    return (<ul>
        
        {links.map(createLink)}


    </ul>)
}

export default NavBar;