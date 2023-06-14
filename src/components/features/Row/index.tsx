import styles from './lib/styles.module.css'


const Row = ({row_id}: {row_id: string}) => {

    let array = []

    for (let index = 0; index < 10; index++) {
        array.push(`${row_id}-${index}`)
    }

    return (
        <div className={styles.container}>
            {array.map(el => {
                
            })}
        </div>
    )
}

export default Row