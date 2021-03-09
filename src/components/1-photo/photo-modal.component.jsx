import React from 'react'

// Accepts a photo url as prop and erects a full screen modal with an underlying overlay.

const PhotoModal = ({ action, srcLink }) => {
  return (
    <div className='modal-overlay' onClick={action}>
      <div className='modal'>
      <div className='close-btn' onClick={action}>
        X
      </div>
        <div
          className='photo'
          onClick={(e) => e.stopPropagation()}
        >
          <img src={srcLink} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default PhotoModal
