/**
 * Imports
 */

import handleActions from '@f/handle-actions'
import createAction from '@f/create-action'
import element from 'vdux/element'
import {Input} from 'vdux-ui'

/**
 * Input
 */

function render ({props, state, children, local}) {
  const {error} = state

  return (
    <Input
      // Allow explicit props to override internal state
      invalid={!!error}
      message={error}
      {...props}
      onInvalid={[props.onInvalid, local(invalidate)]}
      onChange={[props.onChange, local(clearInvalid)]} />
  )
}

/**
 * Actions
 */

const invalidate = createAction('<Input/>: Invalidate', e => e.target.validationMessage)
const clearInvalid = createAction('<Input/>: Clear invalid', e => e.target.setCustomValidity(''))

/**
 * Reducer
 */

const reducer = handleActions({
  [invalidate]: (state, msg) => ({...state, error: msg}),
  [clearInvalid]: state => ({...state, error: null})
})

/**
 * Exports
 */

export default {
  render,
  reducer
}
