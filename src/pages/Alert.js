import React, { useState } from 'react'

const Alert = (props) => {
  return (
    <>
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{props.alert.msg}</strong>  {props.alert.type}
    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
    </>
  )
}

export default Alert
