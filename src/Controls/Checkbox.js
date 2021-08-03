import React, { useState } from 'react'

function Checkbox({
  checked = false,
  onChange = null,
  color = '#4fc3f7',
  text = '',
  value
}) {
  const [hovered, setHovered] = useState(false)

  const checkbox_label = {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
    // margin: '0.5rem 0'
  }

  const checkbox_input = {
    opacity: '0',
    width: '0.8em',
    height: '0.5em'
  }
  const checkbox_style = {
    display: 'inline-block',
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '0.25rem',
    backgroundColor: 'blue',
    transition: '300ms',
    backgroundColor: 'rgba(255,255,255, 0.5)',
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
    boxShadow: hovered
      ? '5px 5px 5px rgba(0,0,0,0.5)'
      : '3px 3px 3px rgba(0,0,0, 0.25)',
    borderTop: '1px solid rgba(255,255,255,0.4)',
    borderBottom: '1px solid rgba(255,255,255,0.4)',
    boxSizing: 'border-box',
    cursor: 'pointer'
  }

  const svg_style = {
    transition: '300ms',
    transform: checked ? 'scale(1.1) translate(5px, -5px)' : 'scale(0)'
  }

  return (
    <label
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={checkbox_label}
    >
      <span className='cheflexx__input'>
        <input
          style={checkbox_input}
          checked={checked}
          onChange={onChange}
          type='checkbox'
          name='checkbox'
          value={value}
        />
        <span style={checkbox_style}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            aria-hidden='true'
            focusable='false'
            style={svg_style}
          >
            <path
              fill='none'
              stroke={color}
              strokeWidth='3'
              d='M1.73 12.91l6.37 6.37L22.79 4.59'
            />
          </svg>
        </span>
      </span>
      <span className='radio__label'>{text}</span>
    </label>
  )
}

export default Checkbox
