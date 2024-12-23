

import { useState } from 'react';
import './App.css'
import Button from './components/button/Button.component'
import Result from './components/result/result.compnent';

function App() {
const numbuttons:string[] = ["1","2","3","4","5","6","7","8","9","0"];
const operators:string[] = ['+','-','*','/',];
const [prevValue,setPrevValue] = useState<string>("");
const [initilaValue , setInitilaValue] = useState<string>('0');
const [operator,setOperator] = useState<string>("");
const [error,setError] = useState<string>('')
const handleNumberClick = (value:string)=>{
  setInitilaValue(initilaValue+value)
}
const handleOpreatorClick=(value:string)=>
{
  let result:number;
  if(operator!==''){
if(operator==='+'){
result = Number(prevValue) + Number(initilaValue);
setPrevValue(result.toString())
setError("")
}
else if(operator==='-'){
  result = Number(prevValue) - Number(initilaValue);
  setPrevValue(result.toString())
  setError("")
  }
  else if(operator==='*'){
    result = Number(prevValue) * Number(initilaValue);
    setPrevValue(result.toString())
    setError("")
    }
    else if(operator==='/'){
      if(Number(initilaValue)!=0){
      result = Number(prevValue) / Number(initilaValue);
      setPrevValue(result.toString())
      setError("")
      }else{
        setError('Error: Division by zero is not allowed')
      }
    
      }
      setInitilaValue("");
      setOperator(value);
  return;

}else{
setOperator(value);
setPrevValue(initilaValue);
setInitilaValue("0");
}

}
const handleEqual = ()=>{
  let result:number;
  if(operator!==''){
if(operator==='+'){
  result = Number(prevValue) + Number(initilaValue);
setInitilaValue(result.toString())
setError("")
}
else if(operator==='-'){
  result = Number(prevValue) - Number(initilaValue);
  setInitilaValue(result.toString())
  setError("")
  }
  else if(operator==='*'){
    result = Number(prevValue) * Number(initilaValue);
    setInitilaValue(result.toString())
    setError("")
    }
    else if(operator==='/'){
      if(Number(initilaValue)!=0){
        result = Number(prevValue) / Number(initilaValue);
        setPrevValue(result.toString())
        setError("")
        }else{
          setError('Error: Division by zero is not allowed')
        }
      }
      setPrevValue("");
      setOperator("");
  return;

}
}
  return (
   <div className='calc'>
    <div className="error">
      {error}
    </div>
  <Result operator={operator} prevValue={prevValue} initilaValue={initilaValue} />
    <div className='num-bad'>
       {
    numbuttons.map((item,index)=>{
      return <Button key={index} value={item} onSubmit={handleNumberClick}/>
      })
   } {
    operators.map((item,index)=>{
      return <Button key={index} value={item} onSubmit={handleOpreatorClick}/>
      })
   }
   <Button value='=' className='equal' onSubmit={handleEqual} />
    </div>
 
  
   </div>
  )
}

export default App
