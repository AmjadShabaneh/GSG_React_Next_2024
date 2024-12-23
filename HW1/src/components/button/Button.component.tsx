import './Button.css'
interface IProps{
    value:string
    onSubmit:(value:string) => void
    className?:string
 

}

const Button = (props:IProps)=>{
    return(
        <button className={`button ${props.className}`} onClick={(e)=>{e.preventDefault() 
            props.onSubmit(props.value)}}>
    
            {props.value}
        </button>
    )
}
export default Button