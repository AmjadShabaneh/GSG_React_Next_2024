import './counter.css';
interface IProps{
    name:string
    counter:number
}



const Counter = (props:IProps)=>{
return(
    <div className="counter-card">
        <h3 className="counter-name">
            {props.name}
        </h3>
        <span className="counter-num">{props.counter}</span>

    </div>
)
}
export default Counter