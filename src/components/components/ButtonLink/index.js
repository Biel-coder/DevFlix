import React from 'react';
import { Link } from 'react-router-dom';


function ButtonLink(props){
    console.log(props)
    
    return(
            <Link className={props.className} to={props.href}>
                {props.children}
            </Link>
    )
}

export default ButtonLink;