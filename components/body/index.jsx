import styles from './body.module.scss'

export default function Body({ children }){
    return(
    <>
        <div className={styles.container}>{ children }</div>
    </>
    )
}