"use strict";

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
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var url = btn.dataset.fetch;
      fetch(url, {
        method: 'PUT'
      }).then(function (res) {
        return res.json;
      }).then(function (json) {
        return location.reload();
      })["catch"](function (e) {
        return console.log(e);
      });
    });
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
    $delete.onclick = function () {
      fetch(location.href, {
        method: 'DELETE'
      }).then(function (res) {
        return location.href = "/dashboard";
      });
    };
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