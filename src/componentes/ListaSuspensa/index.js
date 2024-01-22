import './ListaSuspensa.css'

const ListaSuspensa = (props) => {


    return(
        <>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>

        </>

    )

}

export default ListaSuspensa