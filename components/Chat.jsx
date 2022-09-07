import React, { useState, useEffect } from 'react'
import { db, auth } from '../pages/firebase'
import SendMessages from './SendMessages'
import SignOut from './SignOut'

function Chat() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <>
      <SignOut />
      <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                        
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
    
      
      <SendMessages />
    </>

  )
}

export default Chat
