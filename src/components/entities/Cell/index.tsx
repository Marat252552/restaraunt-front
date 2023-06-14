import { useDrop } from 'react-dnd'
import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import cellsSlice from '../../../state/reducers/CellsReducer'
import Table from '../../features/Table'


const Cell = ({ cell_id }: { cell_id: string }) => {

    let dispatch = useAppDispatch()
    let { setItem } = cellsSlice.actions

    let { cells, items } = useAppSelector(state => state.cellsReducer)
    let cell = cells.find(cell => cell.id === cell_id)

    let Element = items.find(el => el.id === cell?.item_id)

    let [_, drop] = useDrop(() => ({
        accept: 'image',
        drop: ({ item_id, old_cell_id }: { item_id: string, old_cell_id: string }) => addImageToBoard(item_id, old_cell_id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addImageToBoard = (item_id: string, old_cell_id: string) => {
        let data = { id: cell_id, item_id, old_cell_id }
        if (data) {
            dispatch(setItem(data))
        }
    }
    return (
        <div ref={drop} style={{ width: '50px', height: '50px', border: 'solid 1px black' }}>
            {Element && <Table item_id={Element.id} old_cell_id={cell_id} persons_amount={Element.persons_amount} />}
        </div>
    )
}

export default Cell