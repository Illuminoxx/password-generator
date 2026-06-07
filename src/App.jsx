import { useState , useCallback,useEffect} from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(4)
    const [number, setnumber] = useState(false)
     const [character, setcharacter] = useState(false)
      const [password, setPassword] = useState("")


  const Passwordgenerator = useCallback(() => {
  let pass = "";

  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (number) str += "0123456789";
  if (character) str += "!@#$%^&*()_+";

  for (let i = 0; i < length; i++) {
    let char = str[Math.floor(Math.random() * str.length+1)];
    pass += char;
  }

  setPassword(pass);
}, [length, number, character,setPassword]);

useEffect(() => {
  Passwordgenerator();
}, [length, number, character,Passwordgenerator]);
  


  return (
    <>
      <h1  style={{ marginBlockEnd:110,backgroundColor: '#010510',margin:'0px', padding:'3rem', color: '#f7fafc',textAlign: 'center'}}className="text-6xl font-bold text-center mt-10">Password Generator</h1>

      <div className=" w-full max-w-3xl mx-auto mt-10 p-8 bg-teal-800 rounded-lg shadow-md">

       <div className="flex rounded-lg shadow-md mb-4">
        <input 
        type="text" 
        value={password} 
        className="flex-1 px-4 py-2 text-gray-800 bg-gray-200 rounded-l-md focus:outline-none rounded-r-md " 
        placeholder="Password" />
   
   <button onClick={Passwordgenerator} className="px-4 py-2 bg-blue-600 text-white rounded-r-md  focus:outline-none">Generate</button>
   </div>

   <div className="flex items-center mb-4">
    <div className="flex items-center mr-4">
      <input
      type='range'
      min="4"
      max="50"
      value={length}
      onChange={(e) => setlength(parseInt(e.target.value))}
      className=" mr-1 form-range h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <label htmlFor="length" className="mr-11 ml-2 text-white">Length: {length}</label>
    </div>
  <input 
     type="checkbox" 
     id="number" 
     defaultChecked={number} 
     id='numberinput'
     onChange={()=>
      setnumber(prev=>!prev)} 
     className="form-checkbox h-5 w-5 text-blue-600" />
     <label htmlFor="number" className="ml-2 mr-11 text-white">Include Numbers</label>

  <input 
     type="checkbox" 
     id="character" 
     defaultChecked={character} 
     id='characterinput'
     onChange={()=>
      setcharacter(prev=>!prev)} 
     className="form-checkbox h-5 w-5 text-blue-600" />
     <label htmlFor="character" className="ml-2 text-white">Include Special Characters</label>

    </div>
     
      </div>
    </>
  )
}

export default App
