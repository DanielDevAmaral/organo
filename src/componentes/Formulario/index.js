import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Buttom from "../Buttom"
import './Formulario.css'

const Formulario = () => {

    const times=[
        "Programação",
        "Front-end",
        "Data Science",
        "Devops",
        "UX e Desing",
        "Mobile",
        "Inovação e Gestão"
    ]

    const saving = (event) => {
        event.preventDefault()
        console.log("tudo ok")
    }

    return (
        <section className='formulario'>
            <form onSubmit={saving}>
                <h2>Preencha os dados para criar o card do Colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="insira a sua foto" />
                <ListaSuspensa itens={times} label="Time" />
                <Buttom> 
                    Criar Card
                </Buttom>
            </form>
        </section>
    )
}

export default Formulario