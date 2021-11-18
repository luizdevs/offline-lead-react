import styles from './form.module.scss'

export default function Form({ children, ...props }){
    return(
    <>
        <form action="" method="post" className={styles.container} {...props}>
            { children }

            <div className={styles.controls}>
                
            </div>
        </form>
    </>
    )
}