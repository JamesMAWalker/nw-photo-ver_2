import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import { CloseButton } from '../5-icons/icons.components'

const PhotoModal = ({ action, srcLink }) => {
  
  const keyCatchRef = useRef(null)

  useEffect(() => {
    keyCatchRef.current.focus()
  }, [])

  const handleKeypress = (e) => {
    if (e.key === 'Escape') {
      action()
    }
  }

  return (
    <motion.div
      ref={keyCatchRef}
      className='modal-overlay'
      onClick={action}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      tabIndex='1'
      onKeyDown={handleKeypress}
    >
      <div className='modal'>
        <div
          className='photo'
          // onClick={(e) => e.stopPropagation()}
        >
          <div className='close-btn' onClick={action}>
            <CloseButton />
          </div>
          <img src={srcLink} alt='' />
        </div>
      </div>
    </motion.div>
  )
}

export default PhotoModal
