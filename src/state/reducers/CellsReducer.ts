import {PayloadAction, createSlice} from '@reduxjs/toolkit'

type Cell_T = {
    id: string,
    item_id: string | undefined
}

type initialState_T = {
    cells: Cell_T[]
}

let initialState: initialState_T = {
    cells: []
}

const cellsSlice = createSlice({
    name: 'cells',
    initialState,
    reducers: {
        setItem(state, action: PayloadAction<Cell_T>) {
            let {id} = action.payload
            state.cells = state.cells.filter(cell => cell.id !== id)
            state.cells.push(action.payload)
            console.log(state.cells)
        }
    }
})

export default cellsSlice