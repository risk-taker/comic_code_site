import React, { useState } from 'react'
import Card from '../../../components/shared/Card/Card'
import styles from './StepOtp.module.css'
import Button from '../../../components/shared/button/Button'
import { verifyOtp } from '../../../http'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../../store/authSlice'

const StepOtp = ({ onNext }) => {
    const [otp, setOtp] = useState('')
    const { phone, hash } = useSelector((state) => state.auth.otp)
    const dispatch = useDispatch();

    async function submit() {
        try {
            const { data } = await verifyOtp({ otp, phone, hash })
            dispatch(setAuth(data))
            onNext()
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className={styles.cardWrapper}>
            <Card heading="ENTER OTP" onNext={onNext}>
                <input type="text" className={styles.input} value={otp} onChange={(e) => setOtp(e.target.value)} />
                <div className={styles.button_center}>
                    <Button onClick={submit} />
                </div>
            </Card>
        </div>
    )
}

export default StepOtp
