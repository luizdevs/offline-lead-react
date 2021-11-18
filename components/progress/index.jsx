import styles from './progress.module.scss'

export default function Progress({ progress = 0, legend, details, color, ...props }){
    return(
    <>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.progress} style={{ width: progress + '%' }}><small>{legend ?? progress + '%'}</small></div>
                { details ? <span>{details}</span> : null}
            </div>
        </div>
    </>
    )
}