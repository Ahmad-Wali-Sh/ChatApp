import React from "react"


export default function ChatLog (props) {
    return (
        <div className="chatlog">
            <h3>{props.name}</h3>
            <h4 className="message-text">Message... from the user that arrived now and is cropted here.</h4>
        </div>
    )
}