import React, { useState } from 'react'
import Card from '../../../../components/shared/Card/Card'
import styles from '.././StepPhoneEmail.module.css'
import Button from '../../../../components/shared/button/Button'

const Email = ({ onNext }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
        <Card heading="ENTER YOUR EMAIL ID" onNext={onNext}>
            <input type="text" className={styles.input} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <div className={styles.button_center}>
                <Button onClick={onNext} />
            </div>
        </Card>
    )
}

export default Email
