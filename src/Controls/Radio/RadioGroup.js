import React from 'react'

function RadioGroup({ title, children }) {
  const radio_group = {
    display: 'flex',
    flexDirection: 'column'
  }
  const radio_container = {
    display: 'flex'
  }

  return (
    <div style={radio_group}>
      <h4>{title}</h4>
      <div style={radio_container}>{children}</div>
    </div>
  )
}

export default RadioGroup
