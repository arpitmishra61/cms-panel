//importing require files
import React from 'react'
import "../../css/navigation/navbar.css"

//Navbar Component
export default function Navbar() {
    return (
        <div className="navbar card centerFlex">
            <i className="material-icons" >menu</i>
            <h4>CMS</h4>
            <div className="detail ml-auto centerFlex">
                <i className="material-icons">email</i>

                <i className="material-icons">account_circle</i>
                <h5>Manan</h5>


            </div>
        </div>
    )
}
