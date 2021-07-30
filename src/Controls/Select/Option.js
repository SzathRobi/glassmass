import React, { useEffect, useState } from 'react'

function Option({ option, update_title, index }) {
  const [opacity, setOpacity] = useState(0)
  const [hovered, setHovered] = useState(false)
  const timeOut = index * 30
  const option_style = {
    boxSizing: 'border-box',
    width: '100%',
    padding: '0.5rem',
    backgroundColor: hovered
      ? 'rgba(255,255,255, 0.7)'
      : 'rgba(255,255,255, 0.5)',
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
    opacity: opacity,
    transition: '300ms'
  }

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
    }, timeOut)
  }, [])

  return (
    <div
      onClick={() => update_title(option)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={option_style}
      value={option}
    >
      {option}
    </div>
  )
}

export default Option
