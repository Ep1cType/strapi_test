'use strict';

/**
 * cone service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cone.cone');
