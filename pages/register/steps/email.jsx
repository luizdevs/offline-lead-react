import React from 'react'
import { withRouter } from 'next/router'
import { Validate } from '../../../config'

import styles from '../register.module.scss'
import { Form } from '../../../components'
import { FaAngleLeft, FaAngleRight, FaCheck } from 'react-icons/fa'

class Email extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            enabled: false,
            loading: false,
            email: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.prev = this.prev.bind(this)
    } 

    componentDidMount(){
        const { formState, router } = this.props
        if(formState.step < 2) { router.push('/register?step=1'); return; }
        if(formState.email) this.onChange({ target: { value: formState.email } })
    }

    onChange(e){
        const State = Object.assign({}, this.state)
              State.email = e.target.value
              State.enabled = Validate.email(State.email)
        this.setState(State)
    }

    async onSubmit(e){
        e.preventDefault()
        this.setState({ loading: true })

        const FormState = Object.assign({}, this.props.formState)
              FormState.email = this.state.email
              FormState.step = 3

        setTimeout(() => {
            this.props.setFormState(FormState)
            this.props.router.push('/register?step=3', undefined, { shallow: true })
        }, 1000)
    }

    prev(){ this.props.router.push('/register?step=1', undefined, { shallow: true }) }

    render(){
        const { enabled, loading, email } = this.state

        return(
        <>
            <Form.Form onSubmit={this.onSubmit} autocomplete="off">
                <Form.Input required autoFocus disabled={loading} id="email" value={email} onChange={this.onChange} label="Qual o seu e-mail?" placeholder="Exemplo: joao@gmail.com" helper="Dica: Insira o endereço de e-mail que você mais utiliza." />

                <Form.Actions>
                    <Form.Button type="button" disabled={loading} onClick={this.prev}><FaAngleLeft /> Voltar</Form.Button>
                    <Form.Button disabled={!enabled || loading} loading={loading}>Continuar <FaAngleRight /></Form.Button>
                </Form.Actions>
            </Form.Form>
        </>
        )
    }
}

export default withRouter(Email)