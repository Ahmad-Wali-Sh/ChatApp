import React from "react"


export default function Header () {
    return (
        <div className="mg-header">
            <div className="mg-profile">
                <img src="../../images/avatar4.jpg" className="mg-profile"/>
            </div>
            <div className="text-profile">
            <h2>Mr.Nobody</h2>
            <h5 className="grey">is Typing...</h5>
            </div>
            <div className="icons">
            <i class="fa-solid fa-share iconhover"></i>
            </div>
        </div>
    )
}