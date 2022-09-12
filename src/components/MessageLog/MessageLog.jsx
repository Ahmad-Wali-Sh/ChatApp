import React from "react"
import Header from "./Header"
import Message from "./Message"


export default function MessageLog () {
    return (
        <div className="messagelog">
            <Header />
            <div className="messages">
            <Message status="left"/>
            <Message status="right"/>
            <Message status="left"/>
            <Message status="right"/>
            <Message status="left"/>
            <Message status="right"/>
            <Message status="left"/>
            <Message status="right"/>
            <Message status="left"/>
            <Message status="right"/>
            <Message status="left"/>
            <Message status="right"/>
            </div>
        </div>
    )
}