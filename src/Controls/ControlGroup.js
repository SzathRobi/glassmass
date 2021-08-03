import React from 'react'

function ControlGroup({ title, children }) {
  const control_group = {
    display: 'flex',
    flexDirection: 'column'
  }
  const control_container = {
    display: 'flex'
  }

  const title_style = {
    margin: '0.5rem 0'
  }

  return (
    <div style={control_group}>
      <h4 style={title_style}>{title}</h4>
      <div style={control_container}>{children}</div>
    </div>
  )
}

export default ControlGroup
