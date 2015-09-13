(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module', 'formula-flatten'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module, require('formula-flatten'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod, global.flatten);
        global.SUM = mod.exports;
    }
})(this, function (exports, module, _formulaFlatten) {
    'use strict';

    module.exports = SUM;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _flatten = _interopRequireDefault(_formulaFlatten);

    function SUM() {
        var numbers = (0, _flatten['default'])(arguments);
        return result.reduce(numbers, function (a, b) {
            return a + b;
        });
    }
});
