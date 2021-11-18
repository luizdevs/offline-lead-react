import React from 'react'
import { withRouter } from 'next/router'

import styles from '../register.module.scss'
import { Form } from '../../../components'
import { FaAngleLeft, FaAngleRight, FaCheck } from 'react-icons/fa'

class Name extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            enabled: false,
            loading: false,
            name: ''
        }   

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        const { formState, router } = this.props
        if(formState.name) this.onChange({ target: { value: formState.name }})
    }

    onChange(e){
        const State = Object.assign({}, this.state)
              State.name = e.target.value
              State.enabled = State.name.split(' ').length >= 2
        
        this.setState(State)
    }

    async onSubmit(e){
        e.preventDefault()
        this.setState({ loading: true })

        const FormState = Object.assign({}, this.props.formState)
              FormState.name = this.state.name
              FormState.step = 2
        
        setTimeout(() => {
            this.props.setFormState(FormState)
            this.props.router.push('/register?step=2', undefined, { shallow: true })
        }, 1000)
    }

    render(){
        const { enabled, loading, name } = this.state

        return(
        <>
            <Form.Form onSubmit={this.onSubmit} autocomplete="off">
                <Form.Input required autoFocus disabled={loading} id="name" value={name} onChange={this.onChange} label="Qual o seu nome?" placeholder="Exemplo: João Santos" helper="Dica: Utilize o seu nome completo." />

                <Form.Actions>
                    <div></div>
                    <Form.Button disabled={!enabled || loading} loading={loading}>Continuar <FaAngleRight /></Form.Button>
                </Form.Actions>
            </Form.Form>
        </>
        )
    }
}

export default withRouter(Name)
