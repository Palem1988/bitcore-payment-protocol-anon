'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on bitcore-payment-protocol-anon Module: {0}'
};

module.exports = require('bitcore-lib-anon').errors.extend(spec);
