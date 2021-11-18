import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Validate, Functions } from '../../config'

import styles from './register.module.scss'
import { Body, Form, Menu } from '../../components'
import { FaAngleLeft, FaAngleRight, FaCheck } from 'react-icons/fa'

// Steps
import { Name as StepName, Email as StepEmail, Finish as FinishStep } from './steps'

export default function Register(){

    const router = useRouter()

    const [state, setState] = useState({ step: 1, loading: false })

    const Flow = () => {
        switch(router.query.step){
            default: case '1': return <StepName formState={state} setFormState={setState} />; break;
            case '2': return <StepEmail formState={state} setFormState={setState} />; break;
            case '3': return <FinishStep formState={state} setFormState={setState} />; break;
        }
    }

    return(
    <>
        <Body>
            <Menu />

            <div className={styles.container}>
                <header className={styles.header}>
                    <img src="/img/iu-light.png" alt="Instituto Ubuntu" title="Instituto Ubuntu" />
                    <div>
                        <h3>Formulário de Inscrição</h3>
                        <p>Preencha os dados corretamente para gerar seu certificado.</p>
                    </div>
                </header>

                <div className={styles.formContainer}>
                    <Flow />
                </div>

                <footer>
                    footer
                </footer>
            </div>
        </Body>
    </>
    )
}