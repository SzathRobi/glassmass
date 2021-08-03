import React from 'react'

function Container({ children, className, style = null }) {
  const container_style = {
    padding: '0.5rem',
    position: 'relative',
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
    boxShadow: '3px 3px 3px rgba(0,0,0, 0.25)',
    boxSizing: 'border-box',
    ...style
  }

  return (
    <div className={className} style={container_style}>
      {children}
    </div>
  )
}

export default Container
