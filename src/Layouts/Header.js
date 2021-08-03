import React from 'react'

function Header({ children, classname, style }) {
  const header_style = {
    width: '100%',
    padding: '0.5rem 1rem',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
    boxShadow: '3px 3px 3px rgba(0,0,0, 0.25)',
    display: 'flex',
    alignItems: 'center',
    ...style
  }
  return (
    <header style={header_style} className={classname}>
      {children}
    </header>
  )
}

export default Header
