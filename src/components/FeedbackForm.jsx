import React, {useContext, useEffect, useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingStats from './RatingStats';

import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
   
    const [text,setText] = useState("");
    const [rating,setRating] = useState();
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message,setMessage] = useState("");

   
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

    const { handleAdd , editFeedback , updateFeedback} = useContext(FeedbackContext)
    useEffect(()=>{
        if(editFeedback.edit === true){
            console.log(editFeedback.edit)
            setText(editFeedback.item.text);
            setRating(editFeedback.item.rating);
            setBtnDisabled(false);

        }
    },[editFeedback])
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedBack = {
                text: text,
                rating: rating,
            }
            if(editFeedback.edit === true){
                updateFeedback(editFeedback.item.id , newFeedBack)
            }else{

                handleAdd(newFeedBack)
            }
        }

    }


  return (
    <>
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
        <RatingStats select={(rating)=> setRating(rating)
        }/>
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
