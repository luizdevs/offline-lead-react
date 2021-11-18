import styles from './loading.module.scss'

import { Body, Loader } from '../../components'

export default function Loading(){
    return(
    <>
        <Body>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Loader />
                    <span>Carregando...</span>
                </div>
            </div>
        </Body>
    </>
    )
}
