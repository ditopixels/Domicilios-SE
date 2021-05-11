"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = password;
var d = document;

function password() {
  var $inputPass = d.querySelectorAll('input[type="password"]');
  $inputPass.forEach(function (el) {
    var i = 1;
    var $eye = el.nextElementSibling.nextElementSibling;
    $eye.addEventListener('click', function () {
      if (i) {
        console.log(i);
        $eye.setAttribute('class', 'fas fa-eye-slash eye');
        el.setAttribute('type', 'text');
        i = 0;
      } else {
        $eye.setAttribute('class', 'fas fa-eye eye');
        el.setAttribute('type', 'password');
        i = 1;
      }
    });
  });
}