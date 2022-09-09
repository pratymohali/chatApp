import React from 'react'
import firebase from "firebase/compat/app"

import { auth } from "./firebase"
import Button from '@material-ui/core/Button';

function SignIn() {

  const signInWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider()
    console.log("prj",provider)  
auth.signInWithPopup(provider);
  }
    return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
      <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600', color:"white" }} onClick={signInWithGoogle}>Sign In with Google</Button>
    </div>
  )
}

export default SignIn
