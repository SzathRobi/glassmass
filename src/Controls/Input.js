import React, { useState } from 'react'

function Input({
  type = 'text',
  placeholder = '',
  title = '',
  value = '',
  onChange = () => {},
  required = false,
  onFocus = null,
  onBlur = null,
  readOnly = false,
  autoFocus = false,
  color = '#4fc3f7',
  error = false,
  errorColor = 'red',
  errorMsg = 'Something went wrong',
  style = null
}) {
  const [focused, setFocused] = useState(false)

  const label_style = {
    position: 'relative'
  }

  const title_style = {
    transform: 'translateY(10px)'
  }

  const input_style = {
    padding: '0.3rem',
    backgroundColor: 'rgba(255,255,255, 0.5)',
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
    boxShadow: '3px 3px 3px rgba(0,0,0, 0.25)',
    border: 'none',
    borderTop: '1px solid rgba(255,255,255,0.4)',
    borderBottom: error
      ? `2px solid ${errorColor}`
      : '1px solid rgba(255,255,255,0.4)',
    boxSizing: 'border-box',
    outline: 'none',
    position: 'relative',
    ...style
  }

  const focused_marker = {
    width: focused ? '100%' : 0,
    height: focused ? 3 : 0,
    backgroundColor: error ? errorColor : color,
    borderRadius: '1rem',
    position: 'absolute',
    bottom: -8,
    left: 0,
    transition: '300ms'
  }

  const error_msg = {
    fontSize: '0.8rem',
    color: errorColor,
    transform: 'translateY(-10px)'
  }

  return (
    <label style={label_style}>
      <h4 style={title_style}>{title}</h4>
      <input
        style={input_style}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoFocus={autoFocus}
        readOnly={readOnly}
      />
      <div style={focused_marker} />
      {error && <p style={error_msg}>{errorMsg}</p>}
    </label>
  )
}

export default Input
