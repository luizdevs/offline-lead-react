import { useState } from 'react'

import styles from './input.module.scss'

export default function Input({ type, label, id, helper, error, ...props }){

    const [state, setState] = useState({ focused: false })

    const fieldsetStyle = () => {
        let classes = styles.content
            if(state.focused) classes += ` ${styles.focused}`
            if(props.disabled) classes += ` ${styles.disabled}`
            if(error) classes += ` ${styles.error}`
        return classes
    }

    const containerStyle = () => {
        let classes = styles.container
            if(props.disabled) classes += ` ${styles.disabled}`
        return classes
    }

    const toggleFocus = focused => setState({ focused })

    return(
    <>
        <div className={containerStyle()}>
            <fieldset className={fieldsetStyle()}>
                <legend>{label}</legend>
                <input type={type ?? 'text'} id={id} name={id} onFocus={() => toggleFocus(true)} onBlur={() => toggleFocus(false)} className={styles.input} {...props} />
            </fieldset>
            { helper ? <div className={styles.helperText}><small>{helper}</small></div> : null }
            { error ? <div className={styles.helperError}><small>{error}</small></div> : null }
        </div>
    </>
    )
}