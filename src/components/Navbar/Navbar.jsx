import React from "react"
import Header from "./Header"
import ChatLog from "./ChatLog"

export default function Navbar () {

    return (
        <div className="navbar">
            <Header />
            <div className="chatbox" >
            <ChatLog name="Halim" status="off"/>
            <ChatLog name="Nobody" status="off"/>
            <ChatLog name="Erfan" status="off"/>
            <ChatLog name="Nawid" status="off"/>
            <ChatLog name="Samir" status="off"/>
            <ChatLog name="Ramin" status="off"/>
            <ChatLog name="Rashid" status="off"/>
            <ChatLog name="Rashid" status="off"/>
            <ChatLog name="Rashid" status="off"/>
            <ChatLog name="Rashid" status="off"/>
            <ChatLog name="Rashid" status="off"/>
            <ChatLog name="Rashid" status="off"/>
            </div>
        </div>
    )
}