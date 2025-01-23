import { IStudent } from "../types";

export type State={
    studentsList: IStudent[],
    totalAbsents:number
}
export type Action = {type:"INIT",payload:IStudent[]}|
{type:"DELETE_FIRST"}|
{type:"ADD",payload:IStudent}|
{type:"UPDATE_ABSENTS",payload:{change:number,id:string}}
export const reducer = (state:State,action:Action):State =>{
    switch(action.type){
        case "INIT":{ 
             const totalAbsents : number = action.payload.reduce(
                (prev,cur)=>prev+cur.absents, 0);
            return {studentsList:action.payload,totalAbsents};
        }
          

         case "DELETE_FIRST" : {
        return {...state , 
            studentsList:state.studentsList.slice(1)
        }
        
     }
       case "ADD":{
            return{...state,studentsList:[action.payload,...state.studentsList]}
        }
        case "UPDATE_ABSENTS":{
            return {
                studentsList: state.studentsList.map((student) =>
                  student.id === action.payload.id
                    ? { ...student, absents: student.absents + action.payload.change }
                    : student
                
            ),totalAbsents:state.totalAbsents+action.payload.change
            }
        }
    }
   

    
}
