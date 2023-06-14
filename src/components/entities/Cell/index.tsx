import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import cellsSlice from '../../../state/reducers/CellsReducer'

const ElementsList = [
    {
        id: '1',
        url: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202201030840'
    },
    {
        id: '2',
        url: 'https://media.istockphoto.com/id/184276818/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=HDH3wLEAvc7soT85pAcS4JOQu5KJ8xM9JOilVe1zFLI='
    }
]

const Cell = ({ cell_id }: { cell_id: string }) => {

    let dispatch = useAppDispatch()
    let { setItem } = cellsSlice.actions

    let { cells } = useAppSelector(state => state.cellsReducer)
    let cell = cells.find(cell => cell.id === cell_id)

    let Element: undefined | { id: string, url: string } = undefined

    if (cell?.item_id) {
        let item = ElementsList.find(el => el.id === cell?.item_id)
        Element = item
    }

    // useEffect(() => {
    //     console.log(cells)
    // }, [cells])

    let [{ isOver }, drop] = useDrop(() => ({
        accept: 'image',
        drop: (item: { id: number }) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addImageToBoard = (id: number) => {
        console.log(id)
        let element = ElementsList.find(el => el.id === id)
        let Cell = {id: cell_id, item_id: element?.id}
        console.log(Cell)
        if (element) {
            dispatch(setItem(Cell))
        }
    }

    return (
        <div ref={drop} style={{ width: '50px', height: '50px', border: 'solid 1px red' }}>
            {Element && <img src={Element.url} width='50px' />}
        </div>
    )
}

export default Cell