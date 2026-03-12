import { useState } from 'react'
import './App.css'
import MessageInput from './MessageInput'
function App() {
  const [texts, setTexts] = useState("")
  const [message, setMessage] = useState([
{
  "id":1,
"sender":"user",
"message":"Hello"
},
{
  "id":2,
"sender":"robot",
"message":"Hi...how can i help you?"
},  
{
  "id":3,
"sender":"user",
"message":"Flip a coin"
},
{
  "id":4,
"sender":"robot",
"message":"You got Heads!"
}

])


  return (
       <div>
        {console.log(message)}
          <MessageInput 
          texts={texts} 
          setTexts={setTexts} 
          message={message} 
          setMessage={setMessage}/>
       </div>
  )
}

export default App
