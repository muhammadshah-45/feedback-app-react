import Card from "./shared/Card";
import PropTypes from 'prop-types'
import { FaTimes, FaEdit} from "react-icons/fa"
import { useContext, useEffect } from "react";
//context fils
import FeedbackContext from "../context/FeedbackContext";
const FeedbackItem = ({item}) => {
  const {deleteFeedback, handleEditFeedback} = useContext(FeedbackContext)
  
  return (
    <>
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=> deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button onClick={()=>handleEditFeedback(item)}  className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
    </>
  )
}

FeedbackItem.propTypes ={
  item:PropTypes.object.isRequired
}


export default FeedbackItem;
