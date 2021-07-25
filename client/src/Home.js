import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="flex flex-col items-center space-y-5 pt-32">
            <h1 className="text-4xl">Zetamac</h1>
            <Link to="/game"><button className="border border-black px-5 rounded py-1">Play</button></Link>
            <Link to="/settings"><button className="border border-black px-5 rounded py-1">Settings</button></Link>
        </div>
    )
}
