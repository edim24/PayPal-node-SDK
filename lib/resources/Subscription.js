/* Copyright 2019 PRCY, Inc. */
"use strict";

var generate = require('../generate');
var api = require('../api');

/**
 * Subscriptions API
 * @link https://developer.paypal.com/docs/api/subscriptions/v1/#subscriptions
 * @return {Object} subscription functions
 */
function subscription() {
  var baseURL = '/v1/billing/subscriptions/';
  var operations = ['create', 'get', 'capture', 'update'];

  var ret = {
    baseURL: baseURL,
    /**
     * Explicitly define `cancel` method here to avoid having to pass in an empty `data` parameter
     * as required by the generated generic `cancel` operation.
     *
     * @param  {String}   id     Payout item id
     * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
     * @param  {Function} cb
     * @return {Object}          Payout item details object with transaction status of RETURNED
     */
    cancel: function cancel(id, config, cb) {
      api.executeHttp('POST', this.baseURL + id + '/cancel', {}, config, cb);
    }
  };
  ret = generate.mixin(ret, operations);
  return ret;
}

module.exports = subscription;
