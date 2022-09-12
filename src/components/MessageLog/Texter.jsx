import React from "react"

export default function Texter () {
    return (
        <form className="texter">
            <input type="text" placeholder="Type a message..." className="text-input" />
            <i class="fa fa-paper-plane send-icon" aria-hidden="true"></i>
        </form>
    )
}