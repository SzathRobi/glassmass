# glassmass

> This is a React component library based on glassmorphism

[![NPM](https://img.shields.io/npm/v/glassmass.svg)](https://www.npmjs.com/package/glassmass) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save glassmass
```

## Components

1. Button
2. Checkbox
3. Container
4. ControlGroup
5. Header
6. Input
7. RadioButton
8. Select
9. TextArea

## Usage

```jsx
import React, { useState } from 'react'

import { Container, Input } from 'glassmass'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const updateValue = (event) => setInputValue(event.target.value)

  return (
    <section>
      <Container>
        <h1 style={{ textAlign: 'center' }}>Some Header</h1>
      </Container>
      <Input
        title='Full Name'
        value={inputValue}
        onChange={updateValue}
        placeholder='Your Name'
      />
    </section>
  )
}
```

## Update Log

### Version 1.0.1

- Button
- Checkbox
- Container
- ControlGroup
- Header
- Input
- RadioButton
- Select
- TextArea

---

### Version 1.0.0

- published on npm
- added Card component

## License

MIT © [SzathRobi](https://github.com/SzathRobi)
