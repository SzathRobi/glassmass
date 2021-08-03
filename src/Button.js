import React, { useState } from 'react'

function Button({ children, style, className, onClick = null }) {
  const [hovered, setHovered] = useState(false)

  const button_style = {
    textTransform: 'uppercase',
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
      ? '5px 5px 5px rgba(0,0,0,0.5)'
      : '3px 3px 3px rgba(0,0,0, 0.25)',
    ...style
  }

  const btnDecor_left = {
    width: 20,
    height: '120%',
    backgroundColor: '#4fc3f7',
    position: 'absolute',
    left: '5%',
    top: '-5%'
  }

  return (
    <button
      className={className}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={button_style}
    >
      {children}
    </button>
  )
}

export default Button
