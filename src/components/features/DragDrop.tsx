import { useAppSelector } from '../../state/hooks'
import Table from './Table'
import Row from './Row'



const DragDrop = () => {

  let { items } = useAppSelector(state => state.cellsReducer)

  let rows_IDs = []

  for (let index = 0; index < 11; index++) {
    rows_IDs.push(`${index}`)
  }

  return (
    <>
      <div style={{ border: 'solid 1px black', display: 'flex', flexDirection: 'column', margin: '10px' }}>
        <h1>Выберите столик с числом мест и перенесите на карту</h1>
        <div style={{display: 'flex'}}>
          {items.map(item => {
            return <Table persons_amount={item.persons_amount} item_id={item.id} />
          })}
        </div>

      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {rows_IDs.map(row_id => <Row key={row_id} row_id={row_id} />)}
      </div>
    </>
  )
}

export default DragDrop