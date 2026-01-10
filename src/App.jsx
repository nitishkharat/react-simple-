import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import photo1 from './assets/photo1.jpeg'
import './App.css'
import Home from './component/home'




function App() {
  const [count, setCount] = useState(0)
 let  tagine = "welcome students"

  return (
    <div>
      <Home />
      <h1> welcome Nitu </h1>
         <p>{tagine}</p>

     <img src={reactLogo} className='logo react' alt='react logo'/>

    <img src={photo1} className='logo photo1' alt='photo1 logo'/>
     
     
     <ol> 
      <li>satish</li>
      <li> datta </li>
      <li>nitu</li> 
     
     </ol>



    </div>
  )
}

  

export default App
