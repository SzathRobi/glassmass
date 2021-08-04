# glassy-ui

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

| NAME         | PORPS                                                                                                                                                                                                               | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Button       | className <br><br>style <br><br>onClick <br><br>children                                                                                                                                                            | type: String, customize component with CSS <br><br>type: Object, customize component with JS <br><br>type: Function, add logic throught this prop <br><br>type: String, add text to the Button                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Checkbox     | className <br><br>style <br><br>checked <br><br>onChange <br><br>color <br><br>text <br><br>value                                                                                                                   | type: String, customize component with CSS <br><br>type: Object, customize component with JS <br><br>type: Boolean, toggle Checkbox's checked state <br><br>type: Funtion, listen Checkbox's checked state changes <br><br>type: String, customize checkmark color <br><br>type: String, add text to the Checkbox <br><br>type: String, add value to the Checkbox                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Container    | className <br><br>style <br><br>children                                                                                                                                                                            | type: String, customize component with CSS <br><br>type: Object, customize component width JS <br><br>type: Any, add anything inside the Container                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ControlGroup | title <br><br>children                                                                                                                                                                                              | type: String, add title to the groupped elements <br><br>type: Any, add Control elements (Input, Checkbox etc...)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Header       | className <br><br>style <br><br>children                                                                                                                                                                            | type: String, customize component with CSS <br><br>type: Object, customize component with JS <br><br>type: Any, add navigation, logo, etc... to the Header                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Input        | className <br><br>style <br><br>type <br><br>placeholder <br><br>title <br><br>value <br><br>onChange <br><br>required <br><br>readOnly <br><br>autoFocus <br><br>color <br><br>error <br><br>errorMsg              | type: String, cutsomize component with CSS <br><br>type: Object, customize component with JS <br><br>type: String, define the type of the Input <br><br>type: String, text for placeholder <br><br>type: String, label text for Input <br><br>type: String/Number, value of Input <br><br>type: Function, listen to value changes and update it <br><br>type: Boolean, define if Input is required <br><br>type: Boolean, define if Input is read-only <br><br>type: Boolean, define if Input should be focused on render <br><br>type: String, customize decoration color of the Input <br><br>type: Boolean, if true error styles will be applied <br><br>type: String, display error message if prop:error is true                                                                         |
| RadioButton  | className <br><br>style <br><br>name <br><br>checked <br><br>onChange <br><br>value <br><br>color                                                                                                                   | type: String, customize component with CSS <br><br>type: Object, customize component with JS <br><br>type: String, add name to RadioButton to identify a group <br><br>type: Boolean, toggle RadioButton checked state <br><br>type: Function, listen to changes and update porp:checked <br><br>type: String, add value to RadioButton <br><br>type: String, customize the decor color                                                                                                                                                                                                                                                                                                                                                                                                       |
| Select       | className <br><br>style <br><br>options <br><br>value <br><br>onChange                                                                                                                                              | type: String, customize component with CSS <br><br>type: Object, customize component with JS <br><br>type: Array, list of values displayed in Select <br><br>type: String/Number, default Select value <br><br>type: Function, listen value changes in Select                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| TextArea     | className <br><br>style <br><br>title <br><br>cols <br><br>rows <br><br>placeholder <br><br>value <br><br>onChange <br><br>required <br><br>readOnly <br><br>autoFocus <br><br>color <br><br>error <br><br>errorMsg | type: String, customize component with CSS <br><br>type: Object, customize component with JS <br><br>type: String, add label text to the TextArea <br><br>type: Number, define the number of columns <br><br>type Number, define the number of rows <br><br>type: String, text for placeholder <br><br>type: String/Number, value of TextArea <br><br>type: Function, listen to value changes and update it <br><br>type: Boolean, define if TextArea is required <br><br>type: Boolean, define if TextArea is read-only <br><br>type: Boolean, define if TextArea should be focused on render <br><br>type: String, customize decoration color of the TextArea <br><br>type: Boolean, if true error styles will be applied <br><br>type: String, display error message if prop:error is true |

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
- added Container component

## License

MIT © [SzathRobi](https://github.com/SzathRobi)
