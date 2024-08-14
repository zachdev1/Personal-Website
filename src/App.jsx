import { useState } from 'react'
import './App.css'

import TaskBar from './components/TaskBar/TaskBar';
import Icons from './components/Icons/Icons';


function App() {

  return (
    <>
      <div>
        <TaskBar/>
        <Icons/>
      </div>
    </>
  )
}

export default App
