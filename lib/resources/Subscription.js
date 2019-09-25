/* Copyright 2019 PRCY, Inc. */
"use strict";

var generate = require('../generate');

/**
 * Subscriptions API
 * @link https://developer.paypal.com/docs/api/subscriptions/v1/#subscriptions
 * @return {Object} subscription functions
 */
function subscription() {
  var baseURL = '/v1/billing/subscriptions';
  var operations = ['create', 'get', 'capture', 'update', 'cancel'];

  var ret = {
    baseURL: baseURL
  };
  ret = generate.mixin(ret, operations);
  return ret;
}

module.exports = subscription;
