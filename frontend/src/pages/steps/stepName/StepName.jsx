import React, { useState } from 'react'
import styles from './Step.module.css'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/button/Button'
// import { useDispatch } from 'react-redux'
// import { setAuth } from '../../../store/authSlice'
import { useNavigate } from 'react-router'

const StepName = ({ onNext }) => {
    // const dispatch = useDispatch()
    const [name, setName] = useState('')
    const navigate = useNavigate()

    async function submit() {
        try {
            // dispatch(setAuth({ name: name }))
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={styles.cardWrapper}>
            <Card heading="ENTER NAME" onNext={onNext}>
                <input type="text" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
                <div className={styles.button_center}>
                    <Button onClick={submit} />
                </div>
            </Card>
        </div>
    )
}

export default StepName
