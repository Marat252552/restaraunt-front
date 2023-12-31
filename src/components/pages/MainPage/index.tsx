import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DragDrop from '../../features/DragDrop'
import { saveAs } from "file-saver";
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import cellsSlice from '../../../state/reducers/CellsReducer';


const MainPage = () => {

    let state = useAppSelector(state => state.cellsReducer)

    let dispatch = useAppDispatch()
    let { uploadSave } = cellsSlice.actions

    const exportFile = () => {
        let stateAsString = JSON.stringify(state)
        var blob = new Blob([stateAsString], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "save.txt");
    }

    const showFile = async (e: any) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e: any) => {
            const data = JSON.parse(e.target.result)
            dispatch(uploadSave(data))
        };
        reader.readAsText(e.target.files[0])
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <button onClick={exportFile}>Сохранить и экспортировать</button>
                <div>
                    Загрузите сохранение
                    <input type='file'
                        onChange={(e) => showFile(e)}
                        placeholder='Загрузите сохраненный макет'
                    />
                </div>

            </div>

            <DragDrop />
        </DndProvider>
    )
}

export default MainPage