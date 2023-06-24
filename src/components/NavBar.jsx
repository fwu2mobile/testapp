import React from "react"
import links from "../links"
import MenuLink from "./MenuLink"

function createLink(data){
    return (
    <MenuLink 
    key = {data.id}
    linkname= {data.linkname}
    linkurl = {data.url}
    />
    )
}

function NavBar(){

    return (
    <ul>
        
        {links.map(createLink)}


    </ul>
    )
}

export default NavBar;