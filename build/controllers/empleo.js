"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderEmpleo = void 0;

var renderEmpleo = function renderEmpleo(req, res) {
  res.render('empleo', {
    msg: 'Solicitud de empleo completada, pronto nos comunicaremos contigo'
  });
};

exports.renderEmpleo = renderEmpleo;