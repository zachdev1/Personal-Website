import { useState } from 'react'
import './App.css'

import TaskBar from './components/TaskBar/TaskBar';
import Icons from './components/Icons/Icons';


function App() {

  return (
    <>
      <div>
        <Icons/>
        <TaskBar/>
      </div>
    </>
  )
}

export default App
