import styles from './register.module.scss'
import { Form } from '../../components'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

export default function StepOne(){
    return(
    <>
        <Form.Form>
            <Form.Input label="Qual o seu nome?" helper="Dica: Utilize o seu nome completo." />

            <Form.Actions>
                <Form.Button secondary><FaAngleLeft /> Voltar</Form.Button>
                <Form.Button>Continuar <FaAngleRight /></Form.Button>
            </Form.Actions>
        </Form.Form>
    </>
    )
}