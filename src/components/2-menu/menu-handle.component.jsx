import React from 'react'
import { motion } from 'framer-motion'

import { Logo } from '../0-logo/logo.component'
import { CloseButton } from '../5-icons/icons.components'

function MenuHandle({ toggleMenu, menuOpen, style }) {
  const handleClick = (e) => {
    e.stopPropagation()
    toggleMenu()
  }

  console.log(menuOpen);

  return (
    <div
      className={menuOpen ? 'menu-closer' : 'menu-handle'}
      onClick={handleClick}
    >
      {menuOpen ? (
        <motion.span
          initial={{ opacity: 0, y: "10vw" }}
          transition={{ delay: .05, duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "10vw" }}
        >
          <CloseButton />
        </motion.span>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: "-10vw" }}
          transition={{ delay: .05, duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-10vw" }}
        >
          <Logo style={style} />
        </motion.div>
      )}
    </div>
  )
}

export default MenuHandle
