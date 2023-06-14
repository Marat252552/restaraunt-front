import { useDrag } from 'react-dnd'



const Picture = ({ id, url }: { id: number, url: string }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: {id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return <img
    ref={drag}
    src={url}
    width='150px'
    style={{ border: isDragging ? 'solid 5px red' : undefined }}
  />
}

export default Picture