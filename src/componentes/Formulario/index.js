import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
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

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do Colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="insira a sua foto" />
                <ListaSuspensa itens={times} label="Time" />
            </form>
        </section>
    )
}

export default Formulario