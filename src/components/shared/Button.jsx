import React from 'react';
import PropTypes from 'prop-types'

const Button = ({children,version,isDisable, type}) => {
  return (
    <div>
      <button type={type} disabled = {isDisable} className={`btn btn-${version}`}>
        {children}
      </button>
    </div>
  )
}

Button.defaultProps = {
    version:"primary",
    type: "button",
    isDisable: false
}

Button.propTypes = {
    children:PropTypes.node.isRequired,
    version:PropTypes.string,
    isDisable:PropTypes.bool,
    type:PropTypes.string

}

export default Button
