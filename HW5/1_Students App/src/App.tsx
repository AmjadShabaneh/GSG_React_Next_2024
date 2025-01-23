import './App.css'
import Main from './screens/Main.screen';
import About from './screens/About.screen';
import NotFound from './screens/NotFound.screen';
import { Route, Routes } from 'react-router-dom';
import StudentDetails from './screens/StudentDetails.screen';
import {useReducer, useEffect } from 'react';
import useLocalStorage from './hooks/local-storage.hook';
import { IStudent } from './types';
import AddStudent from './screens/AddStudent.screen';
import Login from './screens/Login.screen';
import NavBar from './components/nav-bar/nav-bar.component';
import { reducer,State,Action } from './state/reducer';

function App() {
  const h1Style = { color: '#69247C', fontSize: '24px' };
  const initState:State = {studentsList:[],totalAbsents:0};
  const [state, dispatch] = useReducer(reducer, initState);
 

  const { storedData } = useLocalStorage(state.studentsList, 'students-list');

  useEffect(() => {
    const stdList: IStudent[] = storedData || [];
  dispatch({type:"INIT",payload:stdList});
  }, [storedData]);

  const removeFirst = () => {
    dispatch({type:"DELETE_FIRST"});
  }

  const handleAbsentChange = (id: string, change: number) => {
    dispatch({type:"UPDATE_ABSENTS", payload:{id:id,change:change}})
  }

  const handleAddStudent = (newStudent: IStudent) => {
       dispatch({type:"ADD",payload:newStudent});
  }

  return (
    <div className="main wrapper">
      <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
      <NavBar />
      <Routes>
        <Route path='/'
          element={
            <Main
              studentsList={state.studentsList}
              totalAbsents={state.totalAbsents}
              onAbsent={handleAbsentChange}
              onRemove={removeFirst}
            />
          } />
        <Route path='/add' element={<AddStudent onAdd={handleAddStudent} />} />
        <Route path='/about' element={<About />} />
        <Route path='/student/:id' element={<StudentDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;