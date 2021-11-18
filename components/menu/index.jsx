import React from 'react'
import { withRouter } from 'next/router'

import styles from './menu.module.scss'
import { FaAdjust, FaBackward } from 'react-icons/fa'

class Menu extends React.Component{

    toggleConfig = () => {
        const { router } = this.props
        if(router.pathname === '/config'){ router.push('/register?step=1'); return }
        router.push('/config')
    }

    render(){
        const { router } = this.props
        return(
        <>
            <div className={styles.container}>
                <button className={styles.item} onClick={this.toggleConfig}>
                    { router.pathname === '/config' ? <FaBackward /> : <FaAdjust /> }
                </button>
            </div>
        </>
        )
    }
}

export default withRouter(Menu)