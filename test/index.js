/**
 * Imports
 */

import test from 'tape'
import vdux from 'vdux/dom'
import element from 'vdux/element'
import Input from '../src'

/**
 * Tests
 */

test('should work', t => {
  const {render, subscribe} = vdux()
  let node

  const stop = subscribe(() => {})
  node = render(<Input/>)

  const input = node.firstChild.nextSibling
  input.setCustomValidity('error message')
  input.checkValidity()
  render(<Input/>)

  t.equal(node.innerText, 'error message')

  stop()
  t.end()
})
