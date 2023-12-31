import React from 'react'

const Loader = () => {
  return (
   <div className='loader'>
      <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
      </button>
   </div>
  )
}

export default Loader