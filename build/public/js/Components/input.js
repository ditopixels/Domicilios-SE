"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var d = document;

var _default = function _default() {
  var $inputs = d.querySelectorAll('[inputAnimated] input');
  $inputs.forEach(function (input) {
    var inputParent = input.parentElement;
    if (!input.value.trim() == 0) inputParent.classList.add('focus');
    input.addEventListener('focus', function () {
      inputParent.classList.add('focus');
    });
    input.addEventListener('blur', function () {
      input.value = input.value.trim();
      if (input.value.trim() == 0) inputParent.classList.remove('focus');
    });
    input.addEventListener('change', function () {
      input.value = input.value.trim();
      if (input.value == 0) inputParent.classList.remove('focus');else inputParent.classList.add('focus');
    });
  });
};

exports["default"] = _default;