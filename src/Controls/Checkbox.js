import React, { useState } from 'react'

function Checkbox({ checked = false, onChange = null, color = '#4fc3f7' }) {
  const checkbox_label = {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    fontSize: '2rem',
    color: '#000'
  }

  const checkbox_input = {
    opacity: '0',
    width: '1em',
    height: '1em'
  }
  const checkbox_style = {
    display: 'inline-grid',
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '0.25rem',
    //border: `0.1em solid ${color}`,

    backgroundColor: 'blue',
    transition: '300ms',
    backgroundColor: 'rgba(255,255,255, 0.5)',
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
    boxShadow: '3px 3px 3px rgba(0,0,0, 0.25)',
    borderTop: '1px solid rgba(255,255,255,0.4)',
    borderBottom: '1px solid rgba(255,255,255,0.4)',
    boxSizing: 'border-box'
  }

  const svg_style = {
    transition: '300ms',
    transform: checked ? 'scale(1.1) translate(5px, -5px)' : 'scale(0)'
  }

  return (
    <label style={checkbox_label}>
      <span className='cheflexx__input'>
        <input
          style={checkbox_input}
          checked={checked}
          onChange={onChange}
          type='checkbox'
          name='checkbox'
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
      <span className='radio__label'>Checkbox</span>
    </label>
  )
}

export default Checkbox
