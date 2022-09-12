import React from "react"


export default function Message (props) {
    return (
       <>
       <div className={props.status}>
            <div className="profile">
            <img src="../../images/avatar4.jpg" className="profile"/>
            </div>
            <div className="mg-text">
                I am here for you sir..
                yes we are here and doing lots of work to be done in a cuple of minutes...
                I am here for you sir..
                yes we are here and doing lots of work to be done in a cuple of minutes...
            <p className="mg-time">12:34 | 09 June</p>
            </div>
        </div>
    </>
    )
}