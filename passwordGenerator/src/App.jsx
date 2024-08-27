import {useCallback, useState, useEffect, useRef} from 'react'
function App() {
  
  // length
  const [length , setLength] = useState(8)
  // numbers to be included or not
  const [numbers , setNumbers] = useState(false)
  // special characters to be included or not
  const [specialCharacters , setSpecialCharacters] = useState(false)
  // password
  const [password , setPassword] = useState("")

  //ref hook

  const passwordRef = useRef(null)

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num= "0123456789"
    let specialChar= "!@#$%^&*()_+"
    if(numbers){
      str+=num
    }
    else if(specialCharacters){
      str+=specialChar
    }

    for(let i=1;i<=length;i++){
      let index = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(index)
    }

    setPassword(pass)
  },[length,numbers,specialCharacters,setPassword])
  // here length,numbers,specialCharacters are dependencies because we are using them in the passwordGenerator function and also if any problem arises due to these dependencies then we can add them in the dependency array of useCallback

  // we cannot directly call passwordGenerator() in the return statement
  // so we will call it in the useEffect

  useEffect(()=>{
    passwordGenerator()
  },[passwordGenerator])

  // here passwordGenerator is a dependency because we are using it in the useEffect


  return (
    <>
      <div className="bg-gray-800 flex w-screen items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md ">
          <h1 className="text-2xl font-bold mb-4 text-center">Password Generator</h1>
          <div className="flex items-center mb-4">
            <input id="password" type="text" value={password} className="w-full p-2 border border-gray-300 rounded-l-lg bg-gray-800" readOnly
            ref={passwordRef} />
            <button className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-700" onClick={copyPasswordToClipBoard}>Copy</button>
          </div>
          <div className="mb-4">
            <label htmlFor="length" className="block text-gray-700 font-bold mb-2">
              Password Length:<span id="lengthValue">{length}</span>
            </label>
            <input id="length" type="range" min={8} max={100}  className="w-full" onChange={(e) => {
              setLength(e.target.value)
            }} />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" 
              defaultChecked={specialCharacters}
              onChange={()=>{
                  setSpecialCharacters((prev) => !prev);
                }
              }
              className="form-checkbox" id="includeSymbols" />
              <span className="ml-2 text-black">Include Symbols</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" 
              defaultChecked={numbers}
              onChange={()=>{
                  setNumbers((prev) => !prev);
                }
              }
              className="form-checkbox" id="includeNumbers" />
              <span className="ml-2 text-black">Include Numbers</span>
            </label>
          </div>
          <button className="w-full p-2 bg-green-500 text-white rounded-lg hover:bg-green-700">Generate Password</button>
        </div>
      </div>
    </>
  )
}
export default App
