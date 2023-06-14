import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DragDrop from '../../features/DragDrop'

const MainPage = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <DragDrop />
            </div>
        </DndProvider>
    )
}

export default MainPage