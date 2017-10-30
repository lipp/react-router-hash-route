'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jump = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jump = exports.jump = function jump(node, offset) {
  window.scrollTo(0, node.getBoundingClientRect().top - offset + window.scrollY);
};

var HashScroll = function (_React$PureComponent) {
  _inherits(HashScroll, _React$PureComponent);

  function HashScroll() {
    _classCallCheck(this, HashScroll);

    return _possibleConstructorReturn(this, (HashScroll.__proto__ || Object.getPrototypeOf(HashScroll)).apply(this, arguments));
  }

  _createClass(HashScroll, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          location = _props.location,
          offset = _props.offset,
          scroll = _props.scroll,
          id = _props.id;

      if (location.hash === '#' + id) {
        requestAnimationFrame(function () {
          scroll(document.getElementById(id), offset);
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var location = _ref.location;
      var _props2 = this.props,
          prevLocation = _props2.location,
          offset = _props2.offset,
          scroll = _props2.scroll,
          id = _props2.id;

      if (location !== prevLocation && location.hash === '#' + id) {
        requestAnimationFrame(function () {
          scroll(document.getElementById(id), offset);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          id = _props3.id,
          component = _props3.component,
          render = _props3.render;

      if (component) {
        return _react2.default.createElement('component', { id: this.props.id });
      }
      if (render) {
        return render({ id: id });
      }
      console.warn('HashRoute has neither "render" nor "component" prop');
      return null;
    }
  }]);

  return HashScroll;
}(_react2.default.PureComponent);

var HashRoute = function HashRoute(_ref2) {
  var location = _ref2.location,
      children = _ref2.children,
      id = _ref2.id,
      offset = _ref2.offset,
      scroll = _ref2.scroll,
      render = _ref2.render,
      component = _ref2.component;
  return _react2.default.createElement(
    HashScroll,
    { id: id, location: location, offset: offset, scroll: scroll, render: render, component: component },
    children
  );
};

HashRoute.defaultProps = {
  offset: 0,
  scroll: jump
};

HashRoute.propTypes = {
  id: _propTypes2.default.string.isRequired,
  scroll: _propTypes2.default.func,
  render: _propTypes2.default.func,
  component: _propTypes2.default.element,
  offset: _propTypes2.default.number
};

exports.default = (0, _reactRouterDom.withRouter)(HashRoute);