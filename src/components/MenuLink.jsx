import React from "react"
import {Link}  from 'react-router-dom'

function MenuLink(props){
    return (
        <li> 
            <Link to={props.linkurl}>{props.linkname}</Link>            
            
        </li>
       
    )
}

export default MenuLink;