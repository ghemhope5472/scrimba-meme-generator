
function toggle(id) {
    setSquares(prevSquares => {
        const newSquares = []
        for (let i = 0; i < prevSquares.length; i++) {
            const currentSquare = prevSquares[i]
            if (currentSquare.id === id) {
                const updatedSquare = {
                    ...currentSquare,
                    on: !currentSquare.on
                }
                newSquares.push(updatedSquare)
            } else {
                newSquares.push(currentSquare)
            }
        }
        return newSquares
    })
}



function toggle(id) {
    setSquares(prevSquares => {
        const newSquares = []
        for (let i = 0; i < prevSquares.length; i++) {
            const currentSquare = prevSquares[i]
            if (currentSquare.id === id) {
                const updatedSquare = {
                    ...currentSquare,
                    on: !currentSquare.on
                }
                newSquares.push(updatedSquare)
            } else {
                newSquares.push(currentSquare)
            }
        }
        return newSquares
    })
}