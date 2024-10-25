import { createContext, useState } from "react"
import {v4 as uuidv4} from "uuid"
 const FeedbackContext = createContext();

 export const FeedbackProvider = ({children})=>{

    const [feedback,setFeedback] = useState([
        {
            id:1,
            text:"This is lorem text",
            rating:6,
        },
        {
            id:2,
            text:"this is second text",
            rating:2,
        }
    ])
    const [editFeedback,setEditFeedback] = useState({
        item : {},
        edit : false,
 })
   // Add Feedback
    function handleAdd(newFeedBack) {
        console.log(newFeedBack)
        newFeedBack.id = uuidv4()
        setFeedback([newFeedBack, ...feedback])
        // console.log(newFeedBack, feedback)
    }
    //Delete Feedback
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    //Update feedback item 
    const updateFeedback = (id,updItem) =>{
        setFeedback(feedback.map((item)=> item.id === id ? {...item,...updItem}: item))
    }

    //Set item to be updated
    const handleEditFeedback = (item)=>{
        setEditFeedback({
            item, //
            edit: true
        })
    }

    return (
        <>
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            handleAdd,
            handleEditFeedback,
            editFeedback,
            updateFeedback,
        }}>
            {children}
        </FeedbackContext.Provider>
        </>
    )
 }

 
 export default FeedbackContext;