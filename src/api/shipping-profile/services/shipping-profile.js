'use strict';

/*
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */
async function createShippingProfileAfterDelegation(shippingProfile,strapi) {
  const { products, shipping_options, ...createPayload } = shippingProfile;

  if (products) { /* empty */ }

  if (shipping_options) {
    createPayload.shipping_options = await strapi.service('api::shipping-option.shipping-option').handleOneToManyRelation(shipping_options, 'shipping-profile')
  }

  const create = await strapi.entityService.create('api::shipping-profile.shipping-profile', { data: createPayload });
  return create.id;
}

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shipping-profile.shipping-profile', ({ strapi }) => ({
  async bootstrap(data) {
    strapi.log.debug('Syncing Shipping Profile....');
    try {
      if (data && data.length) {
        for (const shipping_profile of data) {
          if (!shipping_profile.medusa_id) {
            shipping_profile.medusa_id = shipping_profile.id.toString();
            delete shipping_profile.id
          }

          const found = await strapi.db.query('api::shipping-profile.shipping-profile').findOne({ medusa_id: shipping_profile.medusa_id });
          if (found) {
            continue;
          }

          const shippingOptionStrapiId = await createShippingProfileAfterDelegation(shipping_profile,strapi);
          if(shippingOptionStrapiId)
          {
            strapi.log.info("Shipping Option created")
          }
        }
      }
      strapi.log.info('Shipping Profile Synced');
      return true;
    } catch (e) {
      strapi.log.error(JSON.stringify(e));
      return false
    }
  },

  async handleManyToOneRelation(shippingProfile, caller) {
    if (shippingProfile.id) {
      shippingProfile.medusa_id = shippingProfile.id;
      delete shippingProfile.id;
    }

    // This prevents an infinite loop. Since a cycle exists:  shipping_option -> shipping_profile -> shipping_option
    if (caller === 'shipping-option') {
      delete shippingProfile.shipping_options;
    }

    const found = await strapi.db.query('api::shipping-profile.shipping-profile').findOne({ medusa_id: shippingProfile.medusa_id });
    if (found) {
      return found.id;
    }

    const shippingProfileStrapiId = await createShippingProfileAfterDelegation(shippingProfile,strapi);
    return shippingProfileStrapiId;
  },
  async findOne(params = {}) {
    const fields = ["id"]
    const filters = {
      ...params
    }
    return (await strapi.entityService.findMany('api::shipping-profile.shipping-profile', {
      fields,filters
    }))[0];
  }
}));
