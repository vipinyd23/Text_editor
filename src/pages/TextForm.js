import React from 'react'

const TextForm = () => {
  return (
    <div className='container'>
    <form>
  <div className="mb-3">
    <h1>Enter the text to Analyze</h1>
    <textarea className='form-control' id='myBox' rows="8"></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default TextForm