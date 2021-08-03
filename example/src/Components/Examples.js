import React, { useState } from 'react'
import { Container, TextArea } from 'glassy-ui'

function Examples() {
  return (
    <Container>
      <TextArea />
    </Container>
  )
}

export default Examples

/**
 *      RADIO_BUTTON
 */

/*import React, { useState } from 'react'
import { Container, RadioButton } from 'glassy-ui'

function Examples() {
  const [checked, setChecked] = useState(1)
  const updateChecked = (value) => setChecked(value)

  return (
    <Container>
      <RadioButton
        checked={checked === 1}
        onChange={() => updateChecked(1)}
        name='showcase'
        text='Showcase 1'
      />
      <RadioButton
        checked={checked === 2}
        onChange={() => updateChecked(2)}
        name='showcase'
        text='Showcase 2'
      />
    </Container>
  )
}

export default Examples

/**
 *      INPUT
 */

/*import React, { useState } from 'react'
import { Input } from 'glassy-ui'

function Examples() {
  const [value, setValue] = useState('')

  return (
    <Input
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder='Good Stuff'
      required
      autofocus
    />
  )
}

export default Examples

/**
 *      HEADER
 */

/*import React from 'react'
import { Header } from 'glassy-ui'

function Examples() {
  return (
    <div>
      <Header>
        <h2>LOGO</h2>
      </Header>
    </div>
  )
}

export default Examples

/**
 *      CONTAINER
 */

/*import React from 'react'
import { Container } from 'glassy-ui'

function Examples() {
  return (
    <Container>
      <h4>Hello There!</h4>
      <p>Very cool glass effect isn't it?!</p>
    </Container>
  )
}

export default Examples

/**
 *      CHECKBOX
 */

/*import React, { useState } from 'react'
import { Checkbox } from 'glassy-ui'

function Examples() {
  const [checked, setChecked] = useState(true)
  const updateChecked = () => setChecked(!checked)

  return (
    <article>
      <Checkbox
        text='Check This Out!'
        checked={checked}
        onChange={() => updateChecked()}
      />
    </article>
  )
}

export default Examples

/**
 *      BUTTON
 */

/*import React from 'react'
import { Button } from 'glassmass'

function Examples() {
  const handleClick = () => alert('Hope you enjoy the library so far! :)')

  return (
    <article>
      <Button onClick={() => handleClick()}>Lick Me</Button>
    </article>
  )
}

export default Examples
*/
