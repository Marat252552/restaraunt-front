import { TextField, Button } from '@mui/material'
import styles from './lib/styles.module.css'
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {

    let navigate = useNavigate()

    return (
        <div className={styles.page_container}>
            <div className={styles.form_container}>
                <h3 style={{textAlign: 'center'}}>Создайте свой макет</h3>
                <TextField id="outlined-basic" label="Логин" variant="outlined" />
                <TextField id="outlined-basic" type='password' label="Пароль" variant="outlined" />
                <Button 
                style={{width: '100%'}} 
                onClick={() => {navigate('/main')}}
                variant="contained">Войти</Button>
            </div>
        </div>
    )
}

export default LoginPage