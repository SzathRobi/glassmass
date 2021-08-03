import React, { useState } from 'react'
import {
  Container,
  Button,
  Checkbox,
  Header,
  Input,
  TextArea,
  Select,
  RadioButton,
  ControlGroup
} from 'glassmass'
import { comp_props } from './comp_props'
import Showcase from './Showcase'
import code_button from '../imgs/code/button.jpg'
import code_checkbox from '../imgs/code/checkbox.jpg'
import code_container from '../imgs/code/container.jpg'
import code_controlgroup from '../imgs/code/controlgroup.jpg'
import code_header from '../imgs/code/header.jpg'
import code_input from '../imgs/code/input.jpg'
import code_radio from '../imgs/code/radio.jpg'
import code_select from '../imgs/code/select.jpg'
import code_textarea from '../imgs/code/textarea.jpg'

function Components() {
  const section_style = {
    minWidth: '100vh',
    width: '100%'
  }

  const nav_styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '0.5rem',
    width: '90%',
    margin: '0 auto',
    borderRadius: '0.3rem',
    transform: 'translateY(-1rem)'
  }

  const button_styles = {
    height: '100%',
    padding: '0.5rem 1rem'
  }

  const [activeTab, setActiveTab] = useState('button')
  const updateTab = (value) => setActiveTab(value)

  /**
   *    FOR SHOWCASE
   *   example states
   */

  //checkbox
  const [checked, setChecked] = useState(true)
  const updateChecked = () => setChecked(!checked)

  //input
  const [value, setValue] = useState('')

  //radio
  const [radioChecked, setRadioChecked] = useState(1)
  const updateRadioChecked = (value) => setRadioChecked(value)

  //select
  const [selectValue, setSelectValue] = useState('option 1')
  const updateSelectValue = (value) => {
    setSelectValue(value)
  }
  const options = ['option 1', 'option 2', 'option 3']

  //textarea
  const [textareaValue, setTextareaValue] = useState('')
  //const updateTextareaValue = (event) => setTextareaValue(event.target.value)
  const updateTextareaValue = (event) => setTextareaValue(event.target.value)

  return (
    <section className='components' id='components' style={section_style}>
      <Container style={nav_styles}>
        <Button onClick={() => updateTab('button')} style={button_styles}>
          Button
        </Button>
        <Button onClick={() => updateTab('checkbox')} style={button_styles}>
          Checkbox
        </Button>
        <Button onClick={() => updateTab('container')} style={button_styles}>
          Container
        </Button>
        <Button onClick={() => updateTab('controlgroup')} style={button_styles}>
          Controlgroup
        </Button>
        <Button onClick={() => updateTab('header')} style={button_styles}>
          Header
        </Button>
        <Button onClick={() => updateTab('input')} style={button_styles}>
          Input
        </Button>
        <Button onClick={() => updateTab('radio')} style={button_styles}>
          Radio
        </Button>
        <Button onClick={() => updateTab('select')} style={button_styles}>
          Select
        </Button>
        <Button onClick={() => updateTab('textarea')} style={button_styles}>
          Textarea
        </Button>
      </Container>
      {activeTab === 'button' && (
        <Showcase
          comp={
            <Button
              onClick={() => alert('Hope you enjoy the library so for! :)')}
            >
              Lick Me
            </Button>
          }
          compProps={comp_props.button}
          codeImg={code_button}
        />
      )}
      {activeTab === 'checkbox' && (
        <Showcase
          comp={
            <Container>
              <Checkbox
                checked={checked}
                onChange={() => updateChecked()}
                text='Check This Out!'
              />
            </Container>
          }
          codeImg={code_checkbox}
          compProps={comp_props.checkbox}
        />
      )}
      {activeTab === 'container' && (
        <Showcase
          comp={
            <Container>
              <h4>Hello There!</h4>
              <p>Very cool glass effect isn't it?!</p>
            </Container>
          }
          codeImg={code_container}
          compProps={comp_props.container}
        />
      )}
      {activeTab === 'controlgroup' && (
        <Showcase
          comp={
            <Container>
              <ControlGroup title={'Some good title'}>
                <RadioButton
                  text='radio 1'
                  checked={radioChecked === 1}
                  onChange={() => updateRadioChecked(1)}
                />
                <RadioButton
                  text='radio 2'
                  checked={radioChecked === 2}
                  onChange={() => updateRadioChecked(2)}
                />
              </ControlGroup>
            </Container>
          }
          codeImg={code_controlgroup}
          compProps={comp_props.controlgroup_props}
        />
      )}
      {activeTab === 'header' && (
        <Showcase
          comp={
            <div
              style={{
                position: 'relative',
                height: 130,
                width: 300,
                border: '2px solid #000',
                borderRadius: '0.4rem'
              }}
            >
              <Header style={{ position: 'absolute', borderRadius: '0.4rem' }}>
                <h6>LOGO</h6>
              </Header>
            </div>
          }
          codeImg={code_header}
          compProps={comp_props.header}
        />
      )}
      {activeTab === 'input' && (
        <Showcase
          comp={
            <Container>
              <Input
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder='Good Stuff'
                title='Good Glass'
              />
            </Container>
          }
          codeImg={code_input}
          compProps={comp_props.input}
        />
      )}
      {activeTab === 'radio' && (
        <Showcase
          comp={
            <Container>
              <RadioButton
                checked={radioChecked === 1}
                onChange={() => updateRadioChecked(1)}
                name='showcase'
                text='Showcase 1'
              />
              <RadioButton
                checked={radioChecked === 2}
                onChange={() => updateRadioChecked(2)}
                name='showcase'
                text='Showcase 2'
              />
            </Container>
          }
          codeImg={code_radio}
          compProps={comp_props.radio}
        />
      )}
      {activeTab === 'select' && (
        <Showcase
          comp={
            <Container>
              <Select
                value={selectValue}
                onChange={() => updateSelectValue()}
                options={options}
              />
            </Container>
          }
          codeImg={code_select}
          compProps={comp_props.select}
        />
      )}
      {activeTab === 'textarea' && (
        <Showcase
          comp={
            <Container>
              <TextArea
                rows={4}
                //value={textareaValue}
                //onChange={(event) => updateTextareaValue(event.target.value)}
              />
            </Container>
          }
          codeImg={code_textarea}
          compProps={comp_props.textarea}
        />
      )}
    </section>
  )
}

export default Components
