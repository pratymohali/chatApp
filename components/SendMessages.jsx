import firebase from "firebase/compat/app";

import { Button, Input } from '@material-ui/core';

import React, { useState } from 'react'
import { auth, db } from './firebase';

function SendMessages() {
  const [msg, setMsg] = useState('')


  const sendEnterMessages = async (e) => {

    e.preventDefault()

    const { uid } = auth.currentUser;

    await db.collection('messages').add({
      text: msg,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })

    setMsg(' ')


  }
  return (
    <div>
      <form onSubmit={sendEnterMessages}>
        <div className="sendMsg">
          <Input value={msg} style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} onChange={(e) => { setMsg(e.target.value) }} placeholder="Messages ...." />

          <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px' }} type="submit"> Send </Button>
        </div>

      </form>
    </div>
  )
}


export default SendMessages;