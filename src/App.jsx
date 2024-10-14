import React, { useState } from 'react'

import Header from './components/Header';
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData';
// import Card from './components/shared/Card';
const App = () => {
    let [feedback,setFeedback] = useState(FeedbackData);
    
    return(
        <>
        <Header title = "Feedback UI"/>
        <div >
       <FeedbackList feedback = {feedback}/>
        {/* <Card>This is from Card </Card> */}
        </div>

        </>
    )
}

export default App
