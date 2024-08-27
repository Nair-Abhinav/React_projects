import { useState } from 'react'

function App() {

  const [color , setColor] = useState("olive")
  return (
    <div className='w-full h-screen duration-200' 
    style = {{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 '>
        <div className='flex justify-center bg-white px-5 py-2 gap-3 rounded-2xl'>
          <button onClick={()=>setColor("red")} className='px-8 py-4 rounded-2xl' style={{backgroundColor:"red"}}>
          </button>
          <button onClick={()=>setColor("blue")} className='px-8 py-4 rounded-2xl' style={{backgroundColor:"blue"}}>
          </button>
          <button onClick={()=>setColor("green")} className='px-8 py-4 rounded-2xl' style={{backgroundColor:"green"}}>
          </button>
        </div>
      </div>
    </div>
  )
}

// important note:
// onclick event always expects a function to be passed to it not the value but if the reference is passed then it will work
// but if setcolor only is passed then it will not work because the desired parameter is not passed to the function


export default App
