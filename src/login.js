import React,{useState} from 'react'
import {Link } from "react-router-dom"
function login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const signIn=e=>{
        e.preventDefault();

    }
    const signUp=e=>{
        e.preventDefault()
    }
  return (
    <div className='login'>
        <Link to='/'>
            <img
            className='login_logo'
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.slidesharecdn.com%2Fss_thumbnails%2Fgroup7-191211212427-thumbnail-4.jpg%3Fcb%3D1576099542&f=1&nofb=1&ipt=61c6a6a293b56c12b5fc5382b45b2c4bb3d094808c8bfac0687985def21a7831&ipo=images'/>       
        </Link>
        <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <h5>Email</h5>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn} className='login-signinButton'>Sign in</button>
            </form>

            <button type='submit' onClick={signUp} className="login-registerButton">Create your MedOlx account</button>
        </div>
    </div>
  )
}

export default login