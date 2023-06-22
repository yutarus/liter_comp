import './App.css'
import Info from './Info/Info'
import Header from './Header/Header'
import About from './About/About'

import { Suspense } from 'react'

function App() {



  return (
    <Suspense fallback={null}>
      <div className="App">
        <Header />
        <Info />
        <About />
      </div>
    </Suspense>



  )
}

export default App
