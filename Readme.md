
# input

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Stateful input component with error handling based on the stateless Input component in [vdux-ui](https://github.com/vudx-components/ui).

## Installation

    $ npm install vdux-input

## Usage

All the props are the same as for [<Input/>](https://github.com/vdux-components/ui/tree/master/src/docs/Input.md). The only difference is that this component holds a little bit of state around error messages so that it works with [Form](https://github.com/vdux-components/form). You can use it like this:

```javascript
function render () {
  return (
    <Form onSubmit={createUser} validate={validateUser}>
      <Input name='username' />
    </Form>
  )
}

function validateUser (user) {
  if (!user.username || user.username.length <= 3) {
    return {
      valid: false,
      errors: [
        {
          field: 'username',
          message: 'Username must be at least 3 characters'
        }
      ]
    }
  }

  return {
    valid: true
  }
}
```

## Validation functions

If you want an easy, simple way to create reusable schemas that generate errors in this form, check out:

  * [schema](https://github.com/weo-edu/schema) - Clean, fluent API for creating schemas
  * [validate](https://github.com/weo-edu/validate) - Takes a schema and returns a `validate(model)` function that returns errors in the format used here.

## API - props

The props API is the same as [vdux-ui/input](https://github.com/vdux-components/ui/tree/master/src/docs/Input.md). Refer to that for props documentation.

## License

MIT
