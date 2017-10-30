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

var HashRoute = function (_React$PureComponent) {
  _inherits(HashRoute, _React$PureComponent);

  function HashRoute() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HashRoute);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HashRoute.__proto__ || Object.getPrototypeOf(HashRoute)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HashRoute, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          location = _props.location,
          offset = _props.offset,
          scroll = _props.scroll,
          id = _props.id;

      if (location.hash === '#' + id) {
        requestAnimationFrame(function () {
          _this2.setState({ active: true });
          scroll(document.getElementById(id), offset);
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref2) {
      var _this3 = this;

      var location = _ref2.location,
          history = _ref2.history;

      console.log('asd', this.props);
      var _props2 = this.props,
          prevLocation = _props2.location,
          offset = _props2.offset,
          scroll = _props2.scroll,
          id = _props2.id;

      if (location === prevLocation) {
        return;
      }
      if (location.hash === '#' + id) {
        requestAnimationFrame(function () {
          _this3.setState({ active: true });
          scroll(document.getElementById(id), offset);
        });
      } else if (this.state.active) {
        this.setState({ active: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          id = _props3.id,
          component = _props3.component,
          render = _props3.render;
      var active = this.state.active;

      if (component) {
        return _react2.default.createElement('component', { id: this.props.id, active: active });
      }
      if (render) {
        return render({ id: id, active: active });
      }
      console.warn('HashRoute has neither "render" nor "component" prop');
      return null;
    }
  }]);

  return HashRoute;
}(_react2.default.PureComponent);

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