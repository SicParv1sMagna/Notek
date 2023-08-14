import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authorization from './pages'

function App() {
  const [count, setCount] = useState(0)

    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/auth" element={<Authorization />}/>
        </Routes>
      </BrowserRouter>  
  )
}

export default App
