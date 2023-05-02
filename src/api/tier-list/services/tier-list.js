'use strict';

/**
 * tier-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tier-list.tier-list');
