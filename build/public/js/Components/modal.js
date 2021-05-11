"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = modal;

function modal() {
  var $modal = document.getElementById('modal');
  var $btnModal = $modal.querySelector('span.x');

  if ($btnModal) {
    $btnModal.addEventListener('click', function () {
      console.log('click');
      location.hash = '';
    });
  }
}