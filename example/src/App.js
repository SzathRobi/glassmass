import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  Container,
  Input,
  RadioButton,
  RadioGroup,
  Select,
  TextArea
} from 'glassmass'

const App = () => {
  const decor = {
    background: '#ff00ff',
    width: 300,
    height: 300,
    position: 'absolute',
    zIndex: -1,
    left: '5%',
    top: 150,
    transform: 'rotate(45deg)'
  }

  //test for button
  const logSomeShit = () => {
    console.log('Some Shit')
  }

  //test for select
  const [testOpt, setTestOpt] = useState('')
  const testFn = (value) => {
    setTestOpt(value)
  }
  //test for checkbox
  const [checked, setChecked] = useState(false)
  const updateChecked = () => setChecked(!checked)

  //test for RadioGroup
  const [radioValue, setRadioValue] = useState('male')
  const updateRadioValue = (value) => setRadioValue(value)

  //test for Input
  const [inputValue, setInputValue] = useState('')
  const updateInputValue = (event) => setInputValue(event.target.value)

  //test for TextArea
  const [textareaValue, setTextareaValue] = useState('')
  const updateTextareaValue = (event) => setTextareaValue(event.target.value)
  return (
    <div style={{ padding: '1rem 2rem' }}>
      <Container>
        <h1 className='test'>heheh</h1>
        <Button onClick={() => logSomeShit()}>Lick Me</Button>
      </Container>
      <Select
        title='Pick one'
        onChange={testFn}
        options={['Apple', 'Banana', 'Strawberry']}
      />
      <h1>{testOpt}</h1>
      <Checkbox checked={checked} onChange={updateChecked} />
      <p>Checkbox is {checked ? 'checked' : 'NOT checked'}</p>
      <div style={decor} />

      <RadioGroup title='Gender'>
        <RadioButton
          name={'gender'}
          onChange={() => updateRadioValue('male')}
          checked={radioValue === 'male'}
          value='male'
          text={'Male'}
          color='#4FC3F7'
        />
        <RadioButton
          name={'gender'}
          onChange={() => updateRadioValue('female')}
          checked={radioValue === 'female'}
          value='female'
          text={'Female'}
          color='#4FC3F7'
        />
        <RadioButton
          name={'gender'}
          onChange={() => updateRadioValue('other')}
          checked={radioValue === 'other'}
          value='other'
          text={'Other'}
          color='#4FC3F7'
        />
      </RadioGroup>
      <p>Radio value is: {radioValue}</p>

      <Input
        type='number'
        title='Enter Your Name'
        value={inputValue}
        onChange={(event) => updateInputValue(event)}
      />

      <TextArea
        title='Your Story'
        value={textareaValue}
        onChange={(event) => updateTextareaValue(event)}
      />
      <p>Text above is: {textareaValue}</p>
    </div>
  )
}

export default App
