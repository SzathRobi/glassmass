import React, { useState, useEffect } from 'react'
import Option from './Option'

function Select({ options = [1, 2, 3], value = 'title', onChange }) {
  const [opened, setOpened] = useState(false)
  const [select_title, set_selecTitle] = useState(value)
  const update_title = (option) => {
    set_selecTitle(option)
    setOpened(false)
  }

  useEffect(() => {
    onChange(select_title)
  }, [select_title])

  const select_wrapper = {
    width: '10rem',
    position: 'relative',
    boxSizing: 'border-box',
    cursor: 'pointer',
    borderRadius: '0.2rem',
    overflow: 'hidden',
    boxShadow: '3px 3px 3px rgba(0,0,0, 0.25)',
    borderTop: '1px solid rgba(255,255,255,0.4)',
    borderBottom: '1px solid rgba(255,255,255,0.4)',
    marginLeft: '0.5rem'
    //margin: '0.5rem 0'
  }

  const select_style = {
    boxSizing: 'border-box',
    width: '100%',
    height: '2rem',
    padding: '0.5rem',
    border: '1px solid rgba(255,255,255, 0.3)',
    listStyle: 'none',
    backgroundColor: 'rgba(255,255,255, 0.5)',
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }

  return (
    <div style={select_wrapper}>
      <div onClick={() => setOpened(!opened)} style={select_style}>
        <p>{select_title}</p>
      </div>
      <div>
        {opened &&
          options.map((option, index) => (
            <Option
              key={option}
              index={index}
              option={option}
              update_title={update_title}
            />
          ))}
      </div>
    </div>
  )
}

export default Select
