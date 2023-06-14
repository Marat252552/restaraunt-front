import { useDrag } from 'react-dnd'



const Table = ({ item_id, persons_amount, old_cell_id }: { old_cell_id?: string, item_id: string, persons_amount: number }) => {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { item_id, old_cell_id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return <div
    ref={drag}
    style={{ border: isDragging ? 'solid 5px red' : 'solid 1px black', width: '50px', height: '50px', fontSize: '20px', textAlign: 'center' }}>
    {persons_amount}
  </div>
}

export default Table