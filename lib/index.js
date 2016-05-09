'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Imports
                                                                                                                                                                                                                                                                   */

var _handleActions2 = require('@f/handle-actions');

var _handleActions3 = _interopRequireDefault(_handleActions2);

var _createAction = require('@f/create-action');

var _createAction2 = _interopRequireDefault(_createAction);

var _element = require('vdux/element');

var _element2 = _interopRequireDefault(_element);

var _vduxUi = require('vdux-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Input
 */

function render(_ref) {
  var props = _ref.props;
  var state = _ref.state;
  var children = _ref.children;
  var local = _ref.local;
  var error = state.error;

  return (0, _element2.default)(_vduxUi.Input
  // Allow explicit props to override internal state
  , _extends({ invalid: !!error,
    message: error
  }, props, {
    onInvalid: [props.onInvalid, local(invalidate)],
    onChange: [props.onChange, local(clearInvalid)] }));
}

/**
 * Actions
 */

var invalidate = (0, _createAction2.default)('<Input/>: Invalidate', function (e) {
  return e.target.validationMessage;
});
var clearInvalid = (0, _createAction2.default)('<Input/>: Clear invalid', function (e) {
  return e.target.setCustomValidity('');
});

/**
 * Reducer
 */

var reducer = (0, _handleActions3.default)((_handleActions = {}, _defineProperty(_handleActions, invalidate, function (state, msg) {
  return _extends({}, state, { error: msg });
}), _defineProperty(_handleActions, clearInvalid, function (state) {
  return _extends({}, state, { error: null });
}), _handleActions));

/**
 * Exports
 */

exports.default = {
  render: render,
  reducer: reducer
};