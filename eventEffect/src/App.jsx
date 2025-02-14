import { useState } from 'react'
import Counter from './Counter'
import Clock from './Clock'



function App() {
  

  return (<main>
    <Counter initialValue={0} increment={1}/>
    <Clock/>
    </main>
  )
}

export default App
