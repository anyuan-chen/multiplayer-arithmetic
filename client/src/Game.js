import React, { useState, useEffect } from 'react'

export default function Game() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [sign, setSign] = useState("+");
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("every second")
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="h-screen w-screen flex flex-row justify-center items-center">
                <div className="flex text-6xl justify-center items-center">
                    <h1 className="px-2">{firstNumber}</h1>
                    <h1 className="px-2">{sign}</h1>
                    <h1 className="px-2">{secondNumber} = </h1>
                    
                </div>
                <div className="flex justify-center items-center">
                    <input type="text" className="border-2"></input>
                </div>
        </div>

    )
}
