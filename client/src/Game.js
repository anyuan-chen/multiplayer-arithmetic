import React, { useState, useEffect, useRef } from 'react'

export default function Game() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [sign, setSign] = useState("+");
    const [answer, setAnswer] = useState("0");
    const [time, setTime] = useState(60);
    const timeRef = useRef(time);
    timeRef.current = time;

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(timeRef.current);
            setTime(timeRef.current - 1);
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    const answerChanged = (event) => {
        setAnswer(event.target.value)
    }
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <div>
                <h1>{time}</h1>
            </div>
            <div className="flex flex-row">
                <div className="flex text-6xl justify-center items-center">
                    <h1 className="px-2">{firstNumber}</h1>
                    <h1 className="px-2">{sign}</h1>
                    <h1 className="px-2">{secondNumber} = </h1>
                </div>
                <div className="flex justify-center items-center">
                    <input type="text" value={answer} onChange={answerChanged} className="border-2 text-6xl border-t-0 border-r-0 border-l-0 outline-none "></input>
                </div>
            </div>
        </div>

    )
}
