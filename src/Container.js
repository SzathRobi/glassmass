import React from 'react'

const container_style = {
  padding: '0.5rem',
  position: 'relative',
  zIndex: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  WebkitBackdropFilter: 'blur(10px)',
  backdropFilter: 'blur(10px)'
}

function Container({ children, props }) {
  return <div style={container_style}>{children}</div>
}

export default Container
