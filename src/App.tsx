import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-20'>
      <h1>Hello World!</h1>
      <button className='bg-slate-400 hover:bg-slate-500 active:bg-slate-600 px-6 py-2 rounded cursor-pointer text-white font-bold' onClick={() => setCount(count + 1)}>Count : {count}</button>
    </div>
  )
}

export default App
