import styles from '../form/form.module.scss'

export default function Actions({ children }){
    return(
    <>
        <div className={styles.actions}>{children}</div>
    </>
    )
}