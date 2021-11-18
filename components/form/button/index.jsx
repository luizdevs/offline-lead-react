import styles from './button.module.scss'
import { Loader } from '../../../components'

export default function Button({ children, loading, secondary, ...props }){

    const contentStyle = () => {
        let classes = styles.content
        if(loading) classes += ` ${styles.loading}`
        if(props.disabled) classes += ` ${styles.disabled}`
        if(secondary) classes += ` ${styles.secondary}`
        return classes
    }

    return(
    <>
        <div className={styles.container}>
            <button className={contentStyle()} {...props}>{ loading ? <Loader /> : children }</button>
        </div>
    </> 
    )
}