import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <h1 className="text-4xl">Zetamac</h1>
            <Link to="/game"><h1>Play</h1></Link>
            <Link to="/settings"><h1>Settings</h1></Link>
        </div>
    )
}
