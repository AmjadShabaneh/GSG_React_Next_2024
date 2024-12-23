interface IProps{
    initilaValue?:string
    prevValue?:string
    operator?:string
}


const Result = (props:IProps)=>{

    return(
        <div className='output'>

        {props.initilaValue}
        <div className='prev-value'>{props.prevValue}{props.operator} </div>
      </div>
    )
}
export default Result