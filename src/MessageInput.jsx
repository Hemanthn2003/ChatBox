import React from 'react'



const MessageInput = ({ message, setMessage, texts, setTexts }) => {
  
  const handleSend = (texts)=>{
  try{    
    if(!texts.trim()) return;
const textFormatted ={
        id:crypto.randomUUID(),
        sender:"user",
        message:texts
  } 
  const updatedText = [...message, textFormatted]
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
      className='msgInp' 
      value={texts}
      onChange={(e)=>setTexts(e.target.value)} />
   <button 
        className='messageBtn' 
        onClick={()=>handleSend(texts)}
        >send</button>
    </div>
  )
}

export default MessageInput
