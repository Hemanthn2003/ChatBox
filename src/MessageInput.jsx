import React from 'react'
import Chatbot from './chatbotRes';


const MessageInput = ({ message, setMessage, texts, setTexts }) => {
  
  const handleSend = async(texts)=>{
  try{    
    if(!texts.trim()) return;
    const response = await Chatbot.getResponse(texts)
    const responseFormatted ={
        id:crypto.randomUUID(),
        sender:"robot",
        message:response
  } 
const textFormatted ={
        id:crypto.randomUUID(),
        sender:"user",
        message:texts
  } 
  const updatedText = [...message, textFormatted , responseFormatted]
  setMessage(updatedText);
  setTexts('')
  console.log(message);
   }catch(err){
    console.log(err.message)
  } 
   

}
    return (
    <div className='inputSec'>
      <input  
      type='text' 
      placeholder='Type Message'
      className='msgInp' 
      value={texts}
      onChange={(e)=>setTexts(e.target.value)} 
        onKeyDown={(e)=>{
    if(e.key === "Enter"){
      handleSend(texts)
    }
  }}
      />
   <button 
        className='messageBtn' 
        onClick={()=>handleSend(texts)}
        >send</button>
    </div>
  )
}

export default MessageInput
