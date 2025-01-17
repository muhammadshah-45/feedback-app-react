import React from 'react'
import PropTypes from 'prop-types'


const Card = ({children,reverse}) => {
  /// here is childern means card ke children
  return (
    <div className="card" 
    style={{background: reverse ? "black":"white",
        color: reverse ? "white" : " black",
        border:reverse ? "1px solid rgba(255, 255, 255, 0.306)" : "none"
    }}>
      {children}
    </div>
  )
}


Card.propType = {
    children :PropTypes.node.isRequired,
    reverse :PropTypes.bool.isRequired,
}
export default Card;
