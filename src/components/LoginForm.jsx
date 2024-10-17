import React, { useState } from 'react'
// import "./Login.css"
import LoginBtn from './shared/LoginBtn';

const LoginForm = () => {
    const [text ,setText] = useState("");
    const [password,setPassword] = useState("")
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [message,setMessage] = useState("");


    function handleText(event){
        if(text === ""){
            setBtnDisabled(true);
        } else if(text !== " "  &&  text.trim().length <=8 ){
            setMessage("*Name must be at least 10 characters");
            setBtnDisabled(true);
        } else{
            setMessage(null)
            setBtnDisabled(false);
        }
        setText(event.target.value);
        
    }

    function handlePassword(event){
        if(text === ""){
            setBtnDisabled(true);
            setMessage(null)
        } else if(text !== " "  &&  text.trim().length <=8 ){
            setMessage("*Name must be at least 10 characters");
            setBtnDisabled(true);
        } else{
            setMessage(null)
            setBtnDisabled(false);
        }
        setPassword(event.target.value)
    }
  return (
    <div className='form-container'>
      <form action="">
        <div>
        <label htmlFor="">Name</label>
        <input type="text" onChange={handleText} value={text} placeholder='Enter a name' name="" id="" />
         {message && <div className='message-text'>{message}</div>}
        </div>
        <div>

        <label htmlFor="">Password</label>
        <input type="password" onChange={handlePassword} value={password} placeholder='Enter a password' name="" id="" />
        </div>
         <LoginBtn isDisable={btnDisabled}>Submit</LoginBtn>
      </form>
    </div>
  )
}

export default LoginForm
