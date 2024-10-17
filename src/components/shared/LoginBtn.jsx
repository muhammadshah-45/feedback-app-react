import React, { version } from 'react'
import PropTypes from 'prop-types'

const LoginBtn = ({children,isDisable,version,type}) => {
  return (
    <div>
      <button type={type} className={`btn btn-${version}`} disabled={isDisable} >
        {children}
      </button>
    </div>
  )
}

LoginBtn.defaultProps = {
    version:"primary",
    type:"button",
    isDisable:false,
}

LoginBtn.propTypes = {
    children:PropTypes.node.isRequired,
    isDisable:PropTypes.bool,
    type:PropTypes.string,
    version:PropTypes.string

}

export default LoginBtn
