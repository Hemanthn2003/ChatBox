import { useState } from 'react'
import './App.css'
import MessageInput from './MessageInput'
import MessageRender from './MessageRender'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  const [texts, setTexts] = useState("")
  const [message, setMessage] = useState([])


  return (
    <Router>  
       <div className='mainsec'>
          <Routes>
         <Route path="/"
                element={<>
                        <div className='chatRenders'>
                          <MessageRender message={message}/>
                        </div> 
     <div className='chatsInput'>
             <MessageInput 
                    texts={texts} 
                    setTexts={setTexts} 
                    message={message} 
                    setMessage={setMessage}
                    />
                       </div>
                        </>
                } />
          </Routes>
          
       </div>
       </Router>
  )
}

export default App
