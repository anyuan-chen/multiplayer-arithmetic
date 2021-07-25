import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom';

export default function Game() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [sign, setSign] = useState("+");
    const [answer, setAnswer] = useState("0");
    const [time, setTime] = useState(5);
    const [score, setScore] = useState(0);
    const history = useHistory();
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
        <div>
            {
                time >= 0 &&
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between items-end px-5 py-2">
                        <h1>Time Left: {time}</h1>
                        <h1>Score: {score}</h1>
                    </div>
                    <div className="flex flex-row pt-60 justify-center">
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
            }
            {
                time < 0 &&
                <div className="pt-60 flex flex-col items-center space-y-5">
                    <h1>Score: {score}</h1>
                    <button onClick={() => history.push("/")} className="border-black border rounded px-5 py-1">Go Home</button>
                </div>
            }

        </div>
    )
}
