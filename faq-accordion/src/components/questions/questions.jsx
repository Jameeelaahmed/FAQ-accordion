import "./questions.css"
import plus from '../../assets/images/icon-plus.svg'

export default function card(props){
return(
    <>
        <div className="questions">
            <p>{props.q}</p>
            <img onClick={props.onSelect} src={plus} alt="" />
        </div>
        {props.children}
    </>
    )
}