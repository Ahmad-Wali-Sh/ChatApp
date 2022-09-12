import React from "react"
import Header from "./Header"
import Message from "./Message"
import Texter from "./Texter"

export default function MessageLog () {
    return (
        <div className="messagelog">
            <Header />
            <div className="messages">
            <Message status="left" image="../../images/avatar4.jpg" />
            <Message status="right" image="../../images/avatar3.jpeg" />
            <Message status="left" image="../../images/avatar4.jpg" />
            <Message status="right" image="../../images/avatar3.jpeg" />
            <Message status="left" image="../../images/avatar4.jpg" />
            <Message status="right" image="../../images/avatar3.jpeg" />
            <Message status="left" image="../../images/avatar4.jpg" />
            <Message status="right" image="../../images/avatar3.jpeg" />
            <Message status="left" image="../../images/avatar4.jpg" />
            <Message status="right" image="../../images/avatar3.jpeg" />
            <Message status="left" image="../../images/avatar4.jpg" />
            <Message status="right" image="../../images/avatar3.jpeg" />
            </div>
            <Texter />

        </div>
    )
}