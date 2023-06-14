import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Cell_T = {
    id: string,
    item_id: string | undefined
}

export type Item_T = {
    id: string,
    persons_amount: number
}

type initialState_T = {
    cells: Cell_T[],
    items: Item_T[]
}

let initialState: initialState_T = {
    cells: [],
    items: [
        {
            id: '1',
            persons_amount: 1
        },
        {
            id: '2',
            persons_amount: 2
        },
        {
            id: '3',
            persons_amount: 3
        },
        {
            id: '4',
            persons_amount: 4
        },
        {
            id: '5',
            persons_amount: 5
        }
    ]
}

const cellsSlice = createSlice({
    name: 'cells',
    initialState,
    reducers: {
        setItem(state, action: PayloadAction<{id: string, item_id: string, old_cell_id: string}>) {
            let { id, old_cell_id, item_id } = action.payload
            state.cells = state.cells.filter(cell => cell.id !== id && cell.id !== old_cell_id)
            let cell: Cell_T = {id, item_id}
            state.cells.push(cell)
        },
        uploadSave(state, action: PayloadAction<initialState_T>) {
            state.cells = action.payload.cells
            state.items = action.payload.items
        }
    }
})

export default cellsSlice