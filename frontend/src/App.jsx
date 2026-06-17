import { useState } from 'react'
import './App.css'
import Predict from './pages/Predict'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to the Customer Churn Prediction App</h1>
    <Predict />
    </>
  )
}

export default App
