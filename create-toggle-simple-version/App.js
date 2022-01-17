import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
   function toggle(id){
       return setSquares(prevSquare => {
           return prevSquare.map(square => {
               return square.id === id ? {...square, on: !square.on} : square
           })
       })
   }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
