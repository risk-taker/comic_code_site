import React, { useState } from 'react'
import Button from '../../../../components/shared/button/Button'
import Card from '../../../../components/shared/Card/Card'
import styles from '.././StepPhoneEmail.module.css'
import { sendOtp } from '../../../../http/index'
import { useDispatch } from 'react-redux'
import { setOtp } from '../../../../store/authSlice'

const Phone = ({ onNext }) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const dispatch = useDispatch();

    async function submit() {
        //server request
        const { data } = await sendOtp({ phone: phoneNumber });
        console.log(data);
        dispatch(setOtp({ phone: phoneNumber, hash: data.hash }))
        onNext()
    }

    return (
        <Card heading="ENTER PHONE NUMBER" onNext={onNext}>
            <input type="text" className={styles.input} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <div className={styles.button_center}>
                <Button onClick={submit} />
            </div>
        </Card>
    )
}

export default Phone
