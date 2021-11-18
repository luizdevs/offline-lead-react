import React from 'react'
import { withRouter } from 'next/router'
import FileDownload from 'js-file-download'

import styles from './config.module.scss'
import { Body, Menu, Form } from '../../components'
import { FaCloud, FaArrowAltCircleUp, FaTrash, FaDownload } from 'react-icons/fa'

class Config extends React.Component{

    constructor(props){
        super(props)

        this.getData = this.getData.bind(this)
        this.reset = this.reset.bind(this)
        this.download = this.download.bind(this)
    }

    getData(){
        let unsync = localStorage.getItem('@unsync')
            unsync = unsync ? JSON.parse(unsync) : []
        return unsync
    }

    reset(){
        let confirm = window.confirm('Tem certeza que deseja resetar o sistema?')
        if(!confirm) return

        localStorage.setItem('@unsync', "[]")
        this.setState({ data: [] })
    }

    download(){
        const headers = "NOME;EMAIL;DATA;ID\n"
        let data = this.getData()
        let formated = ''
        
        data.map(item => {
            formated += `${item.name};${item.email};${item.timestamp};${item._id}\n`
        })

        FileDownload(headers + formated, 'contacts.csv')
    }
    
    render(){
        const data = this.getData()

        return(
        <>
            <Body>
                <Menu />

                <div className={styles.container}>

                    <div className={styles.history}>
                        <h3>Histórico de registros ({data.length})</h3>
                        <span>Acompanhe abaixo o histórico</span>
                        <div className={styles.divisor} />

                        <div className={styles.data}>
                            { data.map(item => {
                                return <>
                                    <div className={styles.dataItem}>
                                        <div>{item._id.substr(0, 5)}....</div>
                                        <div>{item.name}</div>
                                        <div>{item.email}</div>
                                        <div>{ !item.sync ? <FaCloud /> : <FaArrowAltCircleUp />}</div>
                                    </div>
                                </>
                            }) }
                        </div>
                    </div>

                    <div className={styles.general}>
                        <h3>Ações</h3>
                        <span>Altere aqui apenas se souber o que está fazendo</span>
                        <div className={styles.divisor} />

                        <div className={styles.actions}>
                            <Form.Button disabled={data.length <= 0} onClick={this.reset}><FaTrash /> todos os dados</Form.Button>
                            <Form.Button disabled={data.length <= 0} onClick={this.download}><FaDownload /> Download (.csv)</Form.Button>
                        </div>
                    </div>

                </div>
            </Body>
        </>
        )
    }
}

export default withRouter(Config)