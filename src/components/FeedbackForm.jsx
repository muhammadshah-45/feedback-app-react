import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
const FeedbackForm = () => {
   
    const [text,setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message,setMessage] = useState("");

   console.log(btnDisabled)
    function  handleText(event){
        if(text === ""){
            setBtnDisabled(true)
            setMessage("Please enter the text")
        }else if( text !== "" && text.trim().length <10){
            setMessage("Text must be at least 10 characters")
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        
        setText(event.target.value)
    }


  return (
    <>
    <Card>
        <form action="">
            <h2>How would you rate your service with us?</h2>
            <div className='input-group' >
                <input type="text" onChange={handleText} value={text} placeholder='Write a review here'/>
                <Button type='submit' isDisable={btnDisabled} >Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>

    </>
  )
}

export default FeedbackForm
