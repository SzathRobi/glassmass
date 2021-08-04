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

| NAME         | PORPS                                                                                                       | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------ | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Button       | className style onClick children                                                                            | type: String, customize component with CSS type: Object, customize component with JS type: Function, add logic throught this prop type: String, add text to the Button                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Checkbox     | className style checked onChange color text value                                                           | type: String, customize component with CSS type: Object, customize component with JS type: Boolean, toggle Checkbox's checked state type: Funtion, listen Checkbox's checked state changes type: String, customize checkmark color type: String, add text to the Checkbox type: String, add value to the Checkbox                                                                                                                                                                                                                                                                                                                                                                     |
| Container    | className style children                                                                                    | type: String, customize component with CSS type: Object, customize component width JS type: Any, add anything inside the Container                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ControlGroup | title children                                                                                              | type: String, add title to the groupped elements type: Any, add Control elements (Input, Checkbox etc...)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Header       | className style children                                                                                    | type: String, customize component with CSS type: Object, customize component with JS type: Any, add navigation, logo, etc... to the Header                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Input        | className style type placeholder title value onChange required readOnly autoFocus color error errorMsg      | type: String, cutsomize component with CSS type: Object, customize component with JS type: String, define the type of the Input type: String, text for placeholder type: String, label text for Input type: String/Number, value of Input type: Function, listen to value changes and update it type: Boolean, define if Input is required type: Boolean, define if Input is read-only type: Boolean, define if Input should be focused on render type: String, customize decoration color of the Input type: Boolean, if true error styles will be applied type: String, display error message if prop:error is true                                                                 |
| RadioButton  | className style name checked onChange value color                                                           | type: String, customize component with CSS type: Object, customize component with JS type: String, add name to RadioButton to identify a group type: Boolean, toggle RadioButton checked state type: Function, listen to changes and update porp:checked type: String, add value to RadioButton type: String, customize the decor color                                                                                                                                                                                                                                                                                                                                               |
| Select       | className style options value onChange                                                                      | type: String, customize component with CSS type: Object, customize component with JS type: Array, list of values displayed in Select type: String/Number, default Select value type: Function, listen value changes in Select                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| TextArea     | className style title cols rows placeholder value onChange required readOnly autoFocus color error errorMsg | type: String, customize component with CSS type: Object, customize component with JS type: String, add label text to the TextArea type: Number, define the number of columns type Number, define the number of rows type: String, text for placeholder type: String/Number, value of TextArea type: Function, listen to value changes and update it type: Boolean, define if TextArea is required type: Boolean, define if TextArea is read-only type: Boolean, define if TextArea should be focused on render type: String, customize decoration color of the TextArea type: Boolean, if true error styles will be applied type: String, display error message if prop:error is true |

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
