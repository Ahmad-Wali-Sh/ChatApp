import React from "react"
import Header from "./Header"
import ChatLog from "./ChatLog"

export default function Navbar () {
    return (
        <div className="navbar">
            <Header />
            <div className="chatbox">
            <ChatLog name="Halim"/>
            <ChatLog name="Noman"/>
            <ChatLog name="Erfan"/>
            <ChatLog name="Nawid"/>
            <ChatLog name="Samir"/>
            <ChatLog name="Ramin" />
            <ChatLog name="Rashid"/>
            <ChatLog name="Rashid"/>
            <ChatLog name="Rashid"/>
            <ChatLog name="Rashid"/>
            <ChatLog name="Rashid"/>
            <ChatLog name="Rashid"/>
            </div>
        </div>
    )
}