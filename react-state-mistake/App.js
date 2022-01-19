import React, { useState } from "react"

export default function App() {

    const [count, setCount] = useState(0)
    const [arr, setArr] = useState({ firstName: "Jauhar", lastName: "" })

    function add() {
        setCount(count => count + 1)
        setCount(count => count + 1)
    }

    function substract() {
        setCount(prev => prev - 1)
    }

    function addArr() {
        setArr(({ ...prevArr, lastName: "Uddin" }))
        setArr(prevArr => ({ ...prevArr, lastName: "Uddin" }))
    }

    return (
        <div className="container">
            <h1>{count}</h1>
            <div className="button">
                <button onClick={substract} type="button">-</button>
                <button onClick={add} type="buton">+</button>
            </div>
            <button onClick={() => setCount(0)} type="buton">reset</button>
        </div>
    )
}
