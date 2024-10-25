
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
//components
import Header from './components/Header';
import FeedbackList from './components/FeedbackList'
import Feedbackstates from './components/Feedbackstates';
import FeedbackForm from './components/FeedbackForm';
import Post from './components/Post';
//ContextApi file
import { FeedbackProvider } from './context/FeedbackContext';


import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';


const App = () => {
    return (
        <>
        <FeedbackProvider>

            <Router>
                <Header title="Feedback UI" />
                <div>
                    <Routes>
                        <Route path='/' element={
                            <>
                                <FeedbackForm  /> {/* for adding reviews  */}
                                <Feedbackstates /> {/* for showing Reviews and average rating */}
                                <FeedbackList   /> {/* for reviews listing and deleting(Props drilling) the list */}
                                <AboutIconLink/>
                            </>}>     
                        </Route>
                        <Route exact path="/about" element={<AboutPage />} />
                        <Route  path='/post/*' element={<Post/>} />  {/* /post/* for nested routes */}
            
                    </Routes>
                </div>
            </Router>
                                    </FeedbackProvider>
        </>
    )
}

export default App;
