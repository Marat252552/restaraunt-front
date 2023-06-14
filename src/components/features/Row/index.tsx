import Cell from '../../entities/Cell'
import styles from './lib/styles.module.css'


const Row = ({row_id}: {row_id: string}) => {

    let cells_IDs = []

    for (let index = 0; index < 10; index++) {
        cells_IDs.push(`${row_id}-${index}`)
    }

    return (
        <div className={styles.container}>
            {cells_IDs.map(el => <Cell cell_id={el} />)}
        </div>
    )
}

export default Row