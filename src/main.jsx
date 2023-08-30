import React from 'react'
import ReactDOM from 'react-dom/client'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Comp1 />
    <Comp2 />
    <Comp3 />
  </React.StrictMode>,
)
