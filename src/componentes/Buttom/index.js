import './Buttom.css'

const Buttom = (props) => {
    return(
        <div>
            <button>{props.children}</button>
        </div>
    )
}

export default Buttom