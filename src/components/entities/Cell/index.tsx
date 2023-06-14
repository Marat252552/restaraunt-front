import React, { useState } from 'react'
import { useDrop } from 'react-dnd'

const ElementsList = [
    {
        id: 1,
        url: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202201030840'
    },
    {
        id: 2,
        url: 'https://media.istockphoto.com/id/184276818/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=HDH3wLEAvc7soT85pAcS4JOQu5KJ8xM9JOilVe1zFLI='
    }
]

const Cell = () => {

    let [board, setBoard] = useState()
    let [{ isOver }, drop] = useDrop(() => ({
        accept: 'image',
        drop: (item: { id: number }) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addImageToBoard = (id: number) => {
        let element = ElementsList.find(el => el.id === id)
        if (element) {
            setBoard(element)
        }
    }

    return (
        <div ref={drop} style={{ width: '100px', height: '100px', border: 'solid 1px red' }}>
            {board && <img src={board.url} width='100px' />}
        </div>
    )
}

export default Cell