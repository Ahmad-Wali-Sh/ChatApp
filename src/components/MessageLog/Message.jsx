import React from "react"


export default function Message (props) {
    return (
       <>
       <div className={props.status}>
            <div className="profile">
            <img src={props.image} className="profile"/>
            </div>
            <div className="mg-text">
                I am here to show what is.
            <p className="mg-time">12:34 | 09 June</p>
            </div>
        </div>
    </>
    )
}