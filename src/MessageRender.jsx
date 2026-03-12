import React from 'react'
import { useEffect, useState, useRef } from 'react';
import userImg from './profile-images/user.png'
import robotImg from './profile-images/robot.png'
import { WiDayThunderstorm } from 'react-icons/wi';

const MessageRender = ({ message }) => {

    const messagesRef = useRef(null);
    useEffect(()=>{
        messagesRef.current?.scrollIntoView({ behavior: "smooth" });
    },[message])

const Messages = message.map((text)=>{
   if(text.sender ==="user"){
   return(
        <div key={text.id} className='userMessages'>
        <p className='userMessageP' 
            style={{
                    color:'black'
                    }}>{text.message}</p>
        <img src={userImg} 
             alt={`${text.sender} image`} 
             title={`${text.sender} image`} 
             />
       
    </div>
    )
   }
    return(
        <div key={text.id} className='robotMessages'>
               <img src={robotImg} 
                    alt={`${text.sender} image`} 
                    title={`${text.sender} image`} 
                    />
       <p className='robotMessageP'
           style={{
                    color:'black'
                    }}>{text.message}</p>
    </div>
    )
     
   
 
});
  return (
    <div className='finalMessages'>
         {Messages}
           <div ref={messagesRef}></div>
    </div>
    
  )
}

export default MessageRender
