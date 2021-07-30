import React from 'react'

function InputText({
  type = 'text',
  placeholder = '',
  title = '',
  value = '',
  onChange,
  required = false,
  onFocus = null,
  onBlur = null,
  readOnly = false,
  autoFocus = false
}) {
  const input_style = {
    padding: '0.3rem',
    backgroundColor: 'rgba(255,255,255, 0.5)',
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
    boxShadow: '3px 3px 3px rgba(0,0,0, 0.25)',
    borderTop: '1px solid rgba(255,255,255,0.4)',
    borderBottom: '1px solid rgba(255,255,255,0.4)',
    boxSizing: 'border-box'
  }

  return (
    <label>
      <h4>{title}</h4>
      <input
        style={input_style}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}
        autoFocus={autoFocus}
        readOnly={readOnly}
      />
    </label>
  )
}

export default InputText
