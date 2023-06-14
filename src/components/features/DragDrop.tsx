import React, { useState } from 'react'
import Picture from './Picture'
import { useDrop } from 'react-dnd'
import Cell from '../entities/Cell'
import Row from './Row'

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

const DragDrop = () => {

  let rows_IDs = []

  for (let index = 0; index < 11; index++) {
    rows_IDs.push(`${index}`)
  }

  return (
    <>
      <div className='pictures'>
        {ElementsList.map(element => {
          return <Picture url={element.url} id={element.id} />
        })}
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {rows_IDs.map(el => <Row row_id={el} />)}
      </div>

    </>
  )
}

export default DragDrop