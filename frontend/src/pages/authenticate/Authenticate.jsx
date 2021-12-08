import React, { useState } from 'react'
import StepPhoneEmail from '../steps/stepPhoneEmail/StepPhoneEmail'
import StepOtp from '../steps/stepOtp/StepOtp'
import StepName from '../steps/stepName/StepName'


const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
    3: StepName,
}

const Authenticate = () => {
    const [step, setStep] = useState(1)

    const Step = steps[step];
    function onNext() {
        setStep(step + 1)
    }

    return (
        <Step onNext={onNext} />
    )
}

export default Authenticate
