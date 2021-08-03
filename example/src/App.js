import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  Container,
  Input,
  RadioButton,
  ControlGroup,
  Select,
  TextArea,
  Header
} from 'glassmass'
import Components from './Components/Components'

const App = () => {
  const intro_style = {
    card: {
      width: 300,
      height: 350,
      padding: '3rem 0',
      padding: '3rem 2rem 0',
      fontSize: '120%',
      marginBottom: '2rem'
    },
    title: {
      marginBottom: '1rem'
    }
  }

  const formContainer_style = {
    width: '40rem',
    height: '80vh',
    transform: 'translateY(-0.8rem)',
    padding: '1rem 2rem',
    position: 'relative'
  }

  const form_style = {
    transform: 'translateY(2rem)'
  }

  const formControls_container = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  const button_style = {
    position: 'absolute',
    bottom: '4rem',
    left: '2rem'
  }

  const header_style = {
    logo: {
      flex: '1'
    },
    logo_link: {
      color: '#4fc3f7'
    },
    nav: {
      marginRight: '3rem'
    },
    link: {
      padding: '0 0.5rem',
      margin: '0 0.5rem',
      color: '#000'
    }
  }

  //test for button
  const logSomeShit = () => {
    console.log('Some Shit')
  }

  //test for select
  const [selectValue, setSelectValue] = useState('Awesome')
  const updateSelectValue = (value) => {
    setSelectValue(value)
  }
  //test for checkbox
  const [checked_awesome, setChecked_awesome] = useState(true)
  const [checked_cool, setChecked_cool] = useState(false)
  const [checked_okey, setChecked_okey] = useState(false)

  //test for RadioGroup
  const [radioValue, setRadioValue] = useState('awesome')
  const updateRadioValue = (value) => setRadioValue(value)

  //test for Input
  const [inputValue, setInputValue] = useState('')
  const updateInputValue = (event) => setInputValue(event.target.value)

  //test for TextArea
  const [textareaValue, setTextareaValue] = useState('')
  const updateTextareaValue = (event) => setTextareaValue(event.target.value)
  return (
    <div className='root' id='top'>
      <Header>
        <h3 style={header_style.logo}>
          <a styles={header_style.logo_link} href='#top'>
            GLASSY-UI
          </a>
        </h3>
        <nav style={header_style.nav}>
          <a style={header_style.link} href='#top'>
            Home
          </a>
          <a style={header_style.link} href='#components'>
            Components
          </a>
        </nav>
      </Header>
      <section className='bg'>
        <article>
          <Container style={intro_style.card}>
            <h2 style={intro_style.title}>INTRO</h2>
            <p>Welcome here in the world of glass my friend!</p>
            <p>
              If you love glassmorphism design you definetly should check this
              library!
            </p>
          </Container>
        </article>
        <article>
          <Container style={formContainer_style}>
            <form>
              <div>
                <h3>Send Me Some Feedback</h3>
                <p>
                  Almost everything here made with glassy-ui. If you have any
                  thoughts on what would you see in the next updates don’t
                  hesitate to write me a messasge! I would appreciate it very
                  much! :)
                </p>
              </div>
              <div style={formControls_container}>
                <div>
                  <Input
                    title='Your Email'
                    placeholder='email@example.com'
                    required
                  />
                  <TextArea
                    title='Your Message'
                    placeholder='Your message here...'
                    required
                  />
                </div>
                <div>
                  <ControlGroup title='Radio Showcase'>
                    <RadioButton
                      value='awesome'
                      onChange={(event) => updateRadioValue(event.target.value)}
                      text='Awesome'
                      checked={radioValue === 'awesome'}
                    />
                    <RadioButton
                      value='cool'
                      onChange={(event) => updateRadioValue(event.target.value)}
                      text='Cool'
                      checked={radioValue === 'cool'}
                    />
                    <RadioButton
                      value='okey'
                      onChange={(event) => updateRadioValue(event.target.value)}
                      text='Okey'
                      checked={radioValue === 'okey'}
                    />
                  </ControlGroup>
                  <ControlGroup title='Checkbox Showcase'>
                    <Checkbox
                      text='Awesome'
                      value='awesome'
                      checked={checked_awesome}
                      onChange={() => setChecked_awesome(!checked_awesome)}
                    />
                    <Checkbox
                      text='Cool'
                      value='cool'
                      checked={checked_cool}
                      onChange={() => setChecked_cool(!checked_cool)}
                    />
                    <Checkbox
                      text='Okey'
                      value='okey'
                      checked={checked_okey}
                      onChange={() => setChecked_okey(!checked_okey)}
                    />
                  </ControlGroup>
                  <ControlGroup title='Select Showcase'>
                    <Select
                      value={selectValue}
                      onChange={() => updateSelectValue()}
                      options={['Awesome', 'Cool', 'Okey']}
                    />
                  </ControlGroup>
                </div>
              </div>
              <Button style={button_style}>send message</Button>
            </form>
          </Container>
        </article>
      </section>
      <Components />
    </div>
  )
}

export default App
