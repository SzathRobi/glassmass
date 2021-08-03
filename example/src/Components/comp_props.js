const button_props = [
  {
    name: 'onClick',
    desc: 'type Function'
  }
]

const checkbox_props = [
  {
    name: 'checked',
    desc: 'type Boolean'
  },
  {
    name: 'onChange',
    desc: 'type Function'
  },
  {
    name: 'color',
    desc: 'type String'
  },
  {
    name: 'text',
    desc: 'type String'
  },
  {
    name: 'value',
    desc: 'type Any'
  }
]

const withChildren_props = [
  {
    name: 'children',
    desc: 'type Component'
  }
]

const controlgroup_props = [
  ...withChildren_props,
  {
    name: 'title',
    desc: 'type String'
  }
]

const input_props = [
  {
    name: 'type',
    desc: 'type String'
  },
  {
    name: 'placeholder',
    desc: 'type String'
  },
  {
    name: 'title',
    desc: 'type String'
  },
  {
    name: 'value',
    desc: 'type Any'
  },
  {
    name: 'onChange',
    desc: 'type Function'
  },
  {
    name: 'required',
    desc: 'type Boolean'
  },
  {
    name: 'readOnly',
    desc: 'type Boolean'
  },
  {
    name: 'autofocus',
    desc: 'type Boolean'
  },
  {
    name: 'color',
    desc: 'type String'
  },
  {
    name: 'error',
    desc: 'type Boolean'
  },
  {
    name: 'errorMsg',
    desc: 'type Function'
  }
]

const radio_props = [
  {
    name: 'text',
    desc: 'type String'
  },
  {
    name: 'value',
    desc: 'type Any'
  },
  {
    name: 'onChange',
    desc: 'type Function'
  },
  {
    name: 'checked',
    desc: 'type Boolean'
  },
  {
    name: 'color',
    desc: 'type String'
  },
  {
    name: 'name',
    desc: 'type String'
  }
]

const select_props = [
  {
    name: 'options',
    desc: 'type Array'
  },
  {
    name: 'value',
    desc: 'type String'
  },
  {
    name: 'onChange',
    desc: 'type Function'
  }
]

const textare_props = [
  {
    name: 'title',
    desc: 'type String'
  },
  {
    name: 'cols',
    desc: 'type Number'
  },
  {
    name: 'rows',
    desc: 'type Number'
  },
  {
    name: 'placeholder',
    desc: 'type String'
  },
  {
    name: 'value',
    desc: 'type Any'
  },
  {
    name: 'onChange',
    desc: 'type Function'
  },
  {
    name: 'required',
    desc: 'type Boolean'
  },
  {
    name: 'readOnly',
    desc: 'type Boolean'
  },
  {
    name: 'autofocus',
    desc: 'type Boolean'
  },
  {
    name: 'color',
    desc: 'type String'
  },
  {
    name: 'error',
    desc: 'type Boolean'
  },
  {
    name: 'errorMsg',
    desc: 'type Function'
  }
]

export const comp_props = {
  button: button_props,
  checkbox: checkbox_props,
  container: withChildren_props,
  controlgroup_props: controlgroup_props,
  header: withChildren_props,
  input: input_props,
  radio: radio_props,
  select: select_props,
  textarea: textare_props
}
