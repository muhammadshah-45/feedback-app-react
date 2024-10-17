import React, { useState } from 'react'

import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList'
import Feedbackstates from './components/Feedbackstates';
import FeedbackForm from './components/FeedbackForm';
// import DeveloperItem from "./components/DeveloperItem"
// import DeveloperList from './components/DeveloperList';
// import DeveloperData from "./data/DeveloperData";
// import DeveloperStats from './components/DeveloperStats';
// import Card from './components/shared/Card';
import LoginForm from './components/LoginForm';
const App = () => {
    let [feedback, setFeedback] = useState(FeedbackData);
    // let [devData, setDevData] = useState(DeveloperData);
    const deleteFeedback = (id)=>{
        if(window.confirm("Are you sure you want to delete?")){
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
    }

    // const deleteDeveloperCard = (id) => {
    //     console.log(id)
    //     if (window.confirm("Are you sure you want to delete?")) {
    //         setDevData(devData.filter((item) => item.id !== id))
    //     }
    // }


    return (
        <>
            <Header title="Feedback UI" />
            <div >
                {/* <DeveloperStats  devData = {devData}/>
                <DeveloperList deleteData={deleteDeveloperCard}  devData={devData} /> */}
               <FeedbackForm />
                <Feedbackstates feedback ={feedback} />
                <FeedbackList feedback = {feedback} handleDelete={deleteFeedback} />
                {/* <Card>This is from Card </Card> */}
                {/* <LoginForm></LoginForm> */}
            </div>

        </>
    )
}

export default App
