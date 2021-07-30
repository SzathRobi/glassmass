import React, { useState } from 'react'

function Button({ children, props }) {
  const [hovered, setHovered] = useState(false)

  const button_style = {
    padding: '0.5rem 1rem',
    /* backgroundImage:
      'linear-gradient(to left, rgba(255,255,255,0.6), rgba(255,255,255,0.8), rgba(255,255,255,0.6))',*/
    backgroundColor: 'rgba(255,255,255,0.4)',
    backgroundSize: '150%',
    backgroundPositionX: hovered ? '100%' : '0',
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
    color: '#111',
    border: 'none',
    borderRadius: '0.2rem',
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    transition: '300ms',
    boxShadow: hovered
      ? '5px 5px 5px rgba(0,0,0,0.25)'
      : '3px 3px 3px rgba(0,0,0, 0.25)'
  }

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={button_style}
    >
      {children}
    </button>
  )
}

export default Button
