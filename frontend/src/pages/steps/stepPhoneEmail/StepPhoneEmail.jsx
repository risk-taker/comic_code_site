import React, { useState } from 'react'
import Email from './email/Email'
import Phone from './phone/Phone'
import styles from './StepPhoneEmail.module.css'

const phoneEmail = {
    phone: Phone,
    email: Email
}

const StepPhoneEmail = ({ onNext }) => {
    const [type, setType] = useState('phone');
    const Component = phoneEmail[type];

    return (
        <>
            <div className={styles.cardwrapper}>
                <div>
                    <div className={styles.buttonwrap}>
                        <button className={`${styles.tabbutton} ${type === 'phone' ? styles.active : ''}`} onClick={() => setType('phone')}>
                            <img src="/images/phone-white.png" alt="phone" />
                        </button>
                        <button className={`${styles.tabbutton} ${type === 'email' ? styles.active : ''}`} onClick={() => setType('email')}>
                            <img src="/images/email-white.png" alt="email" />
                        </button>
                    </div>
                    <Component onNext={onNext} />
                </div>
            </div>
        </>
    )

}

export default StepPhoneEmail
