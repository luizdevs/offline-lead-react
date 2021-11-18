import React from 'react'
import { withRouter } from 'next/router'
import { Functions } from '../../../config'
import moment from 'moment'

import styles from '../register.module.scss'
import { Form } from '../../../components'
import { FaAngleRight, FaCheck } from 'react-icons/fa'

class Finish extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            seconds: 6
        }

        this.callback = this.callback.bind(this)
        this.save = this.save.bind(this)
        this.reset = this.reset.bind(this)
    }

    componentDidMount(){
        const { formState, router } = this.props
        if(formState.step < 3){ router.push('/register?step=2', undefined, { shallow: true }); return} 
        this.callback()

        window.addEventListener('keyup', this.save, false)
    }

    componentWillUnmount(){
        window.removeEventListener('keyup', this.save, false)
    }

    callback(){
        const { seconds } = this.state
        
        if(seconds <= 0){ this.save(); return;}

        this.setState({ seconds: seconds - 1 })

        setTimeout(() => this.callback(), 1000)
    }

    save(){
        let unsync = localStorage.getItem('@unsync')
            unsync = unsync ? JSON.parse(unsync) : []
        
        const { name, email } = this.props.formState

        let register = { name, email, timestamp: moment().format('lll'), _id: Functions.code() }

        unsync.push(register)
        localStorage.setItem('@unsync', JSON.stringify(unsync))

        this.reset()
    }

    reset(){
        const { setFormState, router } = this.props
        setFormState({ name: '', email: '', timestamp: '', step: 1 })
        router.push('/register?step=1')
    }

    render(){
        const { seconds } = this.state
        const { formState } = this.props

        return(
        <>
            <div className={styles.finishedContainer}>
                <div className={styles.icon}><FaCheck /></div>
                <h2>Tudo certo <b>{formState.name ? formState.name.split(' ')[0] : null}!</b></h2>
                <h4>A sua inscrição foi realizada com sucesso!</h4>

                <div className={styles.divisor} />

                <p>
                    Em alguns instantes você poderá receber um e-mail de confirmação em <b>{formState.email}</b>. Ao recebê-lo 
                    clique no link para confirmar a sua inscrição.
                </p>

                <div className={styles.divisor} />

                <Form.Button onClick={this.save}>PRÓXIMA INSCRIÇÃO ({seconds}) <FaAngleRight /></Form.Button>
            </div>
        </>
        )
    }
}

export default withRouter(Finish)