'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaViews = require('koa-views');

var _koaViews2 = _interopRequireDefault(_koaViews);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaSession = require('koa-session');

var _koaSession2 = _interopRequireDefault(_koaSession);

var _index = require('./middleware/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();

app.use((0, _koaViews2.default)(__dirname + '/views', {
    map: {
        html: 'nunjucks'
    }
}));
app.use((0, _koaLogger2.default)());
app.use((0, _koaBodyparser2.default)());
app.use((0, _koaConvert2.default)((0, _koaSession2.default)(app)));
app.use((0, _koaStatic2.default)('static/bin'));
app.keys = ['secret_key'];
app.use(_index2.default.routes()).use(_index2.default.allowedMethods());

exports.default = app;