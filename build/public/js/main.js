"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var d = document;
d.addEventListener('DOMContentLoaded', function () {
  var $inputs = d.querySelectorAll('[inputAnimated] input,[inputAnimated] textarea');
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
  var $btnDone = d.querySelectorAll('.pedido-add');
  $btnDone.forEach(function (btn) {
    btn.addEventListener('click', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var url, res, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                url = btn.dataset.fetch;
                _context.next = 4;
                return fetch(url, {
                  method: "PUT"
                });

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                json = _context.sent;
                location.reload();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });
  var $modal = document.getElementById('modal');
  var $btnModal = $modal.querySelector('span.x');

  if ($btnModal) {
    $btnModal.addEventListener('click', function () {
      console.log('click');
      location.hash = '';
    });
  }

  var $delete = document.getElementById('delete');

  if ($delete) {
    $delete.onclick = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch(location.href, {
                method: 'DELETE'
              });

            case 2:
              res = _context2.sent;
              location.href = "/dashboard";

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
  }

  var $menu = d.getElementById('icono-menu');
  var $nav = d.getElementById('menu');
  $menu.addEventListener('click', function () {
    $nav.classList.toggle('active');
  });
  var $logo = d.querySelector('.logo');

  if ($logo) {
    $logo.addEventListener('click', function () {
      location.href = '/';
    });
  } // El listener va asignado al input


  var $file = d.getElementById('imagen');

  if ($file) {
    $file.addEventListener('change', function () {
      if ($file.files && $file.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          // Asignamos el atributo src a la tag de imagen
          var imagen = d.getElementById('imagenetq');
          imagen.src = e.target.result;
          imagen.classList.remove('slow');
        };

        reader.readAsDataURL($file.files[0]);
      }
    });
  }
});