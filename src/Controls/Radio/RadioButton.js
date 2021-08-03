import React, { useState } from 'react'

function RadioButton({
  text = 'option',
  value = '',
  onChange = null,
  checked = null,
  color = '#4FC3F7',
  name = 'name'
}) {
  const [hovered, setHovered] = useState(false)

  const radio_label = {
    display: 'flex',
    alignItems: 'center',
    //justifyContent: 'flex-start',
    gap: '0.5rem',
    cursor: 'pointer'
    //margin: '0.5rem 0'
  }
  const radio_style = {
    width: '0rem',
    height: '0rem',
    opacity: 0
  }

  const radio_design = {
    boxSizing: 'border-box',
    width: '1.5rem',
    height: '1.5rem',
    borderTop: '1px solid rgba(255,255,255,0.4)',
    borderBottom: '1px solid rgba(255,255,255,0.4)',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '300ms',
    boxShadow: hovered
      ? '5px 5px 5px rgba(0,0,0,0.5)'
      : '3px 3px 3px rgba(0,0,0, 0.25)',
    cursor: 'pointer'
  }

  const radio_innerCircle = {
    width: '0.5rem',
    height: '0.5rem',
    backgroundColor: checked ? color : 'rgba(100,100,100,0.8)',
    borderRadius: '50%',
    transition: '300ms',
    boxShadow: 'inset 2px 2px 2px rgba(0,0,0, 0.25)'
  }

  return (
    <label
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={radio_label}
    >
      <input
        style={radio_style}
        type='radio'
        checked={checked}
        onChange={onChange}
        value={value}
        name={name}
        id=''
      />
      <div style={radio_design}>
        <div style={radio_innerCircle} />
      </div>
      {text}
    </label>
  )
}

export default RadioButton
