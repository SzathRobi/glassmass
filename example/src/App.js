import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  Container,
  InputText,
  RadioButton,
  RadioGroup,
  Select
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

  return (
    <div>
      <Container>
        <h1 className='test'>heheh</h1>
        <Button>Lick Me</Button>
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

      <InputText title='Enter Your Name' />
    </div>
  )
}

export default App
